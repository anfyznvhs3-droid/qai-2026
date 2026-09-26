# Park · Test-time communication (MSR · Berkeley) (2026-09-24)

## 출처

- **트리거 트윗:** [@omarsar0 / 2102783808286384159](https://x.com/omarsar0/status/2102783808286384159) (2026-09-23) — `gem-dualsql`와 같은 큐레이터
- **논문:** [Scaling Discovery through Test-Time Communication](https://arxiv.org/abs/2609.21032) · arXiv:2609.21032 · Jongho Park (Berkeley, MSR 인턴), Kontonis, Garg, Krishnamurthy, Papailiopoulos (Microsoft Research)
- **Scout:** fxtwitter API + abstract·§1 (2026-09-24)

## 트윗 vs 논문

| elvis | 논문 |
| --- | --- |
| 역할 없이 shared directory | §1. 같은 목표의 동일 에이전트 · 오케스트레이터 없음 · 중간 결과·실패·산출을 **비동기**로 공유 |
| k명이 독립 4k명과 같은 성공률 (ARC-AGI-3) | **초록은 4k**. 본문 Fig 1은 team@3 ≈ best@13 (**4.3×**), team@5 ≈ best@33 (**6.6×**). 배수는 k와 함께 커짐 |
| 혼자 못 푸는 과제를 팀이 안정적으로 | §1 일치 |
| 폴리오미노 best@k·기존 최고 초과 · MNIST 4명이 **1,957 byte · 99.4%** | §1 일치. 인간 최고 2,461 byte. 테스트 이미지·오답은 **못 보게** 함 (A.5) |
| 컴퓨트가 빡세거나 진행 척도가 없으면 독립이 나음 | abstract·§1. Terminal-Bench 2.0에서는 team@2가 pass@2를 **못 이김**. 검증기가 없으면 다수 의견에 좋은 해를 버림 |

→ 4k는 초록의 반올림. 나머지 숫자는 본문과 맞음.

## 메커니즘 이름

**verified progress sharing.** 남의 발견을 채택하려면 그 발견이 나아졌는지 **채점**할 수 있어야 한다. 의견 교환·토론만으로는 이득이 없었다는 선행 연구를 논문이 인용한다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| Copilot 다에이전트·ARC 하네스 | ❌ | LLM 테스트타임. 제출은 GBDT · `gem-block-buzz`와 같이 인프라 ❌ |
| best@k로 시드·split을 고름 | ❌ | `gem-sato-randomness-research` 금지와 같음. 논문의 best@k는 **연구 비교 지표** |
| **shared directory = 지금 쓰는 로그** | ✅ | 진행 중 실패·중간 수치를 `decision-log`·`experiment-log`에 남겨 다른 사람이 **같은 날** 읽게. 끝난 뒤 회고 ❌ |
| **채점기가 있을 때만 공유가 이득** | ✅ | 우리 채점기 = 고정된 dev 지표 (PR-AUC·비용). 지표 없이 의견만 모으면 논문의 부정 결과 |
| 컴퓨트가 부족하면 소통을 건너뜀 | ✅ | 3인·10/08. 에이전트 채널을 **새로 만들지 않음**. 마크다운 한 곳이 싼 버전 |
| 역할 없음 | ❌ 이식 | 논문은 **동일 LLM**. 사람 팀은 아이디어·EDA·도구 역할을 유지 |

## K-AI — 우리 파이프 대응

| 논문 | Q.AI |
| --- | --- |
| shared directory | `docs/decision-log.md` + `reports/experiment-log.md` + `docs/board.md` |
| 실패도 올림 | 안 된 run의 원인 한 줄. 다음 사람이 같은 분할을 다시 안 함 (`gem-sato`) |
| verifier | split·지표를 **실험 전** 고정. 그 숫자로만 「이게 더 낫다」고 말함 |
| 컴퓨트 부족 → 독립 | 모델은 GBDT 하나. 통신 프로토콜·멀티에이전트 ❌ |
| 테스트 비공개 (MNIST A.5) | 테스트 파일은 마지막 1회. 중간 공유는 **dev**만 |

## 경계

- ARC·폴리오미노·1,957 byte — PDF **인용 ❌**
- `gem-block-buzz-agent-workspace` · `gem-qm-ocx-collab`는 **도구를 안 깐다**. 본 gem은 **언제 공유가 이득인지**
- `gem-dualsql`의 역할 분담(스키마 먼저)과 다름. 여기는 역할 없는 공유

## pull 조건

| 시기 | 용도 |
| --- | --- |
| Sprint 1 | 실험 결과는 당일 로그. 지표 없는 슬랙 토론으로 모델 선택을 바꾸지 않음 |
| S0-4 | 협업 도구는 이 디렉터리(git+md) 이상 만들지 않음 |
| default | 다에이전트 실행 ❌ |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-test-time-communication` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull↑ 로그 공유 조건 · 에이전트 ❌) |
| 적용 축 | 팀 운영 — 채점 가능한 결과만 공유 |

## 관련

- `gem-sato-randomness-research` · `gem-block-buzz-agent-workspace` · `gem-qm-ocx-collab` · `gem-iwashi-meeting-facilitation`
- [`docs/board.md`](../docs/board.md) S0-4
