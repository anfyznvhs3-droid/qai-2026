# Mathematica · 아홉 칸은 제출 모델이 아니다 (2026-09-26)

## 출처

- **트윗:** [mathemetica](https://x.com/mathemetica/status/2103564191768485895) · 2026-09-25 · 「이 아홉 알고리즘이 휴대폰이 다음 행동을 예측하는 이유」
- **그림:** 첨부. 워터마크 `@mathemetica`. 제목 「9 Essential Machine Learning Algorithms」. 부제 「Key Ideas Behind Modern AI」. 논문·교과서가 아님
- **Scout:** fxtwitter API + 첨부 이미지 (2026-09-26)

같은 계정의 연쇄법칙 그림은 `gem-mathemetica-chain-rule-not-training`이다. 변분법은 `gem-euler-lagrange-calculus-variations`다. GBDT 식은 `gem-xgboost-math-zenn`이다. 거리를 이웃으로 쓰지 않는 쪽은 `gem-qiita-curse-rows-do-not-restore-neighbors`다. 이 건은 포스터 칸과 트윗 한 줄이 어긋나는 곳, 그리고 그 목록을 모델 열로 받지 않는다는 쪽이다.

## 트윗 vs 그림

| 트윗 | 그림의 식 |
| --- | --- |
| 선형 회귀는 점들 사이의 가장 좋은 직선 | \(\hat y=\beta_0+\beta_1 x\). 기울기는 하나다. 「가장 좋은」은 식에 없다 |
| 로지스틱 회귀는 수를 확률로 바꾼다 | \(P(y=1\mid x)=1/(1+e^{-z})\). \(z\)의 정의는 칸에 없다 |
| 결정 나무는 질문을 이어 분류한다 | 분할 \(x_j\le t\). 분할 하나가 나무는 아니고, 회귀에도 쓴다 |
| SVM은 클래스 사이에 가장 넓은 틈을 긋는다 | \(\min \tfrac12\|w\|^2+C\sum\xi_i\). 뒤 항은 여유 위반의 벌점이다. 가장 넓은 틈만의 식이 아니다 |
| KNN은 가까운 이웃이 투표한다 | \(\hat y=\mathrm{majority}(k)\). 거리는 식에 없다 |
| 차원 축소는 중요한 것만 남긴다 | \(z=Wx\). 축 이름은 PC1·PC2. 선형 변환이다. 「중요한 것」은 식에 없다 |
| 랜덤 포레스트는 여러 나무를 평균한다 | \(\hat y=\frac1N\sum_i h_i(x)\). 평균이라는 말과 식은 같다. 부스팅이 아니다 |
| K-평균은 자연스러운 무리를 찾는다 | \(\min\sum_i\|x_i-\mu_{c_i}\|^2\). 무리 수 \(k\)는 정한다. 무리가 원래 있었다는 식은 아니다 |
| 나이브 베이즈는 확률을 곱해 빨리 분류한다 | \(P(y\mid x)\propto P(x\mid y)P(y)\). 베이즈 비례다. 특성마다 곱하는 독립 가정은 칸에 없다 |

휴대폰의 다음 행동과 「현대 AI의 핵심」은 그림의 주장이다. 근거 문헌이 없다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 이 아홉을 제출 모델 열로 추가 | ❌ | 제출은 GBDT와 로컬 보정. 포스터는 이유가 되지 않는다 |
| 가이드북이 이미 적은 베이스라인 이름을 이 목록으로 바꾸거나 지우기 | ❌ | 이름은 가이드북 기준. 포스터가 늘리거나 줄이지 않는다 |
| 차원 축소를 「중요한 것만 남긴다」로 적기 | ❌ | 칸의 식은 \(z=Wx\) |
| 베이즈 비례 칸을 나이브 베이즈로 적기 | ❌ | 특성별 곱이 빠졌다 |
| K-평균의 \(k\)를 데이터가 정해 준 무리 수로 적기 | ❌ | \(k\)는 사람이 정한다 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 모델 | 열은 naive·가이드북·GBDT. 이 포스터의 이름은 열 이유가 아님 |
| 경진 제출 | 포스터를 PDF에 인용하지 않음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-mathemetica-nine-panels-are-not-the-model` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Model — 포스터 목록은 열이 아님 |

## 관련

- `gem-xgboost-math-zenn` · `gem-manokhin-modern-forecasting` · `gem-qiita-curse-rows-do-not-restore-neighbors` · `gem-mathemetica-chain-rule-not-training`
