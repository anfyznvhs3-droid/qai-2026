# 佐藤竜馬 · 研究の進め方 — ランダムネスとの付き合い方 (YAML 2024) (2026-09-24)

## 출처

- **트리거 트윗:** [@tarantula_ds_ / 2102639284419547570](https://x.com/tarantula_ds_/status/2102639284419547570) (2026-09-23) — `gem-decade-review-ts-anomaly`와 같은 큐레이터. 「テーマの決め方・論文の書き方」로만 요약
- **원 자료:** [Speaker Deck · joisino/randomness](https://speakerdeck.com/joisino/randomness/) · 佐藤竜馬 (NII) · 機械学習若手の会 YAML 2024 · 2024-09
- **Scout:** fxtwitter API + Speaker Deck transcript (2026-09-24)

## 트윗이 빠뜨린 핵심

강연의 축은 문장력이 아니라 **무작위를 언제 확정하고, 언제 보고, 언제 버려도 되는가**이다. 슬라이드 62는 이렇게 말한다. 주사위 60개 중 6만 남기면 6이 연속으로 나온 것처럼 보인다. **그리고 바로 다음에 「논문에 실을 테스트 데이터에서는 하면 안 된다」고 적혀 있다.**

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 시드·split을 여러 개 돌리고 **좋은 것만** 보고 | ❌ **금지** | 슬라이드 59–62의 후지혜. 대회 홀드아웃·테스트 예측에 하면 누수. `kamp-leakage-audit` |
| 「프로젝트를 많이 돌려 대수법칙」 | ❌ | 논문 커리어용. 우리는 **제출 1회** · 마감 10/08. 모델 계열을 늘리지 않음 |
| 테마는 아무거나 빨리 | ❌ | 출제안 ①은 **현장 문제 + 2종**이 이미 제약. 9/27 lock이 그 「제약」 |
| **난수는 글보다 먼저 확정** | ✅ pull↑ | dev split·시드를 **먼저** 고정하고 그 결과로만 문장을 씀. 테스트는 마지막 1회 (슬라이드 29·32. 「테스트 보면 안 됨」은 강연 본문) |
| **인식론적 / 우발적 불확실** | ✅ | EDA·계보·누수 점검으로 줄일 수 있는 것(epistemic)과, 공정 잡음처럼 남아 있는 것(aleatoric)을 구분. 시드 하나가 참값인 척 ❌ |
| **메시지 1~2문장** | ✅ | 10쪽은 그 문장을 전달하는 수단 (슬라이드 28). 우승 스토리 한 문장과 같음 |
| 실패는 숨기지 않음 | ✅ | 안 된 실험은 `experiment-log`에 남김 (슬라이드 34). 버린 시드를 없는 셈 치지 않음 |
| 선택지가 많으면 멈춘다 | ✅ | 잼 30종 (Iyengar 2000). 아이디어 10개 → 3개 → 9/27에 **하나**. 모델은 GBDT 하나 |
| vomit draft·Keogh 슬라이드·그림에 문장 | △ | PDF 초고 때. 지금 ❌ |
| 채택 후 광고·SNS | ❌ | 블라인드 대회. 제출 전 홍보 ❌ |

## K-AI — 우리 파이프 대응

| 佐藤 | Q.AI |
| --- | --- |
| 난수를 앞에 둔다 | `group/time split` + seed를 decision-log에 **실험 전** 기록 |
| 실현값을 보고 전략 | dev 결과를 본 뒤 문장·임계만 조정. **split을 다시 고르지 않음** |
| 나쁜 주사위 폐기 | dev에서 가설이 깨지면 그 실험은 로그에 「실패」. 테스트에서 고르기 ❌ |
| 1~2문장 | `mix-application-plan` §8 우승 문장. 실험은 그 문장의 근거 |
| 대수법칙으로 투고 횟수 | 해당 없음. 실험 cap **3** |

## 경계

- 슬라이드 61–62의 후지혜를 **검증 프로토콜로 오독 ❌**
- `gem-sakurai-paper-reading`은 인용 사다리. 본 gem은 **실험 순서와 시드**
- `gem-polya-stanford-problems`의 문제 이해와 다름. 테마 고민을 이 강연으로 늘리지 않음
- PDF에 YAML·주사위 비유 **인용 ❌**

## pull 조건

| 시기 | 용도 |
| --- | --- |
| Sprint 1 첫 실험 전 | split·seed·안 볼 테스트 파일을 decision-log에 한 줄 |
| 실험이 깨질 때 | 로그에 실패 원인. 시드 쇼핑으로 문장을 맞추지 않음 |
| PDF 초고 | 한 문장에 안 맞는 표는 빼기. Keogh 통독은 하지 않음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-sato-randomness-research` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull↑ 실험 순서 · **홀드아웃 후지혜 금지**) |
| 적용 축 | Model 검증 · PDF 문장 — 다중 프로젝트 ❌ |

## 관련

- `.cursor/skills/kamp-leakage-audit` · `kamp-baseline-gbdt` · `gem-sakurai-paper-reading` · `gem-iwashi-meeting-facilitation`
- [`docs/board.md`](../docs/board.md) — 실험 cap · 9/27 lock
