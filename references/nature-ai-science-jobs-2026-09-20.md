# Nature · AI vs science jobs → PDF·운영 서술 (2026-09-20)

## 출처

- **트리거 트윗:** [@mdancho84 / status/2101634002272526487](https://x.com/mdancho84/status/2101634002272526487) (2026-09-20) — Matt Dancho (Business Science) · **워크숍 마케팅**
- **1차 근거 (Scout):** [Nature News · AI is threatening science jobs](https://www.nature.com/articles/d41586-026-00444-9) — Edward Chen · **2026-02** · doi [d41586-026-00444-9](https://doi.org/10.1038/d41586-026-00444-9)
- **인용문 (Nature):** 「**Data-analysis and modelling positions are already becoming obsolete**, but hands-on experimentalists can breathe easy for now.」
- **Scout:** fxtwitter + Nature 헤드·LinkedIn 2차 (2026-09-20) · **본문 전문 미독**

## Dancho 프레이밍 (채택 ❌ · 맥락만)

| Track | Dancho | 우리 대응 |
| --- | --- | --- |
| **Track 1** | EDA · sklearn · Jupyter · 리포트 | **루틴 baseline** — 가이드북 RF + random-split |
| **Track 2** | GenAI agent · workflow · $200K | **마케팅** — LangChain·에이전트 제출 **❌** |

→ Nature 인용은 **직업 트렌드** · Dancho Track 2는 **`AGENT.MD` §3 위반**.

## Nature 요지 (News)

| 구분 | Nature·2차 요약 |
| --- | --- |
| **이미 obsolete 쪽** | entry-level data analyst · research programmer · **basic modelling/simulation** · routine computational support |
| **근접 위험** | purely cognitive · 이론·수학 모델링 · literature synthesis · 반복 analytics postdoc |
| **상대적 안전** | **wet-lab·hands-on experimentalist** · 현장 복잡 작업 · **연구 질문 설정** · 시니어 조율 |
| **맥락** | AI가 **코딩·분석 자동화** — 인간은 질문·검증·윤리·해석 ([Nature 2026-04 editorial](https://www.nature.com/articles/d41586-026-01551-3) 등과 정합) |

참고: Qian · SSRN [6133666](https://doi.org/10.2139/ssrn.6133666) (Nature 인용).

## Q.AI 판정

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| Dancho GenAI DS·agent 워크숍 | ❌ | 외부 API · Track 2 **제출 경로 아님** |
| Nature 「obsolete」 그대로 PDF | ❌ | **News** · 과장 인용 · 제조 경진 **직접 논거 아님** |
| **패턴** — 루틴 vs **방법론·현장·의사결정** | ✅ | active gem과 **이미 정렬** — PDF §1·§7 서술 |

**채택할 아이디어 1개:** 「데이터 분석·모델링 **만**」은 차별화 ❌ → **group/time split · 보정 · 비용·행동 infer · 재현 가능 파이프** + **제조 현장 KPI** (`gem-opennews-ops-layer` · `gem-typesafe-calibrated-decisions`).

## K-AI — active gem과 매핑

| Nature/Dancho 긴장 | 이미 active/deferred |
| --- | --- |
| notebook 리포트 | `gem-opennews-ops-layer` **decision-ready** catalog · infer |
| 루틴 modelling | **레시피 A** — quant-ts + typesafe + beckmann |
| 초록·서술 | `gem-nature-abstract-playbook` |
| 수치·Review Gate | `gem-qm-ocx-collab` |
| hands-on·도메인 | KAMP 가이드북 · `ref-kpic` · **제조 raw** |
| 자율 AI 연구 | `gem-scientisttwo-*` **pull ❌** — **인간 문제 설정**만 |

## 경계

- Nature **News** ≠ peer-reviewed 연구 — SSRN·editorial **보조만**
- 「RIP data scientists」 **헤드라인 PDF ❌**
- Dancho **Business Science** 코스·워크숍 **투입 ❌**
- AI agent로 Model **대체 ❌** — GBDT+보정 고정
- `gem-rsi-workspace-harness` — viral career 링크 **전체 로드 ❌**

## pull 조건

| 时机 | 用途 |
| --- | --- |
| PDF §1·§7 초안 | 「루틴 분석·모델링 대비 **방법론·현장 의사결정**」1절 — Nature **각주 1줄** (obsolete 인용 **완화**) |
| 팀 alignment | `decision-log` — Track 1 baseline vs ours **3축** |
| pull ❌ default | GenAI career·agent 스택 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-nature-ai-science-jobs` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull↑ PDF §1·§7 · 팀 서술) |
| 적용 축 | **PDF** · 운영 narrative — Model 알고리즘 **변경 ❌** |

## 관련

- `gem-nature-abstract-playbook` · `gem-opennews-ops-layer` · `gem-typesafe-calibrated-decisions` · `gem-qm-ocx-collab` · `gem-scientisttwo-autonomous-research`
- [`docs/mix-application-plan.md`](../docs/mix-application-plan.md) §1·§5
