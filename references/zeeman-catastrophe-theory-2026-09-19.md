# Zeeman · Seven Elementary Catastrophes → PDF 서술 (2026-09-19)

## 출처

- **트리거:** [@snezanalawrence / 2100833565940363733](https://x.com/snezanalawrence/status/2100833565940363733) (2026-09-18) — 수학사 학자 Snezana Lawrence
- **논문:** E. C. Zeeman · *Catastrophe Theory* (1976, Scientific American 스타일 기사)
- **PDF:** [iMechanica — 1976 zeeman catastrophe theory.pdf](https://www.imechanica.org/sites/default/files/1976%20zeeman%20catastrophe%20theory.pdf)
- **Scout:** fxtwitter + PDF 앞부분 (2026-09-19)

## 요지

미분방정식은 **매끄러운 변화**만 다룸. Thorn(1972) · Zeeman — **제어 변수 ≤4개**이면 불연속·급변은 **7가지 기본 재난(catastrophe)** 으로 분류 가능.

| 재난 | 제어 변수 | 행동 변수 | 직관 |
| --- | --- | --- | --- |
| fold | 1 | 1 | 단일 임계 — 한 방향 급변 |
| **cusp** | 2 | 1 | **이중 안정** · bifurcation set · **히스테리시스** |
| swallowtail | 3 | 1 | 더 복잡한 분기 |
| butterfly | 4 | 1 | 4제어 급변 |
| elliptic / hyperbolic / parabolic umbilic | 3–4 | 2 | 2행동 변수 |

**cusp 예:** rage·fear(제어) → attack vs flight(행동). 제어 궤적이 fold curve를 넘으면 **행동이 점프**. **경로 의존** — 같은 제어점이라도 **최근 이력**에 따라 다른 안정 상태.

## MIX 잠재 (deferred) — **은유·PDF만**

| Zeeman 패턴 | K-AI 대응 | 축 |
| --- | --- | --- |
| cusp · bifurcation set | 공정 **온도·압·속도**가 서서히 변할 때 **불량률 급등** 구간 | PDF §2 · §4 |
| bimodal region | 양품/불량 **동시 가능** — 임계 근처 불확실 | Model · PDF §5 |
| hysteresis · path dependence | **동일 센서값**이라도 **직전 공정 이력**에 결과 다름 | Data · PDF §3 |
| fold curve crossing | 이상 탐지 **임계값** 넘을 때 알람 **급증** (quant-ts cost threshold 은유) | Model · PDF §6 |
| “smooth model fails” | 선형·단조 가정 EDA **함정** (`gem-polya-stanford-problems` misleading) | PDF §3 |

**투입 ❌:** Thorn/Zeeman **잠재함수·재난 진행법(catastrophe progression)** 구현 · 7종 분류를 데이터에 **기계 적용** · iMechanica PDF 전문 인용

## 경계

- 1970년대 유행 후 **현대 ML 주류 ❌** — **서술·가설 프레이밍**만
- Zeeman 개·물고기 예시 = **비유** — 제조 PDF에 그대로 복사 ❌
- `gem-quant-ts-playbook` — FFT·홀드아웃·비용 임계 (정량) / 본 gem — **불연속·체제 전환** (질적)
- `gem-beckmann-transport` — 확률 정제 / 본 gem — **제어·행동 기하** (다른 축)

## pull 조건

| 时机 | 用途 |
| --- | --- |
| 9/21 과제에 **급변·체제 전환** 신호 | PDF §2 1문단 — “매끄러운 회귀만으로는 부족” |
| 레시피 B · 시계열 | §4 — cusp式 **히스테리시스** (학습/검증 구간 분리 근거) |
| PdM · 임계 알람 | §6 — fold crossing = **비용-민감도** knee (`gem-quant-ts`) |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-zeeman-catastrophe-theory` |
| 유형 | `playbook` |
| 상태 | **deferred** · **pull↑ PDF §2·§4** |
| 적용 축 | PDF · 가설(체제 전환) · Data(경로 의존) |

## 관련

- `gem-quant-ts-playbook` · `gem-polya-stanford-problems` · `gem-beckmann-transport` · `gem-urbanski-curved-geometry` (연속 곡률·pull ❌)
- [`docs/mix-application-plan.md`](../docs/mix-application-plan.md) §7 deferred
- [`reports/leakage-audit-checklist.md`](../reports/leakage-audit-checklist.md)
