# Direct Nash Optimization · 순환 비교는 점수 하나가 아니다 (2026-09-25)

## 출처

- **트리거 트윗:** [@hooshaaii / 2103091692757037525](https://x.com/hooshaaii/status/2103091692757037525) (2026-09-24)
- **논문:** Rosset, Cheng, Mitra, Santacroce, Awadallah, Xie. Microsoft Research. [arXiv:2404.03715](https://arxiv.org/abs/2404.03715) *Direct Nash Optimization: Teaching Language Models to Self-Improve with General Preferences*
- **Scout:** fxtwitter API + arXiv HTML 초록·서론 (2026-09-25). 알고리즘·학습 코드 **받지 않음**

## 트윗 vs 논문

| 트윗 | 논문 |
| --- | --- |
| 제목에 Self-Correct | 제목은 **Self-Improve** |
| RLHF가 Bradley-Terry라서 구조적으로 결함 | 서론: 점 하나짜리 보상(Bradley-Terry 포함)은 **비추이·순환 선호**를 못 적는다. DPO도 그 보상 최대화 틀에 남는다 |
| DPO를 게임이론으로 교체 | DNO는 쌍 선호를 직접 맞추고, 두 플레이어 게임의 Nash로 서술. 「DPO를 뺀다」는 문장은 없음 |
| (수치 없음) | 7B Orca-2.5, AlpacaEval 2.0에서 GPT-4-Turbo 대비 승률 7%→33%(길이 통제 포함, 절대 +26%p). 2024년 4월 preprint |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| DNO·RLHF·DPO·자기대국 | ❌ | LLM 사후학습. 제출 모델은 GBDT |
| 승률로 KPI를 바꾸기 | ❌ | 잠긴 현장 손실 문장이 목적. `gem-dualsql` |
| **패턴** — 순환이면 점수 하나를 만들지 않음 | ✅ 문장 | 연속 타깃의 순위 유지는 `gem-actionpiece`. 본 건은 **A≻B≻C≻A를 스칼라로 접지 않음** |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 논문 알고리즘 **pull ❌** |
| 9/27 이후 | 현장 비교가 순환하면 그 사실을 적고, 학습 목표로 점수 하나를 새로 두지 않음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-direct-nash-cycle-is-not-a-score` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | KPI — 순환 비교 |

## 관련

- `gem-dualsql-multi-agent-rl` · `gem-actionpiece-rank-consistency` · `gem-qualembed-text-is-not-measure`
