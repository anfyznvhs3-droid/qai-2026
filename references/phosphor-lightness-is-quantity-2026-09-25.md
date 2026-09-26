# Phosphor · 연속 수치의 크고 작음은 밝기 (2026-09-25)

## 출처

- **트리거 트윗:** [@jscarto / 2103191335662477610](https://x.com/jscarto/status/2103191335662477610) (2026-09-24) — 제작자 Joshua Stevens
- **도구:** [Phosphor](https://www.joshuastevens.net/phosphor/) · [소개](https://www.joshuastevens.net/blog/introducing-phosphor/) (2026-09-23)
- **Scout:** fxtwitter API + 두 페이지 (2026-09-25). 대회 데이터 **업로드 ❌**

## 트윗 vs 페이지

| 트윗 | 페이지 |
| --- | --- |
| 기본은 Oklab | 소개: 기본 보간은 Oklab. 고른 색 사이의 **밝기(L)가 일정한 속도**로 변하게 맞춤 |
| CIE LAB, HSV, RGB 등도 지원 | ArcGIS용 파일은 **CIELAB** 구간으로 밝기를 선형으로 둔다고 도구 페이지가 적음. HSV·RGB는 **트윗에만** 있고 소개 글의 목록에는 없음 |
| 데이터 시각화가 쉬워진다 | 내보내기: hex, CSS, Matplotlib, ArcGIS Pro, QGIS, GDAL. 색각 시뮬(프로탄·듀탄·트라이탄·전색맹) |

소개의 핵심: 빨강이 보라나 초록보다 본질적으로 크거나 작지 않다. 양에는 밝기의 적고 많음이 맞다. 밝기가 밝았다 어두웠다 하면 그 굴곡이 데이터 차이를 가리거나 과장한다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| Phosphor 사이트에 표·그림을 올리기 | ❌ | 외부 서비스. 그림은 저장소에서 matplotlib |
| 무지개·HSV로 불량률·잔차를 칠하기 | ❌ | 색상은 양이 아님. 밝기가 한 방향으로만 가는 순차 램프 |
| **패턴** — 연속 그림은 밝기 = 수치 | ✅ PDF Fig | 두 클래스는 밝기가 비슷한 빨강·초록 쌍을 쓰지 않음. 색 목록은 한 번 정해 코드에 고정 |
| Datawrapper | 이미 있음 | `gem-datawrapper-viz`는 차트 SaaS. 본 건은 **순차 색의 밝기**만 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 웹 도구 **pull ❌** |
| PDF 그림 | 연속 수치는 한 방향 밝기. 범주 색은 밝기가 겹치지 않게. 범례에 단위 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-phosphor-lightness-is-quantity` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (패턴만 · 업로드 ❌) |
| 적용 축 | 보고서 — 색 램프 |

## 관련

- `gem-datawrapper-viz` · `gem-vivid-figures`
