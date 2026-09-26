# 궤적 조기예측 · 보정 이전은 그 대상에만 (2026-09-25)

## 출처

- **트리거 트윗:** [@SciFi / 2103171753786724773](https://x.com/SciFi/status/2103171753786724773) (2026-09-24) — arXiv cs.AI 봇. 본문은 제목·저자
- **논문:** YanZe Cao. [arXiv:2609.25647](https://arxiv.org/abs/2609.25647) (2026-09-22). 26쪽. 제출 이력의 이름은 Yanze Cao
- **Scout:** fxtwitter API + arXiv 초록 (2026-09-25). SWE-bench 파이프라인 **받지 않음**

## 트윗 vs 초록

| 트윗 | 초록 |
| --- | --- |
| 제목·YanZe Cao·cs.AI | 제목 일치. 저자 표기는 YanZe, 메일 이력은 Yanze |
| 결과 없음 | 한 예측기를 뺀 쌍별 보정 차의 중앙값은 SUCCESS 0.0180(45쌍), FAILURE 0.0385(35쌍). 사전 등록한 “전반적 이질” 기준은 둘 다 미달 |
| | 두 조합만 남음: gpt-5-mini/SUCCESS 0.1377, claude-opus-4.6/FAILURE 0.1107. 부호는 고정 대조에서 안 뒤집힘 |
| | TerminalBench는 재현이 아님. SUCCESS는 결정 0(INDETERMINATE), FAILURE는 지속 기준 미달. 한 환경 안의 대상별 오차이지, 모델 고유나 벤치 전반은 아니라고 결론 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 에이전트 궤적·조기 중단·SWE-bench | ❌ | 제출은 GBDT. 구간 자체는 `gem-manokhin` |
| 한 설비의 보정 실패를 모델 전체의 결함으로 쓰기 | ❌ | 초록: 그 오차가 모델 고유라는 증거는 없음 |
| 한 데이터셋에서 맞은 보정을 다른 설비·다른 셋으로 옮기기 | ❌ | 교차 벤치 재현은 성립하지 않음 |
| **패턴** — 보정은 그 그룹에서만 말함 | ✅ §6 | 잠근 분할의 설비·LOT별로 적음. 한 칸의 어긋남을 전 표의 성질로 올리지 않음 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 논문 파이프 **pull ❌** · 0.1377 등 수치 인용 ❌ |
| PDF §6 | 보정 문장은 측정한 그룹의 이름으로 한정 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-calibration-transfer-is-target-specific` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | 검증 — 보정은 대상별 |

## 관련

- `gem-manokhin-modern-forecasting` · `gem-typesafe-calibrated-decisions` · `gem-rrsi`
