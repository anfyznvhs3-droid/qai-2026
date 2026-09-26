# Stanford STORM · Co-STORM — 다관점 질문으로 outline 만들기 (2026-09-23)

## 출처

- **입력:** 사용자 직접 링크 (트윗 없음) — [github.com/stanford-oval/storm](https://github.com/stanford-oval/storm) · Stanford OVAL · **MIT** · Python (dspy) · **31k★** · 2024-03 생성 · **마지막 push 2025-09-30 (약 1년 전)**
- **논문:** [STORM (NAACL 2024) arXiv:2402.14207](https://arxiv.org/abs/2402.14207) · [Co-STORM (EMNLP 2024) arXiv:2408.15232](https://www.arxiv.org/abs/2408.15232)
- **데모:** [storm.genie.stanford.edu](https://storm.genie.stanford.edu) (70k+ 사용)
- **Scout:** README + GitHub API (2026-09-23)

## 실체

| 항목 | 값 |
| --- | --- |
| 하는 일 | 인터넷 검색 기반으로 **Wikipedia식 인용 달린 장문**을 처음부터 작성 |
| 2단계 | **Pre-writing** (검색·outline) → **Writing** (outline+references → 본문) |
| 핵심 주장 | 「연구 자동화의 핵심 = **좋은 질문을 만드는 것**」 — 직접 질문 프롬프트는 약함 |
| 전략 1 | **Perspective-Guided Question Asking** — 유사 주제 기존 글을 조사해 **관점**을 뽑고, 관점별로 질문 |
| 전략 2 | **Simulated Conversation** — 작성자 ↔ 주제 전문가 대화 시뮬레이션으로 follow-up 질문 |
| Co-STORM | LLM expert · **Moderator**(쓰이지 않은 정보로 도발 질문) · 사람이 개입 · **mind map** 공유 |
| 의존 | litellm 지원 LLM API + 검색 API (You/Bing/Serper/Tavily/…) 또는 `VectorRM` 로컬 문서 |
| 한계 (README 자인) | 출판 수준 ❌ — 편집자 **pre-writing** 보조 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| `pip install knowledge-storm` → PDF 초안 생성 | ❌ | 외부 LLM·검색 API · KAMP 보고서 = **우리 실험 수치·현장 문제** — 인터넷 검색으로 못 씀 · 1년 미갱신 |
| `VectorRM`으로 가이드북 50종 위에 STORM | ❌ | RAG 인프라 = Library Drift · `rg` + datacard grep으로 충분 · `gem-seekdb`와 같은 결론 |
| **패턴** — Perspective-Guided Question → **아이디어 수집** | ✅ pull↑ | `idea-form.md` 1단계에 **관점 4개**(QC·설비·생산관리·경영) 힌트 1줄 — 「어느 관점에서 봐도 같은 문제가 나오나」 |
| **패턴** — 「좋은 질문이 핵심」 | ✅ | `gem-iwashi`(会議ゴール=状態) · `gem-polya`(문제 이해 단계)와 동축 — 9/25 아이디어 정리 회의 진행 원칙 |
| **패턴** — outline 먼저, 본문 나중 | △ | `reports/submission-outline.md` 이미 존재 · `gem-nature-abstract-playbook`이 담당 |
| **패턴** — Moderator: 「아직 안 쓴 정보로 질문」 | △ | 아이디어 10개 중 3개 고를 때 — **누락 관점**(에너지·안전·물류) 한 번 짚기 |
| Co-STORM mind map | ❌ | Excalidraw 선택지 이미 §6 — 도구 추가 ❌ |

## K-AI — 우리 파이프 대응

| STORM | Q.AI |
| --- | --- |
| Perspective discovery | `idea-form.md` **관점 힌트** — 품질(QC) · 설비(보전) · 생산(관리) · 경영(비용) |
| Simulated conversation | 9/25 정리 회의 — 정진우·엄예지(현장) ↔ 최연식(데이터) **질문 왕복** |
| Pre-writing outline | `reports/submission-outline.md` · hwpx 양식 §1~8 |
| References with citations | `gem-jabref` `.bib` · `references/*.md` |
| Moderator 질문 | 회의 진행자가 **빈 업종·빈 유형** 1회 짚기 (`idea-form` 50종 격자의 빈 칸) |

## 경계

- **STORM 실행·LLM API·검색 API** — PDF·Model **❌** (`AGENT.MD` §3 외부 API)
- `gem-scientisttwo`(자율 연구) · `gem-ars`(writing pipeline) · `gem-aers`(社科 skill) · `gem-paper2agent` — **연구 자동화 deferred 축 5번째** · 본 gem은 **「질문 설계」 패턴**만 담당
- KAMP PDF에 STORM·「Wikipedia식」 언급 ❌

## pull 조건

| 시기 | 용도 |
| --- | --- |
| **지금 (9/23~25)** | `idea-form.md` 1단계에 관점 4개 힌트 1줄 추가 — 완료 (아래) |
| 9/25 정리 회의 | Moderator 역할 1인 — 10개 중 **빈 관점** 1회 질문 |
| PDF | 인용 ❌ · outline 패턴은 `gem-nature-abstract-playbook` |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-stanford-storm-knowledge-curation` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (도구 ❌ · **관점 질문 패턴 active** → idea-form) |
| 적용 축 | 아이디어 수집 · 9/25 회의 — PDF·Model **❌** |

## 관련

- [`docs/idea-form.md`](../docs/idea-form.md) · `gem-iwashi-meeting-facilitation` · `gem-polya-stanford-problems` · `gem-nature-abstract-playbook`
- `gem-scientisttwo-autonomous-research` · `gem-ars-academic-research-skills`
