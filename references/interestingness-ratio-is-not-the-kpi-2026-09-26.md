# 흥미도 · 증명 길이의 비는 현장 점수가 아니다 (2026-09-26)

## 출처

- **트윗:** [niketnpatel](https://x.com/niketnpatel/status/2103489001030037798) · 2026-09-25 · 1/5. 2/5–5/5는 이 조회에 없었다
- **그림:** 논문 초록 카드. 날짜 2026-09-24
- **논문:** Niket Patel, Ahmad Rammal, Amaury Hayat, Remi Munos, Julia Kempe. Learning to Discover Interesting Mathematics. [arXiv:2609.28603](https://arxiv.org/abs/2609.28603). FAIR Meta, NYU, CERMICS
- **Scout:** fxtwitter API + 그림 + arXiv HTML (2026-09-26). 27B 학습 **받지 않음**

이미 풀린 문제를 양자 장치로 다시 푼 시연은 `gem-quantum-olympiad-reproof-is-a-demo`다. 문제 한 줄을 사람이 고르는 쪽은 `gem-garicano-frequent-problem-stays-with-the-firm`이다. 이 건은 증명 길이를 문장 길이로 나눈 값을 현장 점수로 받지 않는다는 쪽이다.

## 트윗 vs 논문

| 트윗 | 논문 |
| --- | --- |
| 「사실의 쌓임은 돌무더기가 집이 아닌 것과 같이 과학이 아니다」는 푸앵카레 | §1은 1905년 『과학과 가설』 번역을 두 문장으로 인용한다. 과학은 사실로 지어지고, 사실의 모음은 돌무더기가 집이 아닌 것과 같다는 쪽이다. 트윗은 앞 문장을 빼고 accumulation으로 줄였다 |
| LLM이 수십 년 막힌 결과를 지금 증명한다 | 초록의 전제다. 풀린 지 수십 년인 문제를 포함해 고급 문제를 풀어 왔고, 그 지식이 흥미로운지는 열려 있다고 한다. 이 논문의 실험 결과가 아니다 |
| 사람 안내 없이 흥미로운 정리를 찾게 가르쳤다 | 내재 흥미도는 증명 길이를 문장 길이로 나눈 값이다. 사람이 그 비를 정의한다. 초록의 「사람 목표에 기대지 않는다」는 문장 선택에 대한 말이고, 지표 정의까지 포함하지 않는다 |
| 흥미도 4.3배 | 영역 전체 평균이 베이스 1.76에서 학습 모델 7.58로 오른다. 7.58/1.76은 4.3이다. 기여 문장은 이를 네 배라고 줄인다. 영역별로는 조합 2.10배에서 정수론 8.72배다. 모델·영역당 증명된 문장 20개, 영역 8개 |
| 스스로 늘어나는 발견 루프 | §3.4의 추론 때 가지치기다. 표 1의 흥미도 평균은 가지치지 않음 1.313, 흥미도 가지치기 3.899다. 4.3배와 다른 비교다 |
| (mathlib 겹침은 트윗에 없음) | 실질적으로 또는 완전히 mathlib에 들어 있는 비율이 91.9%에서 30.6%로 준다. 판정은 Claude Opus 4.6 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 증명 길이 비를 일요일 KPI로 쓰기 | ❌ | Lean 정리의 길이다. 현장 손실이 아니다 |
| 발견 루프가 아이디어 10칸이나 문제 한 줄을 고르게 하기 | ❌ | 그 루프는 형식 수학 라이브러리다. 문제 한 줄은 사람이 잠근다 |
| 27B를 제출 모델로 학습 | ❌ | Qwen 미세조정과 GRPO다. 제출은 GBDT와 로컬 보정 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 주제 잠금 | KPI는 현장 손실이다. 이 비로 문장을 고르지 않음 |
| 경진 제출 | 4.3·1.76·7.58·91.9·30.6을 PDF에 인용하지 않음 · 모델 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-interestingness-ratio-is-not-the-kpi` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Report — 길이 비는 KPI가 아님 |

## 관련

- `gem-quantum-olympiad-reproof-is-a-demo` · `gem-garicano-frequent-problem-stays-with-the-firm` · `gem-faryadi-rough-first-reverses-write-last`
