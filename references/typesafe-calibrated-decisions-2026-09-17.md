# TypeSafe AI (Jev) → 타입 있는 결정 + 보정된 신뢰도 (2026-09-17)

## 출처

- **사이트:** [typesafe.ai](https://typesafe.ai/) · [Introducing System One Models and Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) (2026-09-15 공개, $40M, 창업자 Diogo Almeida — ex-OpenAI RLHF)
- **생태계 레이더:** [awesomejev.com](https://awesomejev.com/) — 561 entries · GitHub 일 sync · [`awesomejev-catalog-2026-09-19.md`](awesomejev-catalog-2026-09-19.md) (`gem-awesomejev-catalog`)
- **보도·리뷰:** [The Register](https://www.theregister.com/ai-and-ml/2026/09/16/typesafe-ai-debuts-model-for-machines-that-plays-doom/5296711) · [Kingy AI 리뷰](https://kingy.ai/blog/typesafe-jev-review-the-ai-model-that-doesnt-generate-text/) · Daily Texas News (독립 테스트 수치)
- **한국어 해설:** [@yulmu_coffee 스레드](https://x.com/yulmu_coffee/status/2100210636848521338) — 3 출력 프리미티브(Noul / Choice / Score) · state+question → 1 forward pass · "can't hallucinate" = 스키마 밖 답 없음일 뿐 판단은 틀릴 수 있음
- **Scout:** _(미실행 — WebFetch + 검색, 2026-09-17)_

## 제품 요지

| 항목 | 값 |
| --- | --- |
| 모델 | **Jev** — "System One Model". 텍스트 생성 ❌, **타입 있는 결정**(Choice / Score / yes-no 확률) 출력 |
| 학습 | **RLCD** (Reinforcement Learning for Calibrated Decisions) — RLHF 대신 **보정된 확률**을 목표 |
| 아키텍처 | 병렬 샘플러 — 출력 전부를 한 번에 (autoregressive ❌) |
| 성능 주장 | 193.6× 빠름 · 444.6× 저렴 (자사 벤치) · 독립 테스트는 5×/8.6× 수준 |
| 접근 | **유료 API** `POST /v1/systemone` · 대기열 early access |
| 미공개 | 보정 곡선·ECE·RLCD 방법론 — **검증 불가** (리뷰 공통 지적) |

핵심 설계: 모든 결정에 **confidence** → 소프트웨어가 **임계값 위면 자동 실행, 아래면 사람 검토**로 분기.

## Q.AI 대응

| TypeSafe 패턴 | 우리 적용 | 축 |
| --- | --- | --- |
| "decisions, not strings" | `infer` 출력 = **스키마 고정** (`impact_score`, `action`, `confidence`, `top_features`) — 자유 텍스트 ❌ | Model |
| Noul / Choice / Score 3분법 | 불량 여부 확률(Noul) · 불량 유형(Choice) · 심각도/영향(Score) — `infer` 필드를 이 3형으로 타입 고정 | Model |
| calibrated confidence | 모델 확률 **보정** (Platt / isotonic) + **calibration curve · ECE**를 `validation-report`에 명시 | Model · PDF |
| act / escalate 임계값 | `gem-beckmann-transport` cascade — 고신뢰 자동, 저신뢰 2차 검사·사람 | Model · 운영 |
| "similar inputs → similar answers" | 재현성 — seed·분할 고정, 동일 LOT 재추론 일치율 | Model |
| 비판: 보정 주장 미검증 | **우리는 반대로** — 보정 지표를 PDF 표로 공개 → 심사 신뢰 | PDF |
| roiyaru vital analog | 고정 ICU 알람 vs **보정 급변 확률** — satellite · **제출=로컬 보정** | PDF §7 · PdM |
| rinte 「룰베이스?」 | **고정 임계 vs ML** — group split·비용표로 §4·§7 **정당화** · Jev API ❌ | PDF §4·§7 |
| berman ad-batch | **배치 infer + 고정 다필드 스키마** — `opennews` catalog · §6 6축 오류표 | Model infer · PDF §6 |
| laya OSS | **choice/noul/score + RLCD** — Jev API 대신 **로컬 analog** (제출 ❌) | [`laya-horizontal-jev-oss-2026-09-19.md`](laya-horizontal-jev-oss-2026-09-19.md) |

## MIX 투입 — 9/21 이후

1. **보정 단계** 추가 — 베이스라인 후 `CalibratedClassifierCV` 또는 isotonic → ECE·reliability diagram 1장 (PDF Fig)
2. **임계값 2개** — `τ_auto` (자동 판정) · `τ_review` (사람 검토) → 알람률·recall·검사 부하 3축 표 (`gem-quant-ts-playbook` 비용표 연동)
3. **infer 스키마** 확정 — `gem-opennews-ops-layer` 필드 + `confidence` + `calibrated: true/false`

## 경계

- Jev **API 투입 ❌** — 유료 외부 API (`AGENT.MD` §3), 대기열, 데이터 외부 전송
- "System One Model" 용어 인용 시 **회사 용어**임을 명시 — 표준 분류 아님
- 성능 수치(193×/444×) **인용 ❌** — 자사 벤치, 독립 검증 불일치

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-typesafe-calibrated-decisions` |
| 분류 | **MIX 원석** (`idea`) |
| 상태 | **active** (설계 패턴) · 제품 = **투입 ❌** |
| 적용 축 | **Model** (보정·임계값·스키마) + **PDF** (calibration 표·그림) |

## 관련

- `gem-beckmann-transport` — cascade · confident 앵커
- `gem-awesomejev-catalog` — [awesomejev.com](https://awesomejev.com/) 생태계 레이더
- `gem-lightning-weave` — recall·알람 Pareto
- `gem-opennews-ops-layer` — `impact_score` · `action`
- `gem-quant-ts-playbook` — 비용 임계값
