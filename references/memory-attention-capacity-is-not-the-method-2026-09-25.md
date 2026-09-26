# Memory Attention · 표가 커진 것은 방법의 이득이 아니다 (2026-09-25)

## 출처

- **트리거 트윗:** [@askalphaxiv / 2103429303115677747](https://x.com/askalphaxiv/status/2103429303115677747) (2026-09-25)
- **논문:** Jiale Kang. [arXiv:2609.28399](https://arxiv.org/abs/2609.28399) *Memory Attention*. alphaXiv 경유
- **Scout:** fxtwitter API + arXiv HTML 초록·서론 (2026-09-25). 구현 **받지 않음**

## 트윗 vs 논문

| 트윗 | 논문 |
| --- | --- |
| 토큰마다 값을 새로 계산하지 않고, 문맥 키를 재사용하고 그 토큰의 일반 표상을 더한다 | 식: \(\mathbf{V}=\mathbf{K}+\mathrm{Norm}(\mathbf{M})\). \(\mathbf{M}\)은 토큰 ID로 조회. 전용 value 투영을 뺀다 |
| 지식 일부가 싼 조회가 되고 CPU에 둘 수 있다. GPU 계산을 비례해서 늘리지 않고 용량을 더한다 | MA-Offload는 표를 CPU에 두고 GPU 파라미터 저장을 줄인다. 디코딩 오버헤드는 생긴다. 학습 토큰 수를 맞춘 채 **메모리 파라미터는 추가**되고, 언어모델 지표는 올랐다. 논문: 구조의 기여와 파라미터 증가를 **분리하지 못했다** |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| Memory Attention·CPU 오프로드 | ❌ | 언어모델 어텐션. 선형 어텐션 묶음과 같이 제조 제출의 본선이 아님 |
| 코드 전역표를 전체 기간으로 만들어 피처로 쓰기 | ❌ | 홀드아웃이 표에 섞이면 누수. 기간 안 집계는 `gem-kaggle-feature-engineering` |
| **패턴** — 용량 증가를 방법 이득으로 쓰지 않음 | ✅ Ablation | 열이 늘거나 모델이 커진 뒤의 점수 차는, 그 증가를 뺀 열과 같이 적음 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 논문 구조 **pull ❌** |
| Ablation | 「파라미터·열을 더해서 오른 것」과 「같은 용량에서의 차이」를 한 칸에 섞지 않음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-memory-attention-capacity-is-not-the-method` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Ablation — 용량과 방법 |

## 관련

- `gem-suzuki-deep-foundation-math` · `gem-kaggle-feature-engineering` · `gem-kata-linear-attention`
