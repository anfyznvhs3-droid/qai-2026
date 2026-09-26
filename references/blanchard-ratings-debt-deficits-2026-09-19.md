# IMF · Blanchard · Ratings vs 단순 모델 → subgroup·임계값 (2026-09-19)

## 출처

- **트리거:** [@int_mon_econ / 2101045912885731654](https://x.com/int_mon_econ/status/2101045912885731654) (2026-09-18) — International and Monetary Economics Network
- **논문:** *Ratings, Debt, and Deficits: An Exploration* — Olivier Blanchard, Daniel Leigh, Prachi Mishra
- **IMF WP:** [WP/26/195](https://www.imf.org/en/publications/wp/issues/2026/09/18/ratings-debt-and-deficits-an-exploration-579729) (2026-09-18)
- **세미나 abstract:** [IGIER · Blanchard](https://igier.unibocconi.eu/events/seminar-series/olivier-blanchard-ratings-debt-and-deficits-exploration)
- **Scout:** 트윗 본문·표지·IGIER abstract (2026-09-19) · **IMF PDF 본문 미독**

## 요지

**국채 신용등급**을 부채·1차 재정수지(forecast primary balance)의 **단순 모델**과 비교. 실제 등급은 모델과 **세 가지**로 어긋남:

| # | 등급 agency vs 단순 모델 | 해석 |
| --- | --- | --- |
| 1 | **부채(stock)**에 훨씬 큰 가중 | **흐름(flow·개선 전망)**보다 누적 수준을 과시 |
| 2 | **(금리 − 성장률)** 효과 **과소** | r−g · 지속가능성 핵심인데 등급에 약하게 반영 |
| 3 | **국가 고정효과(country effects)** 매우 큼 | 동일 부채·수지여도 **국가마다 등급·부채 한도가 극단적으로 다름** |

→ 등급은 「공식」보다 **판단·이질성·누적 vs 흐름 불균형**에 가깝다.

## MIX 잠재 — **제조 해석(은유)만**

| IMF 개념 | K-AI 대응 | 축 |
| --- | --- | --- |
| 부채 (stock) | **누적 불량·과거 알람·설비 이력** | PDF §6 |
| Primary balance (flow) | **현재 공정 보정·최근 LOT 품질·잔차 추세** | Model · PDF |
| r − g | **오탐 비용 vs 미탐 손실** (`gem-quant-ts-playbook` §4.1) | Model |
| Country effects | **LOT·설비·라인별** 성능·**τ_auto/τ_review** (`gem-typesafe-calibrated-decisions`) | Model · PDF §6 |
| 단순 모델 vs agency | **전역 임계값** vs **보정+subgroup 표** (`gem-weightwatcher-memorization`) | PDF §6·§8 |

**투입 ❌:** 국채 등급 데이터 · 거시재정 모델 · IMF 지표를 **학습 피처**로

**우리 구현:** 가이드북 **LOT 분할** + **설비별 metric 표** + **보정 곡선** — IMF는 **「왜 전역 규칙만으로는 부족한가」** PDF 1문단 근거.

## 경계

- **거시경제 논문** — 트윗·India rating 논쟁 **직접 인용 ❌**
- `gem-nakazawa-r-statistics` — **검定·CI** / 본 gem — **subgroup·stock/flow** 서술
- `gem-zeeman-catastrophe` — **급변·히스테리시스** / 본 gem — **이질성·가중 불균형**
- KAMP **제조AI** ≠ sovereign rating

## pull 조건

| 时机 | 用途 |
| --- | --- |
| 9/21 후 PDF §6 | 「동일 불량률인데 **설비·LOT마다** 조치가 달라야 함」 — country effect 은유 |
| PDF §8 | stock(누적) vs flow(현재 확률) **병기** · r−g = cost-weighted threshold |
| pull ❌ default | IMF WP 수치·국가 표 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-blanchard-ratings-debt-deficits` |
| 유형 | `playbook` |
| 상태 | **deferred** · **pull↑ PDF §6·§8** |
| 적용 축 | Model(subgroup·보정) · PDF 오류·한계 서술 |

## 관련

- `gem-quant-ts-playbook` · `gem-typesafe-calibrated-decisions` · `gem-weightwatcher-memorization` · `gem-lightning-weave`
- [`AGENT.MD`](../AGENT.MD) §4.1·§4.2 · [`docs/mix-application-plan.md`](../docs/mix-application-plan.md) §6
