# LLM 아키텍처·RL deferred 묶음 (2026-09-18)

기각했으나 MIX 보관용. **제조 표/TS-transformer 실험**과는 별축 — 나중에 스토리·비교 인용만.

## 등록 항목

| id | 트리거 | 논문·링크 | 한 줄 |
| --- | --- | --- | --- |
| `gem-t-loopformer` | [SciFi / 2100350283570159880](https://x.com/SciFi/status/2100350283570159880) | [arXiv:2609.15160](https://arxiv.org/abs/2609.15160) | token-level elastic-depth loop + dynamic routing |
| `gem-kata-linear-attention` | [hooshaaii / 2100291378982830441](https://x.com/hooshaaii/status/2100291378982830441) | [arXiv:2607.17419](https://arxiv.org/abs/2607.17419) | KATA · spherical packing · linear attention recall |
| `gem-gla-gated-linear-attention` | [hooshaaii / 2101481815873573090](https://x.com/hooshaaii/status/2101481815873573090) | [arXiv:2312.06635](https://arxiv.org/abs/2312.06635) · [fla-org/flash-linear-attention](https://github.com/fla-org/flash-linear-attention) | **GLA** · data-dependent gate · Triton · **O(1) infer** · LLaMA-parity |
| `gem-based-linear-attention` | [hooshaaii / 2101483719131381967](https://x.com/hooshaaii/status/2101483719131381967) | [arXiv:2402.18668](https://arxiv.org/abs/2402.18668) · [HazyResearch/based](https://github.com/HazyResearch/based) | **BASED** · Taylor softmax · SWA 64–128 · recall–throughput **Pareto** |
| `gem-block-recurrent-transformer` | [hooshaaii / 2100294735726366757](https://x.com/hooshaaii/status/2100294735726366757) | [arXiv:2203.07852](https://arxiv.org/abs/2203.07852) | block-level recurrence · long context |
| `gem-smelt-looped-budget` | [jiqizhixin / 2100754679642599480](https://x.com/jiqizhixin/status/2100754679642599480) | [arXiv:2609.01343](https://arxiv.org/abs/2609.01343) · [기사](https://www.jiqizhixin.com/articles/2026-09-08) | Looped vs standard **공정 FLOPs 비교** |
| `gem-single-layer-rl` | [ethantsliu / 2100750026305925347](https://x.com/ethantsliu/status/2100750026305925347) | [arXiv:2607.01232](https://arxiv.org/abs/2607.01232) | RL gain이 middle layer에 집중 |

**관련 (별 파일):** [`gem-es-grpo-reasoning-coverage`](es-grpo-reasoning-coverage-2026-09-20.md) — ethantsliu [2101507554144932251](https://x.com/ethantsliu/status/2101507554144932251) · ES vs GRPO Pass@K.

## MIX 잠재 (공통)

| 패턴 | 제조 TS-transformer 브랜치에 은유 가능 | 현재 |
| --- | --- | --- |
| linear attention + gating | long stream **O(1) state** · data-dependent gate | `gem-gla-gated-linear-attention` (exp) |
| Taylor linear + **sliding window** | local exact + global linear · **recall–memory Pareto** | `gem-based-linear-attention` (exp) · `gem-lightning-weave` (PDF) |
| dynamic depth / early exit | 불확실 샘플만 깊은 cascade | `gem-beckmann-transport` |
| fair budget compare | 베이스라인 대비 **동일 검사 budget** 비교 | quant-ts·Pareto |
| middle-layer focus | — | LLM 전용, 표 GBDT 무관 |

## 경계

- 코드·체크포인트 **투입 ❌**
- 9/21 전 **에이전트 컨텍스트 제외** (`gem-rsi-workspace-harness`)

## Beckmann 중복

[hooshaaii / 2100291378982830441](https://x.com/hooshaaii/status/2100291378982830441) Beckmann 홍보 → **`gem-beckmann-transport`** (별 id 없음). [`beckmann-transport-2026-09-17.md`](beckmann-transport-2026-09-17.md) 출처에 추가.

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | _(파일은 묶음; 레지스트리는 id별 **7+1**행)_ |
| 유형 | `idea` |
| 상태 | **deferred** (전 항목) |
