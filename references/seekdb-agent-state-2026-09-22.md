# seekdb → AI 에이전트 state store (2026-09-22)

## 출처

- **트리거 트윗:** [@DanKornas / 2102046190430793854](https://x.com/DanKornas/status/2102046190430793854) (2026-09-21)
- **repo:** [github.com/oceanbase/seekdb](https://github.com/oceanbase/seekdb) · Apache-2.0 · OceanBase · pyseekdb Python SDK
- **Scout:** fxtwitter API (2026-09-22)

## 트윗 요지

> 에이전트 **memory**가 retrieval·transaction·sandboxing이 **분리**되면 지저분해진다.  
> **seekdb** = AI-native **search DB** — vector + full-text + scalar **한 SQL** · **COW sandbox** (`FORK DATABASE` / merge·drop) · streaming write+search · embedded 또는 server · **MySQL 호환**.

## 실체

| 항목 | 값 |
| --- | --- |
| 포지션 | LangChain/LlamaIndex/Dify 연동 **agent state store** |
| 핵심 | Hybrid search · FORK/MERGE sandbox · Change Stream async index · ACID |
| 대상 | 장기 memory·RAG·에이전트 실험 branch — **제조 ML 파이프라인 아님** |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 제출 Model·`data/raw/` | ❌ | 외부 DB 스택 · KAMP zip은 **학습 데이터+GBDT** 경로 |
| 경진 18일 **신규 infra** | ❌ | C++ 엔진·MySQL 의존 — `git+md` experiment-log로 충분 |
| **은유** — Ablation branch | △ | `FORK`≈A0/A1 실험 branch **PDF 1문장**까지; DB 도입 ❌ |
| **은유** — hybrid retrieval | △ | 가이드북·datacard **로컬 grep**이 SSOT — seekdb RAG ❌ |
| Dan Kornas 큐레이션 | ✅ | agent **skill/tool** 홍보 계열 — [`gem-last30days-skill`](last30days-skill-2026-09-20.md)과 동일 Scout 축 |

## K-AI — 우리가 이미 쓰는 대체

| seekdb | Q.AI |
| --- | --- |
| agent memory store | `reports/experiment-log.md` + `docs/decision-log.md` |
| FORK sandbox | git branch `exp/<member>/…` · Ablation A0/A1 |
| hybrid SQL search | `knowledge/kamp-guidebooks-*.md` grep · `references/*.md` |
| run catalog | `gem-opennews-ops-layer` 필드 · `.cursor/skills/kamp-*` |

## 경계

- **제출 zip·requirements**에 seekdb/pyseekdb **❌**
- 과제 raw·MIX 원석과 **합성·대체 ❌**
- `gem-rsi-workspace-harness` — 새 DB = Library Drift **증가**
- paperthin `re0-loop` / seekdb — **중복**; 경진은 **얇은 reflex** 우선

## pull 조건

| 时机 | 用途 |
| --- | --- |
| default | **pull ❌** |
| PDF | FORK≈실험 branch **은유 1문장** (선택) |
| post-10/08 | agent side project만 검토 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-seekdb-agent-state` |
| 분류 | **MIX 원석** (`artifact`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Scout·은유 — Model·Data·제출 **❌** |

## 관련

- [@DanKornas](https://x.com/DanKornas) — DispatchSEO · Agent Go SDK · AI Marketing Skills (동일 큐레이터)
- `gem-taskview-agent-board` · `gem-opennews-ops-layer` · `.cursor/skills/`
- `docs/reference-concepts.md` — `gem-seekdb-agent-state`
