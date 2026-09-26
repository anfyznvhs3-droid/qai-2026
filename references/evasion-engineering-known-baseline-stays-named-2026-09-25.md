# Evasion Engineering · 알려진 베이스라인은 이름을 남긴다 (2026-09-25)

## 출처

- **트리거 트윗:** [@nostarch / 2103264743410585995](https://x.com/nostarch/status/2103264743410585995) (2026-09-24) — 출판사 No Starch Press
- **책 소개:** [Evasion Engineering](https://nostarch.com/evasion-engineering) — Dennis Chow, Michael LaSalvia. 2026-07, 256쪽. ISBN-13 9781718505049
- **Scout:** fxtwitter API + 출판사 상품 페이지 (2026-09-25). 2장 다운로드·동반 저장소 **받지 않음**

공격 도구를 만드는 절차, 탐지를 피하는 방법, 코드는 이 노트에 적지 않는다.

## 트윗 vs 페이지

| 트윗 | 페이지 |
| --- | --- |
| 기성 레드팀 도구는 방어자도 이미 봤다 | 소개도 같은 전제. 공개된 공격 프레임워크는 알려지는 순간 탄다는 마케팅 |
| Go로 자체 도구를 만든다. 범주는 C2 임플란트, 로더, 횡적 이동, 은밀한 반출, 그리고 무엇이 들키게 하는지 | 소개가 같은 범주를 다룬다고 적음. 저자·2026-07·256쪽·Go 1.21+·Python 3은 **페이지에만** |
| (저자 없음) | Dennis Chow, Michael LaSalvia |

트윗이 말한 범주 밖(구현 순서, 패킹, 검증 절차)은 대조하지 않았다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 책·2장·동반 코드 | ❌ | 제조 트랙(제안 ①, KAMP 2종, GBDT, Ablation, PDF)과 무관. 절차를 가져오지 않음 |
| 「이미 알려진 도구이니 이름을 바꾸거나 제출에서 뺀다」 | ❌ | 가이드북·naive 열은 **그 이름 그대로** Ablation에 남긴다 |
| **패턴** — 공개 베이스라인은 식별 가능하게 | ✅ 표 | 재현은 `gem-quantum-olympiad`의 재측정. 열을 빼는 결정은 `gem-layerx`. 본 건은 **가명·난독으로 공개 방법을 숨기지 않음** |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 책·코드·탐지 회피 **pull ❌** |
| Ablation·PDF | 비교한 가이드북·naive의 공식 이름을 열 머리에 적음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-evasion-engineering-known-baseline-stays-named` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Ablation — 공개 방법의 이름 |

## 관련

- `gem-layerx-qa-add-vs-drop` · `gem-quantum-olympiad-reproof-is-a-demo` · `gem-sakurai-paper-reading` · `gem-manokhin-modern-forecasting`
