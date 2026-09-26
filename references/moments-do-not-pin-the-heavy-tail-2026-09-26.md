# 모멘트 · 이름은 새 열이 아니고, 꼬리가 두꺼우면 실루엣이 아니다 (2026-09-26)

## 출처

- **트윗:** [TDataScience](https://x.com/TDataScience/status/2103461015010627674) · 2026-09-25 · 기사 문장을 인용하고 [@polaris000_soc](https://x.com/polaris000_soc)를 태그
- **기사:** [Seizing the Moment: The Hidden Silhouette of Data](https://towardsdatascience.com/seizing-the-moment-the-hidden-silhouette-of-data/) · Aniruddha Karajgi · Towards Data Science · 2026-09-15
- **Scout:** fxtwitter API + 기사 HTML (2026-09-26). 코드·노트북 **받지 않음**

평균이 끊김을 가리는 쪽은 `gem-timeevo-flat-mean-hides-the-break`다. 이 건은 모멘트라는 이름이 새 지표가 아니고, 모든 차수가 같아도 분포가 하나가 아니라는 쪽이다.

## 트윗 vs 기사

| 트윗 | 기사 |
| --- | --- |
| 분포를 말할 도구가 있는데 모멘트가 무엇을 더하느냐가 이 글의 핵심이다 | 그 문장이 전제다. 빠진 꼬리는 「평균, 분산, 왜도, 첨도」다 |
| 저자가 그 가치를 풀어 설명한다 | 2절의 짧은 답은 모멘트가 경쟁 체계가 아니라는 것이다. 평균·분산·왜도·첨도는 이미 1·2·3·4차이고, 모멘트는 그 가족 이름이다 |
| 인용은 질문에서 멈춘다 | 4절은 모멘트가 너무 빨리 커지면 적률생성함수가 수렴하지 않고, 무한 차수가 분포를 하나로 고정하지 못한다고 적는다. 로그정규와 그 밀도에 사인 파동을 곱한 변형은 생김새가 달라도 원시 모멘트가 같다고 한다. 결론은 다시 1대1 대응을 보장하는 문장으로 돌아간다 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 모멘트 열을 평균·분산 옆에 새로 두기 | ❌ | 1·2차는 그 둘이다. 이름은 열을 늘리지 않는다 |
| 왜도·첨도나 모멘트 열을 분포의 실루엣으로 적기 | ❌ | 기사는 두꺼운 꼬리에서 그 고정이 깨진다고 적는다 |
| Adam·FID·적률법을 제출 경로에 넣기 | ❌ | 기사 5절의 응용 이름이다. 제출은 GBDT와 로컬 보정 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 에이전트 | 기사 코드와 Colab을 받지 않음 |
| 경진 제출 | 로그정규 예와 FID를 PDF에 인용하지 않음 · 코드 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-moments-do-not-pin-the-heavy-tail` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Report — 모멘트 이름을 새 열로 쓰지 않음 |

## 관련

- `gem-timeevo-flat-mean-hides-the-break` · `gem-manokhin-modern-forecasting`
