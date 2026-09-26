# Q.AI 대회용 에이전트 현황

기준: 2026-09-26 (토)  
진입점: [`AGENTS.md`](../AGENTS.md) · 계약: [`AGENT.MD`](../AGENT.MD)  
잠금: **2026-09-27 (일)** — 문제 1문장 · KAMP 2종 · KPI. 그 전에 학습·`data/raw/` 다운로드 없음.

이 표가 대회용 에이전트의 관리 현황이다. 개인 MIX(`D:\Downloads\idea\mix-kai-environment-2026`)와 Agor는 이 표의 「개인」칸에만 적고, 제출 폴더 스킬로 넣지 않는다.

## 공통 계약

| 항목 | 값 |
| --- | --- |
| 출제안 | ① 기업 현안 해결형 |
| 모델 | GBDT + 로컬 보정 |
| 대회 스킬 | `kamp-nba` · `kamp-fusion-ablation` · `kamp-baseline-gbdt` · `kamp-leakage-audit` · `kamp-submit-pack` |
| 같이 읽는 파일 | `docs/board.md` · `docs/decision-log.md` · `docs/idea-form.md` · 이 파일 |
| 모임 중 한 명만 고치는 파일 | `docs/board.md` · `docs/decision-log.md` |
| 제출에 넣지 않음 | Agor · `mix-kai-environment` · VEDA 원문 · `data/raw/` |

## 팀별 현황

각 사람은 **자기 행만** 고친다. 상태를 `대기`에서 `하는 중` 또는 `마침`으로 바꾼다.

| 멤버 | 에이전트 범위 | 쓰는 파일 | 지금 할 일 | 상태 |
| --- | --- | --- | --- | --- |
| 정진우 | 아이디어 · 대회 에이전트 진입점 | `docs/meetup-2026-09-26/정진우.md` · 이 파일의 자기 행 | 현장 5행. 보드·결정 기록은 모임에서 한 명이 적을 때 | 하는 중 |
| 엄예지 | 아이디어 | `docs/meetup-2026-09-26/엄예지.md` | 현장 5행. 공정 · 사건 · 손실 · 직접 겪었는지 | 대기 |
| 최연식 | 데이터 2종 | `docs/meetup-2026-09-26/최연식.md` | 후보 2종. 목표·시간·설비·라벨은 가이드북에서 확인된 것만. 조인이 불확실하면 빈칸 | 대기 |

## 개인 도구 (제출 밖)

| 멤버 | 도구 | 대회 에이전트가 하는 일 |
| --- | --- | --- |
| 공통 | Agor는 개인 MIX. 상업 제품 아님 | 세션 내용을 이 표나 `decision-log`에 올리기 전에는 결정으로 받지 않음 |
| 공통 | `D:\Downloads\idea\mix-kai-environment-2026` | 현장·데이터·지식 카드 조합. 스킬 파일을 이 저장소로 복사하지 않음 |

## 잠금 후 범위

일요일이 적힌 뒤에만 아래가 열린다.

| 멤버 | 추가 범위 |
| --- | --- |
| 최연식 | `data/raw/` 수신 · `reports/data-card.md` · split · GBDT · Ablation |
| 엄예지 | KPI·비용표 · PDF §1~4 |
| 정진우 | infer JSON · zip README. 수치 잠금 전 PDF 수치 변경 없음 |
