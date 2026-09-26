# CASD · 로그 한 패스는 홀드아웃이 아니다 (2026-09-26)

## 출처

- **트윗:** [dair_ai](https://x.com/dair_ai/status/2103479392106352910) · 2026-09-25 · Typefully
- **논문:** [arXiv:2609.26261](https://arxiv.org/abs/2609.26261) · Coding Agents are Strong Prompt Optimizers · Agamdeep Singh, Srishti Gautam, Priyanshu Gupta, Nikita Mehrotra, Tanmay Bakshi, Sumit Gulwani
- **Scout:** arXiv HTML `2609.26261v1` (2026-09-26). 저자 표에는 이름만 있고 소속 칸은 없다. 설치·실행 **❌**

같은 로그로 규칙을 고치는 일과, 그 규칙이 안 본 홀드아웃을 올리는 일은 다르다. 채택 조건 자체는 `gem-rrsi-harness-regularization`이 맡는다. 완료 로그와 실시의 구분은 `gem-layerx-qa-add-vs-drop`이다.

## 트윗 vs 논문

| 트윗 | 논문 |
| --- | --- |
| Microsoft 논문 | HTML 저자 줄에 Microsoft가 없다. 소속은 이 페이지에서 확인하지 않음 |
| 코딩 에이전트가 로그를 읽고 GEPA를 이긴다 | 같은 정적 풀에서 4과제 중 3개. SSB-Verified는 GEPA 60.7, CASD 51.3 |
| 전체 로그로 분석 코드를 쓰고, 작은 배치 탐색 대신 규칙 한 장을 쓴다 | 초록과 같다. 이름은 Coding-Agent Skill Distillation (CASD) |
| 환경 접근도 검증 데이터도 필요 없다 | 최적화 패스에는 없다. 코퍼스는 이미 돌린 롤아웃이다 (§6.3) |
| 베이스라인 대비 평균 +16.6, GEPA +10.9, SkillOpt +5.3 | 표 1 평균 이득 행과 같다 |
| 프롬프트당 약 $1.60, 검증 게이트 탐색보다 22배 이상 싸다 | 표 3. CASD 네 과제 합 $6.4, SkillOpt 합 $142.5. 22배는 GEPA 합 $8.4가 아니다 |
| (없음) | 상대에게 검증 세트와 환경 접근을 주면 CASD가 앞서는 것은 4개 중 2개 (초록) |
| (없음) | 한계: 대상 모델은 GPT-5.4-mini no-think 하나, 증류기는 Claude Sonnet 5 / Claude Code 하나. 로그에 없는 행동은 못 찾는다 (§7) |

표 1 각주: ALFWorld의 SkillOpt는 자기 스캐폴드(베이스 58.7)라 56.7 열과 바로 비교하지 않는다. 평균 +5.3은 그 칸을 포함한 논문의 평균 행이다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 에이전트 로그로 규칙 한 장을 만들고 그 평균 이득을 우리 점수로 쓰기 | ❌ | 같은 로그 안에서의 이야기와, 안 본 홀드아웃은 다르다. SSB에서는 검증 있는 GEPA가 더 높았다 |
| 자리의 진행 요약을 최적 프롬프트로 에이전트 규칙에 덮어쓰기 | ❌ | 요약은 초안이다. 시작 조건과 `decision-log`를 대신하지 않는다 |
| CASD·GEPA·SkillOpt를 제출 모델에 돌리기 | ❌ | 외부 코딩 에이전트와 유료 호출. GBDT와 로컬 보정이 제출 모델이다 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 진행 요약 | 로그에서 센 횟수는 증거 칸에 경로와 함께 둔다. 그 문장만으로 규칙을 갈지 않는다 |
| 경진 제출 | 16.6·10.9·5.3·$1.60을 PDF에 인용하지 않음 · 코드 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-casd-log-pass-is-not-the-holdout` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | 팀 운영 — 진행 요약 |

## 관련

- `gem-rrsi-harness-regularization` · `gem-layerx-qa-add-vs-drop` · `gem-harness-zero-keep-the-check`
