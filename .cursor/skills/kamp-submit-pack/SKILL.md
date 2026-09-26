---
name: kamp-submit-pack
description: Assembles and validates the 2026 K-AI employee-track submission zip—requirements, training data subset, README, test predictions, blind PDF rules, and portal checklist. Use before final submit, when packaging code, or validating submission artifacts.
---

# kamp-submit-pack

Official: [`references/kamp-submit-2026-2026-09-21.md`](../../references/kamp-submit-2026-2026-09-21.md) · deadline **2026-10-08 23:59**.

## Zip layout

```
submissions/final/source.zip
├── README.md              # reproduce steps, seed, split summary
├── requirements.txt       # or environment.yml
├── src/                   # train → evaluate → infer entrypoints
├── data/train/            # training subset used (not full KAMP mirror if huge—document)
├── predictions/           # test prediction file(s) per assignment
└── reports/               # optional: metric snapshot (no affiliation)
```

## Blind rules

- ❌ company/school names, logos, email domains in PDF/PPT/code comments
- ✅ personal names, team name **Q.AI** only

## Portal checklist

- [ ] Report PDF (hwpx template)
- [ ] source.zip
- [ ] Presentation PDF + PPT
- [ ] Survey screenshot embedded in report ([naver.me/FetWt7SN](https://naver.me/FetWt7SN))

## Validate

```powershell
python .cursor/skills/kamp-submit-pack/scripts/validate_submit.py submissions/final/source.zip
```

Fix all ERROR before upload. WARN = user confirms.

## README minimum sections

1. Problem one-liner + datasets (primary/aux)
2. Reproduce commands (copy-paste)
3. Split + seed
4. Ablation runs (A0/A1)
5. Test prediction file format

## Clean env rerun

After zip seals: fresh venv → README commands → metrics within tolerance vs `experiment-log`.
