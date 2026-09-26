# Andrew Trask · ABC Attribution → SHAP·§7 (2026-09-19)

## 출처

- **트리거:** [@iamtrask / 2101112311918309452](https://x.com/iamtrask/status/2101112311918309452) (2026-09-19) — Andrew Trask · OpenMined
- **데모:**
  - Inference → **Shapley:** [shapley.attribution-based-control.ai](https://shapley.attribution-based-control.ai/)
  - Post-training → **LoRA:** [abcgpt](https://github.com/iamtrask/abcgpt)
  - Pre-training → **Hierarchy:** [Substack · breaking frontier AI](https://andrewtrask.substack.com/p/breaking-todays-frontier-ai-companies)
- **Scout:** fxtwitter + 링크 메타 (2026-09-19)

## 요지

**Attribution-Based Control (ABC)** — AI 기여·귀속 3층:

| 층 | 방법 | Trask 주장 |
| --- | --- | --- |
| **Inference** | **Shapley** | 추론 시 기여도 — **surprisingly good** |
| Post-training | LoRA | 어댑터별 기여 |
| Pre-training | Hierarchy · **RGI** | 라우터 swarm · narrow models — AGI 대신 **RGI** |

RGI = routed general intelligence — 사적 데이터 FT 모델이 swarm에 등록·과금.

## MIX 잠 potent — **제조 SHAP만**

| ABC 층 | K-AI 대응 | 축 |
| --- | --- | --- |
| **Inference · Shapley** | 가이드북 **SHAP** · `AGENT.MD` §4.4 **행동 연결** · TreeSHAP/LGBM | **PDF §5·§7** · Model |
| LoRA post-train | **`pull ❌`** — §3 사전학습·FT | — |
| RGI swarm | **`pull ❌`** — 경진 무관 | — |

**투입 ❌:** abcgpt · Trask Shapley **웹 데모 API** · LoRA FT · RGI 경제 서술

**우리 구현:** `shap` / LGBM **로컬 TreeSHAP** — Trask는 **방법론·PDF 서술** 참고 (게임이론 Shapley ↔ SHAP 연결 1문장).

## 경계

- KAMP 가이드북 59·90 **이미 SHAP** — Trask = **추가 레퍼런스** not 교체
- `gem-xgboost-math-zenn` §5 — **식** / 본 gem — **기여도·점검 3항목**
- `gem-lightning-weave` Pareto와 **병행** — recall vs 알람 + **왜 그 센서?**

## pull 조건

| 时机 | 用途 |
| --- | --- |
| 9/21 후 SHAP Fig | PDF §7 — Shapley **공정 변수→점검 순서** (가이드북 59 패턴) |
| pull ❌ | abcgpt · RGI · LoRA |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-trask-abc-attribution` |
| 유형 | `playbook` |
| 상태 | **deferred** · **pull↑ PDF §5·§7** |
| 적용 축 | Model(해석) · PDF §7 행동 |

## 관련

- [`AGENT.MD`](../AGENT.MD) §4.4 · [`docs/winning-strategy-v1.md`](../docs/winning-strategy-v1.md) §4
- `gem-xgboost-math-zenn` · `gem-lightning-weave` · `mix-application-plan` 우승 스토리 SHAP 3항목
- [`knowledge/kamp-guidebooks-md/59_기계부품_품질보증_AI_데이터셋.md`](../knowledge/kamp-guidebooks-md/59_기계부품_품질보증_AI_데이터셋.md)
