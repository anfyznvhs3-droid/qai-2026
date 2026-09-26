# 코딩 에이전트 하네스 · 78.7%는 넘침 비율이다 (2026-09-26)

## 출처

- **트윗:** [alex_verem](https://x.com/alex_verem/status/2103423271295455554) · 2026-09-25 · 링크 없음 · 사진 1장
- **논문:** [arXiv:2609.20804](https://arxiv.org/abs/2609.20804) · An Empirical Study of Harness Design for Coding Agents · Run-Ze Fan, Zihao Zhang, Simin Ma, Yebowen Hu, Shouju Wang, Kaiqiang Song, Fei Liu, Hamed Zamani, Xiaoyang Wang
- **소속:** UMass Amherst, Emory, UNC Charlotte. Zoom은 인턴십으로 적혀 있다
- **Scout:** fxtwitter API + arXiv HTML (2026-09-26). 하네스·모델 **받지 않음**

작업 공간 위생은 `gem-rsi-workspace-harness`다. 데이터 하나의 부호가 다른 데이터에서 뒤집히는 쪽은 `gem-clip-synops-cut-reverses-on-the-second-set`다. 이 건은 78.7%가 과제 실패율이 아니라는 쪽이다.

## 트윗 vs 논문

| 트윗 | 논문 |
| --- | --- |
| UMass, Zoom, Emory, UNC Charlotte | 소속은 UMass Amherst, Emory, UNC Charlotte. Zoom Video Communications는 인턴십이다 |
| 모델을 고정하고 주변 소프트웨어만 바꿔 176설정을 돌렸다 | 실행 루프는 고정하고 계획·행동 공간·맥락 관리를 바꿨다. 네 모델 × SWE-Bench Verified · Terminal-Bench 2.1에서 176칸 |
| GitHub 500문제, 명령줄 89과제 | 사람이 확인한 GitHub 이슈 500, 명령줄 과제 89 |
| 32k·관리 없음에서 GitHub 과제의 78.7%가 방이 없어 실패했다 | 모델 평균 T0 넘침 비율이 SWE-Bench 32k에서 78.7%이고 128k에서 8.7%다. 관리 계층 T1–T4는 넘침이 0이다. 32k T0 성공률은 9.40·11.40·6.40·12.60이라 실패는 78.7%보다 많다 |
| Nemotron-3 550B는 그 칸에서 6.4%. 옛 도구 출력을 자르거나, 앞 단계를 요약하거나, 둘 다 하면 51–58% | 32k SWE-Bench 550B는 T0 6.40, T1 51.40, T2 53.60, T3 58.40, T4 55.60. T1은 오래된 관찰을 지우고, T3은 요약, T4는 지운 뒤 요약한다. T2는 지운 내용을 다시 꺼내는 칸으로, 논문은 정확도 이득이 없다고 한다 |
| 계획 없이 30B는 중앙값 5턴, GitHub 성공이 25.2%에서 13.6% | SWE-Bench T4/128k에서 30B는 25.20에서 계획 없음 13.60, 궤적 표의 중앙값 턴은 5 |
| 더 센 두 모델은 계획과 함께 정확도가 2포인트 안이고 GitHub 비용이 약 30% 줄었다. 이미 끝낸 일을 다시 확인하지 않아서다 | 550B와 Mistral은 SWE-Bench에서 비용이 약 30%·32% 줄고 성공률은 2.0·0.4포인트 내려간다. 초록은 정확도 변화가 작다고 한다. 줄어든 턴은 수정 뒤 확인이다 |
| 550B에 일반 터미널을 주면 GitHub를 더 풀고 비용이 53% 줄었다 | 550B의 bash-only는 SWE-Bench 성공이 3.6포인트 오르고 비용이 53% 준다. Terminal-Bench는 5.6포인트, 비용 30%다 |
| Mistral Medium 3.5는 같은 집합에서 68.6%에서 45.4%로 내려갔다 | 그 두 수는 SWE-Bench T4/128k의 68.60과 bash-only 45.40이다. 차이는 본문의 23.2포인트와 같다. Terminal-Bench에서는 같은 모델의 bash-only가 6.7포인트 오른다고 본문이 적는다. 트윗은 그 반을 빠뜨린다 |
| 최선의 설정은 없고, 점수는 모델과 하네스를 같이 잰다 | 「하나의 최선」이라는 문장은 없다. 초록은 모델과 예산에 맞춘 설계라고 한다. 점수가 모델만의 수가 아니라는 쪽은 맞다 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 78.7%를 이 연구의 과제 실패율로 적기 | ❌ | 32k·관리 없는 칸의 넘침 비율이다. 128k에서는 8.7%이고, 관리하면 0이다 |
| 68.6에서 45.4를 명령줄 벤치의 수로 적기 | ❌ | GitHub 집합의 칸이다. 명령줄에서는 부호가 반대다. 두 집합을 한 표에 두는 규칙은 `gem-clip-synops-cut-reverses-on-the-second-set` |
| 이 하네스·Nemotron·SWE-Bench를 제출에 넣기 | ❌ | 제출은 GBDT와 로컬 보정. 코딩 에이전트 점수는 우리 지표가 아니다 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 에이전트 | 하네스를 설치하지 않음. SWE-Bench를 돌리지 않음 |
| 경진 제출 | 78.7·6.4·51·58·25.2·13.6·53·68.6·45.4는 PDF에 인용하지 않음 · 코드 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-harness-overflow-rate-is-not-the-failure` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Report — 한 칸의 넘침 비율을 실패율로 쓰지 않음 |

## 관련

- `gem-rsi-workspace-harness` · `gem-clip-synops-cut-reverses-on-the-second-set` · `gem-claude-code-guide-review-stops-in-july` · `gem-compiled-memory-pdf-is-not-anthropic`
