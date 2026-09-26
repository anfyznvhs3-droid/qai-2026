# Datawrapper → PDF·발표 시각화 (2026-09-19)

## 출처

- **트리거:** [@kayasefaersan / 2100977162907984274](https://x.com/kayasefaersan/status/2100977162907984274) (2026-09-18) — Doç. Dr. Sefa Ersan KAYA (학술·일러스트)
- **도구:** [datawrapper.de](https://datawrapper.de) — Datawrapper GmbH (독일, 저널리즘·연구용 viz SaaS)
- **Scout:** fxtwitter + 사이트 공개 정보 (2026-09-19)

## 요지

CSV 붙여넣기 → **몇 분 안에** 인터랙티브 **차트·표·지도**. 게스트·무료 tier. 학술·미디어에서 널리 쓰는 **출판 품질** 템플릿.

| 강점 | K-AI 후보 Fig |
| --- | --- |
| 빠른 polish | calibration·reliability · Pareto(recall vs alarm) · subgroup 표 |
| 접근성·반응형 | 발표 embed · 부록 interactive (선택) |
| 지도 | 공장·라인 **지리** 데이터 있을 때만 |

## MIX 잠재 (deferred) — **PDF·발표 human layer**

| 패턴 | 우리 적용 | 축 |
| --- | --- | --- |
| 숫자 ≠ 도구 | **`src/evaluate` 출력과 일치** — Datawrapper는 껍데기만 | PDF · 재현 |
| Model 재현 | **제출 Fig 주 경로 = matplotlib/seaborn in repo** | Model |
| vivid-figures 분담 | Datawrapper = **사람이 클릭** · vivid = **에이전트 108레시피** | artifact |

**투입 ❌:** Model 파이프라인 · `data/raw/` 외부 업로드(민감 데이터) · 심사 **재현 Fig의 유일 출처**

## 경계

- KAMP 과제 데이터 **외부 SaaS 업로드** — PII·NDA·규정 **사용자 확인** (`review_needed`)
- 무료/Pro **라이선스·워터마크** — PDF 제출 전 확인
- `gem-vivid-figures`와 **중복 선택** — 9/21 후 하나만 active pull

## pull 조건

| 时机 | 用途 |
| --- | --- |
| Model 지표 **잠금 후** | PDF Fig 2–3장 polish (ECE·Pareto·비용표) |
| 발표 슬라이드 | embed 또는 PNG export |
| pull 전 | `reports/` 수치와 **대조 체크리스트** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-datawrapper-viz` |
| 유형 | `artifact` |
| 상태 | **deferred** · **pull↑ PDF·발표** |
| 적용 축 | PDF Fig · 발표 (Model ❌) |

## 관련

- `gem-vivid-figures` · `gem-nature-abstract-playbook` · `gem-jabref`
- [`reports/submission-outline.md`](../reports/submission-outline.md) §6·§8
- [`AGENT.MD`](../AGENT.MD) §6 PDF 축
