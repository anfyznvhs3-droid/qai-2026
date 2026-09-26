# Shulman · 문장과 그 문장의 증거는 다른 층 (2026-09-25)

## 출처

- **트리거 트윗:** [@khoiiiind / 2103147450026348736](https://x.com/khoiiiind/status/2103147450026348736) (2026-09-24)
- **1차:** Mike Shulman, [Propositions as Some Types and Algebraic Nonalgebraicity](https://golem.ph.utexas.edu/category/2012/01/propositions_as_some_types_and.html), n-Category Café, 2012-01-12
- **다른 렌즈:** Robin Adams, Zhaohui Luo, [arXiv:0809.2061](https://arxiv.org/abs/0809.2061) · LTT\_w · Weyl의 서술 재구성
- **Scout:** fxtwitter API + 카페 글 + 논문 §2 (2026-09-25). 증명보조기·HoTT **구현 ❌**

## 트윗 vs 글

| 트윗 | 글 |
| --- | --- |
| 명제가 기본 (단일 정렬 논리, ZF) | Shulman 1번. 고전 1차 논리와 **ZFC**. 트윗의 ZF는 그 계열 |
| 타입이 기본이고, 일부 타입만 명제 (HoTT) | 「사물이 기본」 아래의 **propositions-as-some-types**. HoTT가 이 선택 |
| 명제와 타입이 같다 (Martin-Löf) | 어떤 타입이든 명제. Curry–Howard. Martin-Löf에서 선택공리는 **자동으로 참** |
| 명제와 타입이 다르지만 둘 다 기본 (logic-enriched type theory) | Shulman 2번. Adams·Luo: 공리를 더해도 **데이터 타입은 바뀌지 않음**. 증명은 계산하지 않음 |
| 선택공리는 어떤 기초에서는 참이고 어떤 기초에서는 아님. HoTT가 가장 자연스럽다 | 맞음. 다만 Shulman은 **∞-그루포이드를 기본 대상으로 둘 때** HoTT 방식이 가장 자연스럽다고 함. 세 방식 모두 장점이 있다고 먼저 적음 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| HoTT·Plastic·선택공리·증명 항을 모델에 | ❌ | 제조 표와 무관 |
| 「존재한다」를 그 값을 내놓는 함수와 같게 둔다 | ❌ | Martin-Löf에서 그렇게 두면 선택공리가 공짜가 된다. 「이 피처가 도움이 된다」는 문장이 홀드아웃 숫자를 대신하면 같은 붕괴 |
| **패턴** — 로그의 문장은 열을 만들지 않는다 | ✅ | Adams·Luo: 논리의 공리를 더해도 데이터 세계는 그대로다. `decision-log`의 판단은 피처 행렬에 칸을 추가하지 않는다. 칸이 있다고 문장이 증명되지도 않는다 |
| 안 본 분할이 움직여야 채택 | 이미 있음 | `gem-rrsi-harness-regularization`. 본 건은 그 규칙의 **층 분리**만 |

`gem-dualgraph`는 목차와 로그. `gem-yokota`는 채운 칸과 관측. 본 건은 **주장과 그 주장을 만족하는 계산**이다.

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 기초론 **pull ❌** |
| PDF·Ablation | 문장 하나에는 로그의 숫자 한 줄. 숫자 한 줄은 그 문장만 지지. 다른 피처를 자동으로 넣지 않음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-shulman-proposition-is-not-witness` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌ · 층 분리) |
| 적용 축 | 보고서 — 주장 ≠ 증거 함수 |

## 관련

- `gem-rrsi-harness-regularization` · `gem-dualgraph-outline-vs-knowledge` · `gem-emerson-intermediate-micro`
