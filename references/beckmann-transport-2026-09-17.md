# Discrete Beckmann Transport → teacher-free·불확실성 정제 (2026-09-17)

## 출처

- **트리거 트윗:** [@askalphaxiv / status/2100139877916676135](https://x.com/askalphaxiv/status/2100139877916676135) · [@hooshaaii / 2100291378982830441](https://x.com/hooshaaii/status/2100291378982830441)
- **논문:** [arXiv:2609.15903](https://arxiv.org/abs/2609.15903) — *Discrete Beckmann Transport Models for One-Step Language Modeling and Reasoning*
- **alphaXiv:** [alphaxiv.org/abs/2609.15903](https://alphaxiv.org/abs/2609.15903)
- **저자:** Sophia Tang, Shiyi Wang (2026-09-14, cs.LG · v2 2026-09-15)
- **Scout:** _(미실행 — fxtwitter + arXiv API 확인, 2026-09-17)_

## 트윗 요약 (alphaXiv)

> Few-step diffusion/flow LM은 보통 **teacher distillation** 필요 → 학습 비용·student 상한이 teacher에 묶임.  
> 이 논문은 noise→discrete token **직접 경로** — teacher·diffusion time 없이 **1-step** 생성.  
> step을 늘리면 작은 ODE step이 아니라 **불확실 token만 재방문**하고, **이미 confident한 token**으로 수정.

## 원본이 하는 일 (채택 범위)

| 구분 | 내용 | MIX |
| --- | --- | --- |
| DBTM | time-independent flow → **1-step fixed point** | **1-pass + 선택적 refine** 구조 |
| conservation residual | 데이터에서 **직접** 학습 — teacher flow ❌ | **teacher-free 베이스라인** 사고 |
| partial-context interpolant | 추가 eval = **refinement step** (ODE integration ❌) | **불확실 샘플만 2차 검사** |
| discrete diffusion/flow baseline | LLM 생성 | **알고·벤치 채택 ❌** |

## 제조 대응 (`AGENT.MD` §4.1 · §4.3)

| 논문 패턴 | 제조 대응 | 축 |
| --- | --- | --- |
| teacher distillation **회피** | legacy 규칙·teacher score에 **종속되지 않는** end-to-end 1차 모델 | Model |
| 1-step map → fixed point | **단일 forward** 이상 점수 — 현장 latency·검사 부하 최소 | Model · 운영 |
| uncertain만 **revisit** | entropy·margin 낮은 LOT/윈도우만 **2차 센서·인간·heavy model** | Model · PDF |
| confident token **앵커** | 고신뢰 구간·공정 phase를 **조건**으로 weak 구간 재추정 | Model |
| refine step ≠ 더 촘촘한 적분 | 추가 비용 = **선택적 cascade** (전량 재검 ❌) | PDF · `gem-opennews-ops-layer` |

## MIX 투입 — 실험 3종 (9/21 이후)

1. **1-pass + cascade** — LGBM/CatBoost 1차 → `P(y|x) < τ` 또는 margin 하위 q%만 2차 feature·모델
2. **고신뢰 앵커** — 설비·공정 segment별 confident 구간 mask → 잔차·이상 score **조건부** 재학습
3. **비용 곡선** — 1-step vs +1 refine vs +2 refine → recall vs inspections/day (`gem-quant-ts-playbook` 연동)

## 경계

- discrete Beckmann transport·flow **코드·LM 체크포인트 투입 ❌**
- alphaXiv MCP·OpenResearch **제출 파이프라인 ❌** — 논문 **읽기·아이디어**만
- 과제 `data/raw/` **합성·대체 금지**
- `gem-lightning-weave`(specialist 합성)와 **상호 보완** — teacher-free 1-pass vs dual specialist Pareto

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-beckmann-transport` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **active** (cascade·uncertainty refine 구조만) |
| 적용 축 | **Model** (cascade·calibration) + **PDF** (검사 부하 trade-off) |

## 관련

- `gem-lightning-weave` — Pareto·specialist 합성
- `gem-quant-ts-playbook` — 비용 임계·홀드아웃
- `gem-opennews-ops-layer` — impact·행동 신호 (정지/점검/유지)
- `docs/reference-concepts.md` — `gem-beckmann-transport`
- `reports/leakage-audit-checklist.md` — cascade 2차 split
