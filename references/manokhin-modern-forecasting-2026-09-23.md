# Manokhin · Mastering Modern Forecasting — GBDT·conformal for TS (2026-09-23)

## 출처

- **트리거 트윗:** [@KirkDBorne / 2102473594626273584](https://x.com/KirkDBorne/status/2102473594626273584) (2026-09-22) — 인용 3구절
- **원문:** [Why I'm Writing a New Book on Forecasting](https://valeman.medium.com/why-im-writing-a-new-book-on-forecasting-a80300e777ec) · Valeriy Manokhin (PhD·CQF) · 2026-04-06 · Medium
- **책:** *Mastering Modern Forecasting: Principles and Practice in Python* — 16장 · Gumroad **preorder** (유료·미출간)
- **Scout:** fxtwitter API + Medium 본문 (2026-09-23)

## 트윗 vs 원문

| Borne 인용 | Manokhin 원문 맥락 |
| --- | --- |
| 「통계가 ML보다 우월하다는 교육은 거짓」 | **M5** (Walmart, 계층 구조)에서 ML(GBDT) 승 · Prophet은 seasonal naive에도 밀림 |
| 「UQ = Gaussian PI는 거짓」 | **conformal prediction** 1장 — 분포 가정 없는 finite-sample coverage |
| 「M-competition이 논쟁을 끝냈다는 것도 거짓」 | 대회 설계(포함 방법·지표)가 통계 편향 — **의견**, 저자 입장 |

→ 트윗은 책 **홍보글** 인용. 데이터·표 없음 — 주장은 M5 결과에 기대고 있음.

## 요지

- Prophet·고전 ETS를 「항상 우월」로 가르친 관행 비판 · GBDT가 대규모 실전 예측을 지배
- Point forecast 부족 → **conformal**로 구간 예측
- 고전 방법은 「개선 대상 baseline」으로 반드시 이해

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 책 구매·16장 pull | ❌ | 미출간·유료 · 18일 일정 |
| 「GBDT > 통계」 **PDF 직접 인용** | ❌ | 홍보글 · 수치 없음 · 제조 과제와 도메인 다름 |
| **Naive/seasonal baseline 필수** 패턴 | ✅ pull↑ | Recipe B(시계열)·A 모두 — 「가이드북 모델 vs naive vs GBDT」 3열 표 · `gem-smelt-looped-budget`과 동일 budget 비교 |
| **Conformal** 구간 → 현장 알람 | △ pull↑ | `gem-typesafe-calibrated-decisions` 보정(ECE) 보완 — split-conformal은 GBDT 위 **로컬 수십 줄** · Recipe A 확률 보정 우선, B에서 구간 |
| Prophet·foundation TS 모델 | ❌ | 제출 Model = GBDT+로컬 · 외부 API ❌ |
| Borne 큐레이션 | ✅ | Scout 축 · 대형 인플루언서 — 원문 확인 필수 |

## K-AI — 우리 파이프 대응

| Manokhin | Q.AI |
| --- | --- |
| seasonal naive baseline | Ablation **A0 = naive/가이드북 모델** · A1 = GBDT (`kamp-fusion-ablation`) |
| GBDT for TS | `kamp-baseline-gbdt` — lag·rolling 피처 (`gem-quant-ts-playbook`) |
| conformal PI | 불량 확률 **Platt/isotonic** 먼저 · 연속 KPI(에너지·치수)면 **split conformal** 구간 |
| proper evaluation | group/time split · OOS · `kamp-leakage-audit` |
| production system | infer schema + act/review 임계 (`gem-typesafe-calibrated-decisions`) |

## 경계

- **홍보글** — 「establishment」 서술은 PDF ❌ · M5 인용 시 원 논문(Makridakis 2022) 직접
- `gem-quant-ts-playbook` (vol regime·OOS) · `gem-menaldo` (regime) · `gem-nonbiri` (SSM)와 같은 **Recipe B** 축 — 본 gem은 **baseline·UQ 원칙**만
- 제조 과제는 대부분 **분류·회귀** — 순수 forecasting 비중 작음 · 2종 lock 후 적용 여부

## pull 조건

| 시기 | 용도 |
| --- | --- |
| Sprint 1 (9/27~) | Ablation 표에 **naive baseline 열** 추가 — 즉시 |
| Recipe B 확정 시 | split conformal 구간 + coverage 표 → PDF §6 |
| PDF §4 | 「고전 baseline 대비 GBDT 개선」 1문장 (책·저자 인용 ❌ · 우리 수치만) |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-manokhin-modern-forecasting` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull↑ naive baseline · conformal) |
| 적용 축 | Model·PDF §4·§6 — 책 본문 ❌ |

## 관련

- `gem-quant-ts-playbook` · `gem-typesafe-calibrated-decisions` · `gem-smelt-looped-budget` · `gem-xgboost-math-zenn`
- `.cursor/skills/kamp-fusion-ablation` · `kamp-baseline-gbdt`
