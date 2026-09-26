# TaskView → 에이전트가 읽고 쓰는 태스크 보드 (2026-09-17)

## 출처

- **트리거 트윗:** [@bkdgiffug / status/2100399589320724692](https://x.com/bkdgiffug/status/2100399589320724692) (2026-09-17, 중문)
- **같은 저장소:** [@tom_doerr / status/2103494769875788101](https://x.com/tom_doerr/status/2103494769875788101) (2026-09-25) — README 첫 문단의 압축. 새 원석 없음
- **repo:** [github.com/Gimanh/taskview-community](https://github.com/Gimanh/taskview-community) — 2026-09-17 조회 657★ · 2026-09-26 조회 810★ · push 2026-09-22 · 릴리스 v1.56.0 · `taskview-mcp`·`taskview-api` 1.48.3
- **라이선스:** **TaskView Source-Available License v1.0** — 내부 사용·자체 호스팅·수정 허용 / Managed Service·경쟁 제품·상표 사용 금지 (OSI 오픈소스 아님)
- **Scout:** _(미실행 — fxtwitter + GitHub API, 2026-09-17)_

## 트윗 요지

> 프로젝트 데이터를 남의 서버에 두기 싫은 팀용. **자체 호스팅** PM 도구 — 태스크·칸반·Sprint·의존성·공수. GitHub/GitLab/Webhook 연동. **MCP 내장** → Claude 같은 AI가 프로젝트를 읽고, 태스크를 만들고, 상태를 바꾼다. Web·iOS·Android.

## 실체

| 항목 | 값 |
| --- | --- |
| 배포 | Docker Compose + **PostgreSQL** (서버 1대 필요) |
| 협업 | 조직·프로젝트·역할 권한·SSO(SAML/OIDC/SCIM) |
| 개발 연동 | GitHub/GitLab, 서명 webhook, TS API 클라이언트 |
| **AI** | `taskview-mcp` (npm) — 토큰 권한 범위 내에서 검색·생성·상태 변경 |
| 부가 | 시간 추적, 재무 리포트, 클라우드 버전(`app.taskview.tech`) |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| TaskView 자체 호스팅 | ❌ | 서버·Postgres·Docker 운영 = QM과 같은 이유로 과함. 9/17 결정("새로 만들지 않고 git 브랜치")과 충돌 |
| TaskView Cloud | ❌ | 팀 데이터를 외부 SaaS에 — 트윗이 비판한 바로 그 형태 |
| **패턴만** — "에이전트가 읽고 쓰는 태스크 보드" | ✅ | 서버 없이 **repo 안 markdown 보드**로 구현 가능 |

**채택할 아이디어 1개:** 태스크 보드를 사람용 UI가 아니라 **에이전트가 파싱·갱신하는 구조화 파일**로 둔다.

```text
docs/board.md                # 컬럼: id · 제목 · 담당 · 상태(todo/doing/review/done) · 의존 · 브랜치 · 근거
```

- 각자 노트북의 Cursor/Codex가 `AGENTS.md`를 통해 보드를 읽고, 작업 시작/완료 시 행을 갱신 → commit
- TaskView의 MCP 역할 = git + markdown (권한 = 브랜치 보호, 히스토리 = git log)
- 의존성·Sprint = 보드 컬럼 2개로 충분 (9/21~제출까지 sprint 1~2개)

## 경계

- TaskView 코드·MCP 서버 **투입 ❌** — 서버 운영·라이선스(source-available) 부담
- 제출물(Data·Model·PDF)과 무관 — **팀 운영** 축만
- `gem-qm-ocx-collab`과 같은 결론: 협업 인프라는 **git + markdown**으로 고정

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-taskview-agent-board` |
| 분류 | **MIX 원석** (`idea`) |
| 상태 | **active** (패턴) · 도구 자체 = **deferred** |
| 적용 축 | 팀 운영 — `docs/board.md` (git init 시 함께 생성) |

## 관련

- `gem-qm-ocx-collab` — 협업 스택 결정 (2026-09-17)
- `docs/team.md` · `docs/decision-log.md`
- `docs/reference-concepts.md` — `gem-taskview-agent-board`

## 2026-09-26 추가 트윗

tom_doerr 본문은 README 문장에서 analytics와 AI-assisted automation을 빼고, 프로젝트 운영 자동화·의존성 추적·인프라 통제를 넣었다. 그림은 README 배지다. 라이선스 Source-Available, 자체 호스팅, Docker, 릴리스 v1.56.0은 그 배지와 GitHub·npm 조회가 같다.

판단은 그대로다. 서버와 MCP는 올리지 않는다. 보드 패턴은 `docs/board.md`다.
