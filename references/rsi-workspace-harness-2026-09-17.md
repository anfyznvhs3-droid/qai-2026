# RSI 서베이 → 작업공간·하네스 위생, Library Drift (2026-09-17)

## 출처

- **트리거:** [kiwoong yeom LinkedIn 포스트](https://www.linkedin.com/feed/update/urn:li:activity:7506182059082633216/) (한국어 요약)
- **논문:** *The Last AI Built by Humans: Toward Genuine Recursive Self-Improvement* — [arXiv:2609.11873](https://arxiv.org/pdf/2609.11873) (491편 논문 + 72 산업 사례, 2026-09-15 갱신)
- **저장소:** [theseus-labs-rsi/awesome-rsi](https://github.com/theseus-labs-rsi/awesome-rsi) (519편 분류) · [theseus-labs-rsi.github.io](https://theseus-labs-rsi.github.io/)
- **Scout:** _(미실행 — LinkedIn 본문 기준, 논문 원문 미확인, 2026-09-17)_

## 요지 (포스트 기준)

**RSI 자율성 5단계** — B0 세션 내 수정 → L1 실행 자동화(43.8%) → L2 전략 탐색(31.6%, **현재 주류**) → L3 경험 획득(13.0%) → L4 배포 적응(5.7%) → L5 메타 개선(5.9%, 프로토타입 · 14/100 퇴보).

**Theseus Workspace-Bench 실측 (우리에게 중요한 부분):**

| 발견 | 수치 |
| --- | --- |
| 작업공간 **잡음 제거만으로** 통과율 상승 | **+21.7 ~ +51.6 %p** |
| 정제 환경 최고 조합 | DeepSeek-V4-Pro + DSH 98.2% · GPT-5.6 Sol + Codex CLI 92.5% |
| **Library Drift** | 스킬·룰을 계속 쌓으면 검색이 꼬여 **성능 하락** |
| 결론 | 모델보다 **환경·하네스·진단·롤백 거버넌스** |

## Q.AI 대응 — 우리도 같은 위험이 있다

현재 에이전트 컨텍스트 후보: `gem-*` 11건 · `ref-veda-*` 73건 · 가이드북 md 50권(4.3 MB) · knowledge 스냅샷 30쪽. **Library Drift 조건 충족.**

| 논문 발견 | 우리 규칙 | 위치 |
| --- | --- | --- |
| 잡음 제거 → 통과율↑ | `AGENTS.md`는 **1화면** 유지, 레퍼런스 묶지 않음 (기존 규칙 재확인) | `AGENTS.md` |
| Library Drift | `deferred` · `review_needed` 원석은 **에이전트 컨텍스트에서 제외** — 레지스트리에만 존재 | `reference-concepts.md` |
| 진단 체계 | `experiment-log`에 **실패 원인 필드** 필수 (누수 / 분할 / 피처 / 하이퍼 / 데이터 오류) | `reports/experiment-log.md` |
| 롤백 거버넌스 | git 브랜치 = 실험 단위, `main` 머지 조건 = 재현 (2026-09-17 결정) | `docs/team.md` |
| 하네스 > 모델 | Cursor/Codex 어느 쪽이든 **같은 `AGENT.MD`** — 모델 바꾸기 전에 지시 위생 점검 | `AGENT.MD` |
| 대용량 코퍼스 | 가이드북 md는 **grep 대상**이지 자동 로드 ❌ — 과제 확정 후 **해당 1권만** 컨텍스트 | `knowledge/` |

## 9/21 정리 작업 (Drift 방지)

1. 과제 확정 → 후보 데이터셋 외 가이드북 카드 **접기** (파일은 유지, 카드 요약표만 참조)
2. `gem-*` 중 과제와 무관한 것 → `deferred`로 내리고 `AGENTS.md` 경로에서 제거
3. `ref-veda-*` 73건 중 **9/21 우선 pull 12건**만 활성 (이미 `reference-concepts.md`에 목록)

## 경계

- RSI 논문 본문·L5 시스템 **인용·구현 ❌** — 서베이는 **운영 교훈**만
- 포스트 기반 요약 — 수치 인용 시 논문 원문 쪽 확인 필요 (`review_needed`)
- 제출물(Data·Model·PDF)과 무관 — **팀·에이전트 운영** 축

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-rsi-workspace-harness` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **active** (운영 규칙) · 수치 인용 = `review_needed` |
| 적용 축 | 에이전트 운영 — `AGENTS.md` 위생 · 레지스트리 pruning · experiment-log 진단 |

## 관련

- `gem-qm-ocx-collab` · `gem-taskview-agent-board` — 협업 스택
- `docs/reference-concepts.md` §"사용자가 레퍼런스 링크를 줄 때" 7번 (`AGENTS.md` 승격은 명시 시만)
- `reports/leakage-audit-checklist.md`
