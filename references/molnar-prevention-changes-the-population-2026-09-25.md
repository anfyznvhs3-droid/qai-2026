# Molnar · 예방은 평가 대상을 바꾼다 (2026-09-25)

## 출처

- **트리거 트윗:** [@SciFi / 2103335935442116943](https://x.com/SciFi/status/2103335935442116943) (2026-09-25). 본문은 제목·저자·분류만
- **논문:** [arXiv:2609.26419](https://arxiv.org/abs/2609.26419) Grant Molnar, 2026-09-22, 14쪽. cs.AI, math.OC
- **Scout:** fxtwitter API + arXiv 초록 (2026-09-25). DeepMind 방어 절차 **받지 않음**

분할을 고르는 일은 `gem-sato`, 채택은 손대지 않은 홀드아웃이 `gem-rrsi`다. 이 건은 앞단에서 뺀 행이 남은 점수의 모집단을 바꾼다는 쪽이다.

## 트윗 vs 초록

| 트윗 | 초록 |
| --- | --- |
| 제목 Reliability Theory for AI Control, Grant Molnar | 같음 |
| 이미지 설명: 같은 제어 스택이 실패 영역에 따라 희귀 실패를 세제곱·제곱·선형으로 누르고, Birnbaum 중요도가 부품 개선의 명목 신뢰도를 가리키며, 예방은 복구가 요구되는 모집단을 바꾼다 | 초록과 **같은 문단**. 트윗 본문에는 없음 |

적용 대상은 Google DeepMind의 rogue deployment 방어다. 우리 설비 점수표가 아니다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 제어 스택·Birnbaum 중요도로 열의 순서를 정하기 | ❌ | 프론티어 제어 논문의 명목 신뢰도. 우리 KPI가 아님 |
| 나쁜 행을 뺀 뒤 남은 점수를 모델 개선으로 적기 | ❌ | 예방은 복구가 요구되는 대상을 바꿈. 모집단이 달라지면 점수를 비교하지 않음 |
| **패턴** — 뺀 행은 모집단 변경으로 적음 | ✅ PDF | 필터 전후 행 수와 누구를 뺐는지 적음. 남은 점수만 올랐다고 쓰지 않음 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 신뢰도 이론·제어 스택 **pull ❌** |
| 데이터 | 행을 빼면 그 조건을 분할 설명에 둠. 홀드아웃은 같은 모집단 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-molnar-prevention-changes-the-population` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Data — 모집단 |

## 관련

- `gem-sato` · `gem-rrsi` · `gem-uncheatable-eval` · `gem-dcscore-copy-is-not-diversity`
