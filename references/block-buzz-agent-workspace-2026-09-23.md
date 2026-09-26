# Block Buzz · 사람+agent 공유 워크스페이스 (Nostr relay) (2026-09-23)

## 출처

- **트리거 트윗:** [@bkdgiffug / 2102503955804909828](https://x.com/bkdgiffug/status/2102503955804909828) (2026-09-22, 中文) — `gem-taskview-agent-board`와 같은 큐레이터
- **repo:** [github.com/block/buzz](https://github.com/block/buzz) · Block (Square) · **Apache-2.0** · Rust · 2026-03 생성 · **34k★** · 어제 push
- **Scout:** fxtwitter API + README + GitHub API (2026-09-23)

## 트윗 vs README

| lumxss 요약 | README |
| --- | --- |
| agent들이 「서로 뭘 했는지 모르는」 문제 → 같은 워크스페이스 | **Nostr relay** — 메시지·reaction·workflow·review·git 이벤트가 **하나의 signed event log** |
| 메시지·commit·Review·merge 기록 | NIP-34 git events · 「branch = room」 · 감사 로그 |
| agent 독립 신원·권한 · 채널 참여·repo 생성·commit·리뷰 | 「Agents are members, not bots」 — 자기 keypair · 채널 멤버십 · **identity로 scope** |
| Win/mac/Linux · agent 전용 CLI | Tauri 데스크톱 · `buzz-cli` (JSON in/out) · ACP harness (Goose·Codex·Claude Code) |

→ 트윗 정확. 단 README 자체가 「✅ 동작 / 🚧 배선 중 / 💭 코드 없음」 3열로 미완성 부분을 명시 — approval gate·모바일·push는 **아직**.

## 실체

| 항목 | 값 |
| --- | --- |
| 스택 | Rust relay + Postgres + Redis + object storage (hosted) · self-host 가능 |
| 정체 | Slack + 포지 + CI 대시보드 + 검색을 **한 event log**로 통합하려는 시도 |
| 동작 | 채널·스레드·DM·canvas·검색·audit · YAML workflow · git hosting |
| 미완 | workflow approval gate · huddle · 모바일 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| Buzz self-host → 팀 협업 도구 | ❌ | `gem-qm-ocx-collab`·`gem-taskview`와 **같은 결론** — relay·Postgres·Rust 빌드는 3인·15일에 과함 · 9/17 「git+markdown 고정」 |
| **정진우 S0-4 (AI agent 협업 도구 ~9/25)** 후보 | ❌ | 도구 「개발·배포」 = **repo 규칙 + AGENTS.md + board.md**로 충분 · Buzz는 그 위에 얹을 인프라가 아님 |
| **패턴** — 「agent도 멤버, 같은 audit trail」 | ✅ | Cursor/Claude가 `board.md`·`decision-log` 갱신 시 **commit author·근거 gem id** 남기기 = 우리식 signed event |
| **패턴** — 「branch = room」 | ✅ | `exp/<member>/<topic>` 브랜치 + 해당 실험 run을 `board.md` 한 행에 — 이미 §6 |
| **패턴** — 「have we seen this before?」 incident memory | △ | `decision-log` + `reports/experiment-log` **실패 원인 필드** grep — DB ❌ |
| lumxss 큐레이션 | ✅ | agent 협업 도구 Scout 축 (TaskView·Buzz) |

## K-AI — 우리 surface 대응

| Buzz | Q.AI |
| --- | --- |
| relay event log | **git log** (commit = signed event) |
| channel / thread | `docs/board.md` 행 · `decision-log` 항목 |
| agent keypair·identity | commit author `agent/<host>` 또는 멤버 이름 + 근거 `gem-*` |
| NIP-34 patch·review | git branch + 사람 review (`Review Gate`) |
| `buzz-cli` JSON in/out | `AGENTS.md`가 board 스키마 정의 → agent 파싱·갱신 |
| YAML workflow | `.cursor/skills/kamp-*` 5종 |
| search 6개월 | `rg` on `docs/` `reports/` `references/` |

## 경계

- **Buzz 배포·Nostr·relay** — 팀 도구·제출 **❌**
- `gem-qm-ocx-collab` (QM) · `gem-taskview-agent-board` (TaskView) · `gem-seekdb-agent-state` (agent DB)와 **같은 축 4번째** — 결론 동일, 새 인프라 ❌
- 34k★는 Block 브랜드 효과 — 성숙도는 README 3열표 기준

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | **pull ❌** · 설치 ❌ |
| S0-4 (정진우) | 「agent = 멤버 · audit trail = git」 **원칙 1줄**을 협업 규칙 문서에 — Buzz 브랜드 ❌ |
| 제출 후 | 다음 대회·원격 팀이면 QM vs Buzz 재검토 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-block-buzz-agent-workspace` |
| 분류 | **MIX 원석** (`idea`) |
| 상태 | **deferred** (패턴만 · 도구 ❌) |
| 적용 축 | 팀 운영 — S0-4 협업 규칙 |

## 관련

- `gem-qm-ocx-collab` · `gem-taskview-agent-board` · `gem-iwashi-meeting-facilitation` · `gem-seekdb-agent-state`
- [`docs/board.md`](../docs/board.md) S0-4 · [`docs/team.md`](../docs/team.md) 협업
