# DSPy · 열린 이슈 733은 이슈와 풀 리퀘스트의 합이다 (2026-09-26)

## 출처

- **트윗:** [Ryrenz](https://x.com/Ryrenz/status/2103635921098649672) · 2026-09-26 · 저장소 소개
- **저장소:** [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) · MIT · 2026-09-26 조회 38290★ · fork 3358 · push 2026-09-26
- **논문:** [arXiv:2310.03714](https://arxiv.org/abs/2310.03714) · Omar Khattab 외 · [ICLR 2024 포스터](https://iclr.cc/virtual/2024/poster/17642)
- **Scout:** fxtwitter API + GitHub API + README + arXiv (2026-09-26). 설치 **받지 않음**

STORM이 dspy에 의존한다는 쪽은 `gem-stanford-storm-knowledge-curation`이다. 자기개선 점수의 채택은 `gem-rrsi-harness-regularization`이다. 이 건은 열린 이슈 수를 사용량으로 읽지 않는다는 쪽이다.

## 트윗 vs README·논문

| 트윗 | 저장소·논문 |
| --- | --- |
| 스탠퍼드 NLP의 DSPy. 손글 프롬프트 대신 파이썬으로 짠다 | 조직은 stanfordnlp. README 첫 문장은 프롬프트가 아니라 프로그래밍이다 |
| 약어는 Declarative Self-improving Python | README가 그렇게 적는다. 논문 제목은 Compiling Declarative Language Model Calls into Self-Improving Pipelines이고, ICLR 포스터 제목은 끝을 State-of-the-Art Pipelines로 바꾼다 |
| 별 3.8만, fork 삼천삼백여 개, 열린 이슈 칠백여 개라서 커뮤니티가 쓴다 | 별 38290, fork 3358은 맞다. 저장소의 열린 항목 733은 이슈 338과 풀 리퀘스트 395의 합이다. 열린 이슈는 사용량이 아니다 |
| 모듈의 입출력을 선언하면 최적화기가 프롬프트를 고치고, 필요하면 가중치도 고친다 | README는 프롬프트와 가중치를 최적화하는 알고리즘이 있다고 한다. 논문의 컴파일러는 데모를 모아 지정한 지표를 올리도록 파이프라인을 맞춘다 |
| 분류기, 검색 증강, 에이전트 루프가 같은 파이썬 조합이다 | README의 그 세 예와 같다 |
| 핵심 논문이 ICLR 2024이고, 최적화 논문이 뒤에 있다 | ICLR 2024 포스터가 있다. README는 그 뒤에 지시문 최적화, 미세조정과 프롬프트의 결합, GEPA를 적는다 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| DSPy를 경진 폴더에 설치하거나 제출 문장을 컴파일하기 | ❌ | 외부 언어 모델 경로다. 제출은 GBDT와 로컬 보정 |
| 733을 사용 중인 이슈 수로 적기 | ❌ | 이슈 338과 풀 리퀘스트 395다 |
| 논문의 몇 분 컴파일 이득을 우리 홀드아웃으로 쓰기 | ❌ | GPT-3.5·Llama 사례다. 채택은 `gem-rrsi` |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 에이전트 | `pip install dspy`를 하지 않음. 최적화기·GEPA를 돌리지 않음 |
| 경진 제출 | 25%·65%·38290은 PDF에 인용하지 않음 · 코드 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-dspy-open-count-mixes-pull-requests` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Report — 이슈 수와 풀 리퀘스트 수를 나누어 적음 |

## 관련

- `gem-stanford-storm-knowledge-curation` · `gem-rrsi-harness-regularization` · `gem-rsi-workspace-harness`
