# Word2Vec · 여왕은 가장 가까운 단어다 (2026-09-26)

## 출처

- **트윗:** [Zen_with_AI](https://x.com/Zen_with_AI/status/2103499515751981428) · 2026-09-25 · 중문
- **그림:** Skip-gram 창 2의 교과서 그림, 그리고 `king − man + woman`이 `queen`에 닿는 화살표. 화살표에는 성별 방향이라고 적혀 있다
- **논문:** [arXiv:1301.3781](https://arxiv.org/abs/1301.3781) · Mikolov, Chen, Corrado, Dean · Google · 2013-01 · [arXiv:1310.4546](https://arxiv.org/abs/1310.4546) · Mikolov, Sutskever, Chen, Corrado, Dean · 2013-10
- **Scout:** fxtwitter API + 그림 + 두 초록과 HTML (2026-09-26). 코드 **받지 않음**

임베딩 인덱스를 제출에 두지 않는 쪽은 `gem-embeddings-handbook`이다. 이 건은 그 화살표가 등식이 아니라는 쪽이다.

## 트윗 vs 논문

| 트윗·그림 | 논문 |
| --- | --- |
| 2013년 Google의 Mikolov 등이 Word2Vec을 제안했다 | 1월 논문의 이름은 CBOW와 Skip-gram이다. 소속은 Google Inc.다. Word2Vec은 도구 이름이다 |
| 주변 단어로 의미를 배우고, Skip-gram은 중심 단어로 문맥을 예측한다 | Skip-gram은 현재 단어를 로그선형 분류기에 넣어 앞뒤 범위의 단어를 예측한다. 그림의 목적 `max Σ log P(문맥\|중심)`은 그 형태다. 10월 논문은 계층 소프트맥스 대신 네거티브 샘플링을 적는다 |
| 학습이 끝나면 임베딩 행렬이 단어 벡터 공간이다. 그림은 입력에서 은닉으로 가는 가중치라고 한다 | 논문은 비선형 은닉층이 비용을 만든다고 보고, 그 층을 뺀 로그선형 모델을 제안한다. 연속 벡터는 역사가 길다고 적고, 신경망 언어모형이 이미 투영층에서 단어 벡터를 배웠다고 인용한다 |
| 규칙을 가르치지 않았는데 `king − man + woman ≈ queen`이 생긴다. 그림은 그 합이 queen 위에 닿고, 성별 방향이 스스로 자랐다고 한다 | 1월 논문은 그 계산의 결과가 Queen 벡터에 가장 가깝다는 예를 이미 보인 문헌 [20]으로 인용한다. [20]은 NAACL 2013의 언어 규칙성 논문이다. 10월 논문이 본문에 적은 같은 꼴의 예는 Madrid − Spain + France가 Paris에 더 가깝다는 문장이다 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 성별 방향 그림을 피처 기하로 가져오기 | ❌ | 논문의 문장은 최근접 단어다. 화살표가 점 위에 닿는 그림이 아니다 |
| Word2Vec을 임베딩의 시작으로 적기 | ❌ | 논문이 연속 벡터의 긴 역사와 앞선 신경망 언어모형을 인용한다 |
| 단어 벡터를 제출 열로 넣기 | ❌ | 제조 표의 모델은 GBDT다. 인덱스를 두지 않는 쪽은 `gem-embeddings-handbook` |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 에이전트 | word2vec을 설치하거나 학습하지 않음 |
| 경진 제출 | king·queen 식을 PDF에 인용하지 않음 · 코드 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-word2vec-queen-is-the-nearest-word` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Report — 최근접 예를 등식 그림으로 쓰지 않음 |

## 관련

- `gem-embeddings-handbook` · `gem-mathemetica-nine-panels-are-not-the-model`
