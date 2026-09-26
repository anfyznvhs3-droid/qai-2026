# RRSI · 하네스 자기개선의 과적합 (Google) (2026-09-24)

## 출처

- **트리거 트윗:** [@omarsar0 / 2102853768266256738](https://x.com/omarsar0/status/2102853768266256738) (2026-09-23)
- **같은 논문:** [@damkina7 / 2103590883819958779](https://x.com/damkina7/status/2103590883819958779) (2026-09-25). 그림 세 장은 논문 1·2·4쪽. 인용한 글은 같은 계정의 X 기사. 새 원석 없음
- **논문:** [RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](https://arxiv.org/abs/2609.24972) · arXiv:2609.24972 · Peng Xia 등 · Google Cloud AI Research (Peng은 Student Researcher)
- **코드:** [github.com/google-research/rrsi](https://github.com/google-research/rrsi) · [regularized-rsi.com](https://regularized-rsi.com)
- **Scout:** fxtwitter API + abstract·Table 1–3 (2026-09-24)

## 트윗 vs 논문

| elvis | 논문 |
| --- | --- |
| 진화 분할 점수는 오르는데 실제 과제는 안 오름 | abstract·Fig 1. evolve 집합에 맞춰 프롬프트·도구·메모리를 고르면 **그 분할만** 외움 |
| Meta-Harness evolve **93.0**, 전이 +0.3~1.5 | Table 1 evolve 93.0. 전이 폭은 트윗 요약 |
| RRSI evolve **90.5**, 전이 +3.5~4.7 | Table 1 evolve 90.5. OOD 평균이 비교군보다 높음 |
| 무정규 3.80M vs RRSI 2.42M 토큰 | Table 2 일치. 정규를 빼면 evolve는 **92.8로 최고**, OOD는 거의 초기 하네스 |
| Gemini Flash Terminal-Bench 64.6→78.7, SWE-bench +2.2 | Table 3 일치. SWE-bench에는 **점수를 안 보고** 전이 |

→ 트윗 숫자 **맞음**. 「evolve에서 최저, OOD에서 최고」는 이 표의 RRSI 행.

## 정규화가 하는 일

- proposer: 수정 개수 예산이 시간에 따라 **줄고**, 이미 간 방향이 아닌 쪽을 봄
- critic: 벤치마크 전용 수정 거절
- pruner: 너무 작거나, 비싸거나, 더 이상 안 쓰이는 수정 제거

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| RRSI·하네스 자동 진화·Gemini | ❌ | LLM 에이전트 스캐폴드. 제출은 GBDT. `gem-rsi-workspace-harness`와 구현을 섞지 않음 |
| **패턴** — 맞춘 분할의 점수만 믿지 않음 | ✅ pull↑ | 피처·하이퍼를 dev 한 구석에 맞추면 가이드북 점수처럼 오르고 group/time 밖에서는 안 오름. `kamp-leakage-audit` |
| **패턴** — pruner | ✅ | 이득이 작은데 파이프가 복잡해지면 **버림**. 실험 cap 3. `gem-codemidas` 품질 > 양 |
| **패턴** — 예산이 줄어듦 | △ | 후반에는 새 피처를 묶음으로 넣지 않음. 하나 넣고 홀드아웃을 봄 |
| evolve 90.5 < 93.0 을 「우리 점수가 낮아도 된다」로 | ❌ | 우리는 **안 본 분할**이 나아져야 채택. 튜닝 분할을 일부러 낮추는 시합 ❌ |
| Terminal-Bench 수치를 PDF에 | ❌ | 에이전트 벤치 |

## K-AI — 우리 파이프 대응

| RRSI | Q.AI |
| --- | --- |
| evolve split | 튜닝에 쓴 dev 조각. 여기 점수로 문장을 쓰지 않음 |
| OOD 벤치 | **한 번도 선택에 안 쓴** group/time 홀드아웃. 채택 기준은 여기 |
| critic (벤치 전용 수정 거절) | 「이 LOT·이 구간에서만 듣는」 피처·규칙 거절 |
| pruner | A1이 A0 대비 홀드아웃에서 안 움직이면 보조 데이터·피처 제거 |
| 토큰 절약 | 제출 코드 경로를 짧게. 스택을 겹쳐 점수만 올리지 않음 |

## 경계

- **google-research/rrsi 설치 ❌**
- `gem-sato-randomness-research`는 시드 쇼핑 금지. 본 gem은 **파이프라인 수정**이 튜닝 분할에 붙는 것
- `gem-test-time-communication`의 verifier와 같음. 채점기가 튜닝 분할뿐이면 그 점수는 과적합

## pull 조건

| 시기 | 용도 |
| --- | --- |
| Sprint 1 | 변경 1개 = 홀드아웃 1번. 튜닝 점수만 오르면 채택 ❌ |
| Ablation | 작고 비싼 추가는 pruner. 표에 「버림」 행을 남김 |
| default | 하네스 진화 코드 ❌ |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-rrsi-harness-regularization` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull↑ 채택 규칙 · 코드 ❌) |
| 적용 축 | Model 검증 — 에이전트 하네스 **❌** |

## 관련

- `gem-sato-randomness-research` · `gem-codemidas-filtered-rl-tasks` · `kamp-leakage-audit` · `kamp-fusion-ablation`
- `gem-rsi-workspace-harness` — 작업공간 위생. 본 gem은 **점수 과적합**

## 2026-09-26 추가 · damkina7

| 트윗 | 논문 |
| --- | --- |
| 제약 없는 Meta-Harness·AHE·TTHE가 학습 분할에서 +15점, 본 적 없는 생산 과제에서 최대 4.4점 무너져 진화 전보다 나쁘다 | +15는 논문에 없다. Harvey LAB 진화 분할은 진화 전 89.4, Meta-Harness 93.0, AHE 90.7, TTHE 91.1이다. 4.4는 AHE가 RRSI보다 분포 밖에서 4.4점 낮고 시행당 토큰이 3.82M으로 58% 더 많다는 문장이다. 그림 1은 일부 선행 방법이 그 칸에서 초기 하네스 아래라고 한다. 생산 과제라는 말은 없다 |
| RRSI는 분포 안 +14.1, 홀드아웃 다섯 개에서 +4.7, 토큰 30% 감소 | 초록은 진화 분할에서 최대 14.1, 분포 밖 다섯 벤치에서 최대 4.7, 정규 없는 진화보다 정책 토큰 30% 적다고 한다. 본문의 진화 분할 이득은 Terminal-Bench 6.0, EngDesign 4.9, Harvey LAB 1.1이다. 본문은 홀드아웃 분할이 여섯 개이고 최대 4.7이라고 한다 |
| Gemini Flash Lite가 가중치 없이 +30.4% 상대 이득으로 깨끗이 옮겨 간다 | 코딩 런의 최종 하네스를 Gemini 3.1 Flash Lite에 그대로 넣으면 Terminal-Bench 2.1이 11.2에서 14.6이다. 논문은 상대 30.4%이고 절대 이득은 더 작다고 한다. 세 영역의 정책은 얼린 Claude Opus 4.8이다 |
| 스타트업의 90%를 묻었고 Google이 해결했다 | 그 문장은 논문에 없다 |

판정은 그대로다. 채택은 선택에 안 쓴 홀드아웃이 움직일 때다. +15·4.4·14.1을 PDF에 인용하지 않는다. 코드는 받지 않는다.
