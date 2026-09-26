---
name: kamp-baseline-gbdt
description: Builds the Q.AI default K-AI submission model path—group or time split, LightGBM/CatBoost/XGBoost baseline, isotonic calibration, cost-weighted thresholds, and typed infer JSON. Use for baseline, GBDT, calibration, infer schema, or Recipe A/B model work. Jev API prohibited.
---

# kamp-baseline-gbdt

**Policy:** GBDT + local calibration · **Jev API ❌** · patterns from `gem-typesafe-calibrated-decisions` + `gem-quant-ts-playbook`.

## Pipeline order

1. **Split** — group (LOT/equipment) or time; document in `reports/leakage-audit.md`
2. **Features** — tabular lags/aggregates; TS → FFT band powers optional (`gem-quant-ts-playbook`)
3. **Model** — CatBoost or LightGBM first; seed fixed
4. **Calibrate** — isotonic or Platt on **validation only** → ECE + reliability diagram path
5. **Thresholds** — `τ_auto`, `τ_review` from cost table (not accuracy alone)
6. **Infer schema** — one JSON object per sample

## Infer JSON (minimum)

```json
{
  "sample_id": "string",
  "noul": { "defect_prob": 0.0, "calibrated": true },
  "choice": { "defect_class": "string|null", "confidence": 0.0 },
  "score": { "severity": 0.0, "confidence": 0.0 },
  "action": "auto|review|hold",
  "top_features": ["f1", "f2", "f3"],
  "run_id": "string"
}
```

## Experiment log row

```markdown
| run_id | impact | action | status | notes |
| R-... | recall +2pp | add aux join | done | A1 ablation |
```

## Beckmann cascade (1-pass)

- GBDT pass 1 → if `confidence < τ_review` → second pass or human queue (document only; no extra API)

## Do not

- Deferred LLM/RL/arch gems in main path
- Tune on test
- Free-text predictions in submit artifacts

## Done when

- `python src/train.py` + `evaluate.py` reproduce metrics in `reports/experiment-log.md`
- Validation ECE recorded
- Sample `submissions/final/model/predictions.jsonl` ≥ 10 lines
