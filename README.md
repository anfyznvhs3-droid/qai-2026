# 2026 제6회 K-AI 제조데이터 분석 경진대회

**팀 Q.AI** · 재직자 부문 (`CPT_SEQ=39`)

- 상태: **과제 lock** — Sprint 0~1 · **9/27 (일) 데이터·背景 lock** (추석)
- 선택 트랙: 중소·중견기업 재직자 부문 (`CPT_SEQ=39`)
- 공식 페이지: <https://www.kamp-ai.kr/contestDetail?PAGE=1&CPT_SEQ=39>
- 기준일: 2026-09-03 (Asia/Seoul)
- 신청 마감: 2026-09-17 18:00까지 문의·기술지원 가능, 포스터상 접수 마감은 23:59

## 팀 시작점

- [대회 진행 청사진](docs/competition-blueprint.md)
- [Git 협업과 설치 안내](docs/team-git.md)
- [뿌리산업 배경과 출처](knowledge/root-industry/README.md)
- [가이드북 50종 목록](knowledge/kamp-guidebooks-manifest.csv)

## 목표

KAMP 제조AI 데이터로 제조 현장의 공통 문제를 해결하는 재현 가능한 분석 모델과 설득력 있는 제출물을 완성한다. 재직자 부문의 평가 중점인 현장 적용성, 문제 해결성, 실효성, 확산 가능성을 모델 성능과 함께 증명한다.

## 지금 결정할 것

1. ~~출제안~~ **① 기업 현안 해결형** (2026-09-22 확정)
2. KAMP **2종** + 현업 문제 1문장 · KPI — **9/27 (일) hard**
3. 아이디어 수집 ~9/25 (정진우·엄예지) · EDA ~9/25 (최연식)

## 바로 할 일

- [x] 참가 트랙 확정: 중소·중견기업 재직자 부문
- [x] 팀명 확정: **Q.AI** (`docs/team.md`)
- [x] 모든 팀원의 재직 자격 확인
- [x] 팀원 확정(최대 3명)
- [x] KAMP 로그인 및 참가 신청 (2026-09-17 완료)
- [x] 참가신청서·서약서·개인정보 동의서 입력
- [x] 팀별 신분 증빙 PDF 준비(주민등록번호 뒷자리 마스킹)
- [ ] 중소·중견기업 확인서 준비(발표평가 전)
- [x] 2026-09-21 과제 공개 · lock 문서 (`docs/task-lock-2026-09-21.md`)
- [x] 출제안 **①** 확정 (`docs/team.md`)
- [ ] 데이터셋 2종 · 문제 1문장 · KPI (**9/27**)
- [ ] `data/raw/` 다운로드
- [ ] **[다음]** 실행 골격 + baseline — `docs/board.md` Sprint 1

## 폴더

- `docs/`: 대회 요약, 의사결정, 분석 전략 · **`docs/team.md`** (팀 Q.AI) · **`docs/mix-application-plan.md`** (MIX 적용)
- `references/`: 증거 포인터 (URL·Scout provenance)
- `docs/reference-concepts.md`: Scout/MIX(프레임) + **MIX 원석**(`gem-*`) + official(`ref-*`)
- `knowledge/`: KAMP 공개정보 원문 코퍼스와 흡수 보고서
- `data/`: 대회 데이터 작업 위치
- `notebooks/`: 탐색·실험 노트북
- `src/`: 재현 가능한 학습·추론 코드
- `reports/`: 평가 및 발표 자료
- `submissions/`: 제출 후보와 최종본

자세한 공고 요약은 `docs/competition-brief.md`, 확정된 결정은 `docs/decision-log.md`를 참고한다.

**에이전트:** [`AGENTS.md`](AGENTS.md)(실행) → [`AGENT.MD`](AGENT.MD)(계약). Scout/MIX·레퍼런스는 [`docs/reference-concepts.md`](docs/reference-concepts.md).

## 확보한 사전 우위 자료

- `knowledge/KAMP-absorption-report.md`: KAMP 공개정보 흡수 범위와 핵심 인사이트
- `knowledge/kamp-public-2026-09-03/`: 출처·해시를 보존한 공개 원문 30개
- `knowledge/kamp-guidebooks/`: KAMP 데이터셋 가이드북 PDF 50종 (557 MB, **git 제외**) — 팀원은 `knowledge/kamp-guidebooks-manifest.csv`의 SHA-256으로 각자 받은 파일 검증
- **`knowledge/kamp-guidebooks-datacards.md`**: 50권 핵심 추출본 — 개요·분석요약표·수집조건·변수정의·분할·베이스라인 지표 + 낡은 지점 flags (요약 CSV `kamp-guidebooks-summary.csv`)
- `knowledge/kamp-guidebooks-md/`: 50권 전문 텍스트 md (4.3 MB, 쪽 마커 `<!-- p.N -->`, 검색·인용용). 재생성: `python src/tools/extract_guidebooks.py`
- `knowledge/historical-2025-rubric.md`: 2025 평가표 전사와 2026 적용 한계
- `docs/winning-strategy-v1.md`: 재직자 부문 승리전략
- `reports/submission-outline.md`: 공식 양식 공개 전 사용할 제출물 골격
