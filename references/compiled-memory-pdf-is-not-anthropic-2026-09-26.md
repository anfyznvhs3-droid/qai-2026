# 다섯 층 기억 PDF · Anthropic이 낸 문서가 아니다 (2026-09-26)

## 출처

- **트윗:** [Nozelcode](https://x.com/Nozelcode/status/2103519612155363825) · 2026-09-25 · 스페인어. 「Anthropic이 방금 13쪽 PDF를 냈다」
- **그림:** 첨부 1쪽. 제목 「Agent Memory Architecture」. 2026년 9월에 따로 엮었고 Anthropic과 무관하며 승인도 없다는 문장이 있다. 바닥에는 Anthropic이 찍혀 있다. 13쪽 전체는 받지 않음
- **Mem0:** [arXiv:2504.19413](https://arxiv.org/abs/2504.19413) · LOCOMO 표
- **Snowflake:** [The Agent Context Layer](https://www.snowflake.com/en/blog/agent-context-layer-trustworthy-data-agents/) · Josh Klahr 외 · 2026-03-19
- **Scout:** fxtwitter API + 그림 1쪽 + Mem0 HTML + Snowflake 글 (2026-09-26). 다섯 층 구현 **받지 않음**

Anthropic 효소 소식은 `gem-anthropic-art-discovery`다. 이 건은 그 회사가 이 PDF를 냈다는 말과, 90%를 다섯 층의 측정으로 받는 쪽이다.

## 트윗 vs 원문

| 트윗 | 원문 |
| --- | --- |
| Anthropic이 13쪽 PDF를 냈다 | 1쪽은 독립 편집본이고, 소속도 승인도 아니라고 적는다. 바닥의 Anthropic 글자와 그 문장이 어긋난다. CoALA, Mem0, Anthropic 기억 자료, Snowflake, LangChain을 엮었다고 한다 |
| 다섯 층이 토큰 비용을 90% 줄인다 | 90%는 Mem0 초록의 문장이다. 전체 대화를 넣는 방식보다 토큰 비용을 90% 넘게 아낀다. 다섯 층을 재서 나온 수가 아니다 |
| Mem0는 질의마다 26,000 대신 1,800토큰을 저장한다 | 표 2: 전체 맥락 26,031토큰, Mem0 1,764토큰. 반올림이다. 저장량은 대화당 평균 7k토큰이라고 따로 적는다. 1,764는 그 저장량이 아니다 |
| (정확도는 없음. 진짜로 학습하는 에이전트) | 같은 표의 심판 점수 J는 전체 맥락 72.90, Mem0 66.88. p95 지연은 17.117초에서 1.440초로, 초록의 91% 감소와 같다 |
| Snowflake가 온톨로지 층을 넣어 정확도 20%, 도구 호출 39% 감소 | 그 글의 내부 실험 한 문장과 같다. 평문 데이터 온톨로지(조인 키, 표의 입자, 농도)를 보탰다. 지연도 약 20% 줄었다고 같은 문장에 있다. 표본 수는 그 문장에 없다 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 이 PDF를 Anthropic 지침으로 에이전트에 넣기 | ❌ | 1쪽이 무관하다고 적는다 |
| Mem0·다섯 층 기억을 제출 모델이나 자리 안에 두기 | ❌ | 대화 기억이다. 제출은 GBDT와 로컬 보정. 자리 안에서 에이전트는 돌지 않는다 |
| 90%·20%·39%를 우리 점수나 토큰 절감으로 적기 | ❌ | LOCOMO와 Snowflake 내부 실험이다. 전체 대화를 넣은 쪽의 J가 더 높다 |
| Snowflake 문장으로 VEDA를 온톨로지 스키마로 쓰기 | ❌ | 그 실험의 온톨로지는 조인 키 평문이다. VEDA는 읽는 선반 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 에이전트 | 규칙을 이 PDF로 바꾸지 않음. Mem0를 설치하지 않음 |
| 경진 제출 | 1,764·26,031·72.90·66.88·20%·39%를 PDF에 인용하지 않음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-compiled-memory-pdf-is-not-anthropic` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Report — 엮은 문서를 발행처로 받지 않음 |

## 관련

- `gem-anthropic-art-discovery` · `gem-vqe-pool-ml-sentence-is-not-a-result`
