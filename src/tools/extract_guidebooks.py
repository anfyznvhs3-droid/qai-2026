"""KAMP 가이드북 PDF → (1) 전문 markdown, (2) 핵심 데이터카드 추출.

사용:
    python src/tools/extract_guidebooks.py

입력:  knowledge/kamp-guidebooks/*.pdf, knowledge/kamp-guidebooks-manifest.csv
출력:  knowledge/kamp-guidebooks-md/<ID>_<이름>.md     (쪽 마커 <!-- p.N --> 포함)
       knowledge/kamp-guidebooks-datacards.md          (50권 핵심 4섹션 + 요약표)
       knowledge/kamp-guidebooks-summary.csv           (요약표 CSV)

가이드북 p.1의 다운로드 이용자 정보(회원 ID·워터마크 번호)는 출력에서 제거한다.
"""

from __future__ import annotations

import csv
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

import fitz  # pymupdf

ROOT = Path(__file__).resolve().parents[2]
PDF_DIR = ROOT / "knowledge" / "kamp-guidebooks"
MANIFEST = ROOT / "knowledge" / "kamp-guidebooks-manifest.csv"
MD_DIR = ROOT / "knowledge" / "kamp-guidebooks-md"
CARDS_MD = ROOT / "knowledge" / "kamp-guidebooks-datacards.md"
SUMMARY_CSV = ROOT / "knowledge" / "kamp-guidebooks-summary.csv"

RUNNING_HEADER = re.compile(r"^「.*」\s*분석실습\s*가이드북\s*$")
PII_LINE = re.compile(r"^(No\.\s*GB\d+|회원 ID|다운로드일|활용목적|이용자 정보)")
COLLECT_LINE = re.compile(r"^[●◑•\-\s]*(제조 분야|제조 공정명|수집 장비|수집 기간|수집 주기)\s*[:：]\s*(.+)$")
SPLIT_RE = re.compile(
    r"train_test_split|test_size|validation_split|학습\s*데이터\s*셋|검증\s*데이터\s*셋|평가\s*데이터\s*셋|"
    r"\b[6789]\s*[:：]\s*[1234]\b|shuffle|random_state|무작위|시간\s*순|LOT|Lot|세션|GroupKFold|TimeSeriesSplit",
)
RANDOM_RE = re.compile(r"train_test_split|shuffle|validation_split|무작위|random_state", re.I)
GROUP_RE = re.compile(r"시간\s*순|LOT\s*단위|Lot\s*단위|세션\s*단위|그룹|GroupKFold|TimeSeriesSplit|시계열\s*분할")
METRIC_RE = re.compile(
    r"정확도|Accuracy|accuracy|F1|f1[-_ ]score|정밀도|Precision|재현율|Recall|RMSE|MAE|MSE|R2|R²|r2_score|"
    r"AUC|ROC|혼동\s*행렬|confusion|민감도|특이도|\d+(?:\.\d+)?\s*%",
)
ACC_ONLY_RE = re.compile(r"정확도|Accuracy|accuracy")
RICH_METRIC_RE = re.compile(r"F1|f1|정밀도|Precision|재현율|Recall|RMSE|MAE|R2|R²|AUC|ROC|민감도|특이도", re.I)
RESULT_HEAD_RE = re.compile(r"결과\s*분석|결과\s*해석|모델\s*평가|성능\s*평가|테스트\s*결과")


def clean_lines(text: str) -> list[str]:
    out = []
    for raw in text.splitlines():
        line = raw.rstrip()
        if RUNNING_HEADER.match(line.strip()):
            continue
        if PII_LINE.match(line.strip()):
            continue
        out.append(line)
    return out


def safe_slug(name: str) -> str:
    s = re.sub(r'[\\/:*?"<>|]', "", name).strip()
    return re.sub(r"\s+", "_", s)


@dataclass
class Book:
    dataset_id: int
    name: str
    task_class: str
    pdf: Path
    sha256: str
    pages: list[list[str]] = field(default_factory=list)

    # extracted
    overview: list[str] = field(default_factory=list)
    citation_ko: str = ""
    citation_en: str = ""
    summary_table: list[str] = field(default_factory=list)
    summary_page: int = 0
    collect: dict[str, str] = field(default_factory=dict)
    variables: list[str] = field(default_factory=list)
    variables_pages: list[int] = field(default_factory=list)
    split_lines: list[str] = field(default_factory=list)
    result_lines: list[str] = field(default_factory=list)
    algorithm: str = ""
    flags: list[str] = field(default_factory=list)

    @property
    def md_name(self) -> str:
        return f"{self.dataset_id:02d}_{safe_slug(self.name)}.md"


def load_manifest() -> dict[str, dict]:
    with MANIFEST.open(encoding="utf-8-sig", newline="") as f:
        return {row["File"]: row for row in csv.DictReader(f)}


def read_pages(pdf: Path) -> list[list[str]]:
    doc = fitz.open(pdf)
    return [clean_lines(p.get_text()) for p in doc]


def extract_overview(book: Book) -> None:
    p1 = book.pages[0]
    joined = "\n".join(p1)
    m = re.search(r"국문 출처 표기 양식\n(.*?)\n영문 출처 표기 양식\n(.*?)\n제조AI데이터셋 개요", joined, re.S)
    if m:
        book.citation_ko = " ".join(m.group(1).split())
        book.citation_en = " ".join(m.group(2).split())
    m2 = re.search(r"제조AI데이터셋 개요\n(.*?)(?:\n인공지능 제조 플랫폼|\Z)", joined, re.S)
    if m2:
        book.overview = [l for l in m2.group(1).splitlines() if l.strip()]
    for l in book.overview:
        if l.startswith("알고리즘"):
            book.algorithm = l.split(":", 1)[-1].strip()


def extract_summary_table(book: Book) -> None:
    for i, lines in enumerate(book.pages[:8]):
        text = "\n".join(lines)
        if re.search(r"구\s*분", text) and "데이터 개수" in text and re.search(r"분석\s*목적", text):
            start = next((k for k, l in enumerate(lines) if l.strip() == "1"), 0)
            body = lines[start:]
            # drop trailing '분석요약' footer + lone digits
            while body and (body[-1].strip() in {"분석요약", "분석 요약"} or re.fullmatch(r"\d{1,2}", body[-1].strip())):
                body.pop()
            book.summary_table = [l for l in body if l.strip()]
            book.summary_page = i + 1
            return


def extract_collect(book: Book) -> None:
    for lines in book.pages:
        for l in lines:
            m = COLLECT_LINE.match(l.strip())
            if m and m.group(1) not in book.collect:
                book.collect[m.group(1)] = m.group(2).strip()


VAR_ANCHOR = re.compile(r"데이터\s*유형\s*/\s*구조|주요\s*변수|속성\s*정의|Attributes name|변수\s*정의|데이터\s*속성")
VAR_STOP = re.compile(r"\)\s*데이터\s*\(?품질\)?\s*전처리|품질\s*지수|품질\s*전처리\s*목적|2\.2\s|분석\s*모델\s*소개|필요\s*SW|필요\s*패키지")


def extract_variables(book: Book) -> None:
    """'데이터 유형/구조' 앵커(본문, TOC 제외)부터 전처리 절 직전까지 최대 4쪽/240줄."""
    n = len(book.pages)
    start_page = start_line = None
    for i in range(4, n):
        for k, l in enumerate(book.pages[i]):
            if VAR_ANCHOR.search(l) and not re.fullmatch(r"\s*\d*\)?\s*데이터\s*유형/구조\s*\d*\s*", l + "  ") or (
                VAR_ANCHOR.search(l) and len(book.pages[i]) > 25
            ):
                start_page, start_line = i, k
                break
        if start_page is not None:
            break
    if start_page is None:
        return
    out, pages, taken = [], [], 0
    for p in range(start_page, min(n, start_page + 4)):
        lines = book.pages[p][start_line if p == start_page else 0:]
        out.append(f"<!-- p.{p + 1} -->")
        pages.append(p + 1)
        for l in lines:
            if not l.strip():
                continue
            if taken > 15 and VAR_STOP.search(l):
                book.variables, book.variables_pages = out[:240], pages
                return
            out.append(l)
            taken += 1
            if taken >= 240:
                book.variables, book.variables_pages = out, pages
                return
    book.variables, book.variables_pages = out, pages


def extract_split_and_results(book: Book) -> None:
    n = len(book.pages)
    # skip TOC/summary pages
    body_start = min(6, n)
    result_start = None
    for i in range(body_start, n):
        if any(RESULT_HEAD_RE.search(l) and not l.strip().startswith("[") for l in book.pages[i]) or \
           any(re.search(r"단계\s*[⑧8]\]?", l) for l in book.pages[i]):
            result_start = i
            break
    seen = set()
    for i in range(body_start, n):
        for l in book.pages[i]:
            s = " ".join(l.split())
            if not s or s in seen:
                continue
            if SPLIT_RE.search(s) and len(book.split_lines) < 14:
                book.split_lines.append(f"p.{i + 1}: {s}")
                seen.add(s)
    rs = result_start if result_start is not None else max(body_start, n - 20)
    for i in range(rs, n):
        for l in book.pages[i]:
            s = " ".join(l.split())
            if not s or s in seen:
                continue
            if METRIC_RE.search(s) and len(book.result_lines) < 18:
                book.result_lines.append(f"p.{i + 1}: {s}")
                seen.add(s)

    all_text = "\n".join("\n".join(p) for p in book.pages[body_start:])
    if RANDOM_RE.search(all_text) and not GROUP_RE.search(all_text):
        book.flags.append("random-split")
    if GROUP_RE.search(all_text):
        book.flags.append("group/time-split-mentioned")
    res_text = "\n".join(book.result_lines)
    if ACC_ONLY_RE.search(res_text) and not RICH_METRIC_RE.search(res_text):
        book.flags.append("accuracy-only")
    if re.search(r"DNN|딥뉴럴|Deep Neural|CNN|RNN|LSTM|오토인코더|Autoencoder", book.algorithm, re.I):
        book.flags.append("deep-net-baseline")
    if re.search(r"Decision Tree|의사결정|로지스틱|Logistic|회귀", book.algorithm, re.I):
        book.flags.append("classic-baseline")


def write_full_md(book: Book) -> Path:
    MD_DIR.mkdir(parents=True, exist_ok=True)
    out = MD_DIR / book.md_name
    lines = [
        f"# {book.dataset_id:02d} · {book.name}",
        "",
        f"- 원본: `knowledge/kamp-guidebooks/{book.pdf.name}` (SHA-256 `{book.sha256[:16]}…`)",
        f"- 쪽수: {len(book.pages)} · 추출: pymupdf 텍스트 레이어 (이미지·표 구조 미포함)",
        f"- 출처 표기(국문): {book.citation_ko}",
        f"- 출처 표기(영문): {book.citation_en}",
        "",
        "---",
    ]
    for i, page in enumerate(book.pages, 1):
        lines.append(f"\n<!-- p.{i} -->")
        lines.extend(page)
    out.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")
    return out


def card_section(book: Book) -> str:
    rel_md = f"kamp-guidebooks-md/{book.md_name}"
    s = [f"## {book.dataset_id:02d} · {book.name}", ""]
    s.append(f"- 과제 유형(선정표): {book.task_class or '-'}")
    s.append(f"- 가이드북 알고리즘: **{book.algorithm or '-'}**")
    s.append(f"- 낡은 지점 flags: {', '.join(book.flags) if book.flags else '-'}")
    s.append(f"- 전문: [`{rel_md}`]({rel_md}) · 원본 `{book.pdf.name}`")
    s.append("")
    s.append("### 개요 (p.1)")
    s.append("")
    s.append("```text")
    s.extend(book.overview or ["(추출 실패)"])
    s.append("```")
    s.append("")
    s.append(f"### 분석요약 표 (p.{book.summary_page or '?'})")
    s.append("")
    s.append("```text")
    s.extend(book.summary_table or ["(추출 실패 — 전문 md에서 '구 분' 검색)"])
    s.append("```")
    s.append("")
    s.append("### 수집 조건")
    s.append("")
    if book.collect:
        for k in ("제조 분야", "제조 공정명", "수집 장비", "수집 기간", "수집 주기"):
            if k in book.collect:
                s.append(f"- {k}: {book.collect[k]}")
    else:
        s.append("- (패턴 미검출)")
    s.append("")
    s.append(f"### 변수·속성 정의 (p.{', '.join(map(str, book.variables_pages)) or '?'})")
    s.append("")
    s.append("```text")
    s.extend(book.variables or ["(추출 실패 — 전문 md에서 '속성' 또는 'Description' 검색)"])
    s.append("```")
    s.append("")
    s.append("### 분할 방식 (관련 문장)")
    s.append("")
    s.extend(f"- {l}" for l in (book.split_lines or ["(미검출)"]))
    s.append("")
    s.append("### 베이스라인 결과·지표 (관련 문장)")
    s.append("")
    s.extend(f"- {l}" for l in (book.result_lines or ["(미검출)"]))
    s.append("")
    return "\n".join(s)


def main() -> int:
    if not PDF_DIR.exists():
        print(f"missing {PDF_DIR}", file=sys.stderr)
        return 1
    manifest = load_manifest()
    books: list[Book] = []
    for pdf in sorted(PDF_DIR.glob("*.pdf")):
        row = manifest.get(pdf.name)
        if not row:
            print(f"skip (not in manifest): {pdf.name}", file=sys.stderr)
            continue
        b = Book(int(row["Dataset_ID"]), row["Dataset_Name"], row.get("Task_Class", ""), pdf, row["SHA256"])
        b.pages = read_pages(pdf)
        extract_overview(b)
        extract_summary_table(b)
        extract_collect(b)
        extract_variables(b)
        extract_split_and_results(b)
        write_full_md(b)
        books.append(b)
    books.sort(key=lambda x: x.dataset_id)

    # summary csv
    with SUMMARY_CSV.open("w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f)
        w.writerow(["Dataset_ID", "Dataset_Name", "Task_Class", "Guidebook_Algorithm", "Flags", "Summary_Page",
                    "Variables_Pages", "Split_Hits", "Result_Hits", "Collect_Period", "Collect_Interval", "Full_MD"])
        for b in books:
            w.writerow([b.dataset_id, b.name, b.task_class, b.algorithm, ";".join(b.flags), b.summary_page,
                        ";".join(map(str, b.variables_pages)), len(b.split_lines), len(b.result_lines),
                        b.collect.get("수집 기간", ""), b.collect.get("수집 주기", ""), f"kamp-guidebooks-md/{b.md_name}"])

    # datacards md
    head = [
        "# KAMP 가이드북 핵심 추출본 (50권)",
        "",
        "생성: `python src/tools/extract_guidebooks.py` · 규칙 기반 추출(텍스트 레이어). 표는 셀이 줄 단위로 풀려 있음.",
        "`(추출 실패)` 항목은 전문 md에서 직접 확인. 알고리즘·코드 설명 챕터는 의도적으로 제외.",
        "",
        "가이드북 수치(데이터 개수 등)는 셀 수·행 수가 혼용되므로 실제 파일 헤더로 교차 확인한다 (`reports/leakage-audit-checklist.md` A03·B06).",
        "",
        "## 요약표",
        "",
        "| ID | 데이터셋 | 유형 | 가이드북 알고리즘 | 낡은 지점 | 요약표 p. | 변수 p. | 전문 |",
        "| ---: | --- | --- | --- | --- | ---: | --- | --- |",
    ]
    for b in books:
        head.append(
            f"| {b.dataset_id} | {b.name} | {b.task_class} | {b.algorithm or '-'} | {', '.join(b.flags) or '-'} | "
            f"{b.summary_page or '-'} | {','.join(map(str, b.variables_pages)) or '-'} | [md](kamp-guidebooks-md/{b.md_name}) |"
        )
    head.append("")
    head.append("flags: `random-split` 무작위/셔플 분할만 언급 · `group/time-split-mentioned` 시간·LOT·그룹 분할 언급 · "
                "`accuracy-only` 결과 지표가 정확도만 · `deep-net-baseline` DNN/CNN/RNN/AE · `classic-baseline` 트리/회귀")
    head.append("")
    head.append("---")
    head.append("")
    body = "\n\n---\n\n".join(card_section(b) for b in books)
    CARDS_MD.write_text("\n".join(head) + body + "\n", encoding="utf-8")

    ok_summary = sum(1 for b in books if b.summary_table)
    ok_vars = sum(1 for b in books if b.variables)
    ok_res = sum(1 for b in books if b.result_lines)
    ok_split = sum(1 for b in books if b.split_lines)
    print(f"books={len(books)} summary_table={ok_summary} variables={ok_vars} split={ok_split} results={ok_res}")
    print(f"full md -> {MD_DIR.relative_to(ROOT)}  cards -> {CARDS_MD.relative_to(ROOT)}  csv -> {SUMMARY_CSV.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
