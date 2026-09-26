# Google · Learning Interactives → HITL·가드레일 패턴 (2026-09-19)

## 출처

- **트리거:** [@xiaohu / 2100843347107893622](https://x.com/xiaohu/status/2100843347107893622) (2026-09-18) — 小互 · 中文摘要
- **블로그:** [Google Research — learning interactives + generative UI](https://research.google/blog/the-future-of-practice-enabling-teachers-to-create-learning-interactives-with-generative-ui/)
- **논문:** [arXiv:2609.20738](https://arxiv.org/abs/2609.20738) — *Harnessing Generative UI for Education: Tailored Learning Interactives* (2026-09-17)
- **Scout:** 블로그·abstract (2026-09-19)

## 요지

Gemini **generative UI**로 교사가 **맞춤형 학습 시뮬** 생성:

| 단계 | 내용 |
| --- | --- |
| 입력 | 과목·학년·주제 (+ 추가 요구) |
| 목표 | AI가 **학습 목표** 생성 → **교사 검토·수정** |
| 생성 | **5개 후보** 시뮬 → 교사가 1개 선택 (5단계 스테이지·힌트·해설·피드백) |
| 공개 | **교사 승인 후**만 라이브러리 — 4단계 가드레일(기획·스테이지·코드·튜터) |

STEM 30+ 영어 샘플 · Workspace for Education 파일럿.

## MIX 잠재 (deferred) — **운영·PDF 패턴만**

| Google 패턴 | K-AI 대응 | 축 |
| --- | --- | --- |
| 교사 HITL | `gem-qm-ocx-collab` **Review Gate** · `τ_review` 사람 검토 | 운영 · PDF §7 |
| 4단계 가드레일 | `src/` **ingest→split→train→evaluate** 사이 검증 체크 | Model · 재현 |
| 5 후보 → 1 선택 | 실험 **3종 cap** · prune ritual (`mix-application-plan`) | 실험 설계 |
| 5단계 스테이지 | cascade **2차 검사** (`gem-beckmann`) 은유 | Model · PDF |
| GenUI·Gemini API | **제출·학습 ❌** (`AGENT.MD` §3) | — |

**투입 ❌:** 교육 시뮬 생성 · LearnLM · Workspace pilot · **발표용 LLM 데모** (규정 확인 전)

## 경계

- KAMP **제조AI** ≠ 교육 GenUI — 스토리 **직접 복사 ❌**
- 「교사=현장 QC·공정 담당자」 **은유만** — PDF §8 PoC 교육·온보딩 1문장
- `gem-taskview-agent-board` · git+markdown 보드와 **중복** — 승인 게이트만 MIX

## pull 조건

| 时机 | 用途 |
| --- | --- |
| PDF §7·§8 | 「자동 알람 + **사람 승인 게이트**」 · 5후보 실험 prune |
| pull ❌ default | Gemini·GenUI 제품 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-google-learning-interactives` |
| 유형 | `idea` |
| 상태 | **deferred** · **pull ❌** (HITL 패턴만) |
| 적용 축 | 운영(Review Gate) · PDF §7·§8 · 실험 prune |

## 관련

- `gem-qm-ocx-collab` · `gem-typesafe-calibrated-decisions` · `gem-beckmann-transport`
- [`docs/mix-application-plan.md`](../docs/mix-application-plan.md) §6 협업 · §7 prune
