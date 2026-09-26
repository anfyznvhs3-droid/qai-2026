# Emerson 중급 미시 · 식은 현장 손실을 대신하지 않음 (2026-09-25)

## 출처

- **트리거 트윗:** [@antoniolupetti / 2103153103851675777](https://x.com/antoniolupetti/status/2103153103851675777) (2026-09-24) — 큐레이터(Algebrica). 저자 아님
- **1차:** Patrick M. Emerson, *Intermediate Microeconomics*, Oregon State University, 2019. [open.oregonstate.education/intermediatemicroeconomics](https://open.oregonstate.education/intermediatemicroeconomics/) · [CC BY-NC-SA 4.0](https://open.oregonstate.education/intermediatemicroeconomics/back-matter/creative-commons-license/)
- **Scout:** fxtwitter API + 출판 페이지·목차 (2026-09-25). PDF 본문 **전재 ❌**

## 트윗 vs 책

| 트윗 | 책 |
| --- | --- |
| 무료 교과서 · 미시의 주요 모형을 수학적으로 | 읽기는 무료. 라이선스는 **CC BY-NC-SA 4.0**. 출판 설명은 정책 질문으로 각 장을 열고, **미적분 있는 길과 없는 길**을 같이 둠 |
| 선호·효용·수요·생산·비용·이윤극대화·수급·완전경쟁·일반균형 → 독점·과점·가격전략·게임·비대칭정보·불확실성 | 목차 모듈 1–18, 22–23과 맞음. 「그 외」에 외부효과·공공재·독점적 경쟁·시간(모듈 19–21, 24) |
| 식이 가격·수량·경쟁자 대응을 **결정한다** | 큐레이터 문장. 책은 모형을 보여주고, 결정을 대회 제출물로 바꾸라고 하지 않음 |

저자 이름과 2019년은 트윗에 없다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 이윤극대화·독점 가격·쿠르노·게임이론을 모델이나 KPI로 | ❌ | 출제안 ①의 목적은 9/27에 잠근 **현장 손실 한 문장**. 시장 균형이 아님 |
| 예측 점수를 가격·한계비용으로 환산 | ❌ | 모듈 7의 비용최소화는 **이미 정해진 산출** 아래의 이야기. 산출(KPI)을 교과서가 정하지 않음 |
| 챕터를 PDF에 인용·발췌 | ❌ | BY-NC-SA. 비상업이라도 본문 전재는 하지 않음. 각주는 KAMP 공식·가이드북 |
| **패턴** — 목적함수는 식보다 먼저 문장 | ✅ | 비용곡선·이윤식은 잠긴 손실 문장을 대체하지 못한다. `gem-euler-lagrange`는 레시피 C의 \(J\) 서술. 본 건은 **그 \(J\)를 이윤으로 두지 않는다** |
| 불확실성 모듈을 구간 추정으로 | ❌ 이미 있음 | split conformal은 `gem-manokhin`. 여기로 가져오지 않음 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 교과서 **pull ❌** |
| KPI 문장이 이윤·단가·생산량으로 바뀌면 | 현장 손실 문장으로 되돌린다. 식을 먼저 쓰지 않는다 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-emerson-intermediate-micro` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌ · 목적 문장 경계) |
| 적용 축 | KPI — 시장 모형 **❌** |

## 관련

- `gem-dualsql-multi-agent-rl` · `gem-euler-lagrange-calculus-variations` · `gem-manokhin-modern-forecasting`
