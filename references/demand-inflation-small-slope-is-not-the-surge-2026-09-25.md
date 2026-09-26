# 수요 주도 물가 · 평소에 작은 요인으로 큰 이동을 설명하지 않는다 (2026-09-25)

## 출처

- **트리거 트윗:** [@int_mon_econ / 2103163930877050906](https://x.com/int_mon_econ/status/2103163930877050906) (2026-09-24)
- **요약:** [Brookings · Demand-driven inflation](https://www.brookings.edu/articles/demand-driven-inflation/) (2026-09-23). Domenico Giannone, Giorgio Primiceri. BPEA 2026년 가을
- **Scout:** fxtwitter API + 브루킹스 요약 (2026-09-25). 논문 PDF·SVAR **받지 않음**

## 트윗 vs 요약

| 트윗 | 브루킹스 요약 |
| --- | --- |
| 팬데믹 후 물가는 미국·유로 모두 예상보다 강한 수요 | 요약의 중심 결론과 같음. 2021년 상반기 미국이 먼저, 유로는 약 6개월 늦음 |
| 지연 수요, 확장 재정, 완화적 통화 | 세 힘의 서술이 같음. 공급 충격도 있었으나 통화가 위축을 상쇄했다고 함 |
| SVAR를 점점 풍부하게, AD-AS, DSGE, 설문·실시간. 수요곡선이 평평하면 공급 충격은 물가보다 실물을 움직이고, 큰 물가 상승은 수요곡선의 이동이 필요하다 | **이 요약 페이지에 없는 문단.** 트윗이 논문 문장으로 인용. PDF는 확인하지 않음 |
| Highly relevant | 큐레이터 말 |

같은 계정이 바로 앞에 올린 가스 논문 소개는 공급 충격이 팬데믹 후 물가의 주요 요인이라고 했다. 이 요약은 수요가 주라고 한다. 어느 쪽도 공정 표에 넣지 않는다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| SVAR·DSGE·물가 분해 | ❌ | 거시. 가격 조인은 `gem-gas-shock-aggregate-is-not-the-line` |
| 평소 거의 안 움직이는 센서·요인으로 큰 불량 이동을 설명 | ❌ | 그 요인의 평소 반응이 작으면, 관계 자체가 바뀌었다는 구간 증거가 있기 전에는 원인으로 쓰지 않음 |
| **패턴** — 큰 이동은 관계의 이동이 있을 때만 | ✅ 문장 | 스펙을 늘려 이야기가 남았다는 논문 절차는 가져오지 않음. 우리 열 추가는 `gem-memory-attention` |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 논문·거시 시계열 **pull ❌** |
| EDA | 요인 하나의 평소 기울기가 작으면, 그 요인만으로 급등을 적지 않음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-demand-inflation-small-slope-is-not-the-surge` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | EDA — 작은 기울기 ≠ 급등 |

## 관련

- `gem-gas-shock-aggregate-is-not-the-line` · `gem-emerson-intermediate-micro` · `gem-zeeman-catastrophe-theory`
