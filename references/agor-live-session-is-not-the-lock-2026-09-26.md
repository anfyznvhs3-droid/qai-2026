# Agor · 실시간 세션은 잠금이 아니다 (2026-09-26)

## 출처

- **저장소:** [preset-io/agor](https://github.com/preset-io/agor) · Preset, Inc. · [agor.live](https://agor.live/)
- **라이선스:** [BUSL-1.1](https://github.com/preset-io/agor/blob/main/LICENSE). 변경일 2029-01-15, 그 뒤 Apache-2.0. 라이선스 본문이 「오픈소스 라이선스가 아니다」라고 적음
- **Scout:** README + LICENSE (2026-09-26). 설치·실행 **❌**. 기본 로그인 값은 적지 않음

사람끼리의 실시간 초안은 OCX Teamspace, 에이전트 멤버의 이벤트 로그는 `gem-block-buzz-agent-workspace`, 같은 팀 맥락으로 시작하는 트리는 First Tree가 담당한다. 이 건은 개인 MIX에서 세션을 쓰고, 그 세션을 대회 잠금으로 올리지 않는다는 쪽이다.

사용자 용도 (2026-09-26): 개인 MIX. 상업적 이용 없음. 만든 쪽에 피드백을 보낸다. 라이선스상 권리자는 Preset, Inc.이다. BUSL 본문은 변경일 전에는 오픈소스 라이선스가 아니라고 적는다.

## README vs 라이선스

| README | 확인 |
| --- | --- |
| 자체 호스트. Claude Code·Codex·Gemini·OpenCode·Copilot·Cursor(베타)를 세션마다 바꾼다. 모델은 없음 | README에 있음 |
| 작업 단위는 git 브랜치. 브랜치마다 작업 디렉터리·대화·개발 환경 | README에 있음 |
| 멀티플레이어는 선택. 실시간 커서, 댓글, 공유 세션, 공유 터미널 | README에 있음 |
| 오픈소스 | **아님.** BUSL-1.1. 내부 자체 호스트는 Additional Use Grant에 있고, Agor 기능을 제3자 제품으로 파는 것은 금지. 2029-01-15에 Apache-2.0 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 개인 MIX로 쓰고, 상업 제품으로 팔지 않으며, Preset에 피드백 | ✅ 개인 | Additional Use Grant는 내부 자체 호스트를 허용하고, Agor 기능을 제3자에게 파는 것만 금지. 사용자 용도와 맞음 |
| Agor 코드를 경진 제출 저장소에 넣기 | ❌ | 제출 zip·이 대회 repo와 분리. BUSL 고지 없이 복사하지 않음 |
| 보드의 공유 세션을 문제 문장·2종·KPI의 잠금으로 쓰기 | ❌ | 세션은 브랜치 위의 대화. 잠금은 `decision-log` |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 개인 MIX | 본인 환경에서 사용 · 피드백은 Preset. 제3자 제품화 **❌** |
| 경진 제출 | 코드·데몬 **반입 ❌** · 세션 내용은 잠금 문장이 되기 전에는 `decision-log`에 올리지 않음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-agor-live-session-is-not-the-lock` |
| 분류 | **MIX 원석** (`idea`) |
| 상태 | **deferred** (개인 MIX ✅ · 경진 반입 ❌) |
| 적용 축 | 팀 운영 — 공유 세션 |

## 관련

- `gem-block-buzz-agent-workspace` · `gem-qm-ocx-collab` · `gem-iwashi-meeting-facilitation`
