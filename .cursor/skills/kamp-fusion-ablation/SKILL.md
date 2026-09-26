---
name: kamp-fusion-ablation
description: Plans and documents KAMP multi-dataset fusion for the 2026 K-AI contest—primary vs auxiliary datasets, join keys, time-window alignment, ablation tests, and data lineage tables. Use when selecting 2+ datasets, joining tables, ablation, data fusion, or explaining dataset roles in the report.
---

# kamp-fusion-ablation

2026 재직자 **필수**: 2종+ · 주/보조 · Ablation · 계보. [`AGENT.MD`](../../AGENT.MD) §3 — raw는 MIX ❌.

## Workflow

```
- [ ] Pick track ①/②/③ + primary dataset (quality/process/energy story)
- [ ] Pick auxiliary dataset (must change the hypothesis)
- [ ] Lineage table (both datasets)
- [ ] Join plan (exact key OR time-window — justify)
- [ ] Primary-only baseline metrics
- [ ] Primary+auxiliary metrics
- [ ] Ablation paragraph for PDF §3–4
```

## Lineage table (copy to `reports/data-card.md`)

| dataset_id | role | process/equipment | key cols | unit | label timing | rows/files |
| --- | --- | --- | --- | --- | --- | --- |
| (primary) | 주 | | Work_ID/Lot_NO/Timestamp | | | |
| (auxiliary) | 보조 | | | | | |

## Join decision tree

**Same Lot/Work_ID?** → merge on key; document orphan rate.

**Different cadence (Hz vs event)?** → time-window aggregation:
- window = max(2× slow period, 60s) unless domain says otherwise
- resample to common grid; never leak test stats into train windows

**Cannot row-join?** → allowed paths (공지): feature transfer · model stack · decision-stage fusion — **state limitation in PDF**.

## Ablation (required)

| run_id | features | metric (primary) | Δ vs primary-only |
| --- | --- | --- | --- |
| A0 | primary only | | — |
| A1 | primary + auxiliary | | |

Auxiliary must **hurt or help measurably**. If Δ ≈ 0, swap auxiliary or shrink claim.

## Guidebook hook

Grep **one** primary row in `knowledge/kamp-guidebooks-summary.csv` → contrast random-split vs our group/time split in PDF.

## Outputs

- `data/interim/join_manifest.json` — keys, window, orphan %
- `reports/experiment-log.md` — A0/A1 rows with `run_id`, `impact`, `action` (opennews fields)
