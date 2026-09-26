# JKP Factors · 153 → 13 군집 (Jensen·Kelly·Pedersen 2023) (2026-09-23)

## 출처

- **트리거 트윗:** [@the_green_lark / 2102426911880221039](https://x.com/the_green_lark/status/2102426911880221039) (2026-09-22)
- **사이트:** [jkpfactors.com](http://jkpfactors.com) — Global Factor Data · 2025-12까지 갱신
- **논문:** Jensen, Kelly, Pedersen, *Is There a Replication Crisis in Finance?*, Journal of Finance 78(5):2465–2518, 2023
- **Scout:** fxtwitter API + 사이트 본문 (2026-09-23)

## 트윗 vs 사이트

| Green Lark | jkpfactors.com |
| --- | --- |
| 153 factors · 13 clusters | 논문·사이트가 **153 characteristics → 13 themes** · 93개국. 이 숫자는 맞음 |
| Quality / Value / Leftovers / seasonality **재군집** | 사이트 공식 분류 **아님** — 작성자가 cluster diagram의 평균 전략을 **다시** 묶은 읽기 |
| momentum ⊂ Quality (profit growth와 상관) | 퀀트 해석 · 제조 변수에 **그대로 이식 ❌** |

→ 153·13은 논문. 4대 상위군집은 **트윗 작성자 해석**.

## 실체

주식 특성치 153개를 상관으로 13 테마에 넣고, 팩터 수익(long−short)을 공개. 논문 제목의 본론은 **복제 위기** — 출판된 팩터 상당수가 재현되지 않는다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 153 팩터·JKP 수익률·AQR 데이터를 제조 모델에 | ❌ | 주식 횡단면 · `gem-quant-ts-playbook`과 같이 **트레이딩 ❌** |
| Quality/Value/Momentum **이름**을 KPI·PDF에 | ❌ | 트윗의 재군집 · 도메인 불일치 |
| **패턴** — 상관 군집 후 대표 1개 | ✅ pull↑ | 2종 Join 후 열이 폭증 → 상관이 높은 묶음에서 **대표 변수 1개**만 GBDT에 · `gem-suzuki` 차원의 저주 · `gem-kaggle-feature-engineering`과 짝 |
| **패턴** — 보조 데이터가 주 데이터의 복사인가 | ✅ | Leftovers = 앞 두 군집과 **역상관**일 때만 새 정보. Ablation A1이 주와 같은 방향이면 보조는 중복 |
| **패턴** — 「시계열 피처」를 한 덩어리로 보지 말 것 | △ | seasonality가 내부에서도 안 묶임 → hour/요일/월을 **각각** 넣고 죽은 것은 drop |
| **복제 위기** 제목 | △ | 가이드북 발표 지표를 group/time split에서 **다시 재지 않으면** 우리 숫자가 아님 · `kamp-leakage-audit` |

## K-AI — 우리 파이프 대응

| JKP | Q.AI |
| --- | --- |
| 153 raw characteristics | Join 후 전체 열 |
| 13 theme clusters | `|corr|` 높은 묶음 · 묶음당 대표 1개 (+ GBDT가 고른 교호는 유지) |
| 상위 재군집 · 역상관 leftover | **주 데이터 대비 보조 열의 신규 정보** — A0 vs A1이 이 테스트 |
| 복제 실패 | 가이드북 random-split 점수 ≠ 우리 홀드아웃 |

## 경계

- **주식 팩터·long-short·AQR** — Model·PDF **❌**
- `gem-quant-ts-playbook` (151 Strategies · vol · OOS)와 축이 겹침 — 본 gem은 **상관 군집으로 열 prune**만
- `gem-discover-linear-algebra` 다중공선성 · `gem-kaggle-feature-engineering` MI와 역할 분담: 여긴 **묶어서 버리기**, MI는 **타깃과의 관련**

## pull 조건

| 시기 | 용도 |
| --- | --- |
| Sprint 1 (2종 Join 후) | 상관 히트맵 → 묶음당 대표 1개 → A0/A1. JKP 데이터 **다운로드 ❌** |
| PDF §3 | 「상관이 높은 열은 하나로 묶었다」 1문장 · 논문·사이트 **인용 ❌** (주식 복제 논문) |
| default | 153 팩터 **구현 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-jkp-factor-clusters` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull↑ Join 후 열 prune) |
| 적용 축 | Data·Ablation — 주식 팩터 **❌** |

## 관련

- `gem-quant-ts-playbook` · `gem-kaggle-feature-engineering` · `gem-suzuki-deep-foundation-math` · `gem-discover-linear-algebra`
- `.cursor/skills/kamp-fusion-ablation`
