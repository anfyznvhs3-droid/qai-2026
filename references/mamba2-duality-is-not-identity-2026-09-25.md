# Mamba-2 · 대응은 같은 모델이 아니다 (2026-09-25)

## 출처

- **트리거 트윗:** [@hooshaaii / 2103086981638922372](https://x.com/hooshaaii/status/2103086981638922372) (2026-09-24)
- **논문:** Tri Dao, Albert Gu. [arXiv:2405.21060](https://arxiv.org/abs/2405.21060) *Transformers are SSMs: Generalized Models and Efficient Algorithms Through Structured State Space Duality* (Mamba-2). 2024-05
- **Scout:** fxtwitter API + arXiv HTML 초록·서론 (2026-09-25). 구현 **받지 않음**

## 트윗 vs 논문

| 트윗 | 논문 |
| --- | --- |
| Mamba와 Transformer는 속에서 완전히 같다 | 초록: 두 계열은 **꽤 가깝다**. 구조적 semiseparable 행렬의 분해로 SSM과 **일부** 어텐션을 잇는다. 각주: 제목은 “Transformers are RNNs”에 대한 경의이고, 연결은 **특정 형태의 어텐션**만 |
| Mamba-2가 그 간극을 잇는다 | SSD로 Mamba의 selective SSM을 다듬은 Mamba-2. 핵심 층이 2–8배 빠르고, 언어모델에서 Transformer와 경쟁한다고 함 |
| Sep 24 | 트윗을 올린 날. 논문은 2024년 5월 |

통계의 상태공간모형(`gem-nonbiri`)과 이 논문의 selective SSM은 이름이 같을 뿐 다른 대상이다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| Mamba-2·SSD를 제출 모델로 | ❌ | 본선은 GBDT. 선형 어텐션 묶음과 같이 시계열 실험 가지가 아님 |
| 「같은 수학이니 바꿔도 된다」 | ❌ | 대응은 교체 허가가 아님 |
| **패턴** — 계열이 가깝다는 문장을 동일 모델로 쓰지 않음 | ✅ PDF | 가이드북·naive·GBDT는 각 열. 다른 아키텍처 점수를 우리 열에 붙이지 않음 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 논문·커널 **pull ❌** |
| PDF | “가깝다”를 “같다”로 옮기지 않음. 2–8배·언어모델 승률은 인용하지 않음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-mamba2-duality-is-not-identity` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | 모델 — 대응 ≠ 교체 |

## 관련

- `gem-nonbiri-bayes-local-level` · `gem-kata-linear-attention` · `gem-suzuki-deep-foundation-math`
