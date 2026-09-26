# 의사결정 기록

## 2026-09-26 — JARI 10→3 회의 결정판 준비

- 10개 아이디어는 접수 전이므로 빈칸 유지. PPT 양식의 공정·설비, 발생 사건, 손실, 직접 경험 항목을 JARI 입력칸과 맞춤
- 세 명이 각자 최대 3개를 고르면 득표·동점 상위권을 시각화. 회의 후보 3개는 사람이 별도로 담고 요약을 복사할 수 있음
- 투표와 회의 후보는 JARI data/board.json의 **초안**. 문제 1문장·KAMP 2종·KPI 잠금은 사람이 이 기록에 옮겨 적을 때만 성립
- 경진 qai-agent/BRIEF.md는 후보 초안과 참여 인원만 읽음. 에이전트가 투표하거나 후보를 확정하지 않음
- JARI 로컬 서버 3040 갱신 완료. 실제 아이디어·표는 아직 0건

## 2026-09-26 — 환경 MIX는 제출 폴더 밖

- 개인 MIX 산출: `D:\Downloads\idea\mix-kai-environment-2026\` (`README.md` · `SKILL.md`)
- 에이전트 스킬은 경진 제출 폴더와 독립. 이 패키지를 zip·`.cursor/skills`에 넣지 않음
- VEDA는 읽는 선반. 온톨로지·학습 데이터로 쓰지 않음
- Agor는 개인 사용·Preset 피드백. 상업 제품 아님. 세션은 `decision-log` 잠금 전엔 초안
- 오늘 모임 산출: 후보 3개 · 데이터 쌍 · 아직 잠그지 않은 문제 문장
- 대회용 에이전트 현황: [`docs/agent-team-status.md`](agent-team-status.md). 잠금은 **2026-09-27 (일)**. 그 전에 학습하지 않음

## 2026-09-22 — 첫 팀 회의 (kickoff)

- **출제안:** **① 기업 현안 해결형** — 「KAMP 다종 제조데이터 기반 기업 현안 해결형 제조 AI 분석 모델 개발」
- **문제 범위:** 실제 **현업·제조공정** 문제만 (설비 정지·불량 등) · 사무·엑셀 전표 자동화 **제외**
- **MIX 레시피:** **A** 잠정 (아이디어·2종 데이터 유형 확정 후 B/C 재검토)
- **역할·마감:**

| 담당 | 작업 | 마감 |
| --- | --- | --- |
| 정진우 · 엄예지 | 현업 문제 **아이디어 수집** (양식 별도 배포) | 조사 9/23 · 정리 **~9/25** |
| 최연식 | 데이터 **2종 융합** 사전 EDA | **~9/25** |
| 정진우 | **AI agent** 팀 협업 도구 개발·배포 | **~9/25** |

- **Hard gate:** **2026-09-27 (토)** — 데이터 **2종 선택** + **배경(문제 1문장·KPI·주/보조)** lock → **모델 학습 착수** (추석 연휴 반영 일정)
- **미확정:** 문제 1문장 · KAMP ID 2종 · KPI · 아이디어 양식 · 중소·중견 확인서(발표 전)
- **prune 갱신:** 출제안② 잠정 → **① 확정** · Task_Class·가이드북 1권 = **아이디어·2종 lock 후**
- 산출: [`docs/team.md`](team.md) · [`docs/board.md`](board.md) · [`task-lock-2026-09-21.md`](task-lock-2026-09-21.md) §팀 확정
- 근거: `gem-iwashi-meeting-facilitation` (状態変化·3W)

## 2026-09-21 — 과제 lock · prune ritual (재직자 CPT_SEQ=39)

- 공식: [noticeDetail NOTICE_SEQ=87](https://www.kamp-ai.kr/noticeDetail?NOTICE_SEQ=87) · 로컬 [`knowledge/kamp-public-2026-09-21/`](../knowledge/kamp-public-2026-09-21/)
- 구조: 출제안 **3택1** + KAMP 데이터셋 **2종 이상 융합** · Ablation · Join/time-window · 데이터 계보 **필수**
- 제출: 2026-10-08 23:59 · 보고서 PDF · zip(학습데이터·README·테스트예측) · 발표 PDF+PPT · 설문 캡처 · **블라인드**
- prune (§4 [`mix-application-plan.md`](mix-application-plan.md)):
  1. **Task_Class** — ~~출제안②~~ → **① 현안 해결** (9/22) · 유형은 아이디어 lock 후
  2. **레시피 A** (② 확정 시; ③이면 C로 변경)
  3. deferred gem 유지 — active 승격 없음
  4. 가이드북 **주 1권** — 데이터셋 2종 확정 후
  5. [`docs/board.md`](board.md) sprint 1 개시
- 산출: [`docs/task-lock-2026-09-21.md`](task-lock-2026-09-21.md) · `ref-kamp-submit-2026` → active
- 다음 (사용자): ①/②/③ 최종 · 주/보조 데이터셋 ID · `data/raw/` 다운로드

## 2026-09-21 — 프로젝트 스킬 (paperthin-style)

- 결정: Q.AI 전용 Cursor 스킬 5종 → [`.cursor/skills/`](../.cursor/skills/)
- 패턴: paperthin = 짧은 반사 + 검증 스크립트; 우리는 **2026 융합·GBDT·누수·제출**에만 특화
- 범용: re0/sip/readchk는 paperthin global (`npx skills add LilMGenius/paperthin`)
- 상태: 확정 (코드 골격·data/raw는 NBA ladder 다음)

## 2026-09-18 — MIX 적용 기획

- 결정: MIX를 **가설·패턴·PDF 서술** 3층으로 적용 — [`docs/mix-application-plan.md`](mix-application-plan.md)
- 레시피: A 분류·예측 · B 시계열 · C 최적화 — **9/21 prune ritual** 후 1개만 active
- Phase: 0 골격~9/20 · 1 lock 6h · 2 baseline 24h · 3 개선 · 4 제출 잠금
- deferred: LLM/RL/arch 원석 — inventory만, pull 조건은 기획 §7
- 상태: 확정 (실행은 과제 lock 후)

## 2026-09-18 — 기각 링크 MIX deferred 보관

- 결정: 경진대회 **직접 투입 기각** 링크도 `gem-*` + `references/*.md`로 **deferred** 등록 — 나중 MIX 조합용
- 범위: PC-ALM · TypeSafe 위성(skills·bench·mario) · MiMo RL · LLM arch 5건(T-LoopFormer·KATA·Block-Recurrent·SMELT·single-layer RL) · embeddings handbook · LLNL protein
- Beckmann hoosha 트윗 → 기존 `gem-beckmann-transport` 출처만 추가 (중복 id 없음)
- 운영: **9/21 전 에이전트 컨텍스트 제외** (`gem-rsi-workspace-harness`) · active만 일상 참조
- 근거: [`docs/reference-concepts.md`](reference-concepts.md) · [`references/README.md`](../references/README.md) §MIX deferred

## 2026-09-17 — 가이드북 추출본

- 결정: 50권 전문 md + 핵심 4섹션 추출본 1파일. 알고리즘·코드 설명 챕터는 제외
- 산출: `knowledge/kamp-guidebooks-datacards.md` (365 KB) · `kamp-guidebooks-summary.csv` · `kamp-guidebooks-md/` (50개, 4.3 MB) · 도구 `src/tools/extract_guidebooks.py`
- 커버리지: 분석요약표 49/50 (미검출 ID 53) · 변수정의 49/50 (ID 47) · 분할 문장 47 · 결과 지표 47 → 미검출은 전문 md에서 수동 확인
- flags 분포: random-split 29 · group/time-split-mentioned 17 · deep-net-baseline 18 · classic-baseline 13 · accuracy-only 3
- PII: p.1 다운로드 회원 ID·워터마크 번호 제거 확인 (검색 0건)
- 2단계(docling 표 복원·핵심 그림)는 9/21 과제 확정 후 해당 1권만

## 2026-09-17 — KAMP 참가 신청 완료

- 팀 Q.AI, 재직자 부문 `CPT_SEQ=39` 신청 완료 (사용자 수행)
- 잔여: 중소·중견기업 확인서 추후 제출
- 다음: 가이드북 추출(진행) → git 원격 결정(대기) → 실행 골격 → 9/21 과제 공개

## 2026-09-17 — 가이드북 보관 위치

- 결정: `D:\Downloads`의 KAMP 가이드북 PDF 51개 → `knowledge/kamp-guidebooks/`로 **이동** (Downloads 잔여 0)
- 50종 = `reports/dataset-selection-matrix.csv` 50행과 1:1 매칭 확인 · 근사 중복 1개(Scene-Text `(1)`, 2바이트 차) → `_dup/`
- git: PDF 제외, `knowledge/kamp-guidebooks-manifest.csv`(ID·파일명·크기·SHA-256)만 커밋 대상
- `ref-veda-kamp-aidatalist` 경로는 빈 폴더 — 포인터 갱신
- 미확보: 2025 결과보고서 양식 `.hwp` (공지 SEQ-21 첨부) — 로그인 필요 시 사용자 승인 후
- 상태: 완료

## 2026-09-17 — 협업 스택

- 결정: **QM full deploy는 하지 않음** — 구조만 `gem-qm-ocx-collab`로 MIX
- 운영: repo `AGENT.MD` + `decision-log` + git scope 분리; OCX `agent-ledger-blueprint`는 로컬 참조
- QM deploy (Slack/Fly): `review_needed` — 멤버 2인+ 원격·Slack 필요 시 재검토
- 근거: [`references/qm-ocx-collab-2026-09-17.md`](../references/qm-ocx-collab-2026-09-17.md)
- 상태: 확정 (경량 패턴)

## 2026-09-16 — 팀명

- 결정: **Q.AI**
- 표기: `Q.AI` (점 포함)
- 배경: Absolute·ROOT·솔루션 조합(AISolute 등) 검토 후 **Q.AI**로 확정
- 영문 부제·한글 부제: `review_needed` (KAMP 신청·PDF 표지 전)
- 결정권자: 사용자
- 상태: 확정
- 기록: [`team.md`](team.md)

## 2026-09-03 — 참가 트랙

- 결정: 중소·중견기업 재직자 부문 참가
- 공식 상세 ID: `CPT_SEQ=39`
- 결정권자: 사용자
- 상태: 확정
- 적용할 평가 관점: 현장 적용성, 문제 해결성, 실효성, 확산 가능성
- 남은 확인: 팀원 전원이 중소·중견기업 재직자 요건을 충족하는지 확인

이 결정에 따라 향후 과제 분석, 모델 선택, 보고서와 발표 자료는 단순 성능뿐 아니라 제조 현장 도입 비용, 운영 가능성, 재현성, 확산 근거를 포함한다.


## 2026-09-26 — 비공개 Git 공유와 실행 청사진

- 사용자 승인: 대회 지식자료와 도구를 Git에 올려 함께 관리한다.
- 범위: 가이드북 텍스트 50종·핵심 정리·출처/해시, 뿌리산업 배경/원문 목록, 공통 스킬, JARI 소스. 원본 PDF·분석 데이터·접속 키·개인 회의 원고는 제외한다. 기존 9/17의 manifest만 추적 방침에서 텍스트 지식자료까지 확장한다.
- 비공개 저장소: `anfyznvhs3-droid/qai-2026`. 공개 배포·외부 제출 승인이 아니다.
- 일정과 완료 조건은 `competition-blueprint.md`, 팀 공유 방법은 `team-git.md`. 청사진은 실행 제안이며 문제·데이터 2종·KPI의 사람 확정을 대체하지 않는다.
- 일정 표기 정정: 2026-09-27은 일요일. 과거 기록의 토요일 표기는 오류다.
