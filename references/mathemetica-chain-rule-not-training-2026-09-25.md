# 계산 그래프 · 연쇄법칙은 맞고 학습법은 아님 (2026-09-25)

## 출처

- **트리거 트윗:** [@mathemetica / 2103163981078946104](https://x.com/mathemetica/status/2103163981078946104) (2026-09-24) — `gem-euler-lagrange-calculus-variations`와 같은 계정
- **그림:** 트윗 첨부. 워터마크 `@mathemetica`. 제목 「How Are Neural Networks Trained?」. 논문·교과서가 아님
- **Scout:** fxtwitter API + 첨부 이미지 (2026-09-25)

## 트윗 vs 그림

| 트윗 | 그림·식 |
| --- | --- |
| 앞으로 가며 기본 연산을 기록하고, 돌아올 때 저장한 편미분을 곱한다 | 순방향은 \(x \times y\)를 거쳐 \(xyz\). 역방향 칸에 「노드에 미분을 저장」이라고 적음 |
| \(\partial(xyz)/\partial x = yz\) | 맞음. 그림의 \(x\) 노드도 \(z \times y\). \(\partial f/\partial y = zx\), \(\partial f/\partial z = xy\)도 맞음 |
| 그 곱으로 네트워크 전체의 손실 기울기를 **값을 하나도 다시 계산하지 않고** 얻는다 | 과장. 역방향은 저장된 순방향 값으로 **지역 미분을 한 번씩** 만들어 곱하는 계산이다. 입력마다 순방향을 다시 돌리지 않을 뿐이다 |
| 신경망이 이렇게 학습된다 | 그림의 주장. 우리 제출 모델의 학습법이 아님 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 역전파·계산 그래프·신경망 | ❌ | 제출은 GBDT. 작은 표에서 얕은 모델은 `gem-suzuki` |
| 이 그림을 PDF의 「민감도」 근거로 | ❌ | 출처가 계정 그림. \(\partial(xyz)/\partial x=yz\)는 고등학교 곱의 미분 |
| **패턴** — 출력의 민감도는 경로의 곱으로 읽되, 구현은 TreeSHAP | ✅ 이미 있음 | 트리의 변수→점검 순서는 `gem-trask-abc-attribution`. 연쇄법칙 그림으로 바꾸지 않음 |
| 변분법 \(J\) | 이미 있음 | `gem-euler-lagrange`. 본 건은 **역전파를 학습법으로 들이지 않는다**만 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | **pull ❌** |
| 신경망·기울기 학습이 제안되면 | 그림의 식은 맞고, 학습법 문장은 기각. 민감도는 TreeSHAP |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-mathemetica-chain-rule-not-training` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌ · 식은 맞음) |
| 적용 축 | Model — 역전파 **❌** |

## 관련

- `gem-suzuki-deep-foundation-math` · `gem-trask-abc-attribution` · `gem-xgboost-math-zenn` · `gem-euler-lagrange-calculus-variations`
