# NDVI 맞춤 · 한 봉우리 맞춤은 꺾임을 지운다 (2026-09-25)

## 출처

- **트리거 트윗:** [@yohaniddawela / 2103332548789121166](https://x.com/yohaniddawela/status/2103332548789121166) (2026-09-25)
- **논문:** [Scientific Reports](https://www.nature.com/articles/s41598-026-66668-x) Zhang·Mu·Lin·Zhan, Heihe University, 2026-08-21. GF-1 WFV NDVI, 아이후이
- **Scout:** fxtwitter API + 논문 초록 페이지 (2026-09-25). 재구성 절차 **받지 않음**

빈 시간을 0으로 메우는 일은 `gem-pytimetk-pad-is-not-observed`, 빈 칸을 채운 뒤 학습은 `gem-yokota-tensor-completion-not-observed`다. 이 건은 맞춤 곡선이 사건일 수 있는 꺾임을 지운다는 쪽이다.

## 트윗 vs 초록

| 트윗 | 초록 |
| --- | --- |
| 세 방법. 한 봉우리가 모든 지표에서 앞섬. 오차 0.085, 파동 0.095, 이동 평활 0.104. 변동의 약 88% | 방법은 double logistic, Savitzky–Golay, Fourier. double logistic의 RMSE가 0.085로 **가장 낮음**. 0.095·0.104·88%·「모든 지표」는 **이 페이지에 없음** |
| 오차는 맞춘 점과의 거리이고 지상 실측이 아님. 1년. 픽셀 4,598개를 구역 곡선 하나로 평균. 설정은 손으로 조정 | 2024 한 계절. 연차 변동이 성능을 바꿀 수 있음. 독립 지상 검증이 더 필요하다고 함. 픽셀 수·손조정은 **이 페이지에 없음** |
| 8월 0.86, 9월 0.5, 10월 0.7. 한 봉우리가 그 꺾임을 지움. 구름이면 맞고, 수확·가뭄이면 사건을 지움 | 초록은 그 숫자를 주지 않음. Savitzky–Golay는 국소 형태를 남긴다고 하고, 형태를 우선하면 그쪽을 고려하라고 함 |
| 아열대 이모작은 미검증. 추운 단일 계절의 기본값 | 온대에서 생물계절 파라미터를 뽑을 때 double logistic이 나아 보인다고 함. 이모작 문장은 **이 페이지에 없음** |

32장·16 m·4일 재방문·면적 14,400 km²도 이 초록 페이지에 없다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 센서 열을 한 봉우리로 맞춘 뒤 그 곡선을 KPI로 쓰기 | ❌ | 맞춤은 맞춘 점과의 거리. 꺾임이 정지·불량이면 그 사건이 사라짐 |
| NDVI 세 방법을 우리 시계열에 붙이기 | ❌ | 위성 식생 재구성. 제출 모델이 아님 |
| **패턴** — 평활은 사건을 소음으로 부른 결정 | ✅ Data | 원열을 남김. 꺾임을 지운 열을 쓰면 Ablation에 그 사실을 적음. 맞춤 오차를 홀드아웃으로 쓰지 않음 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 위성 맞춤 **pull ❌** |
| 시계열 | 빈 칸은 NaN. 평활 열은 원열과 분리. 0.085는 인용하지 않음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-ndvi-hump-fit-erases-the-dip` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Data — 평활 |

## 관련

- `gem-pytimetk-pad-is-not-observed` · `gem-yokota-tensor-completion-not-observed` · `gem-kronos`
