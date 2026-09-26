# Idema · Introduction to Quantum Mechanics → 수학 배경 (2026-09-19)

## 출처

- **트리거:** [@antoniolupetti / 2101250592333012996](https://x.com/antoniolupetti/status/2101250592333012996) (2026-09-19) — Antonio Lupetti · Algebrica
- **도서:** *Introduction to Quantum Mechanics* — Idema (TU Delft Open Textbooks · **Quantum mechanics for Nanobiology**)
- **PDF:** [GitLab raw PDF](https://gitlab.tudelft.nl/opentextbooks/quantum-mechanics-for-nanobiology/-/raw/main/pdf/Idema%20-%20Introduction%20to%20quantum%20mechanics.pdf) (무료)
- **Repo:** [gitlab.tudelft.nl/opentextbooks/quantum-mechanics-for-nanobiology](https://gitlab.tudelft.nl/opentextbooks/quantum-mechanics-for-nanobiology)
- **Scout:** fxtwitter (2026-09-19) · **PDF 본문 미독**

## 요지

QM **수학 기초** 교재 (미적분·선형대수·ODE 선행):

| 블록 | 내용 |
| --- | --- |
| 기초 | Schrödinger · Hilbert space · 연산자·**고유값** · Dirac · **불확정성** · 대칭·보존 |
| 응용 | potential well · **tunneling** · harmonic · H atom · spin · entanglement · Bell |
| 근사 | **perturbation theory** · 원자·분자·고체 전자구조 |

nanobiology 맥락 오픈 교과서 — **물리 실험 ❌**, 수학 프레임 위주.

## MIX 잠재 (deferred) — **용어·은유만**

| QM 주제 | K-AI 대응 | pull |
| --- | --- | --- |
| 고유값·연산자 | **FFT 주파수 모드** · PCA eigen (`gem-quant-ts-playbook` · `gem-discover-linear-algebra`) | 개념 |
| 불확정성 | 센서 **측정 한계·잡음** PDF §2 1문장 | pull ❌ |
| perturbation | 공정 **미소 drift** 근사 은유 | pull ❌ |
| Schrödinger·고체·나노 | **제조 경진 무관** | ❌ |
| — | GBDT+보정 **메인** | **pull ❌** |

**투입 ❌:** QM 모델·나노바이오 데이터 · 교과서 **전체 학습** (17일 일정)

## 경계

- `gem-discover-linear-algebra` — **같은 큐레이터(Lupetti)** · LA 선행 → 본 교재는 **다음 단계** (경진 **둘 다 deferred**)
- `gem-qm-ocx-collab` — **팀 협업 QM** / 본 gem — **양자역학 물리** · **이름 충돌 주의**
- VEDA `ref-veda-adv-eng-math` — store-only · 본 gem은 MIX **수학 포인터**

## pull 조건

| 时机 | 用途 |
| --- | --- |
| pull ❌ default | PDF·Model에 QM 수식 **❌** |
| (극히 드묾) FFT Fig 캡션 | 「고유모드·스펙트럼」 **한 줄** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-idema-intro-quantum-mechanics` |
| 유형 | `playbook` |
| 상태 | **deferred** · **pull ❌** |
| 적용 축 | (배경) 수학 · PDF 직접 인용 거의 없음 |

## 관련

- `gem-discover-linear-algebra` · `gem-quant-ts-playbook` · [`discover-linear-algebra-2026-09-19.md`](discover-linear-algebra-2026-09-19.md)
- [`docs/mix-application-plan.md`](../docs/mix-application-plan.md) — GBDT 메인 · 레시피 B optional 수학
