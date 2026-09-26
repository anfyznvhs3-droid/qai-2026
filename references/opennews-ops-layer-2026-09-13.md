# OpenNews MCP — 운영·카탈로그 레이어 구축 아이디어 (2026-09-13)

## 출처

- **트리거 트윗:** [@NFTCPS / status/2098963854869123429](https://x.com/NFTCPS/status/2098963854869123429) — OpenNews MCP 소개 (크립토·금융 뉴스)
- **1차 repo:** [github.com/6551Team/opennews-mcp](https://github.com/6551Team/opennews-mcp) (MIT) — **제품·API는 채택하지 않음**
- **Scout:** `doc-ad14daf2a4103567` (트윗), GitHub·DDG 검색 (`SCOUT_CALLER=2026-k-ai/agent`, 2026-09-13)
- **로컬 합성:** 에이전트 대화에서 **기능이 아닌 구조**만 제조 경진대회에 대응 매핑

## 원본이 하는 일 (기능 — 채택 ❌)

85+ 실시간 금융·크립토 소스, AI 영향 점수(0–100), long/short 신호, WebSocket 구독.  
`AGENT.MD` §3: 외부 API·과제 raw와 **합성·대체 금지** → **6551.io·뉴스 피드 자체는 사용하지 않음**.

## 채택할 구조 (아이디어 — MIX ✅)

| OpenNews 패턴 | 우리 대응 | 적용 축 |
| --- | --- | --- |
| 소스 트리 (`get_news_sources`) | **`catalog`** — raw/processed, 실험 run, ref 스냅샷 | Data · Model |
| 다중 필터 검색 (`search_news_advanced`) | **`query_runs`** — split·모델·지표 필터 | Model |
| 영향 점수 0–100 | **`impact_score`** — 비용가중 현장 심각도 | Model · PDF |
| long / short / neutral | **`action`** — stop / inspect / continue / hold | Model · PDF |
| 고점수 필터 (`get_high_score_news`) | **`get_priority_cases`** — PDF·발표 대표 케이스 | PDF |
| MCP 도구 노출 | (선택) `src/` 내부 개발 편의 — **제출물 아님** | Model |
| WebSocket 실시간 | 발표 데모만 선택 — **제출 필수 아님** | — |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-opennews-ops-layer` |
| 분류 | **MIX 원석** (`idea`) |
| 상태 | **active** |
| 적용 축 | **Model** (`infer`/`monitor`, experiment log) + **PDF** (케이스·행동 서술) |

## MIX 투입 시 — 최소 4종 (실행 골격)

1. **`catalog.json`** (또는 yaml) — `data-card` · `experiment-log` mirror
2. **추론 스키마** — `impact_score`, `action`, `confidence`, `top_features`, `recommended_check`
3. **`get_priority_cases()`** — validation/test 상위 영향 + 대표 오탐/미탐
4. **`query_runs(filters)`** — 실험 3종 비교표 (`AGENT.MD` §5 24~48h)

## 경계

- Scout(`frame-scout`)·공식(`ref-kamp-*`) **대체 아님** — Model↔PDF **연결 레이어**
- 과제 **`data/raw/`** 와 원석 **합성 금지** (§3)
- 크립토 MCP **기능·외부 API** 투입 금지

## 관련

- `docs/reference-concepts.md` — `gem-opennews-ops-layer`
- `AGENT.MD` §4.1·§4.4·§5·§6.2
- `reports/leakage-audit-checklist.md` — 품질 게이트 (별 축)
