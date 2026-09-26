# Decade Review · Time-Series Anomaly Detection (Boniol·Paparrizos 2024) (2026-09-23)

## 출처

- **트리거 트윗:** [@tarantula_ds_ / 2102714786463326467](https://x.com/tarantula_ds_/status/2102714786463326467) (2026-09-23, 日本語 · 慶應 DS 図解)
- **논문:** [Dive into Time-Series Anomaly Detection: A Decade Review](https://arxiv.org/pdf/2412.20512) · arXiv:2412.20512 · 2024 · Paul Boniol (Inria) · Qinghua Liu · Mingyi Huang · Themis Palpanas (Paris Cité) · John Paparrizos (OSU)
- **Scout:** fxtwitter API + arXiv 본문 §1–§3·§10 (2026-09-23)

## 트윗 vs 논문

| tarantula 요약 | 논문 |
| --- | --- |
| 「10년 이상탐지 정리」 | 60년 역사(Page 1957~) 위에 **최근 10년 메타분석** (§9) |
| 체계적 · 그림 좋음 | **process-centric taxonomy** 3분류 · Fig 2·5·8·22 |

→ 트윗은 소개 수준. 핵심은 아래 3개.

## 논문 요지

1. **이상 3유형** (§2.2, Fig 2) — **point**(값 자체가 범위 밖) · **contextual**(값은 정상 범위인데 그 시점·윈도우에서는 이상) · **collective**(개별 점은 정상인데 부분수열 형태가 이상)
2. **방법 3분류** (§3, Fig 5) — **distance**(부분수열 거리) · **density**(전역 밀도·isolation) · **prediction**(정상 데이터로 재구성·예측 → 잔차)
3. **평가** (§10) — 만능 검출기 없음 · 벤치마크 결함 4종 (triviality · unrealistic anomaly density · mislabeled · run-to-failure bias, Wu & Keogh 2023) · 최신 벤치 = **TSB-AD** (1,000 시계열 · 40 방법) · point-adjust 등 시계열 지표 왜곡 주의

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 이상탐지 SOTA·딥 재구성 모델 도입 | ❌ | 제출 Model = **GBDT+로컬** · autoencoder 18종 가이드북 baseline은 **비교 대상**일 뿐 |
| **이상 3유형** → 문제 정의·EDA | ✅ pull↑ | 9/25 아이디어 정리 · 9/27 lock 시 「우리 불량/정지는 point / contextual / collective 중 어느 것?」 1문장 — 유형이 모델·지표를 결정 |
| **prediction 계열 = 잔차** baseline | ✅ | Recipe B: GBDT 잔차 → rolling z / isolation forest (`gem-quant-ts-playbook` 이상 베이스라인) |
| **평가 결함 4종** | ✅ pull↑ | 가이드북 라벨 신뢰도 점검 — 이상 비율 비현실·라벨 오표기·run-to-failure(고장 직전만 이상 표시) 여부 · `kamp-leakage-audit` 체크 1항 |
| TSB-AD 벤치 실행 | ❌ | 1,000 시계열 · 40 방법 — 18일 · 우리 데이터 ≠ 공개 벤치 |
| tarantula 큐레이션 | ✅ | 慶應 DS 図解 축 · `gem-nakazawa`·`gem-nonbiri`와 같은 日本 DS Scout |

## K-AI — 우리 파이프 대응

| 논문 | Q.AI |
| --- | --- |
| point anomaly | 단발 불량·단발 스파이크 → 분류 GBDT (Recipe A) |
| contextual anomaly | 시간대·LOT 조건 의존 → **group/time split** 필수 · 전역 임계 ❌ |
| collective anomaly | 부분수열 형태 → lag·rolling·window 피처 (`gem-quant-ts-playbook`) · 진동·음향이면 FFT |
| distance 계열 | kNN·discord — 소규모 EDA 진단용 · 제출 모델 ❌ |
| density 계열 | isolation forest on residual — 비지도 baseline 1개 |
| prediction 계열 | GBDT 예측 잔차 = anomaly score · 딥 재구성(AE·LSTM AE)은 가이드북 대비표만 |
| 평가 결함 4종 | data-card에 **이상 비율·라벨 출처·run-to-failure 여부** 3칸 |

## 경계

- **딥 이상탐지·foundation TS** — Model 투입 ❌ · 비교 서술만
- `gem-quant-ts-playbook`(vol·이상 baseline) · `gem-zeeman`(급변) · `gem-menaldo`(regime)와 같은 **Recipe B 축** — 본 gem은 **이상 유형 분류 + 평가 결함**만 담당
- PDF 인용 시 원 논문 (Boniol et al. 2024, arXiv:2412.20512) · 트윗 ❌

## pull 조건

| 시기 | 용도 |
| --- | --- |
| **9/25 아이디어 정리** | 상위 3개 각각에 이상 유형 1개 붙이기 |
| Sprint 1 data-card | 이상 비율 · 라벨 출처 · run-to-failure 3칸 |
| Recipe B 확정 시 | 잔차 기반 anomaly score + 임계 · PDF §4 Fig 2 유형 1개 각주 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-decade-review-ts-anomaly` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull↑ 이상 유형·평가 결함) |
| 적용 축 | 문제 정의 · EDA · KPI — 딥 이상탐지 모델 **❌** |

## 관련

- `gem-quant-ts-playbook` · `gem-zeeman-catastrophe-theory` · `gem-menaldo-nonlinear-ts-econometrics` · `gem-dualsql-multi-agent-rl` (지표 정합)
- `.cursor/skills/kamp-leakage-audit` · [`knowledge/kamp-guidebooks-summary.csv`](../knowledge/kamp-guidebooks-summary.csv)
