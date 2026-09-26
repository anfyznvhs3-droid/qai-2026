# CodeMidas · filtered RL tasks > vanilla scale (2026-09-22)

## 출처

- **트리거 트윗:** [@dimentary / 2102213081854279719](https://x.com/dimentary/status/2102213081854279719) (2026-09-22) — CodeMidas 인용·코멘트
- **원 논문 트윗:** [@_TobiasLee / 2102031675916169648](https://x.com/_TobiasLee/status/2102031675916169648)
- **논문:** [CodeMidas: Scaling Agentic Coding RL Environments from Code Itself](https://arxiv.org/abs/2609.22068) · arXiv:2609.22068 · Xiaomi / HKU / PKU
- **Scout:** fxtwitter API + arXiv abstract (2026-09-22)

## 트윗 vs 논문 (숫자)

| dimetary 코멘트 | 논문 §1·§3.4·ablation |
| --- | --- |
| **1k filtered** RL tasks > **8k vanilla** (validation) | **3k** 고품질 subset이 **cleaning·filtering 없는 8k baseline**보다 SWE-bench Pro·DeepSWE·CodeMidas Val **전부 우세** |
| 8k vanilla = test construction **step 2 직후** 샘플 | **post-rollout filtering** 전 단계 — adversarial rollout·solution review·success-rate gate **미적용** |

→ 핵심은 **양(8k) < 큐레이션+검증(1k~3k)** — RL 코딩 전용이지만 **실험 설계 은유**로만 사용.

## 논문 요지 (한 줄)

오픈소스 **코드만**으로 agentic pipeline이 behavioral spec·execution-grounded test·**post-rollout filter**를 거쳐 **5,545** verifiable coding RL task를 만들고, GRPO로 MiMo-V2.5를 학습 — issue repair·whole-program·terminal 등 **5 benchmark** 전부 상승.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| CodeMidas pipeline·GRPO·MiMo | ❌ | LLM agent RL — KAMP **GBDT+로컬** · `gem-mimo-rl-harness`와 동일 **pull ❌** |
| 8k feature dump·무검증 split | ❌ | dimetary/논문 = **filter 전 baseline**이 열위 — `kamp-leakage-audit`·fold 내 TE와 **반대** |
| **은유** — task/filter 품질 > raw N | △ | KAMP **2종 융합**·가이드북 **2권 선별**·Ablation A0/A1 — “많이 > 좋게” **금지** |
| **은유** — post-rollout filter | △ | dev 검증·leakage checklist·**rollout success-rate gate** ≈ 실험 전 **과제 적격성** (`gem-scientisttwo` Review Gate) |
| **은유** — 8k vs 1k 비교 문장 | △ | PDF §4·§6 — **`gem-smelt-looped-budget`** 동일 budget·동일 split 하 **filtered vs vanilla FE** 1문장 |
| dimetary (physical learning·evals) | ✅ | 코딩 RL **품질 ablation** 큐레이션 — Scout 축 |

## K-AI — 우리 파이프 대체

| CodeMidas | Q.AI |
| --- | --- |
| agentic env construction | `data/raw/` + README + **data-card** |
| execution consistency check | Join manifest · time-window · **leakage audit** |
| post-rollout filtering | Ablation A0/A1 · dev holdout · **3 experiment cap** |
| 8k vanilla baseline | 가이드북 **무작위 RF**·target encoding **전역** = “filter 전” |
| 1k~3k filtered train | **2종 KAMP** 큐레이션 + Recipe A/B/C **단일 스토리** |
| CodeMidas Val | **공식 dev split** · group/time split — random ❌ |

## 경계

- **코딩 RL·GRPO·harness** — Model·제출 zip **❌**
- `gem-mimo-rl-harness` · `gem-ngu-rl-llm` · `gem-es-grpo-reasoning-coverage` — LLM RL deferred 묶음과 **중복**
- “filtered > vanilla”를 **외부 벤치마크 수치**로 KAMP PDF에 **직접 인용 ❌** (코딩 agent 전용)
- 50종 가이드북 **전부 투입** = 8k vanilla 은유 — **2종 lock 후 prune**

## pull 조건

| 时机 | 用途 |
| --- | --- |
| default | **pull ❌** · pipeline·GRPO **설치 ❌** |
| PDF §4·§6 | **동일 budget** filtered vs unfiltered ablation **1문장** (`gem-smelt-looped-budget`와 짝) |
| Sprint 1 | 데이터 **2종 선정**·leakage gate — **내부 메모** (CodeMidas 브랜드 **본문 ❌**) |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-codemidas-filtered-rl-tasks` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌ · PDF §4·§6 **선택 1문장**) |
| 적용 축 | Ablation·leakage·**품질>양** — Model·Data **직접 ❌** |

## 관련

- `gem-mimo-rl-harness` · `gem-smelt-looped-budget` · `gem-scientisttwo-autonomous-research`
- `.cursor/skills/kamp-leakage-audit` · `kamp-fusion-ablation`
- [`docs/task-lock-2026-09-21.md`](../docs/task-lock-2026-09-21.md) — 2026 Ablation·2종 융합
