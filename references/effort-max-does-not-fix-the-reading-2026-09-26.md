# Claude Code 노력 · 최댓값이 잘못 읽은 칸을 고치지 않는다 (2026-09-26)

## 출처

- **트윗:** [trq212](https://x.com/trq212/status/2103576349499855160) · Thariq · Claude Code · 2026-09-25
- **글:** [X Article](https://x.com/i/article/2103535187426709504) · Using Claude Code: Spending your effort
- **블로그:** [claude.dev/blog/spending-your-effort](https://claude.dev/blog/spending-your-effort/) · 글이 그림은 여기 있다고 적은 같은 날 글
- **벤치 목록:** [terminal-bench v3.0.0](https://github.com/harbor-framework/terminal-bench/releases/tag/v3.0.0)
- **Scout:** fxtwitter API + 블로그 HTML (2026-09-26). Claude Code **설치하지 않음**

점수에 하네스 설정이 붙는 쪽은 `gem-harness-overflow-rate-is-not-the-failure`다. 안내서 배지가 7월에 멈춘 쪽은 `gem-claude-code-guide-review-stops-in-july`이다. 이 건은 노력을 올리면 통과는 늘어도 요구를 잘못 읽은 칸이 늘 수 있다는 쪽이다.

## 트윗 vs 글·블로그

| 트윗 | 글·블로그 |
| --- | --- |
| 평가와 자기 실험의 결과에 꽤 놀랐다 | 글의 「놀랐다」는 Terminal-Bench 3.0 과제의 범위와 야심이다. 평균 업무보다 훨씬 복잡하다는 문장이다 |
| 왜 모든 일에 최대 노력을 쓰지 않는가 | 글은 낮은·중간 노력이 빨리 주고받고, 높은 노력은 검증과 가장자리에 쓴다고 한다. 보통 개발 루프는 인터뷰 뒤 구현은 낮게, 검증은 높게다. 블로그 루프의 구현은 low이고, X 글은 low/medium이다 |
| (수치 없음) | 블로그 산문은 Fable 5.1과 Opus 5.5가 단계마다 점수와 토큰이 오른다고 한다. X 글은 「if there is an uptick」으로 문장이 깨져 있다. 같은 그림의 말풍선은 `same score, half the tokens`다. 어느 쌍인지는 추출한 축 라벨만으로 정하지 않았다 |
| (수치 없음) | 블로그 실패 그림: Fable 5.1은 시도 370번 중 통과가 low 140, max 214다. 중앙 토큰은 73k에서 222k다. `picked the wrong reading`은 25에서 47로 늘었다. 글은 노력을 올리면 가장자리 누락(보라)은 줄고, 접근이 틀린 실패(파랑)는 고치지 못한다고 한다 |
| (각주 없음) | 블로그 각주: 내부 실행, 과제당 5번, Fable 5.1은 제품 안전 개입을 껐다. 보안 과제는 인터넷 없이 돌아 공개 리더보드·출시 글과 칸이 어긋난다. X 글 본문에는 이 각주가 없다 |
| (분야 없음) | 블로그는 Fable 5.1의 low→top을 Security 64%→87%, Hardware 34%→75%, ML 54%→73%, Science 41%→61%, Software 43%→56%, Media 18%→30%, Operations 12%→22%로 적는다. 주는 분야가 작아 low는 모델의 낮은 설정 둘, top은 높은 설정 셋을 묶었다고 한다 |

곡선은 같은 70과제다. GPU 4과제는 뺐다. Opus 5.5는 약 3주 뒤, 응답 상한 128k, GitHub·PyPI 없이 돌렸다고 블로그가 적는다. Opus 5의 max는 effort-120 실행이다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| `/effort`나 Claude Code를 제출 경로에 두기 | ❌ | 제품 사용기다. 제출은 GBDT와 로컬 보정 |
| 최대 노력을 접근이 맞다는 증거로 쓰기 | ❌ | 통과는 140에서 214로 올랐고, 잘못 읽은 칸은 25에서 47로 늘었다 |
| 64%→87%·140·214·25·47을 우리 점수로 쓰기 | ❌ | 내부 실행이고 공개 리더보드와 칸이 다르다고 각주가 적는다 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 에이전트 | Claude Code와 벤치 과제를 받지 않음 |
| 경진 제출 | 140·214·25·47·분야 퍼센트는 PDF에 인용하지 않음 · 코드 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-effort-max-does-not-fix-the-reading` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Report — 검증을 늘린 문장을 문제 정의가 맞았다는 증거로 쓰지 않음 |

## 관련

- `gem-harness-overflow-rate-is-not-the-failure` · `gem-claude-code-guide-review-stops-in-july` · `gem-rrsi-harness-regularization` · `gem-review-starts-before-the-final-draft`
