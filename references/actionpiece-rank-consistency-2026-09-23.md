# ActionPiece · Physical Rank Consistency (2026-09-23)

## 출처

- **트리거 트윗:** [@itarutomy / 2102518301309989195](https://x.com/itarutomy/status/2102518301309989195) (2026-09-22, 日本語)
- **논문:** [ActionPiece: Rethinking Action Tokenization for Autoregressive Vision-Language-Action Models](https://arxiv.org/abs/2609.18487) · arXiv:2609.18487 · Lian, Yu, Shen 등 · HUST·Zhongguancun·HKUST(GZ) 등
- **Scout:** fxtwitter API + arXiv abstract·Table 1 (2026-09-23)

## 트윗 vs 논문

| itarutomy | 논문 |
| --- | --- |
| MSE만 보면 상황별 미세 조정이 사라짐 | §1 · abstract — 재구성 후 비슷한 동작이 대표 동작으로 뭉치고 **조정은 줄거나 뒤집힘** |
| Physical Rank Consistency | **PRC** — 복원 후에도 물리 거리(병진·회전·그리퍼)의 **근-원 순위**가 유지되는가 |
| 8 step → 16 token · frozen decoder | Fig 1 · §1 일치 |
| LIBERO **94.8%** · LIBERO-Plus **68.8%** · +1.1 / +4.5 | Table 1 · 동일 Qwen3-VL-4B. Plus는 **7종 shift 중 6종**에서 우위 (§결과 문장 일치) |

→ 트윗 숫자·주장 **정확**.

## 실체

로봇 VLA용 **행동 토크나이저**. 포인트 오차(MSE)와 별도로, 압축 후에도 「어떤 동작이 어떤 동작보다 가까운가」의 순서를 지키도록 PRP·QR로 감독. 분포가 바뀐 LIBERO-Plus에서 격차가 더 큼 (1.1 → 4.5).

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| ActionPiece·Qwen-VL·로봇 토큰 | ❌ | VLA · 제출 Model = GBDT+로컬 |
| **패턴** — MAE만으로 충분하지 않다 | ✅ pull↑ | 연속 KPI(치수·에너지·잔여수명)면 **평균 오차가 작아도 이웃 LOT의 좋고 나쁨 순위가 뒤집히면** 현장 조치가 틀림 |
| PRC의 우리 버전 | ✅ | 검증 셋에서 예측값과 실제값의 **Spearman** 또는 근접 쌍 **pairwise 순위 일치율** 1개. 분류 과제면 PR-AUC가 이미 순위라 **추가 ❌** |
| 「분포 밖에서 순위 보존이 더 중요」 | △ | group/time split의 **먼 구간**에서 순위가 유지되는지 — `gem-decade-review` contextual과 같은 말 |
| itarutomy 요약 | ✅ | 수치를 논문 Table 1과 맞춰 확인함 |

## K-AI — 우리 파이프 대응

| ActionPiece | Q.AI |
| --- | --- |
| MSE | MAE·RMSE — 주 지표 **후보**일 뿐 |
| PRC (근-원 순위) | 연속 타깃이면 validation에 **Spearman / pairwise order** 열 |
| 조정이 뒤집힘 | 같은 설비·인접 시각인데 예측 순서가 실제와 반대 → 그 구간은 알람 ❌ (`gem-typesafe` act/review) |
| LIBERO vs Plus (+1.1 vs +4.5) | in-dist보다 **시간·그룹 밖**에서 순위 지표를 볼 것 |

## 경계

- **VLA·토크나이저·Qwen** — Model·제출 **❌**
- `gem-dualsql`(지표가 reward를 오염) · `gem-typesafe`(보정) · `gem-manokhin`(구간)와 같은 **평가** 축 — 본 gem은 **순위 보존**만
- 분류(불량/양품)로 lock되면 PRC 대응은 **하지 않음** — PR-AUC·cost로 충분
- PDF에 LIBERO·로봇 수치 **인용 ❌**

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 9/27 타깃이 **연속**이면 | Sprint 1 검증표에 Spearman 또는 pairwise 순위 1열 |
| 타깃이 **분류**면 | pull ❌ |
| PDF §6 | 「평균 오차와 별도로 인접 표본의 순서를 유지했다」 1문장 · 논문명 ❌ |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-actionpiece-rank-consistency` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull↑ **연속 타깃일 때만**) |
| 적용 축 | 검증 지표 — VLA **❌** |

## 관련

- `gem-typesafe-calibrated-decisions` · `gem-dualsql-multi-agent-rl` · `gem-manokhin-modern-forecasting` · `gem-decade-review-ts-anomaly`
- `.cursor/skills/kamp-baseline-gbdt`
