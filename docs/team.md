# 팀 Q.AI

기준일: 2026-09-22 (Asia/Seoul) — **첫 팀 회의 반영**  
대회: 2026 제6회 K-AI 제조데이터 분석 경진대회  
트랙: 중소·중견기업 재직자 부문 (`CPT_SEQ=39`)

## 표기

| 항목 | 값 |
| --- | --- |
| **팀명** | **Q.AI** |
| **공식 표기** | `Q.AI` (점 포함) |
| **영문 확장** | _(미정 — KAMP 신청 시 확정)_ |
| **한글 부제** | _(미정)_ |

## 멤버 (3명)

| 이름 | 역할 (Sprint 0) | 소개·근무 | 재직·중소·중견 |
| --- | --- | --- | --- |
| **정진우** | 아이디어 수집 · **AI agent 협업 도구** (~9/25) | 자동차부품 **품질관리** · 평택 근무 · 수원 거주 · 2025 파이썬 데이터분석 부트캠프 수료 · AI 통계·데이터분석 · **작년 K-AI 지원 경험** | `review_needed` |
| **최연식** | **데이터 2종 융합 사전 EDA** (~9/25) | 통계학·AI 전공 · AI 경력 ~4년 (ML·Audio·Vision·LLM) · 별도 AI 경진 참가 중 · **수상 목표** | `review_needed` |
| **엄예지** | 아이디어 수집 (~9/25) | **산업경영공학** · 화성 **제조업 QC** · 수원 거주 · 대학 프로젝트 중심 | `review_needed` |

## 출제안 · 문제 범위 (2026-09-22 확정)

| 항목 | 값 |
| --- | --- |
| **출제안** | **① 기업 현안 해결형** — KAMP 다종 제조데이터 기반 기업 현안 해결형 제조 AI 분석 모델 개발 |
| MIX 레시피 | **A** (잠정 — 아이디어·데이터 확정 후 B/C 재검토) |
| **현업 문제** | 제조공정·설비·품질 등 **현장형**만 — 사무·엑셀 전표 자동화 등 **제외** |
| 예시 | 설비 다운 → 인력 과투입 · 불량 다발 · _(9/23~25 아이디어 수집)_ |
| **미확정 (~9/25 → 토 9/27 hard)** | 문제 **1문장** · KAMP 데이터셋 **2종 ID** · KPI · `data/raw/` |

### 일정 압박 (추석 연휴)

- **9/27 (토)까지** 데이터 선택 + **배경(문제·2종·KPI) lock** → **모델 학습 착수** 가능 상태 필수
- 아이디어 수집 양식: **별도 배포** (팀 내부)

## 협업 (2026-09-17 + 2026-09-22)

**QM full deploy ❌** — Fly/AWS·Postgres·Slack까지는 3인·~2주 경진대회에 과함.  
**QM + OCX 패턴 ✅** — personal scope + 공유 decision/blocker만.

| surface | 용도 | 담당 |
| --- | --- | --- |
| `AGENT.MD` · `AGENTS.md` | 실행 계약 (단일 진실) | 공통 |
| `docs/decision-log.md` | 결정·blockers | 공통 |
| `docs/board.md` | Sprint·3W | 공통 |
| git branch / worktree | 멤버별 Model·실험 분리 | Model owner |
| AI agent 협업 도구 | Cursor/Claude 등 팀 배포 (~9/25) | **정진우** |
| `gem-opennews-ops-layer` catalog | 실험 run·impact·action | agent |
| PDF 수치 | validation 확정 후만 — Review Gate | 공통 |

회의 설계: `gem-iwashi-meeting-facilitation` — **ゴール=状態変化** · 종료 **3W** → board·decision-log  
상세: [`references/qm-ocx-collab-2026-09-17.md`](../references/qm-ocx-collab-2026-09-17.md) · [`decision-log.md`](decision-log.md) §2026-09-22

## 레퍼런스 링크

사용자·팀 URL·스킬 → [`docs/reference-concepts.md`](reference-concepts.md) **`gem-*`** · `references/<id>.md`

## 관련

- [`decision-log.md`](decision-log.md) — 2026-09-22 첫 회의
- [`board.md`](board.md) — Sprint 1 owner·마감
- [`task-lock-2026-09-21.md`](task-lock-2026-09-21.md) — 출제안 ① 규정
- [`AGENT.MD`](../AGENT.MD) — 실행·제출 계약
