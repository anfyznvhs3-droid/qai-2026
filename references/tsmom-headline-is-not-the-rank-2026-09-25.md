# Time series momentum · 1위 방법은 논문에 없다 (2026-09-25)

## 출처

- **트리거 트윗:** [@quantscience_ / 2103153258382422218](https://x.com/quantscience_/status/2103153258382422218) (2026-09-24). 스레드 예고만 있고 논문 링크는 없음
- **이미지 첫 쪽:** Tobias J. Moskowitz, Yao Hua Ooi, Lasse Heje Pedersen. *Time series momentum*. Journal of Financial Economics 104 (2012) 228–250. 접수 2010-08, 개정 2011-07, 게재 2011-08. doi:10.1016/j.jfineco.2011.11.003
- **Scout:** fxtwitter API + 트윗 이미지 (2026-09-25). 본문·매매 규칙 **전재 ❌**

## 트윗 vs 첫 쪽

| 트윗 | 첫 쪽 |
| --- | --- |
| 23쪽 논문 | 228–250쪽이면 23쪽. 쪽수는 맞음 |
| 헤지펀드가 시장을 이기는 1위 방법 | 초록에 없는 말. 논문은 58개 유동 선물에서 과거 12개월 초과수익이 다음 달 수익의 부호를 예측하고, 1–12개월은 지속, 더 긴 구간은 일부 반전이라고 함 |
| Time Series Momentum, “방법은 이렇다” | 제목은 맞음. 스레드의 구현은 대조하지 않음 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 12개월 부호 규칙을 제출 모델로 | ❌ | 금융 선물. 시계열 지평은 `gem-kronos`가 KPI 한 스텝. naive 열은 `gem-manokhin` |
| 「1위 방법」을 PDF에 | ❌ | 순위는 트윗의 헤드라인 |
| **패턴** — 짧은 지속을 긴 기울기로 고정하지 않음 | ✅ 문장 | 최근 구간에서 같은 방향이어도, 더 긴 구간이 반대면 그 긴 기울기를 다음 스텝의 방향으로 쓰지 않음 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 논문·포지션 규칙 **pull ❌** |
| Recipe B EDA | 짧은 창과 긴 창의 부호가 다르면 둘 다 적고, 긴 창만 남기지 않음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-tsmom-headline-is-not-the-rank` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | EDA — 짧은 지속 ≠ 긴 기울기 |

## 관련

- `gem-kronos-kline-foundation` · `gem-manokhin-modern-forecasting` · `gem-menaldo-nonlinear-ts-econometrics`
