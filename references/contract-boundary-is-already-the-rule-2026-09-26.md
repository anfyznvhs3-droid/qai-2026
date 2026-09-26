# 승인 왕복 · 계약의 경계는 이미 있다 (2026-09-26)

## 출처

- 사용자가 2026-09-26에 붙여 넣은 글. 공개 URL은 없다.
- 측정된 토큰·품질 수치는 없다. Claude Code Auto Mode는 설치하지 않았다.

자리는 보드다. 이 건은 글의 올라옴 조건이 지금 `RULE.md`의 경계와 같고, 글의 생명주기 실행기는 자리 일이 아니라는 쪽이다.

## 글 vs 자리

| 글 | 자리 |
| --- | --- |
| 명령마다 Proceed를 받으면 증명이 조각난다 | 자리는 명령 승인 버튼이 없다. 진행은 자리마다 덮어쓰는 카드 한 장이다 |
| 완료 정의, 불변 조건, 관할, 새 구조, 근거 충돌은 사람이 정한다 | 아이디어 빈칸·데이터 ID·`decision-log`·`data/raw`·다른 사람 행은 에이전트가 쓰지 않는다. 카드는 초안이고 잠금은 사람이 `decision-log`에 적을 때다 |
| Discovery부터 Push까지 한 호흡 | 그 호흡은 각자 노트북의 Codex, Claude Code, Cursor 안에서다. 자리 단계는 `아이디어` / `EDA` / `모델링`뿐이다 |
| 2차 리뷰를 다른 모델에게 | 자리 안에 모델 API를 두지 않는다 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 다섯 경계를 사람 잠금으로 두기 | 이미 있음 | 완료 정의, 누수 검사, 자리 관할, 새 API, 카드와 잠금의 차이 |
| 자리 안에 7단계 실행기나 Auto Mode를 넣기 | ❌ | 보드는 승인 단추가 아니고, 워크플로 편집기도 아니다 |
| 누수 검사를 모델 안으로 흡수하기 | ❌ | 검사는 모델 밖에 둔다 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 에이전트 | 명령마다 자리의 허락을 받지 않음 · 다섯 경계는 넘기지 않음 |
| 경진 제출 | 이 글의 문장과 Auto Mode는 PDF에 넣지 않음 · 코드 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-contract-boundary-is-already-the-rule` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **active** (경계만) · 실행기 pull ❌ |
| 적용 축 | 팀 운영 — 승인은 경계에서만 |

## 관련

- `gem-harness-zero-keep-the-check` · `gem-agor-live-session-is-not-the-lock` · `gem-vaultysclaw-editor-is-retired` · `gem-agentconnect-thousand-apps-is-the-poster` · `gem-claude-code-guide-review-stops-in-july`
