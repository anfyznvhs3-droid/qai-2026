# DFT 초기화 · 일부만 넣은 시작은 반복을 늘릴 수 있다 (2026-09-25)

## 출처

- **트리거 트윗:** [@yoko_materialDX / 2103439379184443728](https://x.com/yoko_materialDX/status/2103439379184443728) (2026-09-25)
- **논문:** Felix Ærtebjerg, Jonas Elsborg, Arghya Bhowmik. [arXiv:2609.21759](https://arxiv.org/abs/2609.21759) *Complete Neural Electronic Initialization Accelerates Materials DFT*
- **Scout:** fxtwitter API + arXiv 초록·서론 (2026-09-25). AugNet·PAW **받지 않음**

## 트윗 vs 초록

| 트윗 | 초록 |
| --- | --- |
| 초기 전자 밀도와 PAW 원자 보정 계수를 예측 | 매끄러운 원자가 밀도, PAW augmentation occupancy, **스핀 초기화**까지. 트윗은 스핀을 빠뜨림 |
| 기존 제일원리 대비 비용 25% 단축 | 완벽한 초기화면 벽시계를 40–52% 줄일 수 있고, 이 방법은 그 절약의 최대 62%를 회수해 **최대 약 25%**. 못 본 구조, 수렴 에너지는 유지 |
| 적절한 초기 위치에서 최적화 | 논문은 원자 좌표가 아니라 **전자 상태의 시작값**. 밀도만 넣고 occupancy·스핀을 빼면 가속이 없어지거나 **역전** |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| DFT·AugNet을 제출 모델로 | ❌ | 재료 전자구조. 본선은 GBDT |
| 가이드북 예측을 시작값으로 쓰고 그 값을 답으로 | ❌ | 초기 추정은 수렴값이 아님. 점수는 홀드아웃의 적합 결과 |
| **패턴** — 시작 묶음에서 한 열을 빼면 이득이 뒤집힐 수 있음 | ✅ Ablation | naive·가이드북·GBDT를 같이 둠. 하나를 뺀 채 「빨라졌다」고 적지 않음. 열을 빼는 결정은 `gem-layerx` |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 논문 모델·25% **pull ❌** |
| Ablation | 시작 설정을 일부만 남긴 열을 두고, 그 열이 나빠지면 그대로 적음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-dft-init-partial-start-can-reverse` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Ablation — 부분 시작 |

## 관련

- `gem-manokhin-modern-forecasting` · `gem-layerx-qa-add-vs-drop` · `gem-memory-attention-capacity-is-not-the-method`
