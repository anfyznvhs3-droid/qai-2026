# 가스 가격 · 집계가 짧아도 라인이 짧지 않다 (2026-09-25)

## 출처

- **트리거 트윗:** [@int_mon_econ / 2103106819539316942](https://x.com/int_mon_econ/status/2103106819539316942) (2026-09-24)
- **저자 페이지:** [Colombo · Gas Prices and the Macroeconomy](https://colombodaniele.github.io/paper/ColomboToni2025) — Francesco Toni와, 2024 working paper. 트윗이 인용한 문단과 같음
- **다른 제목:** SSRN [5237587](https://doi.org/10.2139/ssrn.5237587) · GREDEG WP 2025-20. 제목은 *Understanding Gas Price Shocks*. SSRN HTML은 시간 초과
- **Scout:** fxtwitter API + 저자 페이지 검색 스니펫 + RePEc 초록 (2026-09-25). 식별 절차 **받지 않음**

## 트윗 vs 원문

| 트윗 | 원문 |
| --- | --- |
| 제목 Gas Prices and the Macroeconomy. 인용문이 수요가 공급보다 비탄력, 유로 물가, 팬데믹 후 물가의 주요 요인, 미국은 약함, 실질 효과는 짧고, 독일 업황은 크게 하락 | 저자 페이지의 2024 소개와 **같은 문단** |
| Highly relevant | 큐레이터 말. 논문에 없음 |
| | WP 2025-20 초록은 다름. 유로 수요가 **미국보다** 천천히 조정되고, 실질 효과는 제한적이며 부문 이질은 있다. 수요 대 공급 탄력성·독일·팬데믹 후 물가의 주된 요인은 이 초록에 없음 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 가스 가격·기온·거시 충격을 피처로 조인 | ❌ | KAMP 2종 밖. 단가 KPI는 `gem-emerson` |
| 집계 반응이 짧으니 모든 설비가 짧다 | ❌ | 소개 자신이 부문마다 다르다고 함. 설비 더미 자체는 `gem-blanchard` |
| **패턴** — 평균 경로를 라인 경로로 쓰지 않음 | ✅ PDF | 전체 평균이 빨리 사라져도, 라인·공정 열을 그 평균 하나로 대체하지 않음 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 논문·도구변수 **pull ❌** |
| PDF | 평균 시계열과 설비별 시계열을 한 문장에 섞지 않음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-gas-shock-aggregate-is-not-the-line` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | EDA — 집계 ≠ 라인 |

## 관련

- `gem-emerson-intermediate-micro` · `gem-blanchard-ratings-debt-deficits` · `gem-aschenbrenner-directed-growth-risk`
