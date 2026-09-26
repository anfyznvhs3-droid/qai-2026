# PC-ALM → Augmented Lagrangian Predictive Coding (2026-09-18)

## 출처

- **트리거:** [arXiv:2605.31022](https://arxiv.org/pdf/2605.31022) (사용자 링크, 2026-09-17)
- **논문:** *Augmented Lagrangian Predictive Coding* — Jeffrey Seely, Julian Gould (cs.LG, 2026-05)
- **Scout:** _(미실행 — arXiv API, 2026-09-18)_

## 요지

역전파 대신 **층별 국소 predictive coding** + 라그랑주 승수로 BP gradient에 정렬. 128층 narrow net에서 PC 대비 성능 회복.

## MIX 잠재 (deferred)

| 패턴 | 제조 대응 후보 | 비고 |
| --- | --- | --- |
| layer-local credit | — | 딥넷·표 데이터 과제와 무관 |
| augmented Lagrangian | 제약 최적화 문제 | OR 계열 과제일 때만 은유 |

## 경계

- **제출 Model 투입 ❌** — 라이브러리·데이터 modality 불일치
- MIX = 아이디어 보관만

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-pc-alm-predictive-coding` |
| 유형 | `idea` |
| 상태 | **deferred** |
| 적용 축 | _(미정)_ |
