# Discover Linear Algebra → 기초 LA 참고 (2026-09-19)

## 출처

- **트리거:** [@antoniolupetti / 2100932586730057991](https://x.com/antoniolupetti/status/2100932586730057991) (2026-09-18)
- **도서:** *Discover Linear Algebra* — J. Sylvestre (U Alberta, 2025 PreRelease)
- **PDF:** [Electronic pre-release](https://sites.ualberta.ca/~jsylvest/books/pdf/JSylvestre-DiscoverLinearAlgebra1-2025-PreRelease-Electronic.pdf) (~400p, 무료)
- **Scout:** _(미실행 — fxtwitter, 2026-09-19)_

## 요지

선형방정식·행렬 → 역행렬·행렬식 → 벡터·부분공간 → 고유값·대각화. 장별 연습문제.

## MIX 잠재 (deferred)

| LA 주제 | 제조 대응 | pull 조건 |
| --- | --- | --- |
| 행렬·벡터 | 센서 다변량 **상관·공분산** EDA | 항상 (개념) |
| column/row/null space | **다중공선성** · 불필요 피처 제거 | 고차원 표 |
| eigenvalues · diagonalization | **PCA** 차원 축소 (exp만) | feature >> sample |
| — | GBDT 메인 경로 | **pull ❌** |

## 경계

- 교과서 **전체 학습 ❌** — 17일 일정
- PDF에 LA 증명 **❌** — PCA 썼을 때 **한 문단**만
- VEDA `ref-veda-*` 대신 **MIX deferred** — 조합 시 “PCA 근거” 포인터

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-discover-linear-algebra` |
| 유형 | `playbook` |
| 상태 | **deferred** |
| 적용 축 | Data(EDA) · Model(exp: PCA) · PDF(부록) |

## 관련

- `gem-discover-linear-algebra` · `gem-quant-ts-playbook` · [`idema-intro-quantum-mechanics-2026-09-19.md`](idema-intro-quantum-mechanics-2026-09-19.md)
- [`docs/mix-application-plan.md`](../docs/mix-application-plan.md) 레시피 B optional
