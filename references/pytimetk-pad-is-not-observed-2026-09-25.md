# pytimetk · 간격을 채운 값은 관측이 아니다 (2026-09-25)

## 출처

- **트리거 트윗:** [@tarantula_ds_ / 2103364062335938817](https://x.com/tarantula_ds_/status/2103364062335938817) (2026-09-25)
- **그림:** 「Pytimetkにより時系列処理の簡易化」. Polars, pandas보다 빠르다, 함수 표
- **저장소:** [business-science/pytimetk](https://github.com/business-science/pytimetk) README
- **Scout:** fxtwitter API + 그림 + README (2026-09-25). **설치 ❌**

구멍을 학습 밖에서 채우지 않는 일은 `gem-yokota-tensor-completion-not-observed`가 담당한다. 이 건은 시간 간격을 0으로 메우거나 이상을 고친 시계열이다.

## 트윗·그림 vs README

| 트윗·그림 | README |
| --- | --- |
| 시계열 조작 라이브러리, Polars 백엔드 | 맞음. `engine="polars"`, pandas, cudf는 베타 |
| pandas보다 3–3500배, `augment_rolling`도 10–3500배 | **README에 없는 배수** |
| `pad_by_time`이 간격을 메운다. `anomalize`가 이상을 검출·수정 | `pad_by_time(fillna=…)`가 있고, 예시는 `fillna=0`. `anomalize` 설명은 검출·진단·그림. 수정 그림(`plot_anomalies_cleaned`)은 문서 목록에 있음 |
| `summarize_by_time` 예는 월말 합 | 함수는 맞음. README 예는 월초(`MS`) |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| pytimetk·MLflow feature store·GPU | ❌ | 제출 의존성에 넣지 않음. 집계는 pandas로 분할 안에서 |
| 빈 시간을 0으로 채운 행, 이상을 고친 값 | ❌ | 0은 측정이 아님. 고친 값은 원래 센서값이 아님 |
| **패턴** — 리샘플 빈칸은 결측으로 남김 | ✅ 계보 | 주기는 KPI 한 스텝(`gem-kronos`). 채움·수정 열을 쓰면 미처리 열을 Ablation에 남김 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 라이브러리 **pull ❌** · 속도 배수 인용 ❌ |
| Join/time-window | 빈 구간은 NaN. 0 채움과 이상 수정은 학습 분할 안에서만, 원열과 같이 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-pytimetk-pad-is-not-observed` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | 계보 — 간격 채움 ≠ 관측 |

## 관련

- `gem-yokota-tensor-completion-not-observed` · `gem-kronos-kline-foundation` · `gem-kaggle-feature-engineering`
