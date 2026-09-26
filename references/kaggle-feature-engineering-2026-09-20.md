# Kaggle Learn · Feature Engineering → FE 체크리스트 (2026-09-20)

## 출처

- **트리거 트윗:** [@hayatasuuu / status/2101431168864546992](https://x.com/hayatasuuu/status/2101431168864546992) (2026-09-19, 日本語)
- **큐레이터:** はやたす — Python DS YouTube · Kaggle Expert · 著書【Pythonブートキャンプ】
- **강좌:** [Kaggle Learn · Feature Engineering](https://www.kaggle.com/learn/feature-engineering) — **無料** · 공식 micro-course
- **Scout:** fxtwitter (2026-09-20) · Kaggle 페이지 메타

## 트윗·강좌 목차

| 단원 | 내용 |
| --- | --- |
| FE란 | 특징량 설계가 스코어·현장 KPI에 미치는 역할 |
| **相互情報量 (MI)** | 효과 있는 변수 탐색 |
| 새 특징 | 도메인·교차·집계 피처 |
| **K-means → feature** | 클러스터 ID·거리를 입력으로 |
| **PCA** | 차원 압축·잡음 제거 |
| **ターゲットエンコーディング** | 범주 → 타깃 통계 매핑 |
| 실습 | **Ames Housing** (주택 가격) |

> 「モデルを変えるより、ここを直すほうがスコアは上がります」— **모델 교체보다 FE 우선**.

## Q.AI 판정

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| Kaggle 코스·Ames 그대로 제출 | ❌ | 주택 ≠ 제조 · `data/raw/` **합성·대체 ❌** |
| **ターゲットエンコーディング** 전 train 적용 | ❌ | **누수** — `reports/leakage-audit-checklist.md` |
| **패턴** — FE 우선·MI·집계·(조건부) PCA/K-means | ✅ | **레시피 A** Data·Model — GBDT **전** 파이프 |

**채택할 아이디어 1개:** 가이드북 RF 대비 **「분할·FE·보정」** 3축 — 모델 신기함·LLM/arch **후순위** (`gem-xgboost-math-zenn`·`gem-typesafe-calibrated-decisions`와 정렬).

## K-AI — **레시피 A** (deferred pull↑)

| Kaggle FE | 제조 대응 | 축 |
| --- | --- | --- |
| MI 변수 선별 | EDA·**다중공선성** 전 후보 축소 (`gem-discover-linear-algebra` 보조) | Data · PDF §3 |
| 통계·lag·교차 집계 | 가이드북 **Spindle/Servo Load → 통계 FE** (KAMP #50) | Data · Model |
| K-means feature | LOT·공정 **군집 라벨** — **group split 필수** | Model (optional) |
| PCA | 센서 고차원 **exp만** — 메인=해석 가능 tree | Model (optional) |
| Target encoding | **group/time CV fold 내**만 · validation leak ❌ | Data · Model |
| Housing 실습 | **교육용** — 방법론만 이식 | — |

## 경계

- Kaggle **리더보드 스코어** PDF 인용 ❌
- Ames·주택 변수명 그대로 ❌
- Target encoding = `gem-polya-stanford-problems` 「misleading→누수」와 **동일 긴장**
- DNN·딥 FE (가이드북 #50 DNN 사례) — **제출 메인=GBDT** 유지
- `gem-quant-ts-playbook` — 시계열 lag/FFT / 본 gem — **표·범주 FE**

## pull 조건

| 时机 | 用途 |
| --- | --- |
| 9/21 **분류·예측·이상** → 레시피 A | Data 파이프 체크리스트 · PDF §3 「FE before model swap」 |
| baseline 대비 | 가이드북 raw→통계 FE vs ours **문서화** |
| Target encoding 검토 시 | **leakage-audit** 통과 전 **금지** |
| pull ❌ | 비전-only · 시계열만(Recipe B) — MI/TE 우선순위 ↓ |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-kaggle-feature-engineering` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull↑ Data · Model · Recipe A) |
| 적용 축 | **Data** (EDA·FE) · **Model** (GBDT 입력) · PDF §3 |

## 관련

- `gem-xgboost-math-zenn` · `gem-discover-linear-algebra` · `gem-polya-stanford-problems`
- `reports/leakage-audit-checklist.md` · `knowledge/kamp-guidebooks-md/50_정밀가공_품질보증_AI_데이터셋.md`
- `docs/reference-concepts.md` — `gem-kaggle-feature-engineering`
