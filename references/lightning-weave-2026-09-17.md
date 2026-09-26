# Lightning Weave → 정확도·효율 Pareto·능력 합성 (2026-09-17)

## 출처

- **트리거 트윗:** [@SciFi / status/2099938818379973041](https://x.com/SciFi/status/2099938818379973041)
- **논문:** [arXiv:2609.14708](https://arxiv.org/abs/2609.14708) — *Lightning Weave: Improving the Accuracy-Efficiency Frontier of Reasoning Models through Capability Composition*
- **저자:** Yecheng Wu, Song Han, Han Cai (2026-09-13, cs.AI)
- **Scout:** _(미실행 — arXiv API `export.arxiv.org` 확인, 2026-09-17)_

## 원본이 하는 일 (채택 범위)

| 구분 | 내용 | MIX |
| --- | --- | --- |
| Lightning Weave | 정확도·토큰 효율 **동시** 개선 — specialist **능력 합성** | **Pareto·합성·캐시** 사고만 |
| On-policy distillation · DOPD | LLM post-training · log-ratio shift | **알고리즘·코드 채택 ❌** |
| 수학·코드 벤치 (HMMT, LiveCodeBench) | LLM reasoning 평가 | **제조 지표로 치환** |

핵심 주장: 정확도 specialist와 효율 specialist를 **각각 학습**한 뒤, 단일 student에 **정책 shift를 정렬·합성**하면 joint objective보다 **accuracy–efficiency Pareto**를 넓힌다. Anchor trajectory는 **한 번 scoring 후 캐시** — live multi-model serving 없이 student 학습.

## 제조 대응 (`AGENT.MD` §4.1 · §4.3)

| 논문 패턴 | 제조 대응 | 축 |
| --- | --- | --- |
| accuracy vs efficiency **다른 행동** | **재현율 vs 알람률·검사 부하** — 단일 loss로 동시 최적화 어려움 | Model · PDF |
| 독립 specialist → **합성 student** | recall-oriented + precision/low-alarm 모델 → **스택·가중·임계 캘리브레이션** | Model |
| anchor signal **강도 조절** → Pareto sweep | `gem-quant-ts-playbook` **비용 가중 임계값** sweep | Model · PDF |
| cached trajectory scoring 1회 | holdout·LOT별 **오프라인 score cache** → 반복 실험 비용 절감 | Model (운영) |
| capability = pre→post **policy shift** | baseline 대비 **잔차·score delta** feature (설비·공정별) | Model |

## MIX 투입 — 실험 3종 (9/21 이후)

1. **이중 specialist** — (A) recall-max, (B) alarm-rate-cap 모델 각각 학습 → validation에서 **가중·임계 합성** Pareto curve
2. **비용 sweep** — `AGENT.MD` §4.1 손실표로 anchor weight → PR-AUC vs alerts/day 곡선 (PDF Fig 1)
3. **delta feature** — baseline score 대비 specialist **shift**를 2차 feature로 앙상블 (과적합·leakage 체크리스트 필수)

## 경계

- LLM reasoning·distillation **코드·체크포인트 투입 ❌**
- 논문 수치(HMMT, LiveCodeBench) **인용 ❌** — **방법 구조**만
- 과제 `data/raw/`와 **합성·대체 금지**
- 코드 “will be released soon” — repo 확정 전 **artifact 채택 보류**

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-lightning-weave` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **active** (구조·실험 설계만; LLM 구현 ❌) |
| 적용 축 | **Model** (dual objective·Pareto·앙상블) + **PDF** (trade-off 곡선) |

## 관련

- `gem-quant-ts-playbook` — 비용 임계·홀드아웃
- `gem-mix-mhc` — compositional closure (합성 불변량)
- `gem-opennews-ops-layer` — impact score·행동 신호 (운영 레이어)
- `docs/reference-concepts.md` — `gem-lightning-weave`
- `reports/leakage-audit-checklist.md`
