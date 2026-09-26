# Unsloth Studio · Colab → LLM 파인튜닝 deferred (2026-09-19)

## 출처

- **트리거:** [@EngMoElgaraihy / 2100876241486176688](https://x.com/EngMoElgaraihy/status/2100876241486176688) (2026-09-18) — 아랍어 리포스트
- **원 영상:** [@itsPaulAi / 2100327532180463689](https://x.com/itsPaulAi/status/2100327532180463689) — Paul Couvert
- **제품:** [Unsloth](https://unsloth.ai/) · **Unsloth Studio** — Google Colab에서 OSS LLM 파인튜닝 UI
- **Scout:** fxtwitter (2026-09-19) · Studio 기능 **미실행**

## 요지 (홍보)

| 기능 | 내용 |
| --- | --- |
| Colab 무료 | **500+** 오픈소스 모델 파인튜닝 |
| 데이터 | PDF·CSV 업로드 → **즉시 synthetic training data** 생성 |
| 워크플로 | Colab → Studio 설치 → 모델 선택 → 업로드 → 학습 → **커스텀 모델 export** |

## MIX 잠재 (deferred) — **투입 ❌ default**

| 패턴 | K-AI | 비고 |
| --- | --- | --- |
| LoRA·경량 FT | `gem-grf-recon` LoRA prior **은유만** | tabular GBDT 메인 |
| synthetic from PDF/CSV | **`AGENT.MD` §3 합성 데이터 ❌** · 누수·재현 불가 | **제출 금지** |
| Colab·외부 GPU | KAMP `data/raw/` **외부 업로드 review_needed** | 규정 확인 전 ❌ |
| LLM 커스텀 모델 | 제조 tabular·시계열 **메인 경로 ❌** | LLM deferred 묶음 |

**pull ❌** — 9/21 과제 lock 후에도 **제출 Model에 넣지 않음**. PDF에 「합성·외부 FT 미사용」 명시용 **경계 레퍼런스**만.

## 경계

- 트윗 「대기업만의 영역 아님」= **마케팅** — 경진은 **재현·규정·group split**이 승부
- `gem-weightwatcher-memorization` — canary·암기와 **반대** (synthetic 남발 위험)
- `gem-mimo-rl-harness` · `gem-ngu-rl-llm` — LLM 학습 인프라 deferred와 동일 축

## pull 조건

| 时机 | 用途 |
| --- | --- |
| pull ❌ | 제출·학습 |
| PDF §5 (선택) | 「외부 LLM FT·합성 데이터 **미사용**」 1문장 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-unsloth-studio-colab` |
| 유형 | `artifact` |
| 상태 | **deferred** · **pull ❌** |
| 적용 축 | 경계(PDF §5) · 규정 준수 서술 |

## 관련

- [`AGENT.MD`](../AGENT.MD) §3 · [`reports/leakage-audit-checklist.md`](../reports/leakage-audit-checklist.md)
- `gem-ngu-rl-llm` · `gem-mimo-rl-harness` · `gem-grf-recon-ray-field`
- [`docs/mix-application-plan.md`](../docs/mix-application-plan.md) §7
