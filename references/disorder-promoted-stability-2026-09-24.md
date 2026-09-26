# Motter · Disorder-promoted stability (Science / arXiv) (2026-09-24)

## 출처

- **트리거 트윗:** [@adilson_motter / 2102755220820308432](https://x.com/adilson_motter/status/2102755220820308432) (2026-09-23) — 저자 본인 공지
- **논문:** [Disorder-promoted stability](https://arxiv.org/abs/2609.25226) · arXiv:2609.25226 · Montanari, Zanin, Motter · Northwestern Center for Network Dynamics · 트윗상 **Science**
- **애니메이션:** [swarmalator](https://montanariarthur.com/animations/swarmalator/)
- **Scout:** fxtwitter API + arXiv 서론 (2026-09-24)

## 트윗 vs 논문

| 트윗 | 논문 |
| --- | --- |
| 「다양성이 네트워크 동역학을 안정시킬 수 있나?」 | 맞음. 노드가 **고차원**이고 Jacobian이 **non-Hermitian**이면 이질성·무작위 disorder가 동기를 **돕는다** |
| Science 논문의 arXiv 공개 | 저자 공지. 본문은 연속시간 결합 시스템 (Kuramoto·Lotka–Volterra 등) |

→ 트윗은 과장 없음. 다만 적용 범위는 **같은 방정식·다른 파라미터의 결합 진동자·생태계·전력망**이다.

## 요지 한 줄

1차원 Kuramoto처럼 단순화하면 「노드가 비슷해야 안정」이 되고, 상태 변수가 두 개 이상이면 그 결론이 **뒤집혀** 적당한 이질성이 더 안정하다. 모드가 섞이는 것이 그 메커니즘이다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| Kuramoto·swarm·전력망 동기 모델 | ❌ | 제출 Model = GBDT · 연속시간 네트워크 ❌ |
| 「다양성·disorder가 안정」→ 피처·데이터셋 추가 | ❌ | 2종 Join에서 열을 **늘리는** 근거로 쓰면 `gem-suzuki`(차원의 저주)·`gem-jkp`(상관 복사)와 **정면 충돌** |
| 「단순 모형이 결론의 부호를 뒤집는다」 | △ 이미 있음 | 가이드북 **random-split** 결론이 group/time split에서 뒤집힐 수 있음 · `kamp-leakage-audit` · `gem-manokhin` naive 열 |
| PDF에 Science·동기화 인용 | ❌ | 도메인 불일치 · 심사자에게 변수 추가로 읽힘 |

## 경계

- **이질 파라미터 = 안정** 문장을 공정 조건·센서 다양성에 **비유 ❌**
- `gem-zeeman`(급변)·`gem-menaldo`(regime)는 공정 **상태** 이야기. 본 논문의 disorder와 섞지 않음
- 애니메이션·인터랙티브 ❌

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | **pull ❌** |
| 누군가 「데이터를 더 섞으면 안정」이라고 하면 | 이 파일로 **차단** — 논문은 결합 미분방정식의 안정성이지 표 데이터 융합이 아님 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-disorder-promoted-stability` |
| 분류 | **MIX 원석** (`idea`) |
| 상태 | **deferred** (pull ❌ · **오용 방지**) |
| 적용 축 | 경계 — Model·PDF·데이터 추가 **❌** |

## 관련

- `gem-suzuki-deep-foundation-math` · `gem-jkp-factor-clusters` · `gem-manokhin-modern-forecasting` · `kamp-leakage-audit`
