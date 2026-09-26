# ES vs GRPO · Reasoning Coverage → Pass@K·다양성 은유 (2026-09-20)

## 출처

- **트리거 트윗:** [@ethantsliu / status/2101507554144932251](https://x.com/ethantsliu/status/2101507554144932251) (2026-09-20)
- **논문:** [arXiv:2608.27351](https://arxiv.org/abs/2608.27351) — *Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO* (v2 · 2026-08-28)
- **저자:** Yunpeng Ba · Zhi Zheng · Yue Xie · et al.
- **관련:** [arXiv:2608.12679](https://arxiv.org/abs/2608.12679) — *Beyond the Best Guess* (ES solution coverage, 별 논문)
- **Scout:** fxtwitter + arXiv abstract (2026-09-20)

## 트윗·논문 요지

| 항목 | GRPO | Evolution Strategies (ES) |
| --- | --- | --- |
| 최적화 | 단일 policy · token-level backprop · group relative advantage | **population** of perturbed weights · reward-weighted avg update |
| Pass@1 | 강함 (+2.35 DeepScaleR→MATH 예) | 개선 (+0.20) — GRPO보다 약할 수 있음 |
| Pass@16/32 | **entropy collapse** · base **하회** 가능 (-1.20, -1.77 등) | **coverage 유지** (+2.02, +3.90 등) |
| 메커니즘 | 성공 경로에 mass 집중 → **다양성 축소** | population **Jensen–Shannon diversity** → repeated sampling 성공 |
| 조합 | — | **GRPO→ES** / **ES→GRPO** sequential |
| 부가 | — | functional **sparsity** (큰 magnitude 소수 update) · 큰 LLM일수록 population ↓ |

벤치: GSM8K→GPQA (Qwen2.5-1.5B) · DeepScaleR→MATH-500 (DeepSeek-R1-Distill-1.5B).

## Q.AI 판정

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| ES·GRPO LLM post-train | ❌ | `AGENT.MD` §3 · **제출=GBDT+보정** |
| 논문 Pass@ 수치 PDF 인용 | ❌ | GSM8K·MATH ≠ 제조 |
| **패턴** — Pass@1 vs Pass@K · entropy collapse | ✅ | PDF §6 **은유** — `gem-lightning-weave`·`gem-typesafe-calibrated-decisions` |

**채택할 아이디어 1개:** **단일 최고 점수(Pass@1)만 최적화**하면 hard·희규 케이스·**다중 샘플 coverage(Pass@K)** 가 줄 수 있음 → subgroup·Pareto·calibration로 **균형** (`gem-ngu-rl-llm` Matthew Effect와 짝).

## MIX 잠재 (deferred) — **pull ❌**

| ES/GRPO | K-AI 대응 | 축 |
| --- | --- | --- |
| Pass@1 ↑ · Pass@K ↓ (GRPO) | validation **accuracy만** chase → test hard fold **악화** | PDF §4·§6 |
| ES population diversity | **다중 seed GBDT** · subgroup별 모델 — exp만 | Model (exp) |
| entropy collapse | **과신·ECE 악화** — isotonic·τ_review (`gem-typesafe-calibrated-decisions`) | Model · PDF §6 |
| GRPO→ES sequential | baseline GBDT → **cascade 2차** (`gem-beckmann-transport`) 은유 | Model · PDF §5 |
| functional sparsity | `gem-single-layer-rl` (동일 큐레이터 **별 논문**) — LLM layer · **표 GBDT ❌** | — |
| reward-weighted population avg | ensemble 가중 — **제출 단일 모델** 유지 | — |

## 경계

- ethantsliu — [`gem-single-layer-rl`](llm-arch-deferred-2026-09-18.md) (2607.01232) **별 id**
- `gem-mimo-rl-harness` · `gem-ngu-rl-llm` — LLM RL deferred **묶음**
- ES **memory-efficient** 마케팅 → 제조 파이프 **무관**
- 9/21 전 **Library Drift** — 컨텍스트 제외

## pull 조건

| 时机 | 用途 |
| --- | --- |
| PDF §6 hard subgroup·**Pass@K式** coverage 논의 | 「Pass@1만 올리면 entropy collapse」1문장 + Pareto·calibration |
| pull ❌ default | LLM RL·ES·GRPO **학습 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-es-grpo-reasoning-coverage` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** · **pull ❌** (§6 은유만) |
| 적용 축 | 실험·PDF **다양성·hard bucket** 서술 |

## 관련

- `gem-ngu-rl-llm` · `gem-mimo-rl-harness` · `gem-single-layer-rl` · `gem-lightning-weave` · `gem-typesafe-calibrated-decisions` · `gem-beckmann-transport`
- [`docs/mix-application-plan.md`](../docs/mix-application-plan.md) §7
