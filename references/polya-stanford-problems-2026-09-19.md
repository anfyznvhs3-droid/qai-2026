# Stanford Mathematics Problem Book → Pólya 문제풀이 (2026-09-19)

## 출처

- **트리거:** [@gp_pulipaka / 2101008420501405811](https://x.com/gp_pulipaka/status/2101008420501405811) (2026-09-18)
- **도서:** *The Stanford Mathematics Problem Book* (1974) — **George Pólya** · Jeremy Kilpatrick
- **링크:** [Amazon geni.us/Stanford-Math](https://geni.us/Stanford-Math) _(affiliate — Scout 미확인)_
- **Scout:** _(미실행 — fxtwitter, 2026-09-19)_

## 요지

20세트 경쟁 수학 문제 — **계산 루틴 ❌**, 독창·추론·통찰. 패턴 발견 → conjecture → proof · 문제 속 **misleading relationship** 인식.

## MIX 잠재 (deferred) — 제조 대응

| Pólya 패턴 | K-AI 대응 | 축 |
| --- | --- | --- |
| Understand the problem | `AGENT.MD` §4.1 손실표·KPI·의사결정 시점 **먼저** | PDF §2 |
| Devise a plan | 가설 1줄 → **레시피 A/B/C** 선택 (`mix-application-plan`) | PDF §4 |
| Carry out | baseline → 개선 (Model) | Model |
| Look back | 오류 분석·canary·분할 재검 (`gem-weightwatcher-memorization` 은유) | PDF §6 |
| misleading relationships | **누수·대리변수·spurious correlation** — 가이드북 random-split 함정 | Data · PDF §3 |

**투입 ❌:** 수학 문제집 내용·연산 — **사고 순서**만 PDF·EDA 체크리스트에.

## 경계

- `#BigData #AI` 해시태그 = **마케팅** — ML 기법과 무관
- 도서 구매·전체 풀이 **불필요** — 4단계 heuristic만 MIX
- `gem-producing-ideas` · `gem-medici`와 **중복** — 조합 시 “문제 정의→가설→검증→회고” 한 줄로만

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-polya-stanford-problems` |
| 유형 | `playbook` |
| 상태 | **deferred** |
| 적용 축 | PDF §2·§4·§6 · EDA/가설 설계 |

## 관련

- `gem-producing-ideas` · `gem-medici`
- [`docs/mix-application-plan.md`](../docs/mix-application-plan.md)
- [`reports/leakage-audit-checklist.md`](../reports/leakage-audit-checklist.md)
