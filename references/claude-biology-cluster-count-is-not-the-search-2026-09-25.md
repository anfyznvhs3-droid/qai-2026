# Claude Biology · 20만은 검색 수가 아니다 (2026-09-25)

## 출처

- **트리거 트윗:** [@gp_pulipaka / 2103143932095775072](https://x.com/gp_pulipaka/status/2103143932095775072) (2026-09-24). Buffer. `gem-quantum-olympiad`와 같은 계정
- **PDF:** geni.us/Claude-Biology → Anthropic CDN. Yoon, Athukoralage, Ameisen, Kauderer-Abrams, Perry, Durrant. *Autonomous AI agents discover reverse transcriptases with tandem repeat arrays*. 40쪽. 교신은 Perry, Durrant
- **Scout:** fxtwitter API + 초록·문구 횟수 (2026-09-25). 서열·방법·PDF **저장소에 두지 않음**

이미 있는 뉴스 숫자(950 에이전트, 21시간, 2.1억 토큰)는 `gem-anthropic-art-discovery`가 담당한다. 이 PDF에서 950은 그 문장이 아니었다.

## 트윗 vs PDF

| 트윗 | PDF |
| --- | --- |
| 저자 Januka S. Athukoralage, Nicholas T. Perry | 그 둘은 공저. 제1저자는 Peter H. Yoon. 저자 6명 |
| 효소 20만 개 이상을 검색, 약 20시간, 새 생물 시스템 | 조사는 단백질 클러스터 19억 개. 약 20만은 그다음 회수한 RT 클러스터. “20시간”은 PDF에 없음. ART는 초록의 대상과 같음 |
| 주요 질병 치료 5–10년, AGI, 특이점 | disease·AGI·singularity **0건**. “5-10” 한 건은 참고문헌 DOI |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 효소 검색·서열·에이전트 캠페인 | ❌ | 제조 트랙과 무관. 생물 재현 ❌. 뉴스 쪽 규모는 기존 gem |
| 트윗의 저자 2명·20만·20시간·AGI를 PDF 근거로 | ❌ | 분모와 저자 귀속이 다름 |
| **패턴** — 중간 회수 건수를 검색 모수로 쓰지 않음 | ✅ 문장 | 후보를 걸러 남은 수를, 처음 본 수로 적지 않음 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | PDF·캠페인 **pull ❌** |
| experiment-log | 필터 뒤 남은 행 수와 처음 행 수를 다른 칸에 적음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-claude-biology-cluster-count-is-not-the-search` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | 로그 — 회수 ≠ 모수 |

## 관련

- `gem-anthropic-art-discovery` · `gem-quantum-olympiad-reproof-is-a-demo`
