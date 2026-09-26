# Last 30 Days → 30일 engagement 가중 멀티소스 Scout (2026-09-20)

## 출처

- **트리거 트윗:** [@bkdgiffug / status/2101356142584910306](https://x.com/bkdgiffug/status/2101356142584910306) (2026-09-19, 중문)
- **repo:** [github.com/mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) — **62,358★** · MIT · Python · v3.11+ (2026-09-19 push)
- **스킬 스펙:** [skills/last30days/SKILL.md](https://github.com/mvanhorn/last30days-skill/blob/main/skills/last30days/SKILL.md)
- **Scout:** fxtwitter + GitHub API (2026-09-20)

## 트윗 요지

> **Last 30 Days** — 몇 년 전 글 말고 **최근 30일**만. X·Reddit·YouTube·GitHub·HN 등 플랫폼 **핫 토론**을 모아 **실제 상호작용**으로 걸러 AI 분석용 브리ef로 정리.  
> 용도: **주제 선정·제품·회의 전** 빠른 핫스팟 파악.

## 실체

| 항목 | 값 |
| --- | --- |
| 형태 | **Agent Skill** (`/last30days`) — Claude Code marketplace · `npx skills add … -g` · Codex/Cursor 등 50+ 호스트 |
| 코어 | 병렬 멀티소스 검색 → **upvote·like·거래량** 등 engagement 스코어 → 에이전트 judge가 **1페이지 브리ef** 합성 |
| 무키 즉시 | Reddit · HN · Polymarket · GitHub (wizard 후 X·YouTube·TikTok·arXiv·Techmeme·Digg 등) |
| 부가 | `--hiring-signals` · discovery mode · `--emit=html` · `--as-of` · watchlist delta |
| 라이선스 | **MIT** |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| skill 설치·`/last30days` 실행 | ❌ | 다수 외부 API·쿠키·ScrapeCreators·Perplexity — `AGENT.MD` §3·제출 파이프라인 **무관** |
| 브리ef를 Model/PDF **입력** | ❌ | 소셜·예측시장 = **비공식** · 과제 raw와 **합성 금지** |
| **패턴만** — Scout 보조 | ✅ | `frame-scout` **대체 ❌** · **30일 창 + engagement 필터 + 멀티소스 → `references/` 포인터** |

**채택할 아이디어 1개:** 새 X/URL 들어올 때 **「최근 30일·상호작용 상위」**만 Scout하고, 증거는 `references/*.md` + fxtwitter/공식 URL로 **고정** (브리ef를 truth로 쓰지 않음).

## K-AI — Scout 축 (Model ❌)

| Last 30 Days | 우리 Scout |
| --- | --- |
| 30일 recency window | gem 등록일·과제 lock(9/21) **이전 링크만** 일상 참조 |
| engagement rank | 트윗 views/likes·HN points — **휴리스틱 필터** (자동 skill ❌) |
| multi-platform parallel | Scout(`F:\working\003.RESEARCH`) + **사용자 큐레 X** + awesomejev **1회 스캔** |
| grounded brief | **`references/<topic>.md`** — Scout 증거 URL 필수 |
| discovery mode | `gem-awesomejev-catalog` · satellite 후보 — **561건 로드 ❌** |

## 경계

- **`frame-scout` 대체 ❌** — 공식 KAMP·과제 규정은 Scout official 우선
- **제출 Model·Data·PDF** 입력 ❌ — 트렌드·주제 탐색 **전용**
- Reddit/X **쿠키·유료 API** skill wizard — 경진 repo **미설치**
- `gem-opennews-ops-layer`와 **혼동 ❌** — opennews = run catalog·infer **패턴** (active Model)
- `gem-rsi-workspace-harness` — skill README 전체 **컨텍스트 로드 ❌**

## pull 조건

| 时机 | 用途 |
| --- | --- |
| 9/21 **전** 제조 AI·경진 키워드 스윕 | Scout 보조 — **수동** fxtwitter/Tavily (skill ❌) |
| 9/21 **후** | **pull ❌** — Library Drift · active gem만 |
| PDF | **인용 ❌** — 소셜 브리ef는 논거 아님 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-last30days-skill` |
| 분류 | **MIX 원석** (`artifact`) |
| 상태 | **deferred** (pull↑ Scout) · skill **투입 ❌** |
| 적용 축 | **Scout 보조** — 원석 발굴·큐레이션 (Model·PDF ❌) |

## 관련

- `gem-taskview-agent-board` — 동일 큐레이터 [@bkdgiffug](https://x.com/bkdgiffug)
- `frame-scout` · `gem-awesomejev-catalog` · `gem-rsi-workspace-harness`
- `docs/reference-concepts.md` — `gem-last30days-skill`
