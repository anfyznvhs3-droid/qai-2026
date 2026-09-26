# Claude Code 안내서 · 동기화는 7월 배지에서 멈춘다 (2026-09-26)

## 출처

- **트윗:** [Gas1688](https://x.com/Gas1688/status/2103340718907346980) · 2026-09-25 · 중문. 저장소를 입문부터 다중 에이전트까지인 참고 매뉴얼이라고 함
- **저장소:** [wesammustafa/Claude-Code-Everything-You-Need-to-Know](https://github.com/wesammustafa/Claude-Code-Everything-You-Need-to-Know) · MIT · 2026-09-26 조회 3052★ · push 2026-07-28 · 배지 last reviewed July 2026
- **그림:** README 「언제 무엇을 쓰나」표의 중국어 화면. 영어 README의 다섯 칸과 같다
- **Scout:** fxtwitter API + README + 그림 (2026-09-26). 설치·훅·워크플로 **받지 않음**

세션이 잠금이 아니라는 쪽은 `gem-agor-live-session-is-not-the-lock`이다. 외부 코딩 에이전트로 모델을 바꾸지 않는 쪽은 `gem-paper2agent-mcp-skills`다. 이 건은 안내서의 동기화 주장과, 그 에이전트 팀을 대회 절차로 받지 않는다는 쪽이다.

## 트윗 vs README

| 트윗 | README |
| --- | --- |
| 입문에서 다중 에이전트 자동화까지 | 첫 프롬프트에서 에이전트 팀까지라고 적는다. 경로 표에 동적 워크플로·에이전트 팀·BMAD가 있다 |
| 지식마다 붙여 넣을 프롬프트, 설정 파일, 예시 코드가 있다 | 저장소 설명은 copy-paste 예시이고, README 머리는 실제 예시라고 한다. 절마다 세 가지가 다 있다는 문장은 없다 |
| 모델 비교, 추론 깊이 조절, 동적 워크플로가 있고 버전을 따라 계속 동기화된다 | 모델 선택 표와 Effort levels, 동적 워크플로 절이 있다. 배지는 2026년 7월에 검토했다고 하고, 마지막 push는 2026-07-28이다. 트윗은 2026-09-25다 |
| 참고 매뉴얼로 넘기기에 좋다 | 작성자의 권유다 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 이 안내서의 프롬프트·훅·워크플로·MCP를 경진 폴더나 자리에 넣기 | ❌ | Claude Code 제품 안내다. 제출은 GBDT와 로컬 보정. 자리 안에서 에이전트는 돌지 않는다 |
| 7월 배지를 9월에도 버전과 동기화된 매뉴얼로 적기 | ❌ | 저장소가 보여주는 검토 시점은 7월이다 |
| 에이전트 팀 절을 세 사람의 작업 절차로 쓰기 | ❌ | 그 절은 Claude Code 확장점이다. 문제 한 줄과 데이터 2종은 사람이 잠근다 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 에이전트 | 규칙을 이 저장소로 바꾸지 않음. 전역 설치를 하지 않음 |
| 경진 제출 | 모델 가격과 이 안내서를 PDF에 인용하지 않음 · 코드 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-claude-code-guide-review-stops-in-july` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Report — 제품 안내서의 날짜를 넘기지 않음 |

## 관련

- `gem-agor-live-session-is-not-the-lock` · `gem-paper2agent-mcp-skills` · `gem-zgcm-data-cleaning-is-not-the-l2-cell`
