#!/usr/bin/env python3
"""Validate Q.AI K-AI submission zip structure. Usage: validate_submit.py path/to/source.zip"""

from __future__ import annotations

import re
import sys
import zipfile
from pathlib import Path

REQUIRED = {"README.md", "requirements.txt"}
RECOMMENDED = {"src", "predictions", "data/train"}
BLIND_PATTERNS = [
    re.compile(r"@(?!example\.com)[\w.-]+\.(kr|com|net|org)", re.I),
    re.compile(r"주식회사|㈜|University|대학교|Corp\.|Inc\.", re.I),
]


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: validate_submit.py <zip_path>", file=sys.stderr)
        return 2

    path = Path(sys.argv[1])
    if not path.is_file():
        print(f"ERROR: not found: {path}")
        return 1

    errors: list[str] = []
    warns: list[str] = []

    with zipfile.ZipFile(path) as zf:
        names = {n.replace("\\", "/").rstrip("/") for n in zf.namelist()}
        top = {n.split("/")[0] for n in names if n}

        for req in REQUIRED:
            if not any(n.endswith(req) or n == req for n in names):
                errors.append(f"missing required: {req}")

        for rec in RECOMMENDED:
            if rec not in top and not any(n.startswith(rec + "/") for n in names):
                warns.append(f"missing recommended top-level: {rec}/")

        readme_candidates = [n for n in names if n.endswith("README.md")]
        if readme_candidates:
            text = zf.read(readme_candidates[0]).decode("utf-8", errors="replace")
            for pat in BLIND_PATTERNS:
                if pat.search(text):
                    warns.append(f"README may violate blind rule: pattern {pat.pattern}")

        if not any("predict" in n.lower() for n in names):
            warns.append("no prediction file path detected")

    for w in warns:
        print(f"WARN: {w}")
    for e in errors:
        print(f"ERROR: {e}")

    if errors:
        print("VERDICT: BLOCK")
        return 1
    print("VERDICT: OK" + (" (with warnings)" if warns else ""))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
