# Laya · horizontal OSS System 1 → infer 스키마 analog (2026-09-19)

## 출처

- **트리거:** [r/LocalLLaMA / 1wjieap](https://www.reddit.com/r/LocalLLaMA/comments/1wjieap/made_the_horizontal_opensource_model_for_jev_with/) (2026-09-18) — NandhaKishor M
- **제품:** [**Laya**](https://huggingface.co/convaiinnovations/laya) · PyPI `laya` · [GitHub](https://github.com/NandhaKishorM/laya) · [demo Space](https://huggingface.co/spaces/convaiinnovations/laya-demo)
- **선행:** arXiv [2503.23303](https://arxiv.org/abs/2503.23303) · [2510.01237](https://arxiv.org/abs/2510.01237) · [DEV write-up](https://dev.to/nandakishor_m_6cc0adfde9f/i-built-non-autoregressive-decision-models-a-year-ago-then-a-frontier-lab-called-it-a-18me)
- **Scout:** HF model card + DEV (2026-09-19) · Reddit 본문 **미실행**

## 요지

**Jev-style horizontal System 1** — **비자기회귀** · **choice / score / noul** · **병렬 1 forward pass** · Apache 2.0.

| 항목 | Laya |
| --- | --- |
| 백본 | ModernBERT-large **421M** (bidirectional) |
| 학습 | **RLCD** · strictly proper scoring · temperature calibration |
| 지연 | ~**33–40 ms**/q (T4, HF card) |
| 출력 | 확률·confidence · **act/escalate** head |
| 한계 | typed-decisions **zero-shot ~0.36** — **파인튜닝 전제** |

Jev(TypeSafe API)와 **아키텍처 유사** — 저자는 선행 OSS 주장. **중립:** 우리는 제품 비교·드라마 **인용 ❌**.

## MIX 잠재 (deferred) — **패턴만**

| Laya 패턴 | K-AI 대응 | 축 |
| --- | --- | --- |
| choice / noul / score | **`infer` JSON 스키마** (`gem-typesafe-calibrated-decisions`) | Model |
| temperature → ECE↓ | **Platt/isotonic** + reliability diagram | Model · PDF §6 |
| act / escalate head | τ_auto / τ_review (`gem-beckmann` cascade) | PDF §7 |
| 로컬 OSS 가중치 | **제출 메인 ❌** — tabular=GBDT · §3 사전학습 **review_needed** | — |
| 텍스트 state | KAMP **표·시계열** — Laya **경로 ❌** | — |

**투입 ❌:** `pip install laya` · HF 가중치를 **제출 infer** · Jev/Laya **성능·지연 수치** PDF 인용

## 경계

- `gem-typesafe-satellite` — Jev **데모·API** 위성 / 본 gem — **OSS horizontal 엔진**
- [`C-Tianyu/NanoJev`](https://huggingface.co/C-Tianyu/NanoJev) — 커뮤니티 replica · 동일 **pull ❌**
- 9/21 규정 **외부 LM·사전학습** 허용 전 **로컬 Laya ❌**

## pull 조건

| 时机 | 用途 |
| --- | --- |
| pull ❌ default | Model·infer |
| PDF §5 (선택) | 「TypeSafe/Jev API·Laya **미사용** — GBDT+sklearn 보정」1문장 |
| infer 스키마 설계 | choice/noul/score **필드명** 참고 only |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-laya-horizontal-oss` |
| 유형 | `artifact` |
| 상태 | **deferred** · **pull ❌** |
| 적용 축 | infer 스키마·보정 **패턴** (실행 ❌) |

## 관련

- `gem-typesafe-calibrated-decisions` · `gem-typesafe-satellite` · `gem-beckmann-transport`
- [`AGENT.MD`](../AGENT.MD) §3 · §6 Model
