# Hindsight reflect · 추론 루프도 먼저 검색한다 (2026-09-26)

## 출처

- **트윗:** [nicoloboschi](https://x.com/nicoloboschi/status/2103400112244281425) · 2026-09-25 · 작성자는 Vectorize Hindsight 쪽이다
- **그림:** 12초 영상의 표지. Hindsight 구조도에서 `reflect()`가 에이전트 루프로 칠해져 있다. 옆의 `recall()`은 의미·키워드·그래프·시간 검색이다
- **문서:** [Reflect](https://hindsight.vectorize.io/developer/reflect) · [API](https://hindsight.vectorize.io/developer/api/reflect)
- **저장소:** [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) · MIT · 2026-09-26 조회 29802★ · push 2026-09-25
- **Scout:** fxtwitter API + 표지 + 문서 + reflect 에이전트 소스 (2026-09-26). 설치 **받지 않음**

다섯 층 기억 PDF와 Mem0는 `gem-compiled-memory-pdf-is-not-anthropic`이다. 이 건은 `reflect()`가 검색 대신 추론한다는 문장이다.

## 트윗 vs 문서·소스

| 트윗 | 문서·소스 |
| --- | --- |
| 대부분 에이전트 메모리는 검색만 하고, Hindsight는 아는 것 위에서 추론한다 | 그 비교의 표본은 없다. 같은 제품의 `recall()`이 원사실을 돌려주고, `reflect()`는 LLM이 쓴 합성 답을 돌려준다 |
| 이것이 `reflect()` 루프다 | 구조도의 `reflect()`는 에이전트 루프다. 문서는 멘탈 모델, 관찰, 원사실 순으로 증거를 모으고, 뱅크의 disposition으로 말투를 맞춘 뒤 출처를 붙인다고 한다 |
| 검색이 아니라 추론 | 조회한 소스는 켜진 도구에 대해 `search_mental_models`, `search_observations`, `recall` 순으로 호출을 강제하고, 그 다음부터 모델이 고른다. 새 멘탈 모델이 있으면 그 강제를 앞당길 수 있다. 기본 반복 상한은 10이다 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| Hindsight를 설치하거나 `reflect()`를 제출 경로에 두기 | ❌ | 외부 LLM 루프다. 제출은 GBDT와 로컬 보정 |
| `reflect()`를 검색 없는 추론으로 적기 | ❌ | 루프는 검색을 먼저 강제한다. 답은 LLM이 쓴다 |
| VEDA를 이 메모리 뱅크로 쓰기 | ❌ | VEDA는 읽는 선반이다. 스키마로 바꾸는 금지는 `gem-compiled-memory-pdf-is-not-anthropic` |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 에이전트 | 서버·MCP·워커를 띄우지 않음 |
| 경진 제출 | 이 구조도를 PDF에 넣지 않음 · 코드 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-hindsight-reflect-still-retrieves` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Report — 합성 답을 검색 없는 추론으로 쓰지 않음 |

## 관련

- `gem-compiled-memory-pdf-is-not-anthropic` · `gem-memory-attention-capacity-is-not-the-method`
