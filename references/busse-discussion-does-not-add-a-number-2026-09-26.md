# Busse · 고찰은 결과 표에 없는 수를 더하지 않는다 (2026-09-26)

## 출처

- **트윗:** [im2muneeb](https://x.com/im2muneeb/status/2103492029313388613) · 2026-09-25 · 「동료심사 학술지에 논문을 쓰는 좋은 글」. 링크는 없고 스크린샷 네 장
- **논문:** Clara Busse, Ella August. How to Write and Publish a Research Paper for a Peer-Reviewed Journal. Journal of Cancer Education 36, 909–913 (2021). 온라인 2020-04-30. [DOI 10.1007/s13187-020-01751-z](https://doi.org/10.1007/s13187-020-01751-z) · [PMC8520870](https://pmc.ncbi.nlm.nih.gov/articles/PMC8520870/)
- **Scout:** fxtwitter API + 스크린샷 네 장 + PMC 본문 (2026-09-26)

초록 문장 역할은 `gem-nature-abstract-playbook`이다. 서론을 본문 뒤에 쓰는 순서는 `gem-faryadi-rough-first-reverses-write-last`다. 변경일을 원인으로 두지 않는 쪽은 `gem-critical-juncture-date-is-not-a-cause`다. 채택은 `gem-rrsi-harness-regularization`이다. 이 건은 고찰에 결과 표 밖의 수를 넣지 않는다는 쪽이다.

## 트윗 vs 논문

| 트윗 | 논문 |
| --- | --- |
| 좋은 글이 있다 | 평가다. 스크린샷은 이 논문의 910–912쪽과 첫 쪽이다. 제목·저자·DOI가 같다 |
| (함정 표는 트윗 본문에 없음) | 표 4: 고찰에서 자세한 결과를 반복하거나 새 결과를 내지 않는다. 구체적 수치는 고찰에서 반복하지 않는다. 본문은 주요 발견을 몇 문장으로 다시 말할 수 있다고 한다 |
| | 제목은 글을 끝낸 뒤에 쓴다. 초점이 고쳐지기 때문이다 |
| | 결과의 초점은 검정 이름이 아니라 연관과 그 방향이다. 유의하지 않은 연관도 발견이다. 「cause」「impact」는 설계가 받칠 때만 |
| | 방법은 원고에 나온 분석을 모두 적고, 그 선택을 정당화한다 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 고찰에 결과 표에 없는 수를 새로 넣기 | ❌ | 표 4 |
| 움직이지 않은 ablation을 결과에서 빼기 | ❌ | 유의하지 않은 연관도 발견이다. 그 칸으로 채택하지는 않는다. 채택은 `gem-rrsi` |
| 제목을 문제 한 줄만으로 먼저 확정하기 | ❌ | 제목은 본문을 끝낸 뒤다. 문제 한 줄의 칸은 `gem-faryadi` |
| 이 논문을 PDF에 인용하기 | ❌ | 암 교육 학술지 작성 안내이고, 제조 검증 결과가 아니다 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 보고서 | 수는 결과 표에만 새로 나온다. 고찰은 그 표를 해석한다. 방법 칸은 그 표의 분석을 빠짐없이 적는다 |
| 경진 제출 | Busse 2021을 PDF에 인용하지 않음 · 표 3의 3.4배는 예시일 뿐 우리 수가 아님 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-busse-discussion-does-not-add-a-number` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Report — 고찰은 표를 넘지 않음 |

## 관련

- `gem-nature-abstract-playbook` · `gem-faryadi-rough-first-reverses-write-last` · `gem-critical-juncture-date-is-not-a-cause` · `gem-rrsi-harness-regularization`
