# Awesome Jev · 생태계 레이더 (2026-09-19)

## 출처

- **트리거:** 사용자 — [awesomejev.com](https://awesomejev.com/) 재검토 (2026-09-19)
- **사이트:** [awesomejev.com](https://awesomejev.com/) — **561 entries · 27,007★** (479 GitHub · 146 live · 48 articles) · **Refreshed 2026-09-19**
- **백엔드:** [logicrw/awesome-jev-projects](https://github.com/logicrw/awesome-jev-projects) — GitHub **자동 동기화** · source-backed 레이더
- **공식 스펙 (사이트 상단):** Jev v1.13 · `POST /v1/systemone` · **choice / score / noul** · $0.042/MTok in · out free · 70–500ms (TypeSafe 주장)
- **Scout:** awesomejev.com 전체 fetch (2026-09-19)

## 왜 「미친」인가

| 특징 | 의미 |
| --- | --- |
| **단일 인덱스** | X·HN·Discord 데모가 **하루 단위**로 repo·site·post로 정리 |
| **9개 섹션** | Official · SDK(45) · Integrations(26) · **Agent tooling(107)** · Browser(48) · Apps(54) · Games(51) · Demos(52) · **Benchmarks(60+)** · Articles |
| **패턴 문서 링크** | TypeSafe [Patterns](https://docs.typesafe.ai/) — speculative fan-out · **confidence-gated routing** · composite scoring · intent routing |
| **Cookbooks** | parallel questions · reranking · guardrails · hierarchical classification |
| **한계** | **바이럴 X 데모만** 있는 항목(roiyaru vital 등)은 **누락 가능** · Laya/NanoJev **미색인**(2026-09-19 grep) |

→ 트윗 큐레이션 = **awesomejev + X 위성** 병행이 맞음.

## K-AI — **패턴만** (API ❌)

### active에 이미 투입 중 (`gem-typesafe-calibrated-decisions`)

| Awesome Jev / TypeSafe | 우리 구현 |
| --- | --- |
| choice / score / noul | `infer` JSON 3형 |
| confidence-gated routing | **τ_auto** · **τ_review** + `gem-beckmann-transport` |
| calibration · evals | **CalibratedClassifierCV** · ECE · reliability Fig |
| workflow evals (TypeSafe) | **우리가 공개** — PDF 표로 신뢰 역전 |

### deferred 위성 (`gem-typesafe-satellite`) — awesomejev에서 **추가 발견**

| awesomejev 항목 | K-AI 은유 | pull |
| --- | --- | --- |
| **jev-for-engineers** (Foadsf) | CAD/FEM/DFM/BOM — **제조에 가장 가까운 Jev 예제** · hallucination-proof extraction | PDF §5·§6 **은유** |
| pulselane · lanebreak · **typesafe-triage-guard** | 알람 **triage** · deploy-risk gate | PDF §7 |
| **jevcal** · jev-benchmarks · calibre | **보정·선택적 위험** — active gem **검증 언어** | Model |
| jev-korean-benchmark (mahlernim) | KorMed·Belebele — **Wilson n** (satellite kor bench) | PDF 표 |
| fast-jev-compaction (★3645) | 컨텍스트 **prune** — `gem-rsi-workspace-harness` | 운영 |
| typesafe-mario · smash 계열 | 게임 Choice — **PDF §8 지연 1문장만** | pull ❌ |

### pull ❌ (경진 무관·과잉)

Agent tooling 107건 · browser-use · crypto trader · Discord mod · 게임 51건 — **Library Drift** 유발, 9/21 전 **컨텍스트 금지**.

## 우리 레지스트리와 역할 분담

| id | 역할 |
| --- | --- |
| **`gem-awesomejev-catalog`** | **메타 인덱스** — 신규 Jev 링크 발견·9/21 prune 시 satellite 후보 스캔 |
| `gem-typesafe-calibrated-decisions` | **active** — GBDT+보정·infer·τ (제품 API ❌) |
| `gem-typesafe-satellite` | **deferred** — X로 들어온 **데모·벤치** 카드 |
| `gem-laya-horizontal-oss` | **deferred pull ❌** — awesomejev **미등재** · Reddit/HF 직접 |

## 9/21 Library Drift 규칙

- **일상 참조:** `gem-typesafe-calibrated-decisions` + active playbook **만**
- **awesomejev:** 새 링크 올 때 **1회 스캔** → satellite 후보 → `references/typesafe-satellite-links` 또는 **기각 deferred**
- **전체 561건 에이전트 로드 ❌** (`gem-rsi-workspace-harness`)

## 경계

- awesomejev **가격·지연·193× 수치** PDF 인용 ❌
- **Jev API** · Vercel AI Gateway evaluate · `typesafe-ai/skills` → **`AGENT.MD` §3 ❌**
- 「Jane Street급」마케팅 PDF ❌

## pull 조건

| 时机 | 用途 |
| --- | --- |
| X 링크 전 | awesomejev **검색** → 중복·공식 repo 확인 |
| 9/21 후 PDF | jev-for-engineers **DFM/FEM triage** 1문장 · triage-guard **§7** |
| pull ❌ default | API · agent tooling · 게임 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-awesomejev-catalog` |
| 유형 | `artifact` |
| 상태 | **deferred** · **메타 인덱스** (pull: discovery only) |
| 적용 축 | 레지스트리 위생 · satellite 발굴 · Library Drift 방지 |

## 관련

- [`typesafe-calibrated-decisions-2026-09-17.md`](typesafe-calibrated-decisions-2026-09-17.md) · [`typesafe-satellite-links-2026-09-18.md`](typesafe-satellite-links-2026-09-18.md)
- [TypeSafe Patterns](https://docs.typesafe.ai/) · [Playground](https://typesafe.ai/playground)
- [`docs/mix-application-plan.md`](../docs/mix-application-plan.md) · [`AGENT.MD`](../AGENT.MD) §3
