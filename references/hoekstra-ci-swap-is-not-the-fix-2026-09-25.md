# 신뢰구간 · p값을 바꿔도 해석이 고쳐지지 않는다 (2026-09-25)

## 출처

- **트리거 트윗:** [@MishaTeplitskiy / 2103215583441625589](https://x.com/MishaTeplitskiy/status/2103215583441625589) (2026-09-24)
- **논문:** Rink Hoekstra, Richard D. Morey, Jeffrey N. Rouder, Eric-Jan Wagenmakers. *Robust misinterpretation of confidence intervals*. Brief Report, 2014-01-14. Volume 21, 1157–1164
- **Scout:** fxtwitter API + 트윗 스크린샷의 초록 (2026-09-25). PDF **받지 않음**

구간을 표에 적는 일은 `gem-nakazawa-r-statistics`가 담당한다. 이 건은 그 문장을 어떻게 읽는지다.

## 트윗 vs 초록

| 트윗 | 초록 |
| --- | --- |
| p값이 오해되니 신뢰구간으로 바꾸면 될까. 아마 아니다 | 신뢰구간은 NHST의 대안으로 제안돼 왔다. 심리학 연구자 120명과 학생 442명에게 구간 해석 문장 6개를 물었다. 6개 모두 거짓인데, 평균으로 3개보다 많이 맞다고 했다. 통계 경험과 점수는 무관하고, 연구자가 추론 교육을 받지 않은 학생보다 나을 것도 거의 없었다 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| p 대신 구간만 있으면 해석이 맞다 | ❌ | 초록의 결론은 구간도 틀리게 읽힌다는 것 |
| 「참값이 이 구간 안에 있을 확률이 95%」 | ❌ | 그 읽기는 이 문헌이 거짓으로 둔 종류. 여섯 문장의 목록은 스크린샷에 없어 여기서 복원하지 않음 |
| **패턴** — 구간은 적되, 확률 문장으로 바꾸지 않음 | ✅ §6 | 구간·n은 표에 둔다. 옆 문장은 그 구간이 참값의 확률이라고 쓰지 않음 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 설문·심리학 절차 **pull ❌** |
| PDF §6 | 부트스트랩·Wilson 구간은 유지. 캡션에 95% 확률이라고 쓰지 않음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-hoekstra-ci-swap-is-not-the-fix` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (패턴만) |
| 적용 축 | 검증 — 구간의 문장 |

## 관련

- `gem-nakazawa-r-statistics` · `gem-typesafe-satellite` · `gem-manokhin-modern-forecasting`
