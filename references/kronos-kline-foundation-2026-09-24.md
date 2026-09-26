# Kronos · 캔들 파운데이션 모델은 제조 시계열이 아님 (2026-09-24)

## 출처

- **트리거 트윗:** [@bkdgiffug / 2102226125091156099](https://x.com/bkdgiffug/status/2102226125091156099) (2026-09-22) — `gem-block-buzz-agent-workspace`와 같은 큐레이터
- **1차:** [github.com/shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) README · [arXiv:2508.02739](https://arxiv.org/abs/2508.02739) · AAAI 2026 accept는 README 2025-11-10 뉴스
- **데모:** [Kronos-demo](https://shiyu-coder.github.io/Kronos-demo/) BTC/USDT 24시간
- **Scout:** fxtwitter API + README + arXiv abstract·§1 (2026-09-24). 가중치·파인튜닝 **실행 ❌**

## 트윗 vs README·논문

| 트윗 | 1차 |
| --- | --- |
| 금융 시계열 · 여러 거래소 · 시세 예측 | 45개 거래소 · K선 **120억 건** · 입력은 OHLCVA 6칸 (시가·고가·저가·종가·거래량·금액) |
| 고잡음에 맞춘 설계 · 범용 LLM을 씌운 것이 아님 | 범용 TSFM이 금융에서 약하다는 것이 논문의 동기. 구현은 **토크나이저 + decoder-only Transformer** |
| Mini·Base 공개, Large는 미공개 | README: mini 4.1M · **small 24.7M** · base 102.3M 공개. large 499.2M **❌**. 트윗이 small을 빠뜨림 |
| BTC/USDT 데모 | README와 같음. 연구용이며 **투자 근거가 아니라는 문장은 트윗이 맞음** |
| — | 논문은 가격 RankIC, 변동성 MAE, 합성 K선, **중국 A주 롱온리 시뮬레이션**까지 주장. 그 숫자는 **금융 과제** 안에서의 저자 결과 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 가중치·Hugging Face·파인튜닝·`pred_len=120` 경로 | ❌ | 제출은 GBDT. 도메인이 거래소 캔들 |
| RankIC +93% · A주 수익을 PDF에 | ❌ | 우리 홀드아웃이 아님. 매매 시뮬레이션은 과제 밖 |
| BTC 데모를 「모델이 미래를 본다」로 | ❌ | 데모는 출력 그림. 채택 기준은 `gem-rrsi`의 안 본 분할 |
| **패턴** — 다른 도메인 사전학습은 근거가 아님 | ✅ | 논문 자신이 말함. 범용 TSFM 코퍼스에서 금융은 대부분 **1% 미만**이라 전문 모델에 진다. 캔들로 배운 가중치를 사출·진동에 쓰는 것은 그 논증을 거꾸로 적용하는 것 |
| Recipe B의 예측 길이 | ✅ 이미 있는 규칙의 확인 | KPI가 정한 **한 지평**. 120캔들 경로·온도 샘플(`T`, `top_p`)은 구간 추정(`gem-manokhin`)이 아님 |

`gem-suzuki`는 작은 표에서 얕은 모델. `gem-manokhin`은 naive 열. 본 건은 **사전학습 도메인이 다르면 가중치를 올리지 않는다**만 담당한다.

## 경계

- OHLCVA 6칸에 센서 열을 끼워 맞추지 않음
- 합성 K선 생성 **❌**
- `gem-quant-ts-playbook`의 트레이딩 금지와 같은 선. 여기 추가분은 **파운데이션 가중치**

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | **pull ❌** |
| 누군가 TSFM·Kronos를 제안하면 | 학습 도메인과 입력 칸을 한 줄로 적게 한 뒤 기각. Ablation의 비교 대상은 naive·가이드북·GBDT |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-kronos-kline-foundation` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌ · 도메인 불일치) |
| 적용 축 | Model — 거래소 사전학습 **❌** |

## 관련

- `gem-manokhin-modern-forecasting` · `gem-suzuki-deep-foundation-math` · `gem-quant-ts-playbook` · `gem-decade-review-ts-anomaly`
