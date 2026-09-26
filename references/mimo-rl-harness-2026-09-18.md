# MiMo-V2.6 RL 스케일 → Harness·Grader (2026-09-18)

## 출처

- **트리거:** [@MaxForAI / 2100390512398307512](https://x.com/MaxForAI/status/2100390512398307512) · [@_LuoFuli 인용](https://x.com/_LuoFuli/status/2100390512398307512)
- **대시보드:** [mimo.xiaomi.com/rl](https://mimo.xiaomi.com/rl/)
- **Scout:** _(미실행 — fxtwitter, 2026-09-18)_

## 요지

MiMo-V2.6 RL run 공개 스트리밍. 3축 스케일: **compute**(step당 ~20억 tok) · **multi-harness agentic env** · **grader/rubric 보상**.

## MIX 잠재 (deferred)

| MiMo 패턴 | 제조 대응 후보 | 비고 |
| --- | --- | --- |
| multi-harness mixed RL | — | LLM Agent 전용 |
| rubric grader | validation **루브릭**·leakage checklist | **학습 RL 아님** |
| live run dashboard | `experiment-log` 실시간 기록 | git+md 수준 |

## 경계

- LLM RL 인프라 **제출 투입 ❌**
- `gem-rsi-workspace-harness`·`gem-opennews-ops-layer`와 **중복** — MIX 조합 시 보조

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-mimo-rl-harness` |
| 유형 | `playbook` |
| 상태 | **deferred** |
| 적용 축 | 팀 운영(로그) · 검증 루브릭 |
