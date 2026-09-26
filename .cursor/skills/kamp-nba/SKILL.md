---
name: kamp-nba
description: Reads Q.AI K-AI sprint state (board, decision-log, task-lock) and returns the single next best action for the 2026 manufacturing data contest. Use when the user asks what to do next, NBA, sprint priority, or is blocked mid-hackathon.
---

# kamp-nba — Next Best Action (Q.AI)

## Read (in order)

1. [`docs/agent-team-status.md`](../../docs/agent-team-status.md) — 이 에이전트의 범위와 상태
2. [`docs/board.md`](../../docs/board.md) — blocked + sprint table
3. [`docs/decision-log.md`](../../docs/decision-log.md) — latest lock

## Return format (only this)

```markdown
## NBA
**Action:** [one imperative sentence]
**Why:** [one sentence — rule or blocker]
**Done when:** [observable check]
**Do not:** [one distraction to skip]
```

## Priority ladder

1. **Lock not written** (문제 1문장·2종 ID·KPI가 `decision-log`에 없음) → 자기 현황 행의 파일만 채우게 한다. 학습하지 않는다.
2. **`data/raw/` empty** → ingest + `reports/data-card.md` hash row.
3. **No split spec** → group/time split doc + leakage checklist draft.
4. **No baseline metrics** → `kamp-baseline-gbdt` end-to-end once.
5. **No ablation row** → `kamp-fusion-ablation` auxiliary-off run.
6. **No infer sample** → JSON schema + 10-row example.
7. **Submit window** → `kamp-submit-pack` validate script green.

Never return a menu. One action only.
