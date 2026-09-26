# LogicTrack · 형식화는 다른 모델이다 (2026-09-26)

## 출처

- **트윗:** [vintcessun](https://x.com/vintcessun/status/2103679967230111750) · 2026-09-26 · 그림 3장
- **논문:** [arXiv:2609.21492](https://arxiv.org/abs/2609.21492) · Hu, Yang, Liu, Wang · v1 2026-09-18 · HTML은 `2609.21492v1`
- **Scout:** fxtwitter API + 논문 HTML (2026-09-26). 코드 **클론하지 않음**

검사는 모델 밖에 둔다. 이 건은 트윗의 솔버 검사가 논문에서 Z3 앞에 다른 모델을 둔다는 쪽이다.

## 트윗 vs 논문

| 트윗 | 논문 |
| --- | --- |
| 더 잘 설명하게 하는 것이 아니라, 매 단계를 논리 솔버가 검사하게 한다 | 결론은 각 단계를 맥락, 설명, 결론으로 나눈다고 적는다. 설명도 명세로 들어간다. 대조는 결과만 보는 피드백과 솔버 검사다 |
| 전제, 설명, 결론 | 첫 칸은 맥락이다. 문제의 전제와 앞에서 검증된 결론이 함께 들어간다 |
| 성립하지 않으면 되돌아가 다시 생성하고, 고친 궤적으로 미세조정할 수 있다 | 추론 때 되돌아간다. 미세조정은 확장이고, 되돌아간 궤적 약 6,000개에 `<backtrack>` 토큰을 넣는다 |
| 벤치마크 8개, 모델 7개. 단계 검증은 오르고, 답 정확도는 보통 유지되거나 개선 | 결론 문장과 같다. 지표 비교 168칸 중 133칸이 베이스보다 낫다. Qwen2.5-7B는 QASC에서 단계 없이 답만 내 검증 가중 정확도가 0%다 |
| 핵심은 자연어가 올바르게 형식화되는지와 솔버가 덮는 범위 | 그 문장은 결론에 없다. 자동 형식화와 충실도 판정은 gpt-4o-mini이고, 솔버는 Z3다. 솔버가 결정하지 못한 단계에는 부분 점수를 준다. 결론의 이후 작업은 자동 형식화 개선부터 적는다 |

벤치마크는 e-SNLI, FOLIO, LogiQA, ProntoQA, ProofWriter, QASC, SARA, SemEval-2026 Task 11이다. 모델은 GPT-4o-mini, GPT-5-nano, Gemini-2.5-Flash-Lite, Llama-3.1-8B-Instruct, Mistral-7B-Instruct-v0.3, Qwen2.5-7B-Instruct, Qwen2.5-14B-Instruct다. 본문 3.1절은 GPT-4o와 GPT-5라고만 적는다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| LogicTrack·Z3·gpt-4o-mini 형식화를 제출이나 자리에 두기 | ❌ | 외부 모델 API와 7B 미세조정이다. 제출은 GBDT |
| 단계가 없는 출력을 검증된 추론으로 세기 | ❌ | 그 칸의 검증 가중 정확도는 0%다 |
| 누수 검사를 모델 밖에 두기 | 이미 있음 | 검사 열을 지우지 않는다 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 에이전트 | 저장소를 받지 않음 · 형식화 API를 넣지 않음 |
| 경진 제출 | 133·168·0%와 모델 이름은 PDF에 인용하지 않음 · 코드 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-logictrack-formalizer-is-also-a-model` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Report — 솔버 검사를 솔버만의 검사로 적지 않음 |

## 관련

- `gem-harness-zero-keep-the-check` · `gem-layerx-qa-add-vs-drop` · `gem-shulman-proposition-is-not-witness`
