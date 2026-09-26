# VEDA 지식 저장소 — K-AI 경진대회 참조 인덱스

기준일: 2026-09-15  
아카이브 루트: `G:\TOOL#1\knowledge-library\imports\`  
분류: **`ref-veda-*`** — MIX 원석 ❌ · 실행 지시 ❌ · `learning_reference` / store-only

VEDA 패키지는 **수동 학습 참조**다. 온톨로지 적용·FDE 연결·런타임 투입·제출 파이프라인 삽입을 **하지 않는다**.  
공식 KAMP(`ref-kamp-*`)·로컬 Scout 스냅샷과 **충돌 시 official 우선**.

로컬 중복: 일부 KAMP·KPIC는 `knowledge/`에도 스냅샷 있음 — VEDA는 **원본 아카이브 포인터**.

---

## A. KAMP · 제조 AI 공식·사례 (Data · PDF)

| id | 상태 | 축 | VEDA 경로 | 한 줄 |
| --- | --- | --- | --- | --- |
| `ref-veda-kamp-public-extra` | active | Data·PDF | `kamp-public-extra-20260909/` | KAMP_GUIDE PDF, AISquare 시트(디지털트윈·FMEA·공정AI·비전검사 등) |
| `ref-veda-kamp-usecases` | active | Data·PDF | `kamp-usecase-20260907/` | KAMP 제조AI 활용사례 65건 스크랩 |
| `ref-veda-kamp-aidatalist` | active | Data | `KAMP/aidataList-2026-09-03/` (**비어 있음**, 2026-09-17 확인) | KAMP AI 데이터셋 카탈로그 — 실제 가이드북 PDF 50종은 프로젝트 `knowledge/kamp-guidebooks/` + `knowledge/kamp-guidebooks-manifest.csv` (SHA-256) |

---

## B. KPIC · 뿌리산업 현장 (PDF · domain)

| id | 상태 | 축 | VEDA 경로 | 한 줄 |
| --- | --- | --- | --- | --- |
| `ref-veda-kpic-root-industry` | active | PDF·Data | `KPIC/root-industry-2026-09-07/` | 뿌리산업 실태조사 PDF·지역 XLSX (일부 통계 XLSX 404) |
| `ref-veda-kpic-public-crawl` | review_needed | PDF | `kpic-public-2026-09-06/` | kpic.re.kr 전체 크롤 (`ref-kpic`과 동일 슬롯 — 증거 보강) |

---

## C. 품질 · 제조 스키마 · EDA (Model · PDF)

| id | 상태 | 축 | VEDA 경로 | 한 줄 |
| --- | --- | --- | --- | --- |
| `ref-veda-mfg-schema-core` | active | Model·PDF | `absorbed-references/manufacturing-schema-reference-core/` | CQI-20 EPS·근본원인분석 OCR — 품질 스키마 후보 |
| `ref-veda-quality-research-loop` | active | Model·Data | `absorbed-references/quality-research-data/` | 용접·결함·SPC 등 품질 ML 논문 큐 |
| `ref-veda-nist-eda` | active | Model·PDF | `knowledge-archive/nist-eda-handbook-20260905/` | NIST EDA — 모델 전 outlier·가정 탐색 |
| `ref-veda-supplier-quality` | deferred | Model | `absorbed-references/supplier-quality-management/` | 공급자 품질관리 레퍼런스 (앱 scaffold) |
| `ref-veda-boeing-quality` | review_needed | PDF·Model | `learning_reference/boeing-quality-failure-research-20260901/` | Boeing 품질 실패 사례 연구 |
| `ref-veda-hammer-reengineering` | review_needed | PDF | `learning_reference/2026-09-06-hbr-michael-hammer-reengineering-work-dont-automate-obliterate/` | 자동화 전 프로세스 재설계 |

---

## D. 통계 · ML · 시그널 (Model)

| id | 상태 | 축 | VEDA 경로 | 한 줄 |
| --- | --- | --- | --- | --- |
| `ref-veda-shalizi-ada` | active | Model·PDF | `learning_reference/cosma-shalizi-advanced-data-analysis-x-20260902/` | CMU Advanced Data Analysis (~905p) |
| `ref-veda-cs249r-mlsys` | active | Model·Agent | `learning_reference/github-harvard-edge-cs249r-ml-systems-book-20260904/` | ML Systems — 모델→플랜트 파이프라인 |
| `ref-veda-cohen-50-ml` | active | Model | `books/mikexcohen-50-ml-projects-llms-2026-08-25/` | 50 ML+LLM 프로젝트 노트북 |
| `ref-veda-signals-systems` | review_needed | Model | `learning_reference/2026-09-11-x-oprydai-signals-systems-2098160464140407007/` | 센서·시그널→시스템 프레이밍 |
| `ref-veda-fourier-pde` | review_needed | Model | `learning_reference/x-riazi-cafe-fourier-series-pdes-2099062528961601807-20260913/` | Fourier·PDE — 공정·진동 신호 |
| `ref-veda-pinn-operators` | deferred | Model | `learning_reference/2026-09-09-x-gp-pulipaka-pinn-neural-operators-2097330631663337895/` | PINN·neural operators (디지털트윈 인접) |
| `ref-veda-mit-6851` | deferred | Model | `learning_reference/mit-6.851-advanced-data-structures-spring21-20260831/` | MIT 6.851 고급 자료구조 |
| `ref-veda-karpathy-nn` | deferred | Model | `courses/karpathy-zero-to-hero-lectures-1-2-2026-08-25/` | NN 기초 |
| `ref-veda-skiena-algo` | deferred | Model | `courses/skiena-cse373-algorithms-2026-08-25/` | 알고리즘·피처 효율 |
| `ref-veda-cs149-parallel` | deferred | Model | `courses/stanford-cs149-parallel-computing-2023-2026-08-26/` | 대용량 센서 병렬 처리 |
| `ref-veda-hmm-jurafsky` | deferred | Model | `knowledge-archive/kirkborne-hmm-jurafsky-20260905/` | HMM·순차 신호 |
| `ref-veda-planetary-prediction` | deferred | Model | `papers/arxiv-2608.26088-planetary-prediction-engine/` | 시계열 예측 엔진 논문 |
| `ref-veda-llm-foundations` | review_needed | Model | `absorbed-references/llm-foundations-matsuo-2025/` | LLM 기초 (松尾研) |
| `ref-veda-postgresql-visualdb` | deferred | Model | `learning_reference/postgresql-studygroup-visualdb-20260902/` | PostgreSQL·시각 DB |
| `ref-veda-cambridge-ml-books` | deferred | Model·PDF | `learning_reference/cambridge-ai-ml-books-10-20260830/` | Cambridge ML 서적 목록 |
| `ref-veda-andrew-ng-ai-eng` | deferred | Model | `learning_reference/andrew-ng-ai-engineering-skills-software-fundamentals-20260830/` | AI 엔지니어링 스킬 |
| `ref-veda-materials-science` | review_needed | Model·PDF | `veda-store-only/materials-science-physical-world-20260913/` | 재료과학·물리 세계 프레이밍 |
| `ref-veda-adv-eng-math` | deferred | Model·PDF | `veda-store-only/advanced-engineering-mathematics-lupetti-20260914/` | 고급 공학수학 |

---

## E. FDE · 현장 배포 · 온톨로지 (Agent · PDF)

| id | 상태 | 축 | VEDA 경로 | 한 줄 |
| --- | --- | --- | --- | --- |
| `ref-veda-ax-fde-capability` | active | Agent·PDF | `learning_reference/ax-fde-organizational-capability-20260912/` | AX FDE — 배포 후 조직에 판단·맥락 잔류 |
| `ref-veda-mfg-fde-ontology` | active | Agent·Data | `learning_reference/x-milesmazy-manufacturing-fde-ontology-2099040886361293237-20260913/` | 제조 FDE — material/location/order/task 온톨로지 |
| `ref-veda-palantir-fde` | active | Agent·PDF | `fde/palantir-ai-fde-20260903/` | Palantir AI FDE·Ontology 공식 요약 |
| `ref-veda-fde-operating-model` | active | Agent·PDF | `agent-systems/fde-concept-operating-model-2026/` | FDE 운영 모델 refinery 팩 |
| `ref-veda-palantir-fde-series` | review_needed | Agent·PDF | `fde/palantir-ai-fde-series-20260903/` | Palantir FDE 기사 시리즈 |
| `ref-veda-makinarocks-fde` | review_needed | Agent | `fde/makinarocks-fde-power-rangers-2025/` | MakinaRocks FDE (국내 제조 AI) |
| `ref-veda-fde-multi-agent-eval` | review_needed | Agent | `learning_reference/x-milesmazy-palantir-fde-multi-agent-eval-2098258983974805938-20260913/` | FDE 멀티에이전트 평가 |
| `ref-veda-fde-communication` | deferred | Agent | `learning_reference/linkedin-yaechan-lee-fde-communication-training-7496218728125095936-20260905/` | FDE 이해관계자 커뮤니케이션 |
| `ref-veda-fujitsu-mfg-agent` | review_needed | Agent | `learning_reference/x-macopeninsutaba-fujitsu-ai-agent-2095346795349942613-20260903/` | Fujitsu 제조 AI 에이전트 |
| `ref-veda-aitimes-mac-ai` | deferred | Agent·Data | `learning_reference/aitimes-mac-ai-companies-214645-20260903/` | AITimes 산업 AI 기업 |

---

## F. 에이전트 · 하네스 · 재현 파이프라인 (Agent · Model)

| id | 상태 | 축 | VEDA 경로 | 한 줄 |
| --- | --- | --- | --- | --- |
| `ref-veda-harness-engineering` | active | Agent | `github/walkinglabs-learn-harness-engineering/` | Harness Engineering 전 과정 |
| `ref-veda-miles-harness-repos` | active | Agent | `knowledge-archive/miles-mazy-2097154216267837847-20260908/` | harness-books·agent 아키텍처 35종 |
| `ref-veda-matdathon-choreforge` | active | Agent | `hackathons/matdathon-2026-retro-20260830/original/repos/chore-forge/` | spec→verify→registry 자기확장 루프 |
| `ref-veda-ai-agent-book-ko` | active | Agent·Model | `github/ai-agent-book-ko/` | 한국어 AI 에이전트·하네스 안전 |
| `ref-veda-veda-watch-batch` | active | Agent·PDF | `refinery-knowledge/veda-watch-2026-08-29/` | 29 refinery jobs·humanoid-manufacturing |
| `ref-veda-gpt6-astra-cutover` | review_needed | Agent | `knowledge-archive/gpt-6-astra-cutover-20260909/` | work-system harness·제조 research loops |
| `ref-veda-matdathon-hankkipick` | deferred | Agent | `hackathons/.../hankkipick/` | Matdathon Azure 에이전트 (방법론만) |
| `ref-veda-hackathon-benchmark` | review_needed | Agent | `learning_reference/2026-09-11-x-rossst-hackathon-agent-benchmark-2098147737527087452/` | 제약 에이전트 벤치마크 |
| `ref-veda-hackathon-ladicodez` | review_needed | Agent | `learning_reference/2026-09-11-x-maxforai-ladicodez-hackathon-2097952443049087332-2056095197336084561/` | 해커톤 에이전트 워크플로 |
| `ref-veda-code-security-harness` | review_needed | Agent | `learning_reference/x-bkdgiffug-defending-code-reference-harness-2099123682455195724-20260914/` | scan→verify 방어 하네스 |
| `ref-veda-agentic-loop-cron` | review_needed | Agent | `learning_reference/x-ayi-ainotes-agentic-loop-markdown-cron-2098777470040183030-20260913/` | markdown+cron 반복 분석 |
| `ref-veda-harness-survey` | review_needed | Agent | `agent-systems/llm-agent-harness-survey-adapter/` | LLM harness survey |
| `ref-veda-agent-seer` | review_needed | Agent | `agent-systems/agent-seer-spec-to-harness-2026-08-30/` | spec→harness |
| `ref-veda-harness-ablation` | review_needed | Agent | `agent-systems/opus5-harness-ablation-2026-08-25/` | harness ablation |
| `ref-veda-paperthin-hackathon` | review_needed | Agent | `agent-systems/paperthin-hackathon-method-reference-2026/` | 해커톤 신속 납품 |
| `ref-veda-pstack-grokbot` | review_needed | Agent | `agent-systems/lauren-tan-pstack-grokbot-2026/` | verification skills·멀티에이전트 |
| `ref-veda-deepseek-harness` | review_needed | Agent | `learning_reference/deepseek-harness-seminar-20260830/` | DeepSeek harness 세미나 |
| `ref-veda-llm-agents-survey` | review_needed | Agent | `learning_reference/2026-09-11-x-gylq520-llm-agents-survey-2098283712257609735/` | LLM agents survey |
| `ref-veda-agent-memory` | review_needed | Agent | `learning_reference/2026-09-11-x-omarsar0-agent-memory-2097755424007373270/` | 에이전트 메모리·KG |
| `ref-veda-training-agents` | review_needed | Agent | `learning_reference/x-ben-burtenshaw-training-agents-2098410420394451153-20260912/` | 에이전트 학습·파인튜닝 |
| `ref-veda-llm-judge-lifecycle` | review_needed | Agent·Model | `learning_reference/x-xudong07452910-netflix-rart-llm-judge-2095444189743902927-20260903/` | LLM-as-judge 평가 파이프 |
| `ref-veda-deepsearcher-rag` | review_needed | Agent | `refinery-knowledge/deepsearcher-private-rag-2026-09-02/` | private RAG 검색 |
| `ref-veda-ai-coding-guardrails` | review_needed | Agent | `refinery-knowledge/ai-coding-guardrails-to-judgment-story-2026-09-03/` | 가드레일→판단 스토리 |
| `ref-veda-generative-ai-patterns` | deferred | Agent·Model | `books/generative-ai-design-patterns-2026/` | 생성형 AI 디자인 패턴 |
| `ref-veda-data-learning-roadmaps` | deferred | Model | `web/dan-kornas-ai-data-learning-roadmaps-20260829/` | AI·데이터 학습 로드맵 |

---

## G. 제조 현장 · 역기술 · PDF 도구 (Model · PDF · deferred)

| id | 상태 | 축 | VEDA 경로 | 한 줄 |
| --- | --- | --- | --- | --- |
| `ref-veda-mfg-inverter-factory` | review_needed | PDF | `manufacturing/large-inverter-japanese-factory-2026-08-30/` | 일본 대형 인버터 공장 공정 |
| `ref-veda-industrial-re-loop` | review_needed | Model·Agent | `learning_reference/industrial-mechanical-reverse-engineering-loop-20260905/` | 기계 역기술 evidence 루프 |
| `ref-veda-text-to-cad` | deferred | Model | `learning_reference/industrial-mechanical-text-to-cad-reference-20260905/` | text-to-CAD |
| `ref-veda-hansung-wingbody` | deferred | PDF·Data | `20260911-hansung-wingbody-e1850fe9/` | 한성 윙바디 제조 페이지 |
| `ref-veda-xcient-wingbody` | deferred | PDF·Data | `learning_reference/2026-09-13-itruck-xcient-wingbody-material-reference-336d0708/` | XCIENT 윙바디 재료 |
| `ref-veda-deepdoctection` | active | PDF·Agent | `github/deepdoctection-1.3.0-review/` | PDF·스캔 레이아웃·OCR |
| `ref-veda-factory-ai-corpus` | deferred | Agent·PDF | `web/factory-ai-news-corpus-20260829/` | Factory.ai 뉴스 (소프트웨어 공장) |
| `ref-veda-humanoid-standards` | deferred | PDF | `standards/miit-humanoid-robot-standards-guide-2026-draft/` | MIIT 휴머노이드 표준 초안 |
| `ref-veda-mit-ai-edu` | deferred | Model | `learning_reference/x-alex-verem-mit-ai-education-2098880333676761514-20260913/` | MIT AI 교육 포인터 |

---

## 사용 규칙

1. **인용:** PDF·보고서에는 출처·아카이브 경로만 — VEDA 패키지 주장을 **검증 전 fact**로 쓰지 않음.
2. **Model:** 과제 `data/raw/`·학습 코드에 VEDA 데이터 **합성·주입 금지** (`AGENT.MD` §3).
3. **우선순위:** `ref-kamp-*` > `ref-veda-*` > `gem-*` (레지스트리 §충돌).
4. **갱신:** VEDA 신규 intake 시 이 표에 `ref-veda-*` 행 추가.

## 관련

- [`docs/reference-concepts.md`](../docs/reference-concepts.md) — `frame-veda` · 요약 표
- [`AGENT.MD`](../AGENT.MD) §3 · §6
