# Harness-Zero · 검사를 가중치에 녹여 빼지 않음 (2026-09-25)

## 출처

- **트리거 트윗:** [@omarsar0 / 2103095360239636666](https://x.com/omarsar0/status/2103095360239636666) (2026-09-24)
- **논문:** [arXiv:2609.24974](https://arxiv.org/abs/2609.24974) · 2026-09-21 · Ye, Lu, Dong, Su, Song
- **소속:** 베이징대(Ye, Dong, Song) · 홍콩과기대(Su) · Lu만 Peking + **Google**. 「Google 논문」이 아님
- **코드:** [github.com/metaevo-ai/harness-zero](https://github.com/metaevo-ai/harness-zero) · **설치 ❌**
- **Scout:** fxtwitter API + arXiv HTML 초록·§1 (2026-09-25)

이웃 번호 [arXiv:2609.24972](https://arxiv.org/abs/2609.24972)는 `gem-rrsi-harness-regularization`이다. 다른 논문이다.

## 트윗 vs 논문

| 트윗 | §1 |
| --- | --- |
| 특수 하네스를 빼면 23.3% → 44.3%. 하네스를 단 베이스 41.7%보다 높음 | Qwen3.5-9B. 23.3%는 베이스가 **최소 하네스 h**만 쓴 점수. 41.7%는 베이스가 **진화된 h\***를 단 점수. 44.3%는 증류 뒤 h\*·검토 에이전트를 **빼고** h만 둔 점수. 트윗의 비교는 맞음 |
| 학습 때만 최적 하네스. 행동 공간이 달라 교정된 실행이 시범이 됨 | agent-as-harness. 맞음 |
| 28개 행동의 82.3%를 회복. 프론티어에서 agent-as-harness가 code-as-harness보다 낫다 | 82.3%는 세 도메인 평균. 프론티어 무학습 비교는 **81.1% 대 78.1%**(벤치·모델 6설정 평균). 트윗은 이 숫자를 생략 |
| Google and colleagues | 교신 Song은 베이징대. Google은 Lu의 소속 하나 |

도메인은 SpreadsheetBench, AppWorld, USPTO 역합성. 제출 모델과 무관하다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 저장소·SFT·하네스 증류 | ❌ | LLM 에이전트. 제출은 GBDT |
| 점수가 올랐으니 외부 검사를 뺀다 | ❌ | 44.3과 41.7은 **증류된 가중치**와 **베이스+h\***의 비교다. 검사를 지워서 점수가 오른 실험이 아님 |
| **패턴** — 분할·naive 열·능력표는 가중치 밖에 둔다 | ✅ | 우리 하네스는 `kamp-leakage-audit`와 Ablation 열이다. 모델이 「이미 배웠다」고 그 칸을 지우지 않는다 |
| 채택은 안 본 분할 | 이미 있음 | `gem-rrsi`. 본 건은 **검사를 안으로 증류해 배포에서 제거하는 유혹**만 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | **pull ❌** |
| Ablation에서 한 열을 빼자는 제안이 나오면 | 그 열이 검사인지 피처인지 적는다. 검사면 점수가 올라도 남긴다 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-harness-zero-keep-the-check` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | 검증 — 외부 검사 **유지** |

## 관련

- `gem-rrsi-harness-regularization` · `gem-rsi-workspace-harness` · `gem-sato-randomness-research`
