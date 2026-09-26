# 鈴木大慈 · 深層基盤モデルの数理 (JSAI2025 튜토리얼) (2026-09-23)

## 출처

- **트리거 트윗:** [@Dataibridge_01 / 2102626589427298640](https://x.com/Dataibridge_01/status/2102626589427298640) (2026-09-23, 日本語 · 需要予測·効果測定 DS)
- **원 자료:** [Speaker Deck · 2025年度人工知能学会全国大会チュートリアル講演「深層基盤モデルの数理」](https://speakerdeck.com/taiji_suzuki/2025nian-du-ren-gong-zhi-neng-xue-hui-quan-guo-da-hui-tiyutoriarujiang-yan-shen-ceng-ji-pan-moderunoshu-li) · **鈴木大慈** (東大 情報理工 · RIKEN AIP 深層学習理論チーム) · 161장
- **Scout:** fxtwitter API + Speaker Deck transcript (2026-09-23)

## 트윗 vs 원본

| Dataibridge 요약 | 슬라이드 |
| --- | --- |
| 스케일링 법칙 · 테스트타임 스케일링 | p.13 Kaplan · p.64 「데이터 고갈 → 다양한 스케일링」 · p.68 |
| 차원의 저주 → 特徴学習로 회피 (커널법과 차이) | p.15–26 · anisotropic Besov (Suzuki & Nitanda NeurIPS2021) |
| 파라미터 > 데이터인데 과적합 안 되는 이유 · 정보 압축 | p.7–8 · 知能=情報圧縮 출발점 |
| 「수요예측에서 변수 늘려도 정확도 안 오를 때 갈라보기」 | 트윗 작성자의 **실무 응용 해석** — 슬라이드 본문 아님 |

→ 트윗의 실무 사례(수요예측·광고·社内LLM)는 큐레이터 의견. 슬라이드는 **이론 튜토리얼**.

## 우리에게 중요한 슬라이드 1장

> **p.15 「カーネル法と深層学習の違い」** — 데이터가 **적으면 얕은 학습**(커널·고정 기저)이 낫고, **많으면 심층**이 낫다. 교차점은 문제 복잡도에 따라 달라짐.

KAMP 데이터셋은 수천~수십만 행 · 수십 변수 · 표 형식. 이 슬라이드가 말하는 「적은 데이터」 구간이다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 161장 통독 · Besov·SGD 이론 pull | ❌ | 18일 · Model에 직접 투입 없음 |
| Transformer·SSM·확산모델 (p.54~) | ❌ | LLM 이론 — `gem-t-loopformer` 등 deferred 묶음과 동일 |
| **p.15 얕은 vs 깊은 교차** → GBDT 선택 논거 | ✅ pull↑ | PDF §5 「왜 DNN 아닌 GBDT」 — 가이드북 18종이 deep-net baseline인데 데이터 규모는 얕은 쪽 |
| **차원의 저주** → 변수 추가 ≠ 성능 | ✅ pull↑ | 2종 융합 Ablation: 보조 데이터를 붙여 **변수만 늘면** 오히려 악화 가능 → A0/A1 비교가 필수인 이유 |
| **特徴学習** 대체 = 명시적 FE | △ | GBDT는 特徴学習 없음 → 「효과 있는 방향」은 사람이 lag·집계·비율로 만든다 (`gem-kaggle-feature-engineering`) · SHAP으로 방향 확인 |
| 정보 압축 = 일반화 | △ | PDF §1 한 줄 은유까지 — 이론 서술 ❌ |
| Dataibridge 큐레이션 | ✅ | 統計×AI 실무 축 · `gem-nakazawa` · `gem-nonbiri`와 같은 日本 DS Scout |

## K-AI — 우리 파이프 대응

| 슬라이드 개념 | Q.AI |
| --- | --- |
| 얕은 학습 우위 (소데이터) | **GBDT + 로컬 보정** 정책 (`task-lock` 제출 Model) |
| 차원의 저주 | 융합 후 변수 수 vs 성능 표 · **A0(주만) / A1(주+보조)** · 불필요 변수 prune |
| 特徴学習 (모델이 방향 발견) | 사람이 FE → **SHAP top-k**로 「효과 있는 방향」 사후 확인 (`gem-trask-abc-attribution`) |
| 스케일링 법칙 | 학습 곡선(learning curve) 1장 — 데이터 더 모으면 나아지는지 §7 확산 근거 |
| 테스트타임 스케일링 | ❌ — 대신 **cascade** (고신뢰 자동 / 저신뢰 재검사, `gem-beckmann-transport`) |

## 경계

- **LLM·Transformer·확산 이론** — Model·PDF 투입 ❌
- `gem-protein-sequence-space-llnl` (simple > big) · `gem-xgboost-math-zenn` (GBDT 수식)와 **같은 §5 논거 축** — 중복 인용 피하고 본 gem은 **「데이터 규모 → 얕은 모델」 1문장**만
- 인용 시 **鈴木大慈 JSAI2025 튜토리얼** 원출처 · Dataibridge는 발견 경로

## pull 조건

| 시기 | 용도 |
| --- | --- |
| Sprint 1 Ablation | 변수 수 · 데이터 행 수 · 성능 3열 표 (차원의 저주 실증) |
| PDF §5 모델 선택 | 「데이터 규모상 얕은 학습 구간 → GBDT」 1문장 + p.15 각주 |
| PDF §7 확산 | learning curve로 「데이터 축적 시 개선 여지」 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-suzuki-deep-foundation-math` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull↑ PDF §5·Ablation 논거) |
| 적용 축 | PDF §5·§7 · Ablation 설계 — Model 직접 ❌ |

## 관련

- `gem-protein-sequence-space-llnl` · `gem-xgboost-math-zenn` · `gem-kaggle-feature-engineering` · `gem-trask-abc-attribution`
- `.cursor/skills/kamp-fusion-ablation` · `kamp-baseline-gbdt`
- [`knowledge/kamp-guidebooks-summary.csv`](../knowledge/kamp-guidebooks-summary.csv) — deep-net-baseline 18종
