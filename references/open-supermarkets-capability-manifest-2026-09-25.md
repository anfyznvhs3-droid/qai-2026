# open-supermarkets · 능력표의 빈 칸은 실패와 다르다 (2026-09-25)

## 출처

- **트리거 트윗:** [@DanKornas / 2103348521696952616](https://x.com/DanKornas/status/2103348521696952616) (2026-09-25) — 큐레이터. URL은 답글. 본문은 저장소 이름과 기능만 적음
- **1차:** [github.com/abracadabra50/open-supermarkets](https://github.com/abracadabra50/open-supermarkets) README (조회 2026-09-25) · MIT · TypeScript
- **Scout:** fxtwitter API + README. npm·MCP·Playwright **설치 ❌**

## 트윗 vs README

| 트윗 | README |
| --- | --- |
| CLI · HTTP API · MCP · agent skills | 같은 네 면. MCP 도구 22개 |
| 카탈로그 검색·가격 비교·장바구니 | 있음. 검색은 여러 나라에서 계정 없이 됨 |
| 배치 MCP (한 번에 여러 항목) | `grocery_search_batch` · `grocery_basket_add_batch`. README: 배치는 **후보만** 돌려주고 무엇을 살지는 정하지 않음 |
| 제공자 표로 검색·바구니·슬롯·결제·인증 지원 표시 | 「What works where」표. `supermarket providers`가 레지스트리에서 출력. 손글 홍보가 아님 |
| 결제는 미리보기, 주문은 명시적 확인 | `dry_run` 기본 **true**. CLI는 `--confirm`이 있어야 돈이 나감 |
| MIT | LICENSE 배지와 맞음 |

조회 시점 README는 **10개 제공자 · 7개국**(헝가리 Tesco 포함). 트윗 본문은 개수를 말하지 않는다. Ocado는 슬롯 **읽기만**, 결제 칸은 **—**. AWS WAF 때문에 예약이 안 되므로 표가 그 능력을 주장하지 않는다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 패키지·MCP·스킬·소매 로그인·결제 | ❌ | 장보기 에이전트. 비공식 연동·약관 위험. Library Drift. 제조 제출과 무관 |
| **패턴** — 능력은 검증된 것만 칸에 넣는다 | ✅ | 가이드북에 열이 있어도 받은 파일에서 확인하기 전에는 ✓가 아니다. 없는 조인 키는 대시 |
| 실패한 조인을 빈 결과(0건)로 적지 않음 | ✅ | README: 인증 실패를 빈 검색처럼 보이지 않게 한다. 조인 실패와 「그 구간에 불량이 없음」은 다른 칸 |
| 애매한 보조 열은 비운다 | ✅ | Open Food Facts 보강: 못 찾으면 아무것도 안 붙인다. **틀린 알레르기 표시가 누락보다 나쁘다.** 틀린 LOT·설비 조인도 같다 |
| 모델 출력을 라인 정지로 바로 연결 | ❌ 이미 사람 확인 | 결제 미리보기와 같은 구조. 예측은 미리보기, 조치는 사람. `gem-jev-visual-coarse-bins`와 한 문장으로 합치지 않음 |

`gem-dualgraph`는 PDF 절을 로그 없이 채우지 않는 규칙. 본 건은 **두 데이터셋 능력표**다. 표의 대시, 조인 실패, 불확실 매칭은 서로 다른 기호다.

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 저장소 **pull ❌** |
| 9/27에 데이터 2개가 잠기면 | 각 ID에 목표·시간·설비·라벨 출처를 ✓ / — / 실패로 적는다. 애매한 조인 키는 비운다 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-open-supermarkets-capability-manifest` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (패턴만 · 쇼핑 스택 ❌) |
| 적용 축 | 데이터 — 능력표 · 조인 실패 ≠ 0건 |

## 관련

- `gem-dualgraph-outline-vs-knowledge` · `gem-jkp-factor-clusters` · `kamp-leakage-audit`
