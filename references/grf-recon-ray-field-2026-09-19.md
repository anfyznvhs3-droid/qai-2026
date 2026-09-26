# GRF-Recon · Global Ray-Field → 장시퀀스 비전 deferred (2026-09-19)

## 출처

- **트리거:** [@zhenjun_zhao / 2101026331064500447](https://x.com/zhenjun_zhao/status/2101026331064500447) (2026-09-18) — 3D vision·SLAM 연구자
- **논문:** [arXiv:2609.20012](https://arxiv.org/abs/2609.20012) — *GRF-Recon: Global Ray-Field Optimization for Long-Sequence Feed-forward Reconstruction*
- **저자:** Enpeng Li · Yunzhou Zhang · Zhiyao Zhang · Dexuan Lyu · Chenyu Wang · Chiyuan Cui · Cheng Cheng (2026-09-17)
- **Scout:** arXiv abstract (2026-09-19)

## 요지

장 monocular **긴 이미지 시퀀스** feed-forward 3D 재구성:

| 문제 | 방법 |
| --- | --- |
| GPU·로컬 기하 붕괴·**궤적 drift** | coarse-to-fine trajectory alignment |
| fine structure depth | **LoRA**로 monocular geometric prior **distill** |
| chunk 간 불일치 | **hybrid-weight sparse ray-field** — cross-frame ray coupling |
| 누적 drift | trajectory **stitching** + joint ray-error |

SLAM급 trajectory 정확도 + 대규모 **전역 일관 3D**.

## MIX 잠재 (deferred) — **비전 과제만**

| GRF 패턴 | K-AI 대응 | 축 |
| --- | --- | --- |
| long-sequence drift | 연속 촬영·라인 스캔 **시간축 drift** — group/time split | Data · PDF §3 |
| chunk vs global | 윈도우 CNN vs **LOT·공정 단위 일관** 서술 | PDF §4 |
| LoRA prior inject | 전이학습 **어댑터만** — full fine-tune ❌ (규정 확인) | Model (vision exp) |
| sparse hybrid refine | hard patch만 2차 (`gem-beckmann` cascade) | Model |

**투입 ❌:** ray-field·SLAM·3D mesh **제출 파이프** · OCR/Scene-Text(가이드북 01·16)와 **다른 축**

## 경계

- KAMP 50종 **대부분 표·시계열** — pull 기본 **❌**
- 9/21 과제 = **다프레임 비전·검사 시퀀스**일 때만 exp 브랜치 검토
- `gem-discover-linear-algebra`·GBDT 메인과 무관

## pull 조건

| 时机 | 用途 |
| --- | --- |
| 과제 = **연속 이미지·3D/자세** | PDF §4 — global consistency·drift 한 절 |
| 그 외 | **pull ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-grf-recon-ray-field` |
| 유형 | `idea` |
| 상태 | **deferred** · **pull ❌** (비전 lock 전) |
| 적용 축 | Model(vision exp) · PDF §3·§4 |

## 관련

- KAMP 가이드북 06 머신비전 · 16 Scene-Text · [`kamp-guidebooks-summary.csv`](../knowledge/kamp-guidebooks-summary.csv)
- `gem-beckmann-transport` · `gem-quant-ts-playbook` (시계열 drift)
- [`docs/mix-application-plan.md`](../docs/mix-application-plan.md)
