# WeightWatcher · Muon vs AdamW → 암기·층별 진단 (2026-09-19)

## 출처

- **트리거:** [@CalcCon / 2100987746051658041](https://x.com/CalcCon/status/2100987746051658041) (2026-09-18)
- **실험:** nanoGPT single-head · AdamW vs **Muon** · 5 seeds · WeightWatcher(α, ESD, memorization)
- **노트북:** [CalculatedContent/WeightWatcher-Examples — AdamWvsMuon.ipynb](https://github.com/CalculatedContent/WeightWatcher-Examples/blob/main/AdamWvsMuon.ipynb)
- **관련:** [WeightWatcher grokking / anti-grokking](https://weightwatcher.ai/grokking.html) · [arXiv:2602.02859](https://arxiv.org/html/2602.02859v1) (Correlation Traps)
- **Scout:** _(미실행 — fxtwitter + GitHub, 2026-09-19)_

## 트윗 요지

| 관찰 | AdamW | Muon |
| --- | --- | --- |
| 평균 α (WeightWatcher) | 비교적 안정 | ESD 노이즈↑ · α 추정 어려움 |
| **canary 암기** (32-token planted seq) | ~**96%** exact recall | **<1%** teacher-forced recall (10k step) |
| α < 2 레이어 | 있음 | **일부 있음** — α만으로 암기 설명 **불충분** |

**교훈:** 평균 지표(α, accuracy)만 보면 숨김 → **층·그룹별** ESD/canary로 pathological learning 검증.

## MIX 잠재 (deferred) — 제조 대응

| WW 패턴 | GBDT·표 데이터 대응 | 축 |
| --- | --- | --- |
| **canary injection** | train에 **인위 spike/더미 LOT** 넣고 test recall 검사 — 무작위 분할 모델은 canary **암기** | Model · Data |
| 평균 accuracy ❌ | **설비·LOT·기간별** 성능표 (`AGENT.MD` §4.2) | Model · PDF |
| α / spectral | GBDT **직접 ❌** · 1D-CNN/LSTM exp 브랜치만 WeightWatcher 검토 | Model (exp) |
| anti-grokking · Correlation Trap | val↑ train↑ but **group holdout 붕괴** = 제조版 anti-grokking | Model · PDF §6 |
| AdamW vs Muon | **pull ❌** — optimizer 논쟁, 경진대회 메인 무관 | — |

### canary 테스트 (9/21 이후 optional, 레시피 A 보강)

1. train에 식별 가능한 **합성 행/윈도우** 0.1% 삽입 (과제 raw 변조는 **복제본**에서만)
2. baseline이 canary를 **재현·암기**하면 → random split 과적합 증거
3. group/time split + GBDT는 canary recall **낮아야** 정상
4. PDF §4·§6: “가이드북식 random split은 canary 암기 가능 — 우리 분할은 불가” **한 단락**

## 경계

- WeightWatcher · Muon **제출 파이프라인 투입 ❌** (딥넷 진단·LLM optimizer)
- canary는 **검증 실험** — 제출 predict에 합성 데이터 섞기 ❌
- α=2 이론 **PDF 인용 최소** — 심사는 제조 검증·누수에 집중

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-weightwatcher-memorization` |
| 유형 | `playbook` |
| 상태 | **deferred** |
| 적용 축 | Model(암기 검증·그룹별 지표) · PDF §4·§6 |
| pull | 9/21 후 **레시피 A** + random-split 베이스라인 대비 스토리 필요 시 |

## 관련

- [`docs/mix-application-plan.md`](../docs/mix-application-plan.md) §7 deferred
- `gem-smelt-looped-budget` — 동일 budget 비교
- `gem-protein-sequence-space-llnl` — rugged landscape / simple baseline
- [`reports/leakage-audit-checklist.md`](../reports/leakage-audit-checklist.md)
