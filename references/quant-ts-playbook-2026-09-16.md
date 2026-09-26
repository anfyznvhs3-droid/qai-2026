# Quant Science → 제조 시계열·모델링 플레이북 (2026-09-16)

## 출처

- **트리거 트윗:** [@quantscience_ / status/2099891260790043069](https://x.com/quantscience_/status/2099891260790043069) — Quant Bible (51p, MIT Sloan, 확률·통계·마켓메이킹·퀀트 면접)
- **추가 트윗:** [@quantscience_ / 2100921557178540213](https://x.com/quantscience_/status/2100921557178540213) (2026-09-18) — **151 Trading Strategies** (Kakushadze & Serur, 361p SSRN)
- **추가 트윗:** [@quantscience_ / 2101282429927309488](https://x.com/quantscience_/status/2101282429927309488) (2026-09-19) — **A Practical Guide to Quantitative Volatility Trading** (Daniel Bloch, ~327p)
- **PDF:** [Quant Bible · Google Drive](https://drive.google.com/file/d/1LO7D0C9FC-KHViThmTXfUTLyr6Wke5-f/view) (후속 트윗 `2099891270059462909`)
- **PDF:** [151 Trading Strategies · SSRN 3247865](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3247865) — Zura Kakushadze · Juan Andrés Serur (2018, 무료)
- **PDF:** [Volatility Trading · SSRN 2715517](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2715517) — Daniel Bloch · Quant Finance Ltd (2016, 무료)
- **Scout:** Quant Bible `doc-dab3ab99` · 151 SSRN 메타 · Bloch 표지·SSRN (2026-09-19) · **Bloch·151 본문 미독**

## 원본이 하는 일 (채택 범위)

| 구분 | 내용 | MIX |
| --- | --- | --- |
| Quant Bible | 확률·통계·마켓메이킹·퀀트 면접 | **임계값·비용·확률** 사고만 |
| **151 Trading Strategies** | 150+ 전략·550+ 식·**OOS backtest** 예제 코드 | **홀드아웃·리스크 관리 용어**만 — **151 전략 구현 ❌** |
| **Volatility Trading** (Bloch) | realized vol · regime · options/VRP · vol surface | **rolling σ·변동성 레짐** 피처·임계 — **옵션·VRP·Jane Street ❌** |
| @quantscience_ 생태계 | FFT denoise, anomaly, ML 5단계 | **주파수·이상·검증 루프** |
| 알고 트레이딩 | PnL·백테스트·금융 API | **채택 ❌** |

## 제조 대응 (`AGENT.MD` §4.1 · §4.3)

| 퀀트 패턴 | 제조 대응 | 축 |
| --- | --- | --- |
| 마켓메이킹 / 스프레드 | **오탐 vs 미탐 비용** 가중 임계값 | Model · PDF |
| FFT top-k dominant freq | 진동·음향 **주파수 특징** + denoise | Model |
| anomaly / anomalize | **비지도 이상** → inspect·hold | Model |
| ML 5단계 + “백테스트” | **시간·LOT 홀드아웃** + 그룹 CV | Model |
| 151 book OOS backtest | **out-of-sample**·walk-forward **서술** (코드 이식 ❌) | PDF §4 · Model |
| **realized vol / rolling σ** | 잔차·센서 **변동성 레짐** · vol spike → inspect (`gem-nonbiri-bayes-local-level` drift와 짝) | Model · PDF §3 |
| vol regime shift | 공정 **체제 전환** 탐지 (zeeman fold **보조**) | PDF §2 · §4 |
| 확률·통계 (Bible) | EDA·분포·신뢰구간 (면접문 ❌) | Model |

## MIX 투입 — 실험 3종 (9/21 이후)

1. **주파수** — FFT top-k + band power → CatBoost/LGBM 베이스라인 (음향·진동 과제)
2. **비용 임계값** — `AGENT.MD` §4.1 손실표 → PR-AUC / recall@알람률 / cost-weighted F1
3. **이상 베이스라인** — rolling z / isolation forest on residual → PDF 대표 케이스 5건
4. **(optional) 변동성** — rolling std / realized vol on residual · vol 레짐 dummy (Bloch **개념만**)

## VEDA 보조 (store-only, 합성 ❌)

- `ref-veda-shalizi-ada` — 통계·EDA (Bible보다 우선)
- `ref-veda-nist-eda` — 모델 전 탐색
- `ref-veda-fourier-pde` · `ref-veda-signals-systems` — 주파수·시그널

## 경계

- 주가·PnL·외부 금융 API → **제출·학습 투입 ❌** (§3)
- Quant Bible **면접·마켓메이킹** PDF 서술 그대로 ❌
- **151 Trading Strategies** — pairs trading·stat arb·암호화폐 등 **전략 카탈로그 투입 ❌** · 트윗 「hedge fund algorithms」= **마케팅**
- **Volatility Trading (Bloch)** — options·VRP·vol surface·Jane Street/AQR **전략·서술 ❌** · 트윗 「Retail locked out」= **마케팅**
- 과제 `data/raw/`와 **합성·대체 금지**

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-quant-ts-playbook` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **active** |
| 적용 축 | **Model** (시계열·임계값·이상) + **PDF** (trade-off·케이스) |

## 관련

- `docs/reference-concepts.md` — `gem-quant-ts-playbook`
- `gem-menaldo-nonlinear-ts-econometrics` — FCAR/STAR regime·vol burst (**deferred** · Recipe B)
- `gem-nonbiri-bayes-local-level` — SSM·드리프트 (**deferred** · Recipe B)
- `reports/leakage-audit-checklist.md` — 시간·LOT 분할
- `references/veda-index.md` — `ref-veda-shalizi-ada` 등
