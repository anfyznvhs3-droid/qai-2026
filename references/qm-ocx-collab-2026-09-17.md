# QM + agent-ledger → Q.AI 협업 패턴 (2026-09-17)

## 출처

- **트리거 트윗:** [@XAMTO_AI / status/2100006750652973431](https://x.com/XAMTO_AI/status/2100006750652973431) — YC **QM (Quartermaster)** 소개
- **repo:** [github.com/yc-software/qm](https://github.com/yc-software/qm) — *multiplayer agent harness* (Slack · Web · Fly/AWS)
- **로컬 OCX:** `F:\working\002.USEFUL\agent-ledger-blueprint` — Codex Command Center · Hackathon Teamspace · Review Gate · DATALOG
- **OCX 내 QM disposition:** `reference-projects/qm` — **archive-only, reuse authority ❌** (`docs/REFERENCES.md`)
- **Scout:** _(미실행 — GitHub README + fxtwitter + 로컬 AGENTS.md 확인, 2026-09-17)_

## 트윗·QM 요지

- 팀원 **각자 전용 AI workspace**(scope·memory·sandbox 분리)
- **Slack 채널·프로젝트**에서 같은 agent와 **공동 작업**
- Pi · OpenCode · Codex · Claude Code → **동일 core** (벤더 lock-in 완화)
- 배포: org-owned repo + `qm init` → **Fly / AWS** + Postgres 권장

## agent-ledger-blueprint (OCX) 대응

| QM 패턴 | OCX / Q.AI repo | 비고 |
| --- | --- | --- |
| personal scope | 멤버별 worktree · experiment run · `data/processed/` 분리 | git branch 규칙 |
| shared room / channel | `addons/hackathon-teamspace` — brief · tasks · blockers · runbook | **구조만** 차용 가능 |
| durable memory | `docs/decision-log.md` · `reports/experiment-log` · `gem-opennews-ops-layer` catalog | 제출 축과 분리 |
| multi harness | Cursor + Codex (OCX는 Codex-primary) | **하나의 실행 계약** `AGENT.MD` 유지 |
| audit | Black Box · DATALOG · Review Gate | PDF 수치 = Review Gate 전 검증 |
| admin / security | `AGENT.MD` §3·§4 · leakage checklist | Strict posture 불필요 — **경량** |

## Q.AI 협업 판단 (팀 ≤3 · 9/17 KAMP · 9/21 과제 lock)

| 옵션 | 적합 | 이유 |
| --- | --- | --- |
| **QM full deploy** (Fly/AWS+Postgres+Slack) | ❌ **비권장** | 일정·인프라 대비 과함; 제출물 아님 |
| **QM 구조만** (personal scope + shared decisions) | ✅ | 3인 역할·실험 충돌 방지 |
| **OCX hackathon-teamspace 패턴** | ✅ **우선** | 이미 로컬 · 경진대회 addon · Review Gate |
| **repo만** (`AGENTS.md` + decision-log + git) | ✅ **지금 기본** | 9/21 전 충분 |

**권장 스택 (경량):**

1. **역할 scope** — Data / Model / PDF 담당 1인씩(또는 겸임) · 각자 branch/worktree
2. **공유 surface** — `docs/team.md` · `docs/decision-log.md` · `reports/submission-outline.md` (Slack 대신)
3. **실험 카탈로그** — `gem-opennews-ops-layer`의 `catalog` + `query_runs` (QM “room memory” 대체)
4. **수치 잠금** — validation 확정 전 PDF·발표 수치 변경 ❌ (OCX Review Gate 축소판)
5. **9/21 이후** — 멤버 2인+ 원격이면 OCX teamspace **또는** Notion/Slack + 동일 필드만

## MIX 투입 (구조만)

| QM/OCX | Q.AI 적용 | 축 |
| --- | --- | --- |
| scope isolation | `experiments/<member>/<run-id>/` + leakage split | Model |
| shared blockers pad | `docs/decision-log.md` + README 체크리스트 | 팀 |
| impact + action | `infer` schema (`gem-opennews-ops-layer`) | Model · PDF |
| refinement on weak only | `gem-beckmann-transport` cascade | Model |

## 경계

- QM **제품·Slack bot·hosted agent37** → KAMP **제출·학습 투입 ❌**
- OCX **코드베이스 merge** → 경진대회 repo에 **이식 ❌** — `F:\working\002.USEFUL\` 포인터만
- `reference-projects/qm` — OCX 정책상 **archive-only**
- 외부 API·과제 raw **합성 금지** (`AGENT.MD` §3)

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-qm-ocx-collab` |
| 분류 | **MIX 원석** (`idea`) |
| 상태 | **active** (협업 **패턴**만) · QM deploy = **`review_needed`** |
| 적용 축 | **팀 운영** (9/17~제출) — Data · Model · PDF **조율** |

## 관련

- `docs/team.md` — 협업 권장
- `F:\working\002.USEFUL\agent-ledger-blueprint\docs\HACKATHON_TEAMSPACE_ADDON.md`
- `gem-opennews-ops-layer` · `gem-beckmann-transport` · `gem-lightning-weave`
- `docs/reference-concepts.md` — `gem-qm-ocx-collab`
