# iwashi · ミーティング・ファシリテーション入門 (2026-09-22)

## 출처

- **트리거 트윗:** [@MacopeninSUTABA / 2102231913293361211](https://x.com/MacopeninSUTABA/status/2102231913293361211) (2026-09-22, 日本語 · 生成AI活用 큐레이션)
- **원 자료:** [Speaker Deck · introduction-to-meeting-and-facilitation](https://speakerdeck.com/iwashi86/introduction-to-meeting-and-facilitation) · **岩瀬 @iwashi86** · Stockmark Co-VPoE · 2022-01 (社内勉強会 一部公開)
- **Scout:** fxtwitter API + Speaker Deck transcript (2026-09-22)

## 트윗 vs 원본

| MacopeninSUTABA 요약 | Speaker Deck 본문 |
| --- | --- |
| 「会議のゴール＝状態の変化」 | 4タイプ(発散·収束·進捗·情報) **いずれも** 終了後の **状態変化** がゴール |
| 事前準備で無駄排除 | 目的=状態の言語化 · 参加者最小 · 25/50分 · 黙読5–10分 |
| 短時間でアクション | 終盤 **3W (When/Who/What)** · やらないことも同期 |

→ 트윗은 **핵심 프레임**만; 후반 facilitation 상세는 배포판 **일부 생략**.

## 핵심 프레임 (Q.AI용)

| iwashi | K-AI Sprint 회의 |
| --- | --- |
| ゴール = **変化後の状態** (「議論すること」❌) | 예: 「출제안②·2종 ID·KPI·담당 3W가 decision-log에 있음」 |
| 4タイプ — **収束** = 複数案→1つ | 출제안 ①②③ · 50종→**2종 lock** |
| 事前 — SMART로 종료 상태 검증 | 50분 안에 **Attainable**한 agenda만 |
| 参加者 ≤7 · 迷ったら呼ばない | ≤3인 팀 — **겸임 OK**, 불필요 stakeholder ❌ |
| 序盤 check-in · 黙読 | `task-lock`·가이드북 요약 **5분 선독** 후 논의 |
| 終盤 **3W** · 個人名 | `docs/board.md` owner · `decision-log` **날짜+담당** |
| 振り返り | prune ritual · 「同じ話を一ヶ月前に」= blocker 기록 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| Stockmark 社内プロセス **전면 도입** | ❌ | 조직·문화 상이 — **패턴만** |
| 「1行プロンプト100」 등 Macopenin **프롬프트 상품** | ❌ | 본 gem = **회의 설계** · Model·PDF **❌** |
| **active** — kickoff·Sprint 회의 설계 | ✅ | `gem-qm-ocx-collab`·`gem-taskview-agent-board` **보완** |
| AI 에이전트가 회의 **대체** | ❌ | 사람 **収束**·3W 확정 — agent는 **기록·board 갱신**만 |

## K-AI — 우리 surface 대체

| iwashi | Q.AI |
| --- | --- |
| 打合せ案内の目的(状態) | 회의 전 `docs/board.md` **목표 상태** 1줄 |
| 議事録 | `docs/decision-log.md` |
| 3W | board `담당`·`상태`·마감(10-08) |
| ファシリテーター | 회의 진행 1인 · agent는 commit 보조 |
| 進捗確認タイプ | Sprint 1 `board.md` standup (주 1회·25분) |

## 경계

- **제조 Model·leakage·GBDT** — 본 gem **직접 ❌**
- `gem-google-learning-interactives` — 4단 파이프 **은유**와 겹치나 본 gem은 **사람 회의** 전용
- MacopeninSUTABA = **二次 큐레이션** — 인용 시 **iwashi + Speaker Deck** 원출처
- 箇条書き vs 文章 논쟁(資料内) — Q.AI는 **board/decision-log = 구조화 bullet** 유지 (`AGENTS.md` 파싱)

## pull 조건

| 时机 | 用途 |
| --- | --- |
| default | **active** — 팀 회의·kickoff **설계 체크리스트** |
| 회의 후 | 결과를 **状態(決定)** + **3W**로 `decision-log`·`board` 반영 |
| PDF | **인용 ❌** (팀 운영 내부) |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-iwashi-meeting-facilitation` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **active** (팀 회의 패턴) |
| 적용 축 | **팀 운영** — Sprint kickoff·収束 회의 |

## 관련

- `gem-qm-ocx-collab` · `gem-taskview-agent-board` · `docs/board.md` · `docs/decision-log.md`
- [`docs/mix-application-plan.md`](../docs/mix-application-plan.md) §6
