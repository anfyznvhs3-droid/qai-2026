# LATTE · 에이전트를 더하는 일은 쉽다고 적혀 있지 않다 (2026-09-26)

## 출처

- **트윗:** [beth_miecz](https://x.com/beth_miecz/status/2103554403060080785) · 2026-09-25 · 같은 계정의 예전 글을 인용
- **논문:** [arXiv:2605.06320](https://arxiv.org/abs/2605.06320) · Improving the Efficiency of Language Agent Teams with Adaptive Task Graphs · Elizabeth Mieczkowski 외 · Princeton 등 · 2026-05-07 v1
- **코드:** [emieczkowski/latte](https://github.com/emieczkowski/latte)
- **Scout:** fxtwitter API + arXiv HTML (2026-09-26). 저장소 **받지 않음**

작업 목록을 사람이 잠그는 쪽은 `gem-review-starts-before-the-final-draft`다. 이 건은 에이전트를 더하는 일이 쉽다는 문장이다.

## 트윗 vs 논문

| 트윗 | 논문 |
| --- | --- |
| NeurIPS 2026에 채택되었다 | 연 원고와 arXiv v1에는 그 문장이 없다. NeurIPS 사이트는 저자 통지를 2026-09-24로 적는다. 프로그램 목록에서 이 논문을 확인하지는 않았다 |
| 에이전트를 더하기는 쉽고, 조율이 어렵다 | 순서가 있는 일에서는 에이전트를 더하면 통신이 늘고 성능이 떨어진다고 인용한다. 조율 비용은 서론의 주제다 |
| 팀이 일을 복제하고, 서로 덮어쓰고, 멈춘다. 분산 시스템의 실패다 | 비구조 팀은 서로 덮어쓰고, 틀린 산출을 내고, 완료를 잘못 보고한다. 초록의 실패 예는 파일 충돌과 중복 산출이다. 멈춤은 설계 요구에 「에이전트가 멈출 수 있다」로 나온다. 논문은 분산 시스템에서 영감을 받았다고 한다 |
| 공유 작업 그래프를 만들고, 맡고, 고친다 | 팀이 의존·배정·진행이 적힌 그래프를 같이 만들고 유지한다. 워커는 프론티어 작업을 Claim 한다 |
| 예전 글: 토큰과 충돌이 더 적은 SOTA | 초록은 이름 있는 설계들(MetaGPT, 탈중앙, Leader-Worker, 정적 분해)과 맞거나 더 나은 정확도이고, 토큰·시간·통신·조율 실패가 줄어든다고 한다. SOTA라는 단어는 없다. 정규화한 토큰 비용은 LATTE 47.5%, 다음인 정적 그래프 86.9%로, 거의 절반이라고 적는다 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| LATTE를 설치하거나 에이전트 팀을 제출 경로에 두기 | ❌ | 언어 모델 팀이다. 제출은 GBDT와 로컬 보정 |
| 사람을 더하는 일을 조율이 끝난 것으로 적기 | ❌ | 논문은 순서가 있는 일에서 인원을 늘리면 통신이 늘고 성능이 떨어진다고 인용한다 |
| 47.5·86.9나 SOTA를 우리 점수로 쓰기 | ❌ | 그 비교는 에이전트 팀 벤치다 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 에이전트 | 저장소와 실험을 돌리지 않음 |
| 경진 제출 | 47.5·86.9는 PDF에 인용하지 않음 · 코드 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-latte-adding-agents-is-not-easy` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Report — 인원을 늘리는 문장을 조율로 쓰지 않음 |

## 관련

- `gem-review-starts-before-the-final-draft` · `gem-rrsi-harness-regularization` · `gem-claude-code-guide-review-stops-in-july`
