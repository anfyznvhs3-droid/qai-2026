# CTMC 변환 · 한쪽의 절약은 다른 쪽에서 뒤집힌다 (2026-09-26)

## 출처

- **트윗:** [TAL](https://x.com/TAL/status/2103388346391081006) · 2026-09-25 · arXiv 피드. 본문은 제목, 저자, 링크
- **그림 대체 텍스트:** 초록. 「ind」에서 끊긴다
- **논문:** Ruiyu Jia, Zhuo-Cheng Xiao. Activation-Flexible ANN-to-SNN Conversion with Finite-State Markov Neurons. [arXiv:2609.30102](https://arxiv.org/abs/2609.30102)
- **Scout:** fxtwitter API + arXiv HTML 초록·표 1 (2026-09-26). 변환 코드 **받지 않음**

시작 묶음에서 한 열을 빼 이득이 뒤집히는 쪽은 `gem-dft-init-partial-start-can-reverse`다. 안 본 홀드아웃이 움직여야 채택하는 쪽은 `gem-rrsi-harness-regularization`이다. 이 건은 같은 자르기가 데이터 하나에서는 비용을 줄이고 다른 데이터에서는 늘린다는 쪽이다.

## 트윗 vs 논문

| 트윗 | 논문 |
| --- | --- |
| 제목, Ruiyu Jia, Zhuo-Cheng Xiao, cs.NE | 초록 제목과 같다 |
| 대체 텍스트는 초록이고 끝에서 끊긴다 | 유한 상태 연속시간 마르코프 뉴런의 정상 스파이크 흐름으로, 콤팩트 구간의 연속·비음·단조 활성화를 근사한다고 한다. 대체 텍스트의 27%와 뒤집힘은 초록과 같다 |
| (본문에 27% 없음) | 초록: 적당한 자르기가 MNIST MLP의 비용-정확 교환을 낫게 하고, VGG-11/MNIST에서 정확도 간격 기준을 맞춘 채 SynOps를 27% 줄인다. VGG-11/CIFAR-10에서는 그 경향이 뒤집힌다 |
| | 표 1: VGG-11/MNIST는 간격 0.5%포인트 미만에서 ReLU 2.64G, ClipReLU₆ 1.93G. CIFAR-10은 간격 2%포인트 미만에서 ReLU 2.06G, ClipReLU q95 2.66G. 기준 숫자가 데이터마다 다르다 |
| | 관련 연구: SynOps는 난수, 전이 일정, 메모리, 통신을 빼므로 측정된 하드웨어 효율이라고 하지 않는다 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| ANN을 스파이크 망으로 바꿔 제출 | ❌ | 이미지 분류 변환이다. 제출은 GBDT와 로컬 보정 |
| 데이터 하나의 비용 감소를 두 데이터 쌍의 결과로 적기 | ❌ | 같은 자르기가 MNIST에서는 SynOps를 줄이고 CIFAR-10에서는 늘린다 |
| SynOps 감소를 현장 전력으로 적기 | ❌ | 논문이 하드웨어 효율이라고 하지 않는다 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 데이터 2종 | 비용이나 점수 변화는 두 데이터 모두 같은 표에 둔다. 부호가 뒤집히면 두 행을 남기고, 줄어든 쪽만 결과로 쓰지 않는다 |
| 경진 제출 | 27%·2.64·1.93·2.66을 PDF에 인용하지 않음 · 스파이크 변환 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-clip-synops-cut-reverses-on-the-second-set` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Data — 한쪽 절약을 쌍의 결과로 쓰지 않음 |

## 관련

- `gem-dft-init-partial-start-can-reverse` · `gem-rrsi-harness-regularization` · `gem-timeevo-flat-mean-hides-the-break`
