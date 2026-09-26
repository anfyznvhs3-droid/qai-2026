# AERS · Auto-Empirical Research Skills (Stanford REAP × CoPaper) (2026-09-22)

## 출처

- **트리거 트윗:** [@shenxiankk / 2102022030032060869](https://x.com/shenxiankk/status/2102022030032060869) (2026-09-21, 中文 · AI工具分享)
- **repo:** [brycewang-stanford/Auto-Empirical-Research-Skills](https://github.com/brycewang-stanford/Auto-Empirical-Research-Skills) · CC BY-SA 4.0 · StatsPAI · CoPaper.AI
- **Scout:** fxtwitter + README (2026-09-22)

## 트윗 vs 공식 (숫자 주의)

| 주장 | 공식 README |
| --- | --- |
| 「**23000+** Agent技能」 | Skill Search **~1,096** skills · **76** collections · `catalog/skills.json` + `make validate` |
| 「20分钟顶刊论文」 | CoPaper.AI **마케팅** · trust: benchmark **19** · eval **42/217** |

→ 트윗 **과장** · 레지스트리는 **repo catalog** 우선.

## 실체

| 항목 | 값 |
| --- | --- |
| AERS | **社科实证** 9단: 选题→文献→数据→识别→估计→稳健性→表图→写作→投稿 |
| 도메인 | 经济·政治·社会·心理等 — **DiD/IV/RD/DML** · Stata/R/Python |
| Paper-WorkFlow | 69번 skill로 9단 **오케스트레이션** |
| Stage 9 | **de-AIGC** · deslop · avoid-ai-writing — **AI 흔적 제거·降AIGC** |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| repo **전역 설치** · 1096 skills | ❌ | `gem-rsi-workspace-harness` Library Drift · KAMP **블라인드·재현**과 무관 |
| CoPaper **자동 논문** → KAMP PDF | ❌ | **외부 SaaS** · 제조 과제·Ablation·GBDT **대체 ❌** |
| Stage 9 **de-AIGC** | ❌ **금지** | KAMP 보고서 **AI 사용·출처 정직** · 흔적 은폐 **윤리·실격 리스크** |
| 因果识别·DiD | ❌ Model | 제조 = **group/time split + GBDT** · `gem-menaldo`도 exp만 |
| 9단 **구조 은유** | △ | lock→EDA→split→robust→표→PDF ≈ 우리 Sprint — **`.cursor/skills/kamp-*`** 가 이미 대체 |
| Stage 6 **稳健性审计** | △ | `kamp-leakage-audit` · `sewage-econometrics-check` **패턴** — econometrics **투입 ❌** |

## K-AI — 우리 파이프 대체

| AERS | Q.AI |
| --- | --- |
| 选题·文献 | `task-lock` · Scout official · `gem-jabref` |
| 洗数据 | `data/raw/` · `data-card` · Join manifest |
| 识别·估计 | `kamp-baseline-gbdt` · Recipe A/B/C |
| 稳健性 | `kamp-leakage-audit` · Ablation A0/A1 |
| 表图 | `gem-datawrapper-viz` (deferred) · calibration/Pareto 표 |
| 写作 | `gem-nature-abstract-playbook` · **hwpx→PDF** |
| 投稿 | `kamp-submit-pack` · 포털 zip · **블라인드** |

## 경계

- **社科顶刊流水线 ≠ KAMP 재직者** — 인용·方法 **직접 ❌**
- `gem-scientisttwo-autonomous-research` — 자율 논문 / 본 gem — **社科 skill megacatalog**
- `gem-last30days-skill` · `gem-seekdb-agent-state` — agent infra / 본 gem — **PDF·Model ❌**
- **de-AIGC·humanizer** — KAMP·Q.AI **절대 pull ❌**
- CC BY-SA — catalog **복제** 시 share-alike; **제출 PDF에 AERS skill 본문 붙이기 ❌**

## pull 조건

| 时机 | 用途 |
| --- | --- |
| default | **pull ❌** · **설치 ❌** |
| PDF | AERS·CoPaper·「20分钟顶刊」 **인용 ❌** |
| 운영 | 9단≈Sprint **내부 메모**만 (외부 브랜드 언급 ❌) |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-aers-copaper-empirical-skills` |
| 분류 | **MIX 원석** (`artifact`) |
| 상태 | **deferred** (pull ❌ · **de-AIGC 금지**) |
| 적용 축 | Scout·경계 — Model·Data·PDF **❌** |

## 관련

- `gem-scientisttwo-autonomous-research` · `gem-rsi-workspace-harness` · `.cursor/skills/`
- [`references/kamp-submit-2026-2026-09-21.md`](kamp-submit-2026-2026-09-21.md) — 블라인드·zip
- [`AGENT.MD`](../AGENT.MD) §3 — 외부 API·합성·제출 윤리
