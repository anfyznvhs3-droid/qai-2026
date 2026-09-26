# Menaldo · Non-Linear TS in Financial Econometrics (2026-09-20)

## 출처

- **트리거 트윗:** [@PtrPomorski / status/2101342552482046153](https://x.com/PtrPomorski/status/2101342552482046153) (2026-09-19) — Piotr Pomorski (Quant · UCL PhD · deepvest_ai)
- **기사:** [Simone Menaldo · Non-Linear Time Series Models in Financial Econometrics](https://medium.com/@simomenaldo/non-linear-time-series-models-in-financial-econometrics-cf2bb368dd2f) (2026-07 · ~13 min)
- **Scout:** fxtwitter + Medium 본문 스니펫 (2026-09-20) · **코드·데이터 ❌**

## 요지

ARMA가 못 잡는 **volatility clustering · fat tail · regime shift** → 비선형 TS 툴킷 개관 (6절):

| 모델 | 핵심 | 금융 예 |
| --- | --- | --- |
| **Bilinear BL(p,q,m,k)** | \(X_{t-i}\epsilon_{t-j}\) 곱 — 간헐적 vol burst | 환율·금리 급변 |
| **NNAR** | lag → feedforward NN — universal approximator | vol forecast · HFT · **black box** |
| **FCAR / STAR** | AR 계수가 **state \(Z\)** 의 함수 — regime | bull/bear · **고/저 vol 체제** |
| **Nonparametric AR** | \(m(\cdot)\) 형태 미지정 | 탐색·옵션·VaR |
| **Kernel (N-W)** | bandwidth \(h\) — bias–variance | yield curve · density |
| **Additive** | \(\sum m_j(X_{t-j})\) — 차원의 저주 완화 | factor·신용 — **해석 가능** |

결론: **flexibility ↔ interpretability ↔ 계산** 트레이드오ff. FCAR·additive는 해석, NN은 black box.

참고문헌: Tsay (2005) · Fan & Yao (2003) · Granger bilinear · Hastie GAM.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| NNAR·GARCH·옵션·algo trading 구현 | ❌ | 금융 API·§3 · **제출=GBDT+보정** |
| Medium 전문 PDF 인용 | ❌ | 교육 개관 — Tsay 인용만 **선택** |
| **패턴** — regime·vol burst·해석 vs black box | ✅ | **레시피 B** PDF §2·§4 · active `gem-quant-ts-playbook` 보조 |

## K-AI — **레시피 B** (deferred pull↑)

| Menaldo | 제조 대응 | 축 |
| --- | --- | --- |
| FCAR/STAR **regime** | rolling σ·vol dummy · 공정 **체제 전환** (`gem-quant-ts-playbook` Bloch) | Model · PDF §2·§4 |
| Bilinear **burst** | 잔차 vol spike → **inspect** (`gem-opennews-ops-layer` action) | Model · PDF §7 |
| NNAR black box | **GBDT+SHAP** 대비 1문장 — `gem-trask-abc-attribution` (deferred §5) | PDF §5 |
| Kernel bandwidth \(h\) | FFT/rolling **윈도우** bias–variance — quant-ts | PDF §3 |
| Additive \(m_j\) | lag별 **부분 효과** — TreeSHAP·PD 은유 (구현=GBDT) | PDF §5 |
| Nonparametric explore | EDA 후 parametric — `gem-nonbiri-bayes-local-level` | Data · PDF §3 |

**투입 ❌:** STAR/NNAR/GARCH를 **메인 모델**로 — zeeman(cusp)과 **연속 FCAR** 혼동 주의.

## 경계

- **자산·PnL·파생·VaR** 서술 그대로 ❌
- `gem-quant-ts-playbook` — **active** FFT·비용·rolling σ / 본 gem — **비선형·regime 용어**
- `gem-zeeman-catastrophe-theory` — **급변(cusp)** / FCAR — **연속 regime**
- 과제 `data/raw/` **합성·대체 ❌**

## pull 조건

| 时机 | 用途 |
| --- | --- |
| 9/21 **시계열·PdM** → 레시피 B | PDF §2 「vol clustering·regime」 · §4 FCAR式 **체제 전환** 1절 |
| PDF §5 | 「NNAR black box vs GBDT 해석」+ trask Shapley **은유** |
| pull ❌ default | 분류-only 과제 · NNAR/GARCH exp |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-menaldo-nonlinear-ts-econometrics` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull↑ Recipe B · PDF §2·§4·§5) |
| 적용 축 | Model **서술·EDA** · PDF regime·해석 (알고리즘 이식 ❌) |

## 관련

- `gem-quant-ts-playbook` · `gem-nonbiri-bayes-local-level` · `gem-zeeman-catastrophe-theory` · `gem-trask-abc-attribution`
- `docs/reference-concepts.md` — `gem-menaldo-nonlinear-ts-econometrics`
