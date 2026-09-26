# Aschenbrenner · directed growth · 누적 생존 위험 (2026-09-22)

## 출처

- **트리거 트윗:** [@Phoenixyin13 / 2101869562580832449](https://x.com/Phoenixyin13/status/2101869562580832449) (2026-09-21, 中文)
- **주제:** Leopold Aschenbrenner — Columbia 우등 학부논문 *Aversion to Change and the End of Exponential Growth* · 후속 **《生存风险与增长》**(existential risk & growth) 서술
- **이론 뼈대:** Daron Acemoglu **내생·定向(directed) 기술변화** — 「위험 기술」 vs 「안전·방어 기술」 이분
- **Scout:** fxtwitter (2026-09-22) · **원 논문 PDF 미확보** (`review_needed`)

## 트윗 요지

| 개념 | 내용 |
| --- | --- |
| 성장의 이중성 | 생산력 ↑ 동시에 **사고 파괴력** ↑ · **방어·안전** 역량도 ↑ |
| 定向 기술 | 균등한 TFP가 아니라 **위험 부문**(고위험 AI·원자력·유전) vs **안전 부문** |
| 시점 → 경로 | 「지금 위험」이 아니라 **누적·경로 의존** 위험 |
| Kuznets式 | 비선형 동역학 · 특정 매개변수에서 **倒U** — 위험 ↑ 후 ↓ |
| 반직관 | **가속 성장** = 단기 위험 ↑ · **장기 생존** ↑ 가능; **정체** = 위험 구간 체류 ↑ |
| 정책 긴장 | 「오늘 위험 감소」≠ 「위험 구간 통과 확률 최대」 |
| 속도 격차 | 위험 능력 **빠른 확산** vs 방어 **긴 검증·배포** → 격차 확대 |
| 모델 역할 | 공식은 진리 자동 ❌ · **분歧 구간**·전제 노출 |

## MIX 잠재 — **제조·PDF 은유만**

| Aschenbrenner/Acemoglu | K-AI 대응 | 축 |
| --- | --- | --- |
| 위험 vs 안전 定向 기술 | **생산·최적화 AI** vs **품질·예지·검사 AI** (2026 출제 ②③) | PDF §7 |
| 단기 vs 누적 위험 | **당월 불량률** vs **누적 scrap·재작업·폐기** (`gem-blanchard` stock/flow) | PDF §6·§8 |
| 倒U | 조기 AI 도입 **오탐↑(단기)** · **누적 불량↓(장기)** — **조건부** | PDF §7 |
| 속도 vs 방어 배포 | 모델 **빠른 배포** vs **보정·human review·Ablation 검증** 지연 | Model · PDF §7 |
| 경로별 누적 위험 | rollout 시나리오 **Pareto** (`gem-lightning-weave`) — recall vs 알람 | PDF §6 |

**투입 ❌:** 거시 생존위험 수치 · Acemoglu calibrations · AI doom **학습·라벨**

**우리 구현:** 재직자 평가 **확산·운영** — 「전역 속도만 올리면 단기 KPI는 좋아도 **누적 품질비용·검증 공백**이 커질 수 있다」 1절 + **보정·τ_review·Ablation** = 「방어 기술」 축.

## 경계

- **거시·AI 안전 논쟁** — KAMP 심사 **직접 인용 ❌** (비제조)
- `gem-blanchard-ratings-debt-deficits` — **stock/flow·subgroup** / 본 gem — **경로·定向·倒U**
- `gem-zeeman-catastrophe-theory` — **cusp 급변** / 본 gem — **부드러운 倒U·누적**
- `gem-scientisttwo-autonomous-research` — 자율 연구 / 본 gem — **성장·안전 trade-off 서술** (별축)
- Phoenixyin 큐레이션 — **학술 서술** · repo/skill **없음**

## pull 조건

| 时机 | 用途 |
| --- | --- |
| default | **pull ❌** |
| PDF §7·§8 (확산·PoC) | 「定向」·누적 vs 단기 · 방어(보정) 배포 **1절** |
| pull ❌ | 원 논문·《生存风险与增长》 PDF 미확보 시 수치 인용 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-aschenbrenner-directed-growth-risk` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌ · PDF §7 **선택**) |
| 적용 축 | PDF 확산·운영 서술 — Model·Data **❌** |

## 관련

- `gem-blanchard-ratings-debt-deficits` · `gem-lightning-weave` · `gem-typesafe-calibrated-decisions` · `gem-qm-ocx-collab`
- [`docs/task-lock-2026-09-21.md`](../docs/task-lock-2026-09-21.md) — 출제 ②③
- [`AGENT.MD`](../AGENT.MD) §4.4 · §7 확산
