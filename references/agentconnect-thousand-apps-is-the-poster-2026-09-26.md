# AgentConnect · 천 개 앱은 포스터다 (2026-09-26)

## 출처

- **트윗:** [QingQ77](https://x.com/QingQ77/status/2101500090628337895) · 2026-09-20 · 그림은 제품 홍보 화면
- **저장소:** [agentconnect-md/agentconnect](https://github.com/agentconnect-md/agentconnect) · Apache-2.0 · TypeScript · README는 2026-09-26에 연 `main`
- **Scout:** fxtwitter API + README + 그림 (2026-09-26). 클론 **하지 않음**

자리의 진행은 자리마다 덮어쓰는 카드다. 이 건은 트윗이 README의 문제 문장을 옮겼고, 그림의 앱 수가 그 본문에 없다는 쪽이다.

## 트윗 vs README

| 트윗 | README |
| --- | --- |
| 에이전트는 각자 터미널에 있고, 팀원은 보거나 이어받지 못한다 | 「대부분 에이전트는 한 사람의 터미널에 있는 개인 도구로 남는다. 팀원은 에이전트가 하는 일을 못 보고, 세션을 이어받지 못하고, 출력을 검토하지 못하며, 맥락은 노트북 한 대에 남는다.」 문제 제기는 같다 |
| 사람과 여러 에이전트를 같은 채팅과 워크플로로 데려온다 | 팀과 여러 에이전트가 Slack, Telegram, Discord, Lark, GitHub, GitLab, Gitea, Linear에서 같이 일한다. 일은 메시지, 이슈, 풀 리퀘스트, 웹훅, 일정에서 시작한다 |
| 그림의 「+1,000 apps」, Figma·Fireflies·Notion·Sentry | 그 수와 그 네 앱은 README 본문에 없다. 본문이 이름을 주는 연결은 위 채널과 웹훅이다 |
| (트윗은 Jev를 말하지 않음) | 라우팅과 모델 선택은 Jev다. 기본 기동은 Docker Compose로 웹 콘솔, 컨트롤 플레인, 릴레이, PostgreSQL이고 콘솔은 localhost:3000이다 |

그림 머리글 「Agents live in the channels, repos, and chats your team already has open」은 README의 「일이 있는 자리에 둔다」와 같다. 컨트롤 플레인은 승인된 조직 지식과 스킬 개정 외에는 메시지 본문을 저장하지 않는다고 적는다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| AgentConnect를 자리나 제출 경로에 두기 | ❌ | 채팅 플랫폼·데몬·Jev 라우팅이다. 자리는 보드이고 제출은 GBDT |
| 그림의 천 개 앱을 연결 범위로 적기 | ❌ | 그 수는 포스터에만 있다 |
| 팀원이 진행을 보게 하기 | 이미 있음 | 자리마다 카드 한 장. 세션을 Slack으로 넘기는 구조는 쓰지 않는다 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 에이전트 | 저장소를 받지 않음 · Jev API를 자리에 넣지 않음 |
| 경진 제출 | 제품 문장과 1,000은 PDF에 인용하지 않음 · 코드 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-agentconnect-thousand-apps-is-the-poster` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | 팀 운영 — 채팅 플랫폼을 진행 공유로 적지 않음 |

## 관련

- `gem-block-buzz-agent-workspace` · `gem-taskview-agent-board` · `gem-agor-live-session-is-not-the-lock` · `gem-vaultysclaw-editor-is-retired`
