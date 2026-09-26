# 지식 충돌 · 매끄러운 문장은 근거가 아니다 (2026-09-25)

## 출처

- **트리거 트윗:** [@vintcessun / 2103372438335861227](https://x.com/vintcessun/status/2103372438335861227) (2026-09-25)
- **논문:** Pandere, Ranka 외. IvLabs, VNIT. [arXiv:2609.25602](https://arxiv.org/abs/2609.25602) *Rewired or Gated? How Instruction Tuning Shapes Knowledge-Conflict Circuits in LLMs*
- **Scout:** fxtwitter API + arXiv 초록·서론 (2026-09-25). 귀속·경로 패치 **받지 않음**

같은 계정의 압축 벤치는 `gem-uncheatable-eval-recency-is-not-clean`이다. 이 건과 합치지 않는다.

## 트윗 vs 초록

| 트윗 | 초록 |
| --- | --- |
| 지시 미세조정이 지식 충돌 회로를 갈아끼우지 않음 | 질문 자체가 재배선인지 게이팅인지. 결론은 **게이팅**. Llama-3.2-3B, Qwen-2.5-3B, Gemma-3-4B |
| 귀속·제거·경로 패치. 뒤층 주의 헤드는 남고 가중치가 변함 | 다섯 방법(노드·엣지 귀속, 중첩 역할, 인과 제거, 경로 패치)이 같은 결론. 노드 겹침 0.60–0.82. 짧은 충돌에서 문맥 의존은 베이스 0.65–0.87에서 지시 0.22–0.37로 내려감 |
| 짧은 반사실에는 더 버티고, 근거처럼 이어진 오문에는 넘어감. 더 말 잘 듣는 것이 더 믿을 만한 것은 아님 | 초록의 C2와 같음.  robustness는 짧고 건조한 주입에만 있고, 같은 거짓을 정합된 문단으로 쓰면 사라짐 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 회로 분석·지시 튜닝 | ❌ | 언어모델. 제출은 GBDT |
| 매끄러운 메모·생성 문장이 센서·로그 칸을 이김 | ❌ | 문장의 정합은 측정이 아님. 텍스트를 양으로 두지 않는 일은 `gem-qualembed` |
| **패턴** — 짧은 로그 칸이 긴 문장보다 앞 | ✅ PDF | 한 칸의 수치와 문장이 다르면 수치를 고치지 않음. 문장을 다듬는 일은 그 칸을 만들지 않음 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 논문 절차·겹침 수치 **pull ❌** |
| PDF | 로그에 없는 내용은 문장이 매끄러워도 빈칸 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-conflict-circuit-fluency-is-not-evidence` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | PDF — 문장 ≠ 측정 |

## 관련

- `gem-qualembed-text-is-not-measure` · `gem-dualgraph-outline-vs-knowledge` · `gem-oh-my-ppt-layout-is-not-draft`
