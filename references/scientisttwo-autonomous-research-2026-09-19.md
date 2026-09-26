# Google · ScientistTwo → 문제 설정·검증 루프 (2026-09-19)

## 출처

- **트리거:** [@ai_database / 2101216062570410407](https://x.com/ai_database/status/2101216062570410407) (2026-09-19) — AIDB 일본어 요약
- **논문:** *ScientistTwo: Pioneering the Human Knowledge Frontier with Autonomous AI* — [arXiv:2609.19644](https://arxiv.org/abs/2609.19644) (2026-09-17)
- **프로젝트:** [scientist-two.github.io](https://scientist-two.github.io/)
- **저자:** Jaehyun Nam, Jinsung Yoon et al. · Google Cloud AI Research · Waterloo
- **Scout:** fxtwitter + 프로젝트 페이지 (2026-09-19)

## 요지 (AIDB·공식 페이지)

**완전 자율 다중 에이전트 연구 프레임워크** — ICLR·ICML·NeurIPS **채택 논문 107건**을 시드로:

| 지표 | 값 |
| --- | --- |
| 인간 SOTA **초과** | **86 / 107** (80.4%) |
| 평균 **상대 개선** | **+25.2%** |
| ScholarPeer 평균 | **7.5/10** (채택 ICLR·NeurIPS 평균 상회) |
| Stanford Agentic Reviewer | **5.7/10** (베이스라인 0% accept vs 본 시스템 72.1%) |
| 논문당 비용·기간 (AIDB) | **~2.5일 · ~$3,765** |
| 연속 기록 갱신 | 자체 신방법을 다음 시드로 **3회 연속** (사례) |

**루프:** Idea → Evaluator(부분 벤치 선별) → Analyzer(ablation) → Writer → **Peer-Review ↔ Rebuttal(추가 실험)** → Meta-Review until accept bar.

**CoE Integrity Audit (4항):** score 재현 · spec 위반 없음 · 인용 hallucination 0 · method–code 정합.

**AIDB·논문 공통 caveat:** 평가는 **AI 심사·시뮬레이션** — **실제 학회 게재·채택 아님**. 출발점은 인간이 쌓은 채택 연구. **「좋은 문제를 인간이 세팅 → 이후는 AI가 가속」**.

## MIX 잠재 — **운영·실험 위생만**

| ScientistTwo 패턴 | K-AI 대응 | 축 |
| --- | --- | --- |
| **문제만 인간** | 9/21 **과제 lock** · 가이드북 `Flags`·LOT 분할 **고정** | Data · 운영 |
| Subset-first screening | 실험 **3종 cap** · prune ritual | Model · 실험 |
| Ablation → 가설 정제 | `experiment-log` **실패 원인 필드** | Model |
| Peer-review ↔ rebuttal | `gem-qm-ocx-collab` **Review Gate** · 수치 잠금 | 운영 · PDF |
| CoE score verification | **재현 가능** `src/` · 지표 **Model 잠금 후**만 | Model · PDF §6 |
| ScholarPeer 자동 점수 | **PDF·발표 수치 인용 ❌** (review_needed) | — |
| ScientistTwo·Gemini API | **제출·학습 ❌** (`AGENT.MD` §3) | — |

**투입 ❌:** ScientistTwo 에이전트 · 자율 논문 생성 · LLM 연구 루프 · **「AI가 86편 beat」 서술을 PDF에 직접 인용**

**우리 구현:** GBDT+보정 **로컬 파이프** — ScientistTwo는 **운영 은유**(문제 설정·검증·prune)만.

## 경계

- `gem-google-learning-interactives` — **교사 HITL** / 본 gem — **자율 루프의 반대편 교훈**(인간 문제·Review Gate 필수)
- `gem-rsi-workspace-harness` — Library Drift · 본 gem — **가짜 실험·hallucination** 경계 (MLR-Bench 80% fabricated와 동조)
- `gem-ngu-rl-llm` · LLM deferred 묶음 — **pull ❌** 중복
- KAMP **제조AI** ≠ 자율 ML 논문 공장

## pull 조건

| 时机 | 用途 |
| --- | --- |
| PDF §8·팀 운영 | 「과제 lock + Review Gate + 재현 체크리스트」 1문장 |
| experiment-log | ablation·실패 원인 **필드 강화** |
| pull ❌ default | ScientistTwo · ScholarPeer · 자율 연구 API |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-scientisttwo-autonomous-research` |
| 유형 | `idea` |
| 상태 | **deferred** · **pull ❌** (운영·실험 은유만) |
| 적용 축 | 운영(Review Gate) · 실험 prune · 재현 위생 |

## 관련

- `gem-qm-ocx-collab` · `gem-rsi-workspace-harness` · `gem-google-learning-interactives`
- [`docs/mix-application-plan.md`](../docs/mix-application-plan.md) §6·§7 · [`AGENT.MD`](../AGENT.MD) §3
- ScientistOne [arXiv:2605.26340](https://arxiv.org/html/2605.26340) · ScholarPeer [arXiv:2601.22638](https://arxiv.org/abs/2601.22638)
