"""Build a local, source-aware competition intersection atlas. No raw data or external API."""
from __future__ import annotations

import csv
import html
import json
import math
import os
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DEFAULT_CONTEST = ROOT.parent.parent if (ROOT.parent.parent / "knowledge/kamp-guidebooks-manifest.csv").exists() else Path(r"G:\경진대회\2026_K-AI_제조데이터분석")
COMPETITION = Path(os.environ.get("QAI_CONTEST_ROOT", str(DEFAULT_CONTEST)))
VEDA = Path(os.environ.get("VEDA_IMPORTS_ROOT", r"G:\TOOL#1\knowledge-library\imports"))
BOARD = json.loads((ROOT / "data/board.json").read_text(encoding="utf-8-sig"))
MAP = json.loads((ROOT / "data/intake/relationship-map.json").read_text(encoding="utf-8"))
MANIFEST = list(csv.DictReader((COMPETITION / "knowledge/kamp-guidebooks-manifest.csv").open(encoding="utf-8-sig")))
SUMMARIES = {int(row["Dataset_ID"]): row for row in csv.DictReader((COMPETITION / "knowledge/kamp-guidebooks-summary.csv").open(encoding="utf-8-sig"))}
KPIC = json.loads((COMPETITION / "knowledge/root-industry/sources.json").read_text(encoding="utf-8"))
INDEX = (COMPETITION / "references/veda-index.md").read_text(encoding="utf-8")

PROCESS = {
    "용접": ("용접", "접합", "weld"),
    "소성가공": ("프레스", "소성", "단조", "블랭킹", "press"),
    "주조": ("주조", "다이캐스팅", "casting"),
    "금형": ("금형", "mold"),
    "표면처리": ("표면처리", "도금", "도장", "코팅", "염색", "산제"),
    "열처리": ("열처리", "소입", "담금질", "heat treatment"),
    "사출": ("사출", "성형", "injection"),
    "정밀가공": ("cnc", "절삭", "가공", "machining"),
    "섬유·필름": ("의류", "원단", "필름", "니들펀칭", "우레탄", "재단", "그라비아"),
}
ROOT_SIX = {"용접", "소성가공", "주조", "금형", "표면처리", "열처리"}
FACETS = {
    "품질·불량": ("불량", "품질", "결함", "폐기", "재작업", "강도", "검사", "quality", "defect"),
    "설비·고장": ("설비", "고장", "예지", "정지", "보전", "maintenance"),
    "공정조건": ("조건", "온도", "압력", "배합", "코팅", "cp", "공정", "process"),
    "변동점·이력": ("변동", "변경", "작업자", "인수인계", "lot", "이력", "추적", "trace"),
    "시각·검사": ("비전", "영상", "표면", "검사", "ocr", "image"),
    "시간·연결": ("시간", "타임", "lot", "배정번호", "join", "연결", "window"),
    "최적화·자원": ("최적", "자원", "에너지", "생산성", "시간", "비용", "optimization"),
    "현장 조치": ("조치", "대응", "개선", "예방", "검사", "정지", "판단", "action"),
}
WEIGHTS = {"text": 0.27, "process": 0.24, "problem": 0.19, "source": 0.15, "label": 0.15}
VEDA_BRIDGES = {
    "변동점·이력": {"veda-direct-1": 0.43, "veda-direct-4": 0.36, "ref-veda-mfg-fde-ontology": 0.25},
    "품질·불량": {"veda-direct-5": 0.35, "ref-veda-mfg-schema-core": 0.28, "ref-veda-quality-research-loop": 0.20},
    "설비·고장": {"ref-veda-mfg-schema-core": 0.25, "ref-veda-nist-eda": 0.18},
    "현장 조치": {"veda-direct-1": 0.20, "veda-direct-4": 0.18, "veda-direct-6": 0.16},
}


def tokens(value: str) -> set[str]:
    text = re.sub(r"[^가-힣a-zA-Z0-9]+", " ", value.lower())
    words = set(re.findall(r"[a-z][a-z0-9_-]{2,}|[가-힣]{2,}", text))
    korean = re.sub(r"[^가-힣]", "", text)
    grams = {korean[i : i + size] for size in (2, 3) for i in range(max(0, len(korean) - size + 1))}
    return words | grams


def process_tags(value: str) -> list[str]:
    t = value.lower()
    return [tag for tag, keys in PROCESS.items() if any(key in t for key in keys)]


def facet_tags(value: str) -> list[str]:
    t = value.lower()
    return [tag for tag, keys in FACETS.items() if any(key in t for key in keys)]


def norm_idf(corpus: list[str]):
    doc_sets = [tokens(text) for text in corpus]
    df = Counter(term for terms in doc_sets for term in terms)
    idf = {term: math.log((1 + len(corpus)) / (1 + freq)) + 1 for term, freq in df.items()}
    vectors = []
    for terms in doc_sets:
        v = {term: idf[term] for term in terms}
        length = math.sqrt(sum(x * x for x in v.values())) or 1
        vectors.append({term: x / length for term, x in v.items()})
    return vectors


def cosine(a: dict[str, float], b: dict[str, float]) -> float:
    return sum(value * b.get(term, 0) for term, value in a.items())


def guide_columns(relative: str, page_hint: str) -> dict:
    """Extract a conservative preview from a guidebook's variable-definition pages."""
    p = COMPETITION / "knowledge" / relative
    if not p.exists():
        return {"status": "가이드북 전문 없음", "columns": [], "join": [], "time": [], "target": [], "excerpt": "", "path": relative}
    text = p.read_text(encoding="utf-8-sig", errors="replace")
    pages = re.split(r"<!-- p\.(\d+) -->", text)
    chunks = [(int(pages[i]), pages[i + 1]) for i in range(1, len(pages) - 1, 2)]
    selected = []
    for number, chunk in chunks:
        if "주요 변수 정의" in chunk or "변수 속성 정의" in chunk or "변수 정의 및 소개" in chunk:
            selected.append((number, chunk))
    if not selected:
        for number, chunk in chunks:
            if "종속변수" in chunk and "독립변수" in chunk:
                selected.append((number, chunk))
    if not selected or not any("변수" in c or "속성" in c for _, c in selected):
        hinted = {int(x) for x in re.findall(r"\d+", page_hint or "")}
        selected.extend((number, chunk) for number, chunk in chunks if number in hinted and number not in {n for n, _ in selected})
    selected = selected[:3]
    candidates = []
    stop = re.compile(r"^(속성|설명|비고|데이터 타입|데이터형|변수|독립변수|종속변수|공정 변수 조건|내 용|[\[【]표|[●○•]|- )")
    for number, chunk in selected:
        lines = [x.strip() for x in chunk.splitlines() if x.strip()]
        start = next((i for i, line in enumerate(lines) if "주요 변수 정의" in line or "변수 정의 및 소개" in line), 0)
        lines = lines[start : start + 165]
        for index, line in enumerate(lines[:-1]):
            if not 2 <= len(line) <= 42 or stop.search(line) or re.match(r"^\d+$", line):
                continue
            nxt = lines[index + 1]
            if not 5 <= len(nxt) <= 140 or stop.search(nxt) or nxt.startswith("["):
                continue
            if any(bad in line for bad in ("수집 기간", "수집 주기", "제조AI데이터셋", "분석에 사용", "아래 그림", "주요 변수 기술")):
                continue
            if line.endswith(("다.", "있다.", "한다.", "한다", "있음")) or re.search(r"하고자|에서 측정|에 대해|발생한|의 두께|의 상태", line):
                continue
            if not ("데이터형" in lines[index + 2] if index + 2 < len(lines) else False) and not re.search(r"(컬럼|변수|값|여부|수량|번호|시간|온도|압력|출력|전류|길이|색상|두께|비율|LOT|불량)", nxt):
                continue
            record = {"name": line, "description": nxt, "page": number}
            if record not in candidates and all(x["name"] != line for x in candidates):
                candidates.append(record)
    key_pattern = re.compile(r"배정번호|LOT\s*(?:NO\.?|번호)?|Work[_ ]?ID|PART[_ ]?NO|PIPE[_ ]?NO|TAG_MIN|Timestamp|작업일|작업자|설비명|품번|불량수량|PassOrFail|FIN[_ ]?JGMT", re.I)
    key_lines = [entry for entry in candidates if key_pattern.search(entry["name"])]
    join = [x for x in key_lines if re.search(r"번호|\bLOT\b|Work|PART|PIPE", x["name"], re.I)]
    time = [x for x in key_lines if re.search(r"시간|작업일|TAG_MIN|Timestamp", x["name"], re.I)]
    target = [x for x in candidates if re.search(r"불량|품질|PassOrFail|JGMT|위험|안정", x["name"], re.I)]
    compact = re.sub(r"\s+", "", text)
    target_absent = bool(re.search(r"(레이블|라벨).{0,45}(종속변수는포함되어있지|포함되지않)", compact)) or bool(re.search(r"표시없음/Unlabeled", compact, re.I))
    excerpt = " ".join(re.sub(r"\s+", " ", chunk).strip()[:650] for _, chunk in selected[:2])
    return {"status": "가이드북 변수 정의 페이지 자동 추출 · 원문 대조 필요" if selected else "변수 정의 구간 자동 미검출",
            "columns": candidates[:35], "join": join[:8], "time": time[:8], "target": target[:8],
            "targetAbsent": target_absent, "pages": [n for n, _ in selected], "excerpt": excerpt, "path": relative}


ideas = []
for row in BOARD["ideas"]:
    if not row.get("sourceId"):
        continue
    text = " ".join(str(row.get(k, "")) for k in ("process", "event", "loss", "currentHandling", "category"))
    ideas.append({
        "id": row["id"], "code": row["sourceId"], "process": row["process"], "event": row["event"],
        "loss": row["loss"], "handling": row.get("currentHandling", ""),
        "proposal": row.get("proposedDatasets", ""), "category": row.get("category", ""),
        "slide": row.get("sourceSlide"), "sector": process_tags(row["process"]),
        "facets": facet_tags(text), "source": row.get("sourceFile", ""),
    })

datasets = []
node_by_id = {int(node["id"]): node for node in MAP["nodes"]}
for row in MANIFEST:
    ident = int(row["Dataset_ID"])
    node = node_by_id[ident]
    summary = SUMMARIES.get(ident, {})
    guide = guide_columns(summary.get("Full_MD", ""), summary.get("Variables_Pages", ""))
    body = " ".join(str(node.get(k, "")) for k in ("title", "industry", "process", "purpose", "issue", "key", "label"))
    body += " " + " ".join(x["name"] + " " + x["description"] for x in guide["columns"])
    datasets.append({
        "id": ident, "name": row["Dataset_Name"], "industry": node.get("industry", ""),
        "process": node.get("process", ""), "purpose": node.get("purpose", ""),
        "rows": node.get("rows", ""), "key": node.get("key", ""), "label": node.get("label", ""),
        "issue": html.unescape(node.get("issue", "")), "finding": html.unescape(node.get("finding", "")),
        "sector": process_tags(body), "facets": facet_tags(body),
        "guide": row["File"], "sha256": row["SHA256"], "sourceUrl": row["Source"],
        "summaryFile": summary.get("Full_MD", ""), "guideEvidence": guide,
        "collection": "로컬 가이드북 변수 설명·팀원 지도 메타데이터",
    })

veda = []
for line in INDEX.splitlines():
    if not line.startswith("| `ref-veda-"):
        continue
    cells = [cell.strip().strip("`") for cell in line.split("|")[1:-1]]
    if len(cells) >= 5:
        ident, status, axis, location, description = cells[:5]
        veda.append({"id": ident, "title": description, "status": status, "axis": axis,
                     "path": location, "level": "인덱스 설명", "sector": process_tags(description + " " + location),
                     "facets": facet_tags(description + " " + location)})

domain_root = VEDA / "absorbed-references/0000_domain"
direct = [
    ("03_린_제조/Visual Management and Lean Behavior.md", "시각 관리·린 행동", "현장 상태와 문제를 누구나 볼 수 있게 하는 관리 개념"),
    ("03_린_제조/Respect for People.md", "사람 중심 린", "현장 작업자 판단과 개선 참여를 존중하는 운영 개념"),
    ("03_린_제조/Team Leaders — The Engine of Toyota’s Performance.md", "팀 리더·표준 작업", "문제 발견과 개선을 팀 단위로 이어가는 운영 개념"),
    ("09_문제해결_리뷰/A Beginner's Guide to Setting Up an Obeya Room.md", "Obeya 공동 판단", "서로 다른 현장 정보를 한 장소에서 비교하는 시각적 운영 개념"),
    ("09_문제해결_리뷰/AIAG-CQI-20-Effective-Problem-Solving-Guide-2nd-ed.md", "CQI-20 문제해결", "불량 원인·시정 조치·재발 방지의 구조"),
    ("09_문제해결_리뷰/Avoiding Failure in Problem-Solving Projects.md", "문제 정의·A3", "문제의 범위와 검증 가능한 결과를 명시하는 접근"),
]
for idx, (location, title, description) in enumerate(direct, 1):
    p = domain_root / location
    if p.exists():
        veda.append({"id": f"veda-direct-{idx}", "title": title, "description": description,
                     "status": "원문 텍스트 확인", "axis": "Lean·품질", "path": str(p),
                     "level": "로컬 본문 확인", "sector": process_tags(description),
                     "facets": facet_tags(title + " " + description)})

documents = [
    " ".join([i["process"], i["event"], i["loss"], i["category"]]) for i in ideas
] + [" ".join([d["name"], d["industry"], d["process"], d["purpose"], d["issue"], d["guideEvidence"]["excerpt"][:750]] + [x["name"] + " " + x["description"] for x in d["guideEvidence"]["columns"]]) for d in datasets] + [
    v["title"] + " " + v.get("description", "") for v in veda
]
vec = norm_idf(documents)
di = len(ideas)
dd = len(datasets)
dataset_by_id = {d["id"]: d for d in datasets}
edge_by_pair = {tuple(sorted((int(e["source"]), int(e["target"])))): e for e in MAP["edges"]}
scores = {}
for i, idea in enumerate(ideas):
    item = []
    for j, data in enumerate(datasets):
        text = min(1, cosine(vec[i], vec[di + j]) * 3.4)
        same = set(idea["sector"]) & set(data["sector"])
        process = 1.0 if same else (0.25 if not idea["sector"] else 0.0)
        a, b = set(idea["facets"]), set(data["facets"])
        problem = len(a & b) / max(1, min(3, len(a)))
        source = 1.0 if re.search(rf"(?<!\d){data['id']}(?!\d)", idea["proposal"]) else 0.0
        guide = data["guideEvidence"]
        label = 0.0 if guide["targetAbsent"] else (1.0 if guide["target"] else 0.45)
        item.append({"id": data["id"], "text": round(text, 4), "process": round(process, 4),
                     "problem": round(problem, 4), "source": source, "label": label})
    scores[idea["id"]] = item

    refs = []
    for j, source in enumerate(veda):
        sim = min(1, cosine(vec[i], vec[di + dd + j]) * 3.4)
        overlap = len(set(idea["facets"]) & set(source["facets"])) / max(1, min(3, len(idea["facets"])))
        bridge = max((VEDA_BRIDGES.get(tag, {}).get(source["id"], 0) for tag in idea["facets"]), default=0)
        strength = 0.49 * sim + 0.31 * overlap + bridge
        if source["status"] == "deferred":
            strength *= 0.7
        refs.append({"id": source["id"], "strength": round(strength, 4),
                     "shared": sorted(set(idea["facets"]) & set(source["facets"])), "curatedBridge": bool(bridge)})
    idea["veda"] = sorted(refs, key=lambda x: -x["strength"])[:8]

archive_families = []
family_root = VEDA / "absorbed-references/0000_domain"
if family_root.exists():
    for p in sorted(family_root.iterdir()):
        if p.is_dir() and re.match(r"^\d\d_", p.name):
            archive_families.append({"name": p.name, "files": sum(1 for f in p.iterdir() if f.is_file())})

payload = {
    "title": "Q.AI 제조 현안 교집합 지도", "generated": "2026-09-26",
    "ideas": ideas, "datasets": datasets, "veda": veda, "kpSources": len(KPIC), "archiveFamilies": archive_families,
    "scores": scores, "edges": [{k: e.get(k) for k in ("source", "target", "kind", "verdict", "basis", "note", "scope")} for e in MAP["edges"]],
    "weights": WEIGHTS,
    "limits": [
        "가이드북 변수 정의 페이지의 컬럼·설명을 문자 n-gram TF-IDF 코사인에 넣고 공정·문제·PPT 후보 신호를 결합한다. 표가 줄 단위로 풀린 자동 추출이므로 각 컬럼은 원문 PDF 대조가 필요하다. 신경망 Attention이나 사전학습 벡터 임베딩이 아니다.",
        "소프트맥스 표시 가중치는 후보 50종 안에서 상대적으로 분배한 값이며 적합 확률·성능 수치가 아니다.",
        "VEDA 인덱스 항목은 제목·설명으로 연결한다. 변동점↔시각관리처럼 출처 간 개념 대응은 명시적 수동 브리지를 더한다. 원문을 확인한 Lean/CQI-20 문서만 별도 표시한다. VEDA 원문은 모델 입력이 아니다.",
        "KAMP 원본 분석 데이터는 이 프로젝트 data/raw에 없다. 팀원 관계 지도의 수치·결합 판정은 별도 재현 전이다.",
        "산업적 유사성과 데이터 결합 가능성은 서로 다르다. 공통 공정명만으로 두 데이터셋의 행을 조인하지 않는다.",
    ],
    "provenance": {"idea": BOARD.get("ideaIntake", {}), "map": MAP.get("provenance", {}),
                   "guidebookManifest": "knowledge/kamp-guidebooks-manifest.csv",
                   "guidebookSummary": "knowledge/kamp-guidebooks-summary.csv",
                   "vedaIndex": "references/veda-index.md", "kpIndex": "knowledge/root-industry/sources.json"},
}

template = (ROOT / "intersection-template.html").read_text(encoding="utf-8")
data = json.dumps(payload, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
output = template.replace("__ATLAS_DATA__", data)
target = ROOT / "data/intersection-atlas.html"
target.write_text(output, encoding="utf-8")
print(json.dumps({"output": str(target), "ideas": len(ideas), "datasets": len(datasets), "veda": len(veda),
                  "vedaFamilies": len(archive_families), "edges": len(MAP["edges"]), "bytes": target.stat().st_size}, ensure_ascii=False))
