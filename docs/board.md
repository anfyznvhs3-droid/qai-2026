# Q.AI Agent Board — Sprint 1

기간: **2026-09-21 ~ 2026-09-28**  
과제 lock: [`task-lock-2026-09-21.md`](task-lock-2026-09-21.md) · 팀: [`team.md`](team.md)

**Hard gate 9/27 (일):** 문제 1문장 · KAMP **2종** · KPI → **모델 학습 착수** (추석 연휴)  
대회 에이전트 현황: [`agent-team-status.md`](agent-team-status.md)

---

## Blocked

- [x] 출제안 **①** 기업 현안 해결형 (2026-09-22 회의)
- [ ] 현업 **문제 1문장** + KPI (아이디어 수집 ~9/25)
- [ ] KAMP 데이터셋 **2종** 주/보조 ID (**9/27 토**)
- [ ] `data/raw/` 다운로드 (ID lock 후)
- [x] 아이디어 수집 **양식** — [`idea-form.md`](idea-form.md) (배포는 정진우)

---

## Sprint 0 — 회의 액션 (~9/25)

| id | 작업 | owner | status | When |
| --- | --- | --- | --- | --- |
| S0-1 | 현업 문제 아이디어 조사 | 정진우 · 엄예지 | **doing** | 9/23~ |
| S0-2 | 아이디어 정리·양식 제출 | 정진우 · 엄예지 | pending | **9/25** |
| S0-3 | 2종 후보 **사전 EDA**·융합 가능성 | 최연식 | pending | **9/25** |
| S0-4 | JARI 사람·에이전트 작업대와 10→3 결정판 — 아이디어 표는 사람이 채움 | 정진우 | **done** | **9/26** |
| S0-5 | **背景 lock** — 문제·2종·KPI → `decision-log` | **전원** | pending | **9/27 토** |

---

## Sprint 1 목표 (9/27~)

**최소 제출선:** group/time split · GBDT baseline · infer JSON · Ablation 골격 · PDF §1~4 초안

| id | 작업 | owner | status | 근거 |
| --- | --- | --- | --- | --- |
| S1-1 | 가이드북 **주 1권** datacard grep | agent | pending | 2종 lock 후 |
| S1-2 | `data/raw/` 수집 · `data-card.md` | 최연식 | pending | `gem-kaggle-feature-engineering` |
| S1-3 | EDA + Join/time-window · **데이터 계보** | 최연식 | pending | `kamp-fusion-ablation` |
| S1-4 | group/time split + GBDT baseline | 최연식 | pending | `kamp-baseline-gbdt` |
| S1-5 | Ablation: 보조 데이터 off | 최연식 | pending | `kamp-fusion-ablation` |
| S1-6 | infer schema (typesafe + opennews) | 정진우 | pending | `gem-typesafe-calibrated-decisions` |
| S1-7 | KPI·비용표 | 엄예지 | pending | `gem-quant-ts-playbook` |
| S1-8 | 보고서 hwpx → PDF §1~4 | 엄예지 | pending | `gem-nature-abstract-playbook` |
| S1-9 | zip README · requirements | 정진우 | pending | `kamp-submit-pack` |

---

## Run catalog

| run_id | impact | action | status |
| --- | --- | --- | --- |
| R-20260921-lock | official | 과제 공지·lock 문서 | done |
| R-20260922-kickoff | team | 출제안① · 역할 · 9/27 gate | done |
| R-20260921-prune | mix | 레시피 A · ~~출제안②~~ → **① 확정** | superseded |

---

## Review Gate (10/06~)

- [ ] 수치 잠금 · 깨끗한 환경 재실행
- [ ] 블라인드·zip·설문 캡처 체크
