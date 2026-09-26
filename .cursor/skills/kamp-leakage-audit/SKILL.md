---
name: kamp-leakage-audit
description: Audits train/validation/test splits and feature pipelines for label leakage, group overlap, temporal bleed, and test-set reuse in the K-AI manufacturing contest. Use after splitting data, before claiming metrics, or when the user mentions leakage, data snooping, or validation integrity.
---

# kamp-leakage-audit (mandela-style)

Read [`AGENT.MD`](../../AGENT.MD) §4.2. Output pass/fail per check.

## Checklist

| id | check | pass criterion |
| --- | --- | --- |
| L1 | Group overlap | Same LOT/equipment/work_id not in train AND test |
| L2 | Time order | Future rows not in train when predicting past |
| L3 | Fit scope | Scaler/imputer/feature stats fit on train fold only |
| L4 | Label timing | No post-outcome columns in features |
| L5 | Duplicate rows | Near-duplicates across splits flagged |
| L6 | Window overlap | TS windows don't span split boundary |
| L7 | Test touches | Test evaluated ≤ 2 final runs (log dates) |
| L8 | Join leakage | Auxiliary merge keys not computed using test labels |

## Procedure

1. List split keys used → `reports/leakage-audit.md`
2. Run counts: `n_train`, `n_val`, `n_test`, group counts per split
3. For each fail → **fix split or feature**, do not note-and-ship

## Output template

```markdown
# Leakage audit — [date]
Split: group|time — key: [...]
| id | pass | evidence |
| L1 | yes | 0 overlapping groups |
...
**Verdict:** SHIP | BLOCK
```

BLOCK → no PDF performance claims until fixed.
