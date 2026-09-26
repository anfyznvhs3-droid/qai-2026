# Galla · The disordered logistic map (2026-09-24)

## 출처

- **트리거 트윗:** [@tobiasgalla / 2102300979446341762](https://x.com/tobiasgalla/status/2102300979446341762) (2026-09-22) — 저자 본인. 공저 Joseph Baron (Bath)
- **논문:** [The disordered logistic map](https://arxiv.org/abs/2609.24402) · arXiv:2609.24402 · IFISC
- **Scout:** fxtwitter API + arXiv abstract (2026-09-24)

## 트윗 vs 논문

| 트윗 | abstract |
| --- | --- |
| 아주 작은 disorder가 period-doubling cascade를 없앰 | 맞음. 로지스틱 맵 여러 개를 **무작위 결합**하면 고전적 주기배가(r≈3.57의 캐스케이드)가 사라짐 |
| 고차원 카오스 + oscillatory instability | 맞음. May–Wigner의 느린 모드와도 다른 **고주파** 카오스. 동차 결합을 충분히 주면 주기배가의 **일부**가 돌아옴 |

→ 저자 공지라 수치 과장은 없고, 대상은 **이산시간 결합 맵**이다.

## `gem-disorder-promoted-stability`와 반대 슬로건

| | Motter (Science) | 본 논문 |
| --- | --- | --- |
| disorder | 고차원 노드에서 **안정**을 돕는다 | 아주 적어도 주기배가 **구조를 지운다** |
| 시스템 | 연속시간 진동자·생태계 | 로지스틱 맵의 무작위 결합 |

둘 다 결합 동역학이다. 표 데이터의 「변수를 더 넣으면」에 **어느 쪽도 이식하지 않는다**.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 로지스틱 맵·RMT·카오스 지표를 모델에 | ❌ | GBDT · Feigenbaum 상수 ❌ |
| 「작은 차이가 주기 패턴을 지운다」→ 피처 삭제 근거 | ❌ | 메커니즘이 다름. 열 prune은 `gem-jkp` 상관 |
| **내부 주의** — 한 설비의 주기 패턴 | △ | 단일 호기에서 보인 주기(사이클)를 **다른 호기와 섞은 뒤**에도 그대로 기대하지 않음. Join 후 주기 피처는 설비별로 깨지는지 EDA에서 한 번 확인 |
| PDF에 로지스틱·카오스 인용 | ❌ | 도메인 불일치 · Motter와 문장이 반대라 둘 다 인용하면 모순 |

## 경계

- **period-doubling·logistic·May–Wigner** — Model·PDF **❌**
- `gem-zeeman-catastrophe-theory`는 급변(cusp). 주기배가는 다른 경로 — 은유로 합치지 않음
- `gem-disorder-promoted-stability`와 **한 파일로 합치지 않음**. 결론이 반대라 섞이면 위험

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | **pull ❌** |
| 2종 Join EDA | 주기·사이클 피처가 **설비·라인마다 달라지면** 전역 주기 하나로 묶지 않음. 논문 구현 ❌ |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-disordered-logistic-map` |
| 분류 | **MIX 원석** (`idea`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | 경계 — 단일 설비 주기를 결합 후에도 가정하지 않음 |

## 관련

- `gem-disorder-promoted-stability` · `gem-zeeman-catastrophe-theory` · `gem-jkp-factor-clusters`
- `.cursor/skills/kamp-fusion-ablation`
