# 평가 FAQ · 중간 산출물 다음에 어긋남을 본다 (2026-09-26)

## 출처

- **트윗:** [HamelHusain](https://x.com/HamelHusain/status/2103529976624492564) · 2026-09-25
- **글:** [AI outputs easier to evaluate](https://hamel.dev/blog/posts/evals-faq/what-if-human-reviewers-approve-ai-outputs-without-checking-them-carefully.html) · Hamel Husain, Shreya Shankar · 2026-09-17 게시·수정
- **그림:** 그 글의 윗부분. 주소의 질문은 검토자가 보지 않고 승인하면 어떻게 하느냐이고, 보이는 제목은 산출물을 평가하기 쉽게 만드는 법이다
- **Scout:** fxtwitter API + 글 HTML + 그림 (2026-09-26). 강의·목업 **받지 않음**

검사를 모델 밖에 두는 쪽은 `gem-harness-zero-keep-the-check`다. 채택은 `gem-rrsi-harness-regularization`이다. 이 건은 중간 산출물을 보여 주는 문장 다음에, 같은 예를 둘이 보고 어긋남을 적는다는 쪽이다.

## 트윗 vs 글

| 트윗 | 글 |
| --- | --- |
| 제품 설계에서 시작하고, 사람이 고리에 남도록 중간 산출물을 밟는 흐름을 만든다 | 제품 설계를 먼저 살피고, 최종 결과 전에 중간 산출물을 올려 사용자가 보게 한다. 「사람이 고리에 남는다」는 트윗의 말투다. 글은 최종 초안 전에 추출한 사실과 충돌을 고치게 해서 검토자가 일을 따라가게 한다고 적는다 |
| 답은 그 문장에서 멈춘다 | 그 다음이다. 검토 화면의 마찰을 줄인다. 익숙한 형식, 한 화면의 맥락, 단축키, 진행 표시. 그 다음 검토 과정을 디버그한다. 예시를 줄여 하나씩 보게 하고, 같은 예시를 독립적으로 본 뒤 어긋남을 이야기한다. 어긋남은 지시가 흐리거나 정보가 빠진 자리다 |
| 의학 보고서 예는 트윗에 없다 | 글의 예는 의학 보고서 목업이다. 측정 결과가 아니다 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 이 FAQ나 검토 화면을 경진 폴더에 넣기 | ❌ | 평가 제품 안내다. 제출은 GBDT와 로컬 보정 |
| 「사람이 본다」를 최종 문장에 도장 찍는 것으로 적기 | ❌ | 글은 최종 초안 전에 중간 산출물을 보고, 같은 예를 둘이 봐서 어긋남을 남긴다 |
| 의학 목업을 우리 사례로 쓰기 | ❌ | 설명용 스케치다 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 에이전트 | 강의와 목업을 받지 않음. 검토 앱을 만들지 않음 |
| 경진 제출 | 45/100 같은 진행 예시를 PDF에 인용하지 않음 · 코드 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-review-starts-before-the-final-draft` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Report — 결론 전에 중간 표를 보고, 같은 행의 어긋남을 남김 |

## 관련

- `gem-harness-zero-keep-the-check` · `gem-rrsi-harness-regularization` · `gem-layerx-qa-add-vs-drop`
