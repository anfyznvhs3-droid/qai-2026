# DualSQL · Text-to-SQL multi-agent RL (Google · OSU) (2026-09-23)

## 출처

- **트리거 트윗:** [@omarsar0 / 2102402295682224325](https://x.com/omarsar0/status/2102402295682224325) (2026-09-22) — elvis (DAIR.AI)
- **논문:** [DualSQL: Text-to-SQL with Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2609.18135) · arXiv:2609.18135 · Chen (OSU, Google 인턴), Gan, Chung, …, Su, Ozcan (Google)
- **Scout:** fxtwitter API + arXiv 본문 (2026-09-23)

## 트윗 vs 논문

| omarsar0 | 논문 |
| --- | --- |
| 2 agent (schema linking / SQL 생성) · **같은 weight** | §1 · parameter-shared open-weight LLM · 단일 agentic scaffold |
| 3 tool로 DB 질의 | metadata profiling · full-text search · SQL execution |
| MARL collapse → guardrail + **robust execution match** | 엄격 format check·rollout cutoff·error-focused loss masking · **REX** (EX의 포맷 민감·중복 무감 보정) |
| 3,755 예제 · 4B **68.0%** BIRD dev · 8B **71.1%** | abstract 일치 · 「32B 단일모델 상회」 |

→ 트윗 정확. 수치 원문 그대로.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| DualSQL · MARL · Text-to-SQL | ❌ | LLM RL — 제출 Model GBDT+로컬 · `gem-mimo-rl-harness`·`gem-codemidas`와 같은 deferred 축 |
| 팀 협업 도구에 Text-to-SQL agent | ❌ | `data/raw/`는 CSV 수 개 — pandas·grep으로 충분 · Library Drift |
| **은유** — REX: 평가 지표가 reward를 오염 | △ | 「EX는 포맷에 민감·중복에 무감」 ≈ 우리 KPI도 **accuracy-only** 3종 가이드북 함정 → PR-AUC·cost-weighted (`gem-quant-ts-playbook`) |
| **은유** — schema linking 먼저, 생성 나중 | △ | 2종 융합 = **Join 키·컬럼 매핑 먼저 lock** → 그 위에 모델 (`kamp-fusion-ablation` 계보 표) |
| **은유** — 3,755 examples로 32B 상회 | △ | `gem-codemidas`(filtered > vanilla)·`gem-suzuki`(소데이터→얕은 모델)와 **같은 논거** — 중복 인용 ❌ |
| elvis 큐레이션 | ✅ | Scout 축 · 정확도 높은 요약자 |

## K-AI — 우리 파이프 대응

| DualSQL | Q.AI |
| --- | --- |
| schema linking agent | **데이터 계보·Join manifest** — 어떤 테이블·컬럼을 잇나 (`kamp-fusion-ablation`) |
| SQL generation agent | GBDT 학습·infer |
| 3 DB tools (profile·search·execute) | `data-card.md` 프로파일 · 가이드북 grep · `src/` smoke run |
| REX (reward 정합) | KPI = 현장 손실 기반 (불량률·재검사·정지) — accuracy-only ❌ |
| rollout guardrail (format·cutoff) | infer **스키마 고정** (`gem-typesafe-calibrated-decisions`) · 실험 3종 cap |

## 경계

- **LLM·RL·Text-to-SQL** — Model·제출 zip·협업 도구 **❌**
- `gem-seekdb-agent-state` (agent DB) · `gem-paper2agent` (MCP) — agent infra deferred 축과 동일
- 「소데이터로 큰 모델 상회」 논거는 `gem-codemidas`·`gem-suzuki`에 **이미 배정** — 본 gem은 **REX=지표 정합 은유**만
- PDF에 DualSQL·BIRD 수치 인용 **❌** (도메인 무관)

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | **pull ❌** |
| Sprint 1 KPI 설계 | 「지표가 잘못되면 최적화가 잘못된다」 내부 체크 — accuracy-only 가이드북 3종 대비 |
| PDF | 인용 ❌ |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-dualsql-multi-agent-rl` |
| 분류 | **MIX 원석** (`idea`) |
| 상태 | **deferred** (pull ❌ · REX 은유만) |
| 적용 축 | KPI 설계 은유 — Model·PDF **❌** |

## 관련

- `gem-mimo-rl-harness` · `gem-codemidas-filtered-rl-tasks` · `gem-quant-ts-playbook` · `gem-typesafe-calibrated-decisions`
- `.cursor/skills/kamp-fusion-ablation`
