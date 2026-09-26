# Anthropic ART · Claude가 찾은 효소 시스템 (2026-09-24)

## 출처

- **트리거 트윗:** [@Michaelzsguo / 2102850013202157798](https://x.com/Michaelzsguo/status/2102850013202157798) (2026-09-23) — Anthropic 공식 게시 인용
- **공식:** [@AnthropicAI / 2102824959827742916](https://x.com/AnthropicAI/status/2102824959827742916) · [Claude discovers a novel enzyme system](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system) (2026-09-23)
- **Scout:** fxtwitter API + Anthropic 뉴스 (2026-09-24). 프리프린트 본문·서열·실험 절차는 **읽지 않음**

## 트윗 vs 공식

| Michael Guo | Anthropic |
| --- | --- |
| 노벨상 1,200만 크로나 · 「역사상 가장 비싼 프롬프트」 | 공식 글에 **노벨·상금 없음**. 기능은 **아직 모름** |
| 950 에이전트 · 21시간 · 2.1억 토큰 · ART | 뉴스와 **숫자 일치**. 사람이 준 것은 처음 프롬프트와 **이후 실험**. 검색·필터·보고는 에이전트 |
| CRISPR와 같은 새 효소 | 「CRISPR를 **닮은** 반복 배열」. 기반 RT는 **기존 연구에서 이미 보임**. 새로 본 것은 그 옆의 반복 배열과 보조 단백질. Feng Zhang: 흥미롭고 **추가 조사가 필요** |

→ 숫자는 공식. 노벨 프레이밍은 **트윗 과장**.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| ART·효소·서열·실험 절차를 모델·PDF에 | ❌ | 제조 표 데이터와 무관. 생물 실험 **재현 ❌** |
| 950 에이전트 · 2.1억 토큰 캠페인 | ❌ | `gem-rrsi`·`gem-test-time-communication`: 컴퓨트가 없으면 이 규모는 손해. 우리 마감은 10/08 |
| **패턴** — 문제는 사람이 주고, 확인도 사람 | ✅ 이미 함 | 출제안 ①의 한 문장과 KPI는 팀. 에이전트는 가이드북·로그를 뒤짐. 점수 확정은 dev 홀드아웃 |
| 「에이전트가 발견했다」를 제출 스토리로 | ❌ | 블라인드 보고서의 근거는 **우리 실험 수치**. 미검증 가설을 성과로 쓰지 않음 (`gem-sato` 실패는 실패로 남김) |

## 경계

- 서열, 발현, 절단·복제 절차, 실험실 재현 **기록하지 않음**
- `gem-scientisttwo`·`gem-stanford-storm`의 자율 연구와 같은 축. 본 건은 **홍보 수치의 교정**
- KAMP PDF에 Anthropic·CRISPR·노벨 **인용 ❌**

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | **pull ❌** |
| 팀이 이 트윗을 가져오면 | 노벨 문장은 무시. 사람=문제·검증, 에이전트=검색 이라는 이미 있는 역할만 확인 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-anthropic-art-discovery` |
| 분류 | **MIX 원석** (`idea`) |
| 상태 | **deferred** (pull ❌ · 트윗 교정) |
| 적용 축 | 경계 — 생물·대규모 에이전트 검색 **❌** |

## 관련

- `gem-scientisttwo-autonomous-research` · `gem-test-time-communication` · `gem-rrsi-harness-regularization` · `gem-sato-randomness-research`
