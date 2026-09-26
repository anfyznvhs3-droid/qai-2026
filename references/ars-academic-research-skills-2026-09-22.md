# ARS · Academic Research Skills (Imbad0202) (2026-09-22)

## 출처

- **트리거 트윗:** [@XAMTO_AI / 2101958108516065338](https://x.com/XAMTO_AI/status/2101958108516065338) (2026-09-21, 中文)
- **repo:** [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) · v3.22.0 · **CC BY-NC 4.0** · DOI [10.5281/zenodo.20696614](https://doi.org/10.5281/zenodo.20696614)
- **Scout:** fxtwitter API + README·ARCHITECTURE 요지 (2026-09-22)

## ⚠️ AERS와 혼동 금지

| | **본 gem · ARS** | `gem-aers-copaper-empirical-skills` |
| --- | --- | --- |
| repo | Imbad0202/academic-research-skills | brycewang-stanford/Auto-Empirical-Research-Skills |
| 초점 | **学術写作** pipeline · citation·integrity gate | **社科实证** 9단 · CoPaper |
| AI 태도 | **human-in-the-loop** · AI 사용 **숨기지 않음** (README 명시) | Stage 9 **de-AIGC** → KAMP **금지** |

## 트윗 vs 공식

| XAMTO_AI | README |
| --- | --- |
| 人工卡点·声明核验·完整性门禁 | Stage **2.5/4.5** integrity gates · 7-mode blocking checklist |
| `/ars-plan` → 快扫·综述·按章·返修 | Deep Research · Academic Paper · Reviewer · **10-stage Pipeline** |
| Zotero 接文献库 | BibTeX/Zotero 경로 · Semantic Scholar verification |
| 质量不是替你交差 | 「AI is copilot, not pilot」· volume **non-goal** (Gartenberg et al. 인용) |

→ 트윗은 **프레임 요약** · 실체는 Claude Code **plugin** + 다중 subagent suite (~$4–6/15k words 추정).

## 실체

| 항목 | 값 |
| --- | --- |
| 명령 | `/ars-plan` · `/ars-lit-review` · pipeline orchestrator |
| 게이트 | claim verification · **anti-leakage protocol** · citation locator (v3.7+) · opt-in claim audit (v3.8) |
| 검증 한계 | ** manuscript/process** — raw data 진위·재현 **❌** (POSITIONING.md) |
| 라이선스 | **CC BY-NC 4.0** — 상업·KAMP 상금 맥락 **skill 본문 복제 주의** |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| plugin **전역 설치** | ❌ | Library Drift · Claude Code 전용 · `gem-rsi-workspace-harness` |
| ARS **자동 PDF** → KAMP 제출 | ❌ | 10-stage·multi-agent — **hwpx→PDF**·GBDT 스토리 **대체 ❌** |
| de-AIGC·humanizer | ✅ **해당 없음** | AERS와 **반대** — KAMP **정직 공개**와 **정합** (도구 ≠ 필수) |
| **은유** — integrity gate·human checkpoint | △ | `gem-qm-ocx-collab` Review Gate · 수치 **Model 잠금 후** |
| **은유** — anti-leakage protocol | △ | `kamp-leakage-audit` · target encoding fold 내 |
| **은유** — citation·claim alignment | △ pull↑ | PDF 참고문헌 — **`gem-jabref`** + 수동 검증 |
| XAMTO_AI 큐레이션 | ✅ | `gem-qm-ocx-collab`과 동일 Scout 축 |

## K-AI — 우리 파이프 대체

| ARS | Q.AI |
| --- | --- |
| `/ars-plan` 구조 | `reports/submission-outline.md` · `gem-nature-abstract-playbook` |
| Zotero·`.bib` | **`gem-jabref`** (active) |
| Stage 2.5/4.5 gate | leakage audit · Ablation · **Review Gate** (OCX 축소) |
| anti-leakage | `kamp-leakage-audit` · Join/time-window |
| 10-stage pipeline | lock→EDA→GBDT→robust→표→**kamp-submit-pack** |
| Semantic Scholar verify | Scout official · URL **수동** — API 일괄 **❌** |

## 경계

- **제조 Model·Data** — ARS **직접 ❌**
- `gem-aers-copaper-empirical-skills` — **다른 repo** · de-AIGC **금지** vs 본 gem — integrity **은유만 공유**
- `gem-paper2agent-mcp-skills` — paper→MCP / 본 gem — **学術 writing skill**
- `gem-scientisttwo-autonomous-research` — **자율** 연구 / 본 gem — **human-led** (Brodeur et al. 인용 rationale)
- CC BY-NC — skill 문구 **PDF에 붙이기 ❌** · 패턴 메모만

## pull 조건

| 时机 | 用途 |
| --- | --- |
| default | **pull ❌** · **plugin 설치 ❌** |
| PDF 초고 | human checkpoint·claim–source **수동** · `gem-jabref` **active** |
| PDF §6·§7 | integrity gate **은유 1문장** (ARS 브랜드 **본문 ❌**) |
| vs AERS | de-AIGC 필요 시 → **ARS ❌·AERS ❌** — KAMP **AI 사용 정직 기재** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-ars-academic-research-skills` |
| 분류 | **MIX 원석** (`artifact`) |
| 상태 | **deferred** (pull ❌ · PDF integrity **pull↑** · **AERS와 별개**) |
| 적용 축 | PDF·팀 Review Gate — Model **❌** |

## 관련

- `gem-jabref` · `gem-nature-abstract-playbook` · `gem-qm-ocx-collab` · `gem-aers-copaper-empirical-skills`
- [`references/kamp-submit-2026-2026-09-21.md`](kamp-submit-2026-2026-09-21.md)
- [`AGENT.MD`](../AGENT.MD) §3·§6 — AI 공개·인용
