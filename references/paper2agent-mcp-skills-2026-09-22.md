# Paper2Agent · paper → MCP + skill (2026-09-22)

## 출처

- **트리거 트윗:** [@Gorden_Sun / 2102217433633435824](https://x.com/Gorden_Sun/status/2102217433633435824) (2026-09-22, 中文 · AI资讯)
- **추가 트윗:** [@mylifcc / 2103422759766216908](https://x.com/mylifcc/status/2103422759766216908) (2026-09-25). 같은 출처라 새 보석을 만들지 않음
- **논문:** [Nature](https://www.nature.com/articles/s41586-026-11044-y) Miao·Davis·Zhang·Pritchard·Zou, 2026-09-16. doi:10.1038/s41586-026-11044-y
- **repo:** [github.com/jmiao24/Paper2Agent](https://github.com/jmiao24/Paper2Agent) · [paper2agent.ai](https://paper2agent.ai)
- **저자 (README bib):** Jiacheng Miao, Joe R. Davis, Yaohui Zhang, Jonathan K. Pritchard, James Zou — **Stanford 계열** (트윗 「斯坦福师生」과 대체로 일치)
- **Scout:** fxtwitter API + README + `skills/paper2agent/SKILL.md` (2026-09-22)

## 트윗 vs 공식

| Gorden_Sun | README·skill |
| --- | --- |
| 「**一键**」论文→AI智能体 | **multi-agent** · Paper2Skill + Paper2MCP · **verification**·ZIP delivery |
| MCP + skill · 环境配置·工作流验证 | `dist/<project>-agent/` — verified **MCP server** + **paper skill** |
| 科研人员无需手动复现 | **minimal human input** — not zero; blocked component = **partial** |

→ 「一键」= **마케팅 압축** · 실제는 coding agent + parallel specialists + runtime 검증.

| mylifcc (2026-09-25) | Nature 초록 (2026-09-16) |
| --- | --- |
| Nature가 방금 냈다. 앞으로는 코드를 직접 읽지 않아도 된다. 논문마다 가상 교신저자가 붙어 방법을 대신 돌린다 | 게재는 2026-09-16. 「virtual corresponding author」는 초록에 있다. 논문과 **코드베이스**를 여러 에이전트가 읽어 MCP를 만들고 테스트를 돌린다. 모든 논문에 에이전트를 붙인다는 규정은 **없음**. 생물 사례(AlphaGenome·Scanpy·TISSUE)의 절차는 가져오지 않음 |

## 실체

| 항목 | 값 |
| --- | --- |
| 입력 | paper PDF/부속 · **code repo** · 또는 둘 다 |
| 출력 | tested **MCP tools** + **paper skill** (Claude/Codex skill folder) |
| 루트 | Paper2Skill · Paper2MCP · combined `*-agent/` |
| 검증 | strict verification · USAGE.md · env isolation · review evidence **배포물 밖** |
| 호스트 | Claude Code · Codex · Gemini CLI — **외부 coding agent 전제** |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| Paper2Agent **설치·가이드북 50종 agentify** | ❌ | MCP·skill 폭발 = `gem-rsi-workspace-harness` **Library Drift** |
| 논문·arxiv → KAMP **Model 대체** | ❌ | 제조 = **GBDT+로컬** · Jev·외부 MCP **❌** (`AGENT.MD` §3) |
| paper2agent.ai **SaaS** | ❌ | 블라인드·재현·오프라인 제출과 충돌 |
| **은유** — verified ZIP + USAGE | △ | `kamp-submit-pack` · README·재현 경로 — **도구 ❌** |
| **은유** — env·workflow verification | △ | `src/` smoke · leakage audit — **ScientistTwo CoE**와 중복 |
| Gorden Sun AI日报 | ✅ | Scout **2차 큐레이션** — repo README 우선 |

## K-AI — 우리 파이프 대체

| Paper2Agent | Q.AI |
| --- | --- |
| paper+repo → MCP | 가이드북 **수동** lock · `.cursor/skills/kamp-*` **5종 고정** |
| multi-agent conversion | Cursor agent + **단일** `AGENT.MD` 계약 |
| tested MCP delivery | `data/raw/` + `src/` + **zip** (`kamp-submit-pack`) |
| Paper2Skill | `references/*.md` + `gem-*` 레지스트리 — **수동 Scout** |
| API key in env only | secrets **repo 밖** — 동일 원칙 |

## 경계

- **제출 zip·requirements**에 Paper2Agent·생성 MCP **❌**
- `gem-scientisttwo-autonomous-research` — 자율 연구 / 본 gem — **paper→tool 자동화**
- `gem-aers-copaper-empirical-skills` — 社科 skill megacatalog / 본 gem — **논문→MCP**
- `gem-seekdb-agent-state` · `gem-mimo-rl-harness` — agent infra deferred 축
- KAMP **블라인드** — 논문 PDF를 agentify해 보고서에 **브랜드·자동 생성 skill 인용 ❌**

## pull 조건

| 时机 | 用途 |
| --- | --- |
| default | **pull ❌** · **설치 ❌** |
| Scout | arxiv+repo **발견**은 수동 — Paper2Agent 파이프 **투입 ❌** |
| PDF | Paper2Agent·「一键 agent」 **인용 ❌** |
| 운영 | verified delivery≈submit-pack **내부 1줄**까지 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-paper2agent-mcp-skills` |
| 분류 | **MIX 원석** (`artifact`) |
| 상태 | **deferred** (pull ❌ · Library Drift **금지**) |
| 적용 축 | Scout·경계 — Model·Data·PDF **❌** |

## 관련

- `gem-scientisttwo-autonomous-research` · `gem-aers-copaper-empirical-skills` · `gem-rsi-workspace-harness`
- `.cursor/skills/kamp-*` · [`references/kamp-submit-2026-2026-09-21.md`](kamp-submit-2026-2026-09-21.md)
- [`AGENT.MD`](../AGENT.MD) §3 — 외부 API·합성·제출 윤리
