# 양자 올림피아드 · 다시 푼 시연은 미해결 문제가 아님 (2026-09-25)

## 출처

- **트리거 트윗:** [@gp_pulipaka / 2103143930871079223](https://x.com/gp_pulipaka/status/2103143930871079223) (2026-09-24) · Buffer · 해시태그 나열
- **트윗 링크:** [geni.us/Olympiad-Geometry](https://geni.us/Olympiad-Geometry) → ScienceAlert 기사. 논문 URL이 아님
- **1차:** [arXiv:2609.14533](https://arxiv.org/abs/2609.14533) · Wang 등 · Zhejiang · Tsinghua · 2026-09-13 프리프린트
- **문제:** [IMO 1978](https://imomath.com/othercomp/I/Imo1978.pdf) 둘째 날 4번. 이등변삼각형의 내접원 중심
- **Scout:** fxtwitter API + arXiv 초록 + IMO 원문 (2026-09-25). 양자 장치 **없음**

## 트윗 vs 논문

| 트윗 | 논문·IMO |
| --- | --- |
| 초전도 양자 프로세서가 48년 된 수학 문제를 **방금 증명** | 1978년 IMO 기하를 **예시로 다시 증명**. 정사각형 대각선이 직교한다는 연습도 같이 수행. 초록은 「illustrative examples」 |
| 48년 | 1978→2026은 48년. 그 사이 **미해결이었던 기간이 아님**. 대회 당일 과제가 풀린 문제 |
| 링크가 논문 | geni.us는 대중 기사. ScienceAlert 본문도 피어리뷰 전이고, 새 정리가 아니라 양자 프로세서에서 자동 증명이 돌아갔다고 적음 |

Wu 방법의 양자 의사나눗셈, 121큐비트, full-angle 탐색은 논문의 장치 시연이다. 제조 표와 무관하다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 양자 프로세서·정리 증명기·이 프리프린트를 PDF에 | ❌ | 과제 밖. 피어리뷰 전. 트윗 헤드라인은 거짓에 가깝다 |
| **패턴** — 알려진 과제를 새 장치로 다시 돌린 것은 시연 | ✅ | 가이드북 점수를 우리 홀드아웃에서 다시 재는 일과 같다. 제목에 「해결했다」「증명했다」를 쓰지 않는다. 보고는 재측정 수치 |
| 시드·분할을 고르기 | 이미 있음 | `gem-sato`. 본 건은 **헤드라인**만 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | **pull ❌** |
| PDF 제목·초록 | 이미 있던 베이스라인을 우리 분할에서 다시 잰 문장으로 쓴다 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-quantum-olympiad-reproof-is-a-demo` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌ · 트윗 교정) |
| 적용 축 | 보고서 — 재현을 발견으로 쓰지 않음 |

## 관련

- `gem-sato-randomness-research` · `gem-sakurai-paper-reading` · `gem-jurafsky-hmm-appendix`
