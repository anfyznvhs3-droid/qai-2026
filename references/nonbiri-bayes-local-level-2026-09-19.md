# のんびり統計 Vol.20 · ローカルレベルモデル → 시계열 EDA·SSM (2026-09-19)

## 출처

- **트리거:** [@ArtHappyMuseum / 2101143994054873503](https://x.com/ArtHappyMuseum/status/2101143994054873503) (2026-09-19) — ネイピア DS · #のんびり統計
- **기사:** [note Vol.20 ローカルレベルモデル](https://note.com/e_dao/n/nf82bb0aa6558) (2026-09-18)
- **원서:** 馬場真哉 · *RとStanではじめるベイズ統計モデリングによるデータ分析入門* (講談社) — 第5部 状態空間モデル
- **스택:** Python · **CmdStanPy** · arviz · statsmodels (EDA)
- **Scout:** note 본문 앞부분 (2026-09-19)

## 요지

| 단계 | 내용 |
| --- | --- |
| **모델링 전 EDA** | 트렌드·계절성·**자기상관** 눈으로 확인 (Air Passengers 예) |
| **기초** | 화이트 노이즈 vs **랜덤 워크** — 누적합 구조 |
| **로컬 레벨** | 상태 \(y_t = y_{t-1} + \varepsilon_t\) + 관측 노이즈 — **느린 드리프트·베이스라인** |
| **추정** | Stan MCMC · 추정 상태 궤적 시각화 |

제조 센서: 설비 **서서히 변하는 기준선**·잔차 이상탐지 베이스라인 후보.

## MIX 잠재 (deferred) — **레시피 B**

| 패턴 | K-AI 대응 | 축 |
| --- | --- | --- |
| 모델 전 시계열 성질 확인 | PDF §3 · EDA 체크리스트 (트렌드/계절/ACF) | Data · PDF |
| 로컬 레벨 = RW + noise | **잔차·드리프트** 베이스라인 — GBDT feature 전 단계 | Model (exp) |
| 베이즈 credible interval | §6 **신뢰구간** — `gem-nakazawa-r-statistics` 빈도주의 CI와 대비 서술 | PDF §6 |
| CmdStanPy 파이프 | **제출 메인 ❌** — 재현·의존성·시간 부담 | — |

**투입 ❌:** Stan 전체를 제출 필수 경로로 — 9/21 과제가 **시계열·진동**이고 quant-ts 윈도우만으로 부족할 때 **exp 브랜치** 검토.

## 경계

- Air Passengers = **교육용** — 제조 데이터 그대로 비유 ❌
- `gem-quant-ts-playbook` — FFT·비용·홀드아웃 (active) / 본 gem — **SSM·사전 EDA** (보조)
- `gem-zeeman-catastrophe-theory` — 급변 은유 / 본 gem — **느린 상태 변화**

## pull 조건

| 时机 | 用途 |
| --- | --- |
| 9/21 과제 = **시계열·PdM** → 레시피 B 선택 | PDF §3 EDA 1절 + §4 「로컬 레벨 잔차 vs 트리」 비교 한 줄 |
| 센서 **드리프트**가 오류 분석 핵심 | exp: statsmodels/local level 또는 간단 rolling baseline |
| PDF §6 | Nakazawa CI 표 + 「베이즈 credible band는 부록 optional」 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-nonbiri-bayes-local-level` |
| 유형 | `playbook` |
| 상태 | **deferred** · **pull↑ Recipe B / PDF §3·§4** |
| 적용 축 | Data(EDA) · Model(exp) · PDF §6 |

## 관련

- `gem-quant-ts-playbook` · `gem-nakazawa-r-statistics` · `gem-zeeman-catastrophe-theory`
- [`docs/mix-application-plan.md`](../docs/mix-application-plan.md) 레시피 B
- [`knowledge/kamp-guidebooks-summary.csv`](../knowledge/kamp-guidebooks-summary.csv) time-split flags
