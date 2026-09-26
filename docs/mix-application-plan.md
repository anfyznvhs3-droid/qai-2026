# MIX 적용 기획

기준일: 2026-09-21 (Asia/Seoul) · **팀 Q.AI**  
상태: **Phase 1 (규정 lock)** — 출제안·데이터셋 2종은 [`task-lock-2026-09-21.md`](task-lock-2026-09-21.md) · 잠정 레시피 **A**

MIX는 [`AGENT.MD`](../AGENT.MD) §3·§6과 [`docs/reference-concepts.md`](reference-concepts.md)의 **`gem-*` 원석**만 조합한다.  
`data/raw/` · Scout official · VEDA `ref-veda-*`는 MIX 입력 ❌.

---

## 1. 적용 원칙 (3층)

| 층 | MIX가 하는 일 | 산출물 |
| --- | --- | --- |
| **가설** | 원석 조합 → 실험 1줄 가설 | `reports/experiment-log.md` · `docs/decision-log.md` |
| **패턴** | 구조만 Model에 — 알고리즘·API **이식 ❌** | `src/` 설계·`infer` 스키마·분할·보정 |
| **서술** | PDF·발표에 “왜” 연결 | `reports/submission-outline.md` · 최종 PDF |

**금지:** deferred 원석 코드·외부 API·과제 raw 합성.  
**우선:** active 원석만 9/21 전 일상 참조 (`gem-rsi-workspace-harness` Library Drift 규칙).

---

## 2. 일정 × MIX 활성화

### Phase 0 — ~ 9/20 (과제 lock 전) ✓

| 할 일 | MIX 원석 | 적용 |
| --- | --- | --- |
| 실행 골격 | `gem-opennews-ops-layer` | run catalog 필드: `run_id`, `impact`, `action`, `status` |
| 협업 | `gem-qm-ocx-collab` · `gem-taskview-agent-board` | `decision-log` + **`docs/board.md`** (git init 시) |
| 에이전트 위생 | `gem-rsi-workspace-harness` | deferred gem 컨텍스트 제외 · 실패 원인 필드 |
| PDF 골격 | `gem-nature-abstract-playbook` | `submission-outline` §1을 6문장 역할로 초안 |
| 인용 | `gem-jabref` | PDF 참고문헌 `.bib` (제출 전) |

**하지 않음:** Model 알고리즘 확정 · deferred LLM/arch 원석 활성화.

### Phase 1 — 9/21 0~6h (규정 lock) **진행 중**

| 할 일 | MIX | 상태 |
| --- | --- | --- |
| 과제 lock · Scout 스냅샷 | `knowledge/kamp-public-2026-09-21/` | ✓ |
| prune ritual → `decision-log` | 레시피 **A** · 출제안 **①** (9/22) | ✓ |
| 과제 1문장·Task_Class | 가이드북 **주 1권** — **데이터셋 확정 후** | pending |
| allowed/prohibited | [`task-lock-2026-09-21.md`](task-lock-2026-09-21.md) | ✓ |
| 손실표 | `gem-quant-ts-playbook` — KPI·오탐/미탐 비용 1표 | pending |

### Phase 2 — 9/21 6~24h (최소 제출선)

| 축 | MIX 조합 (기본 레시피 A) |
| --- | --- |
| Data | group/time split — 가이드북 `random-split` 대비 **방법론 차별** |
| Model | GBDT 베이스 + `gem-typesafe-calibrated-decisions` infer 스키마 |
| PDF | 베이스라인 대비 표 1장 + 분할 다이어그램 |

### Phase 3 — 9/22 ~ 10/06 (개선)

과제 유형별 **레시피 B/C** (§3) 중 1개만 선택. 동시에 3레시피 ❌.

### Phase 4 — 10/06 ~ 10/08 (제출 잠금)

| 축 | MIX |
| --- | --- |
| PDF | `gem-nature-abstract-playbook` + Nature式 초록 |
| Model | 수치 잠금 — Review Gate (`gem-qm-ocx-collab`) |
| MIX | **새 원석 조합 금지** — 서술 정합만 |

---

## 3. 원석 조합 레시피 (과제 유형별)

과제 공개 후 **Task_Class** 하나만 고른다 (`kamp-guidebooks-summary.csv`).

### 레시피 A — 분류·예측·이상탐지 (품질보증·예지보전·이상탐지)

**가설 한 줄:** 가이드북 random-split 베이스라인 대비, **group/time 분할 + 보정된 확률 + 비용 임계**로 현장 검사 부하를 줄인다.

| 원석 | Model | PDF |
| --- | --- | --- |
| `gem-quant-ts-playbook` | 비용 임계·홀드아웃·(시계열이면 FFT/lag·**rolling σ**) | §2 KPI·§6 비용표 |
| `gem-typesafe-calibrated-decisions` | infer: Noul/Choice/Score형 필드 + isotonic · ECE | calibration curve Fig |
| `gem-beckmann-transport` | 1-pass GBDT + 저신뢰만 2차 | §5 cascade 다이어그램 |
| `gem-lightning-weave` | recall–알람률 **Pareto 1장** | §6 trade-off |
| `gem-opennews-ops-layer` | run `impact`/`action` catalog | §7 행동 규칙 |

**베이스라인 스토리:** 가이드북 `Guidebook_Algorithm` + `Flags` 인용 → **방법론**으로 이김 (알고리즘 신기함 ❌).

### 레시피 B — 시계열·진동 (윈도우·센서 stream)

레시피 A + 시계열 전처리 강조.

| 추가 | Model | PDF |
| --- | --- | --- |
| `gem-quant-ts-playbook` | 윈도우·주파수·이상 holdout | §3 시간축·§4 분할 |
| _(optional)_ `gem-kata-linear-attention` · `gem-gla-gated-linear-attention` · `gem-based-linear-attention` | **deferred** — TS-transformer **exp 브랜치만** | “linear/gated/BASED attention은 실험 브랜치” 한 줄 |

메인은 **GBDT + lag/FFT** 유지. transformer는 `exp/<member>/ts-transformer` 실패 시 즉시 폐기.

### 레시피 C — 공정·자원 최적화 (18권 계열)

**가설 한 줄:** RL·LLM ❌ — **제약 회귀/휴리스틱 + 비용 최소화**로 가이드북 OR 베이스라인 대비 feasible solution·KPI 개선.

| 원석 | Model | PDF |
| --- | --- | --- |
| `gem-quant-ts-playbook` | 목적함수 = 비용 | §2·§6 |
| `gem-lightning-weave` | 다목적 Pareto (품질 vs 자원) | §6 |
| `gem-protein-sequence-space-llnl` | **deferred** — “가이드북 = sparse archive” PDF 논거만 | §4 한 단락 |
| `gem-smelt-looped-budget` | **deferred** — **동일 budget** 베이스라인 비교 문장 | §4 |

`gem-mimo-rl-harness` · `gem-single-layer-rl` — **조합 ❌**.

### 레시피 D — PDF·발표만 (모든 유형 공통 오버레이)

| 원석 | PDF 섹션 |
| --- | --- |
| `gem-nature-abstract-playbook` | §1 한 장 요약 · 초록 |
| `gem-jabref` | 참고문헌 |
| `gem-vivid-figures` | **deferred** — 차트 108 레시피, 양식 확정 후 |
| `gem-embeddings-handbook` | **deferred** — “목표별 geometry” §4 서술 1문장 |

---

## 4. 9/21 prune ritual (Library Drift 방지)

과제 확정 직후 **1회** (`decision-log`에 기록):

1. **Task_Class** · 데이터 modality(표/TS/비전) 확정
2. §3에서 **레시피 1개** 선택 (A/B/C)
3. `reference-concepts.md`에서 **무관 gem → deferred 유지** (active 승격 ❌ unless §3 매핑)
4. 가이드북 50권 중 **과제 dataset id 1권**만 북마크 — 나머지 md grep만
5. `docs/board.md` sprint 1 (9/21~9/28): baseline · split · infer schema · PDF §1~4

---

## 5. 제출 3축 × MIX 체크리스트

### Data

- [ ] 분할 근거 = Scout datacard + **group/time** (가이드북 random-split 명시적 대비)
- [ ] 손실표 = `gem-quant-ts-playbook` KPI·비용
- [ ] MIX 원석과 raw **혼동 없음** (`data-card.md`에 MIX ❌ 명시)

### Model

- [ ] `infer` JSON 스키마 = opennews 필드 + typesafe `confidence` + calibrated flag
- [ ] cascade = beckmann 1-pass + τ_auto / τ_review
- [ ] experiment-log = opennews catalog (impact·action·실패 원인)
- [ ] Pareto 표 1장 = lightning-weave (recall·알람·검사비)

### PDF

- [ ] §1 = nature 6문장 역할
- [ ] §4 = SMELT式 **동일 budget** 베이스라인 비교 (가이드북 vs ours)
- [ ] §6 = calibration + Wilson/부트스트랩 구간 (`gem-typesafe-satellite` 패턴)
- [ ] §7 = 행동·보류·인간 검토 (typesafe act/review)
- [ ] 수치 = Model 잠금 후만 (`gem-qm-ocx-collab` Review Gate)

---

## 6. 팀 협업 × MIX

| surface | MIX 연동 |
| --- | --- |
| `docs/board.md` | 행 `근거` = `gem-*` id |
| `docs/decision-log.md` | prune ritual · 레시피 선택 · blockers |
| git branch | `exp/<member>/<gem-topic>` — 예: `exp/a/cascade-calibration` |
| Excalidraw (선택) | 사람 kickoff만 — export `docs/diagrams/` · **MIX id 없음** |
| Sprint kickoff·**収束** 회의 | `gem-iwashi-meeting-facilitation` — **ゴール=状態** · 25–50분 · 종료 **3W** → board·decision-log |
| S0-4 협업 도구 (정진우) | `gem-block-buzz-agent-workspace` 패턴 — **agent = 멤버**(commit author·근거 gem id) · **audit trail = git log** · 새 인프라(QM·TaskView·Buzz) **❌** |
| S0-1~2 아이디어 수집·9/25 정리 | `gem-stanford-storm-knowledge-curation` — **관점 4개**(검사·설비·생산관리·경영) 힌트 · 정리 회의 **Moderator 1인**이 빈 업종·빈 유형 1회 질문 · STORM 실행 **❌** |
| 9/25 상위 3개 · Sprint 1 data-card | `gem-decade-review-ts-anomaly` — 각 아이디어에 **이상 유형 1개**(point/contextual/collective) · data-card에 **이상 비율·라벨 출처·run-to-failure** 3칸 · 딥 이상탐지 모델 **❌** |

---

## 7. deferred 재고 (MIX 보관 — Phase 3에서만 수동 pull)

| id | pull 조건 |
| --- | --- |
| `gem-t-loopformer` · `gem-kata-*` · `gem-gla-*` · `gem-based-linear-attention` · `gem-block-recurrent-*` | TS-transformer exp 브랜치 **시작할 때만** |
| `gem-smelt-looped-budget` | PDF §4 베이스라인 비교 문장 |
| `gem-protein-sequence-space-llnl` | “simple > big model” PDF 논거 |
| `gem-weightwatcher-memorization` | **레시피 A** + random-split 대비 canary 암기 실험 · 그룹별 성능표 |
| `gem-nakazawa-r-statistics` | **9/21 후** PDF §6 검定·CI · 예지보전→生存分析章 pull |
| `gem-xgboost-math-zenn` | **레시피 A** PDF §5 — GBDT vs 가이드북 CART · λ·η (Ch01 無料) |
| `gem-zeeman-catastrophe-theory` | **레시피 B** PDF §2·§4 — 공정 급변·cusp式 히스테리시스 (구현 ❌) |
| `gem-nonbiri-bayes-local-level` | **레시피 B** PDF §3 EDA · §4 로컬レベル 잔차·드리프트 (Stan 제출 ❌) |
| `gem-menaldo-nonlinear-ts-econometrics` | **레시피 B** PDF §2·§4 — FCAR/STAR **regime** · vol burst · §5 NN vs GBDT 해석 |
| `gem-kaggle-feature-engineering` | **레시피 A** Data·PDF §3 — MI·집계 FE · **target encoding=fold 내 only** |
| `gem-nature-ai-science-jobs` | PDF §1·§7 — **루틴 분석 vs 방법론·현장 의사결정** · Nature News 각주 1줄 |
| `gem-euler-lagrange-calculus-variations` | **레시피 C** PDF §2·§4 — 목적함수 \(J\) variational **서술** (solver ❌) |
| `gem-mimo-rl-harness` · `gem-single-layer-rl` · `gem-ngu-rl-llm` · `gem-es-grpo-reasoning-coverage` · `gem-unsloth-studio-colab` · `gem-laya-horizontal-oss` | **pull ❌** — LLM FT·합성·Colab·**Laya/Jev LM** · §5 미사용 |
| `gem-grf-recon-ray-field` | **pull ❌** — 9/21 **연속 비전·3D** 과제 lock 시에만 exp 검토 |
| `gem-datawrapper-viz` | Model 지표 잠금 후 PDF §6·§8 Fig (ECE·Pareto) · **vivid-figures와 택1** |
| `gem-trask-abc-attribution` | **9/21 후** PDF §5·§7 SHAP→점검 3항목 (TreeSHAP 로컬) |
| `gem-google-learning-interactives` | **pull ❌** — Review Gate·4단 파이프·5후보 prune **은유** (`gem-qm-ocx-collab`) |
| `gem-scientisttwo-autonomous-research` | **pull ❌** — 과제 lock·CoE 재현·experiment-log·AI심사≠채택 caveat (`gem-qm-ocx-collab`) |
| `gem-blanchard-ratings-debt-deficits` | **9/21 후** PDF §6·§8 — LOT/설비 **country effect** · stock vs flow · cost r−g (`gem-typesafe-calibrated-decisions`) |
| `gem-discover-linear-algebra` · `gem-idema-intro-quantum-mechanics` · `gem-urbanski-curved-geometry` | **pull ❌** — 수학·기하 배경 · **GBDT 메인 아님** · zeeman(cusp)과 **연속 곡률** 대비 |
| `gem-typesafe-satellite` | PDF 검증표 n·구간 · **발굴=** [`gem-awesomejev-catalog`](https://awesomejev.com/) |
| `gem-last30days-skill` | **9/21 전만** Scout — 30일·engagement 멀티소스 **수동** (skill·소셜→Model **❌**) |
| `gem-seekdb-agent-state` | **pull ❌** — agent memory DB · git+md·Ablation으로 대체 · PDF FORK 은유만 |
| `gem-aschenbrenner-directed-growth-risk` | **pull ❌** — PDF §7·§8 확산 **선택** (定向·누적 vs 단기) · `gem-blanchard`와 중복 최소화 |
| `gem-aers-copaper-empirical-skills` | **pull ❌** · **설치 ❌** — 社科 megacatalog · **de-AIGC stage 금지** · `kamp-*`·Scout로 대체 |
| `gem-codemidas-filtered-rl-tasks` | **pull ❌** — filtered>vanilla · post-rollout≈leakage gate · PDF §4·§6 **1문장** (`gem-smelt-looped-budget` 짝) · GRPO·harness **❌** |
| `gem-paper2agent-mcp-skills` | **pull ❌** · **설치 ❌** — 가상 교신저자가 코드를 대신 봐 주지 않음 · 가이드북 방법은 `kamp-*`와 우리 표 · paper→MCP 자동화 없음 |
| `gem-ars-academic-research-skills` | **pull ❌** · **plugin ❌** — **≠ `gem-aers`** (de-AIGC **없음**) · PDF integrity·anti-leakage **은유** · **`gem-jabref` active** |
| `gem-manokhin-modern-forecasting` | **Sprint 1** Ablation 표 **naive/가이드북 baseline 열** 즉시 · **Recipe B**면 split conformal coverage → PDF §6 · 책·「establishment」 인용 **❌** |
| `gem-suzuki-deep-foundation-math` | **PDF §5** 「데이터 규모 → 얕은 학습 구간 → GBDT」 1문장 + p.15 각주 · **Ablation** 변수 수·행 수·성능 3열 (차원의 저주) · §7 learning curve · `gem-protein`·`gem-xgboost-math`와 **중복 인용 ❌** |
| `gem-dualsql-multi-agent-rl` | **pull ❌** — REX 「지표 오염→reward 오염」 ≈ accuracy-only 함정 **내부 체크**만 · Text-to-SQL·MARL **❌** |
| `gem-jurafsky-hmm-appendix` | **pull ❌** — 트윗 「Jane Street HMM」은 **SLP3 품사태깅 부록** · 교정용 · regime은 `gem-menaldo` |
| `gem-jkp-factor-clusters` | **Sprint 1** 2종 Join 후 상관 군집 · 묶음당 대표 1개 · A1이 주와 같은 방향이면 보조는 중복 · JKP 데이터·Quality/Value **이름 ❌** |
| `gem-actionpiece-rank-consistency` | **연속 타깃**으로 9/27 lock되면 검증표에 Spearman 또는 pairwise 순위 1열 · **분류**면 pull ❌ · VLA·LIBERO 수치 **❌** |
| `gem-jev-visual-coarse-bins` | KPI 단위 = **현장 행동**. mm를 못 맞추면 OK/재검사/정지 **구간** · jev-visual 점수는 보정 아님 · 레포·Qwen **❌** · 순위 지표(`gem-actionpiece`)와 **둘 다 쓰지 않음** |
| `gem-sakurai-paper-reading` | PDF 참고문헌 = **KAMP 공식·가이드북 > 심사 논문 > arXiv > 트윗**. 트윗은 발견 경로 · 9/27 전 논문 읽기 **추가 ❌** · 슬라이드 복제 ❌ |
| `gem-disorder-promoted-stability` | **pull ❌** — 「이질성·disorder가 안정」을 변수·3번째 데이터셋 추가로 **읽지 않음** · 단순 모형이 결론을 뒤집는 점은 leakage·naive baseline이 이미 담당 |
| `gem-disordered-logistic-map` | **pull ❌** — Motter와 **반대**(작은 disorder가 주기 구조를 지움). 로지스틱 맵 ❌ · Join EDA에서 주기 피처가 설비마다 깨지면 전역 주기 하나로 묶지 않음 |
| `gem-sato-randomness-research` | Sprint 1 **첫 실험 전** split·seed를 decision-log에 고정 · 문장은 dev 결과 이후 · 홀드아웃에서 시드·split 재선택 **금지** · 실패 run은 로그에 남김 · 모델 계열을 대수법칙으로 늘리지 않음 |
| `gem-test-time-communication` | 실험 결과는 **당일** `experiment-log`에 (실패 포함). 채점은 고정된 dev 지표로만 · 지표 없는 토론으로 모델 선택 ❌ · 다에이전트·best@k **❌** · S0-4는 git+md로 충분 |
| `gem-rrsi-harness-regularization` | 피처·설정 변경은 **선택에 안 쓴** 홀드아웃이 움직여야 채택. 튜닝 점수만 오르면 버림 · 이득 작고 파이프가 길어지면 pruner · +15·4.4·14.1은 PDF에 인용하지 않음 · RRSI 코드 **❌** |
| `gem-anthropic-art-discovery` | **pull ❌** — 노벨·CRISPR 스토리 ❌ · 950 에이전트 검색 ❌ · 문제 정의와 검증은 사람 (이미 `task-lock`) |
| `gem-dualgraph-outline-vs-knowledge` | DualGraph 코드 **❌** · PDF 절은 `experiment-log` 행이 있을 때만 작성 · 빈 절을 문장으로 채우지 않음 |
| `gem-kronos-kline-foundation` | Kronos·TSFM 가중치 **❌** · 입력이 OHLCVA가 아니면 기각 · Recipe B 지평은 KPI 한 스텝 · naive 열은 `gem-manokhin` |
| `gem-qualembed-text-is-not-measure` | 불량명·메모를 임베딩 피처로 **❌** · 코사인은 부호 있는 손실을 대신하지 못함 · 아이디어 폼 문장 API 전송 **❌** |
| `gem-open-supermarkets-capability-manifest` | 쇼핑 MCP **❌** · 데이터 2개 잠금 때 목표·시간·설비·라벨을 ✓ / — / 실패로 표기 · 불확실 조인은 비움 · 조인 실패를 0건으로 적지 않음 |
| `gem-emerson-intermediate-micro` | 이윤·단가·생산량을 KPI로 **❌** · 9/27 현장 손실 문장이 목적 · 교과서 본문 전재 **❌** · 레시피 C의 \(J\)는 `gem-euler-lagrange` |
| `gem-oh-my-ppt-layout-is-not-draft` | 슬라이드 앱·Ollama **❌** · PDF 문장은 로그 행만 · 생성 HTML·PPTX·연설문은 초안이 아님 · 클라우드 모델에 현장 메모 **❌** |
| `gem-yokota-tensor-completion-not-observed` | CP·Tucker·ALS **❌** · 3차원 구멍은 결측으로 둠 · 보완은 학습 분할만, Ablation에 미보완 열 |
| `gem-shulman-proposition-is-not-witness` | 증명보조기 **❌** · `decision-log` 문장은 피처를 추가하지 않음 · 점수 한 줄은 그 문장만 지지 · 채택 조건 자체는 `gem-rrsi` |
| `gem-harness-zero-keep-the-check` | Harness-Zero 코드·SFT **❌** · 분할·naive 열·능력표는 모델 밖에 유지 · 점수가 올라도 검사 열은 삭제하지 않음 |
| `gem-mathemetica-chain-rule-not-training` | 역전파·신경망 **❌** · 민감도 그림은 PDF에 넣지 않음 · 변수 영향은 `gem-trask` TreeSHAP |
| `gem-quantum-olympiad-reproof-is-a-demo` | 양자 증명 **❌** · PDF는 가이드북·베이스라인을 우리 분할에서 **다시 잰 수치**로 씀 · 「해결했다」 헤드라인 **❌** |
| `gem-uncheatable-eval-recency-is-not-clean` | 압축 벤치 **❌** · 「마지막 구간이라 깨끗하다」는 근거가 아님 · 그 구간을 피처 선택에 썼으면 채택 점수가 아님 |
| `gem-layerx-qa-add-vs-drop` | QA 에이전트 **❌** · `experiment-log`는 완료/실패/건너뜀 · 실패를 다음 행이 성공으로 덮지 않음 · Ablation 열 삭제는 사람과 이유 |
| `gem-phosphor-lightness-is-quantity` | Phosphor 업로드 **❌** · PDF 연속 그림은 밝기가 한 방향 · 빨강/초록만으로 크고 작음을 말하지 않음 · 색 목록은 matplotlib에 고정 |
| `gem-evasion-engineering-known-baseline-stays-named` | 책·코드 **❌** · 알려진 가이드북·naive는 Ablation에 **그 이름**으로 남김 · 들킨다는 이유로 빼거나 가명을 쓰지 않음 |
| `gem-direct-nash-cycle-is-not-a-score` | DNO·RLHF **❌** · 비교가 순환하면 점수 하나를 만들지 않음 · 승률로 KPI를 바꾸지 않음 |
| `gem-memory-attention-capacity-is-not-the-method` | Memory Attention **❌** · 열·파라미터가 늘어 오른 점수를 방법 이득으로 적지 않음 · 같은 용량 열과 같이 적음 |
| `gem-mamba2-duality-is-not-identity` | Mamba-2 **❌** · 「가깝다」를 「같다」로 쓰지 않음 · 다른 아키텍처 점수를 GBDT 열에 붙이지 않음 |
| `gem-calibration-transfer-is-target-specific` | 에이전트 조기중단 **❌** · 보정 문장은 측정한 설비·LOT만 · 한 칸의 어긋남을 전 모델의 결함으로 쓰지 않음 · 다른 셋으로 옮기지 않음 |
| `gem-gas-shock-aggregate-is-not-the-line` | 가스·기온 조인 **❌** · 평균이 빨리 사라져도 설비 열을 그 평균으로 대체하지 않음 · 단가 KPI는 `gem-emerson` |
| `gem-critical-juncture-date-is-not-a-cause` | 장 전재 **❌** · 공정 변경일을 이후 내내 1인 원인으로 두지 않음 · 변경 전 설비·품목 차이를 닫고, 지속은 이후 구간에서 다시 잰다 |
| `gem-demand-inflation-small-slope-is-not-the-surge` | SVAR·물가 분해 **❌** · 평소 기울기가 작은 요인만으로 급등을 적지 않음 · 가스 글의 공급 설명과 이 글의 수요 설명을 피처로 섞지 않음 |
| `gem-claude-biology-cluster-count-is-not-the-search` | 효소 검색·서열 **❌** · 걸러 남은 행 수를 처음 본 행 수로 적지 않음 · 트윗의 20시간·AGI·저자 2명을 근거로 쓰지 않음 |
| `gem-tsmom-headline-is-not-the-rank` | 부호 매매 **❌** · 「1위 방법」은 헤드라인 · 짧은 창과 긴 창의 부호가 다르면 긴 기울기만 남기지 않음 |
| `gem-hoekstra-ci-swap-is-not-the-fix` | 설문 **❌** · 구간은 §6에 두되 「참값이 안에 있을 확률 95%」로 쓰지 않음 · 구간을 적는 일 자체는 `gem-nakazawa` |
| `gem-qiita-curse-rows-do-not-restore-neighbors` | kNN **❌** · 행을 더 모아도 고차원 이웃 거리는 안 돌아옴 · 상수에 가까운 열은 차원으로 세지 않음 · 성능 3열은 `gem-suzuki` |
| `gem-tasteful-agent-fork-label-is-later` | Taste-Bench·증류 **❌** · 갈림이 그럴듯해도 이후 점수 전에 그 경로를 채택하지 않음 · 실패 실행은 그 갈림의 라벨로 남김 |
| `gem-optional-stopping-peak-is-not-a-split` | VaR·몬테카를로 **❌** · 학습을 끊는 시점은 그때까지 본 점수만 · 이후 구간의 최고점을 종료 이유로 쓰지 않음 |
| `gem-pytimetk-pad-is-not-observed` | pytimetk **❌** · 빈 시간은 NaN · 0으로 메우거나 이상을 고친 열을 쓰면 원열을 Ablation에 남김 · 주기는 KPI 한 스텝 |
| `gem-jev-judge-threshold-does-not-transfer` | Jev·GPT 채점 **❌** · 평가마다 JEV만 쓰지 않음 · 0.36%는 연쇄 비용이 아님 · 재검사 문턱은 우리 선택 분할에서 정하고 홀드아웃에서 확인 · 논문 τ=0.90을 베끼지 않음 · 연쇄 그림은 `gem-beckmann` |
| `gem-conflict-circuit-fluency-is-not-evidence` | 회로 분석 **❌** · 로그 칸과 문장이 다르면 수치를 고치지 않음 · 문장이 매끄러워도 칸이 없으면 빈칸 |
| `gem-dft-init-partial-start-can-reverse` | DFT **❌** · 가이드북 시작값은 답이 아님 · naive·가이드북·GBDT 중 하나를 뺀 채 빨라졌다고 적지 않음 · 25% 인용 ❌ |
| `gem-dcscore-copy-is-not-diversity` | DCScore·LLM 합성 **❌** · 복제·문장만 바꾼 행은 새 관측이 아님 · 행 수는 서로 다른 시간·설비의 측정만 |
| `gem-jev-blueprint-choice-is-one-winner` | Jev API **❌** · 트윗의 배치 요금은 근거로 쓰지 않음 · 범주 하나는 Choice 하나 · 9/27 전에 적어 둔 행동 목록은 잠근 KPI의 선택지가 아님 |
| `gem-netneurotools-everyday-step-is-in-the-repo` | 뇌 영상 툴킷 **❌** · 분할·조인·naive 열은 저장소의 짧은 스크립트 · 다른 팀원이 같은 커맨드로 다시 돌릴 수 있게 경로를 적음 |
| `gem-p5-noise-label-is-not-the-lattice` | 생성 노이즈 **❌** · 문서 이름과 소스가 다르면 소스 · 이웃이 비슷해지게 만든 열은 원 센서와 분리 |
| `gem-fast-journal-weeks-are-not-a-citation` | 빠른 게재 목록 **❌** · 참고문헌은 가이드북과 우리 표 · 게재까지 몇 주인지는 각주에 쓰지 않음 |
| `gem-sciencebuddy-page-pointer-is-not-the-page` | ScienceBuddy **❌** · 도구가 찍은 쪽은 그 쪽을 연 뒤에만 행이 됨 · 틀리면 넣지 않음 |
| `gem-ye-uat-existence-is-not-the-holdout` | 딥러닝 수학 책 **❌** · 어떤 망이 근사할 수 있다는 정리를 홀드아웃 점수로 쓰지 않음 · 목차에 있다고 열을 추가하지 않음 |
| `gem-molnar-prevention-changes-the-population` | 제어 스택 **❌** · 행을 빼면 남은 점수의 모집단이 바뀜 · 필터 전후 행 수와 뺀 조건을 적고, 남은 점수만으로 개선이라 하지 않음 |
| `gem-ndvi-hump-fit-erases-the-dip` | NDVI 맞춤 **❌** · 한 봉우리로 꺾임을 지우지 않음 · 평활 열을 쓰면 원열을 Ablation에 남김 · 맞춤 오차는 홀드아웃이 아님 |
| `gem-agor-live-session-is-not-the-lock` | 개인 MIX에서 사용 · Preset에 피드백 · Agor를 상품으로 팔지 않음 · 경진 제출물에는 코드를 넣지 않음 · 세션은 `decision-log` 잠금 전엔 초안 |
| `gem-casd-log-pass-is-not-the-holdout` | CASD·GEPA·SkillOpt **❌** · 진행 요약으로 에이전트 규칙을 덮지 않음 · 로그에서 센 횟수는 증거 칸 · 채택은 안 본 홀드아웃 · 16.6은 PDF에 인용하지 않음 |
| `gem-garicano-frequent-problem-stays-with-the-firm` | 조직경제학 모델을 열로 넣지 않음 · 아이디어 10칸과 데이터 2종은 사람이 적음 · 일반 모델이 잦은 현장 문제를 대신 고르지 않음 · 고용 비중·43.5%는 PDF에 인용하지 않음 |
| `gem-timeevo-flat-mean-hides-the-break` | TimeEvo·도구 합성 **❌** · Ablation 평균 옆에 이전에는 맞았다가 틀린 집단 수를 둠 · 그 칸이 비면 평균만으로 채택하지 않음 · 147·56은 PDF에 인용하지 않음 |
| `gem-faryadi-rough-first-reverses-write-last` | 학위논문 작성 안내 **인용 ❌** · 문제 한 줄은 무엇·어디·누구·지금 · 데이터 2종이 없으면 그 줄을 잠그지 않음 · 서론을 먼저 대충 쓴다는 순서는 쓰지 않음 |
| `gem-mathemetica-nine-panels-are-not-the-model` | 아홉 알고리즘 포스터 **인용 ❌** · 제출 열은 naive·가이드북·GBDT · 베이즈 비례를 나이브 베이즈로 적지 않음 · \(z=Wx\)를 중요한 것만 남긴다고 적지 않음 |
| `gem-vqe-pool-ml-sentence-is-not-a-result` | 양자화학 VQE **❌** · 생성원 풀을 열로 넣지 않음 · 오류 정정·기계학습·하드웨어 제어는 초록의 예고 문장 · 그 기계학습을 GBDT로 적지 않음 |
| `gem-compiled-memory-pdf-is-not-anthropic` | 다섯 층 기억 PDF **❌** · Anthropic 지침으로 받지 않음 · Mem0를 설치하지 않음 · 90%·20%·39%는 PDF에 인용하지 않음 · VEDA를 온톨로지 스키마로 쓰지 않음 |
| `gem-busse-discussion-does-not-add-a-number` | 작성 안내 **인용 ❌** · 수는 결과 표에만 새로 둠 · 고찰은 그 표를 해석함 · 움직이지 않은 ablation도 결과에 남김 · 제목은 본문을 끝낸 뒤 |
| `gem-interestingness-ratio-is-not-the-kpi` | 정리 발견 루프 **❌** · 증명 길이 비를 KPI로 쓰지 않음 · 4.3배는 1.76에서 7.58 · 아이디어 10칸과 문제 한 줄은 사람이 고름 · 1.76·7.58·91.9는 PDF에 인용하지 않음 |
| `gem-clip-synops-cut-reverses-on-the-second-set` | 스파이크 변환 **❌** · 데이터 하나의 비용 감소를 두 데이터 쌍의 결과로 적지 않음 · 부호가 뒤집히면 두 행을 남김 · 27%·2.64·2.66은 PDF에 인용하지 않음 |
| `gem-zgcm-data-cleaning-is-not-the-l2-cell` | 7B 기초 모델 **❌** · 구조와 학습 알고리즘은 사람 칸 · 데이터 정제를 L2로 적지 않음 · 문제 한 줄과 데이터 2종은 사람이 잠금 · 3개월·75.0·4.2는 PDF에 인용하지 않음 |
| `gem-de-concepts-map-is-not-the-stack` | 개념 지도·볼트·책 **❌** · Kafka·Airflow·Iceberg·RAG를 경로에 두지 않음 · 조인 줄에 입자와 기수를 적고 모르면 모름 · 101개를 계보 열로 늘리지 않음 |
| `gem-claude-code-guide-review-stops-in-july` | Claude Code 안내서 **반입 ❌** · 프롬프트·훅·워크플로를 경진 폴더와 자리에 넣지 않음 · 검토 시점은 2026-07 · 에이전트 팀 절을 사람 잠금 절차로 쓰지 않음 |
| `gem-harness-overflow-rate-is-not-the-failure` | 코딩 하네스 **반입 ❌** · 78.7%는 32k 관리 없음의 넘침 비율 · 실패율로 적지 않음 · 68.6→45.4는 GitHub 칸 · 그 수들은 PDF에 인용하지 않음 |
| `gem-i4r-percent-is-the-report` | I4R 재현 프로토콜 **반입 ❌** · 58.2%는 보고서 67건의 비율 · 논문 64편에 곱하지 않음 · 재현 문장에 시작 파일(원자료·정리 표)을 적음 · 58.2·28.4·44는 PDF에 인용하지 않음 |
| `gem-dspy-open-count-mixes-pull-requests` | DSPy **설치 ❌** · 733은 이슈 338과 풀 리퀘스트 395 · 열린 이슈를 사용량으로 적지 않음 · 프롬프트 컴파일러로 제출 문장을 만들지 않음 |
| `gem-hindsight-reflect-still-retrieves` | Hindsight **설치 ❌** · `reflect()`는 멘탈 모델·관찰·recall을 먼저 강제하고 LLM이 답을 씀 · 검색 없는 추론으로 적지 않음 · VEDA를 메모리 뱅크로 쓰지 않음 |
| `gem-word2vec-queen-is-the-nearest-word` | 단어 벡터 **열 ❌** · `king − man + woman`은 Queen에 가장 가까운 벡터 · 그림의 등식 화살표를 피처 기하로 쓰지 않음 · 그 식을 PDF에 인용하지 않음 |
| `gem-ma-eigenvalue-is-not-the-hurdle` | 이동평균 검색 **설치 ❌** · 상관된 격자는 칸 수와 유효 수를 같이 적음 · 표준 허들은 평균 상관 · 더 작은 고유값 개수를 시행 수로 올리지 않음 · 2003 SPY·IEF 문장은 PDF에 인용하지 않음 |
| `gem-moments-do-not-pin-the-heavy-tail` | 모멘트 열 **❌** · 평균·분산·왜도·첨도는 이미 1–4차 · 두꺼운 꼬리에서는 모멘트 열이 분포를 하나로 고정하지 않음 · Adam·FID·적률법을 경로에 두지 않음 |
| `gem-review-starts-before-the-final-draft` | 평가 FAQ **반입 ❌** · 결론 전에 중간 표(피처·분할·ablation)를 봄 · 같은 행을 둘이 보고 어긋남을 남김 · 최종 문장에 도장만 찍지 않음 |
| `gem-latte-adding-agents-is-not-easy` | LATTE **설치 ❌** · 순서가 있는 일에 인원을 더하는 문장을 조율이 끝난 것으로 적지 않음 · 예전 글의 SOTA는 초록의 「맞거나 더 나음」 · 47.5·86.9는 PDF에 인용하지 않음 |
| `gem-second-brain-poster-audit-is-zero` | Viktor **설치 ❌** · 포스터 머릿글 1/14·감사 0%를 완성된 운영 체계로 적지 않음 · 운영 파일을 에이전트가 고치는 데이터 진실로 두지 않음 · 1/14·0%·3000+는 PDF에 인용하지 않음 |
| `gem-effort-max-does-not-fix-the-reading` | Claude Code **반입 ❌** · 최대 노력을 문제 정의가 맞았다는 증거로 쓰지 않음 · 검증을 늘려도 잘못 읽은 칸은 늘 수 있음 · 140·214·25·47은 PDF에 인용하지 않음 |
| `gem-just-ask-jev-sixty-three-is-the-pool` | Jev API **❌** · 63배를 붙여 본 절감으로 적지 않음 · 0.886의 분모는 31개 · 라벨이 들어 있는 칸을 맥락 이득으로 적지 않음 · 63·0.886·0.933은 PDF에 인용하지 않음 |
| `gem-momentum-chart-is-gross-of-costs` | Portfolio123 **반입 ❌** · 2026년 +20.7%를 규칙이 통한다는 증거로 쓰지 않음 · 순위 범위가 만든 집단 비중을 셈 · 38·25.5·20.7·0.44는 PDF에 인용하지 않음 |
| `gem-stair-nonleaf-rate-is-not-the-miss` | STAIR **반입 ❌** · 82.6%를 답의 정확도로 적지 않음 · 0.05%는 잎이 아닌 출력의 비율 · 65배는 논문에 없음 · 82.6·0.05·18.67은 PDF에 인용하지 않음 |
| `gem-vaultysclaw-editor-is-retired` | VaultysClaw **설치 ❌** · 끌어다 놓기 워크플로를 진행 공유로 적지 않음 · 위험한 쓰기의 사람 승인은 이미 `RULE.md` · 제품 문장은 PDF에 인용하지 않음 |
| `gem-agentconnect-thousand-apps-is-the-poster` | AgentConnect **설치 ❌** · 트윗의 터미널 문제는 README에 있음 · 1,000앱은 포스터 · Jev로 라우팅하지 않음 · 진행은 카드 |
| `gem-contract-boundary-is-already-the-rule` | 명령마다 자리 승인을 넣지 않음 · 완료 정의·누수·관할·새 API·잠금은 사람 · Discovery–Push 실행기는 노트북 도구 안 · 자리 단계 추가는 ❌ |
| `gem-clm-no-finetune-is-the-zero-shot` | CLM **설치 ❌** · 태스크마다 미세조정 없음은 제로샷 문장 · 87.6·81.6은 헤드 추가 학습 · 8B 라우터를 제조 모델로 두지 않음 · Jev API ❌ |
| `gem-logictrack-formalizer-is-also-a-model` | LogicTrack **설치 ❌** · 단계 검사는 Z3 앞에 gpt-4o-mini 형식화 · 답 정확도는 대부분 유지되거나 개선 · 단계가 없으면 검증 가중 정확도 0% · 외부 API를 제출에 넣지 않음 |
| `gem-single-manifold-collapse-is-the-figure` | 다양체 층을 제출 모델로 두지 않음 · 붕괴 곡선은 그림 · 트윗이 끊긴 두 가지는 겹치는 덮개와 학습 반복 · LeCun 문장 인용은 글에 없음 |
| `gem-pc-alm-*` · LLM deferred 묶음 | **pull ❌** |

---

## 8. MIX 조합 예시 (Medici)

**우승 스토리 한 문장 (레시피 A):**

> 가이드북의 무작위 분할 RF 베이스라인 대비, LOT 기준 분할과 **보정된 불량 확률**·**cascade 검사**로 같은 recall에서 **알람 30% 감소**(Pareto) — SHAP으로 **점검 3항목**까지 연결.

사용 원석: quant-ts + typesafe + beckmann + lightning-weave + opennews (서술) + nature (§1).

---

## 관련

- [`docs/reference-concepts.md`](reference-concepts.md) — `gem-*` 레지스트리
- [`docs/winning-strategy-v1.md`](winning-strategy-v1.md) — 6축 (MIX는 §1·§2·§4·§5 강화)
- [`reports/submission-outline.md`](../reports/submission-outline.md) — PDF 섹션
- [`AGENT.MD`](../AGENT.MD) §4·§5·§6
