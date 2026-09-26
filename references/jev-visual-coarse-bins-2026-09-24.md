# jev-visual · 후보 점수 + 거친 구간 (2026-09-24)

## 출처

- **트리거 트윗:** [@GitHub_Daily / 2102752359420178599](https://x.com/GitHub_Daily/status/2102752359420178599) (2026-09-23, 中文) — `gem-jabref`와 같은 큐레이터
- **repo:** [github.com/hr98w/jev-visual](https://github.com/hr98w/jev-visual) · MIT · Python · 2026-09-17 생성 · ~250★ · Apple Silicon + MLX
- **모델:** Qwen3.5-0.8B-4bit · 첫 실행 ~596 MiB · 이후 로컬
- **Scout:** fxtwitter API + README (2026-09-24)

## 트윗 vs README

| GitHub_Daily | README |
| --- | --- |
| JSON 출력은 질문이 늘면 파싱 실패 | 맞음 — 4/16/64 decision에서 **생성 JSON이 스키마 전체를 통과하지 못함** |
| 글 생성 대신 후보에 점수 · 최고점 선택 | 맞음 — shared multimodal context + **logit으로 후보 직접 점수** |
| M4 · 64문항 37.30s → 2.40s | 맞음 — **독립 채점 vs shared-prefix** 중앙값. 「문항마다 따로 37초」가 아니라 독립 경로 합 |
| 벽돌깨기: 공을 못 봐서 화면을 **5칸**으로 나눠 「공이 어느 칸?」 | 맞음 — 80회에 벽돌 9·리턴 6·목숨 2. **일반 게임 능력의 증거 ❌** · 4bit 효과도 분리 안 됨 |
| TypeSafe Jev 방식 | README가 명시: **독립 커뮤니티 실험**. RLCD·보정·서빙 **재현 주장 ❌** |

→ 숫자 대체로 맞음. 트윗이 빠뜨린 문장: 후보 확률은 **선택지 상대값이지 정답 확률이 아니다**.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| jev-visual 설치 · 비전 검사 모델 | ❌ | Apple Silicon 학습용 · Qwen 0.8B · KAMP는 **표 데이터 + GBDT** · `gem-laya-horizontal-oss`와 같이 Jev OSS **투입 ❌** |
| 「JSON 대신 후보 점수」 | △ 이미 있음 | `gem-typesafe-calibrated-decisions` infer 스키마가 담당 · 이 레포를 그 구현체로 쓰지 않음 |
| 점수를 **보정 확률**로 쓰기 | ❌ | README: relative to options, **not correctness**. 우리는 Platt/isotonic + ECE를 **따로** 잰다 |
| **패턴** — 못 보면 질문을 거칠게 | ✅ pull↑ | 벽돌깨기: 공 좌표 회귀가 안 되면 **5구간 분류**로 행동을 연결. 치수 mm를 못 맞추면 양품/재검사/정지의 **3칸**이 현장 행동과 맞다 |
| shared prefix (이미지 1번 · 질문 64) | △ | 피처 행렬 1번 · 지표 여러 개. 구현 팁일 뿐 · 레포 ❌ |

## K-AI — 우리 파이프 대응

| jev-visual | Q.AI |
| --- | --- |
| 후보 로짓 점수 | infer = `choice` / `score` 고정 스키마 (`gem-typesafe`) · 자유 JSON ❌ |
| 점수는 보정 아님 | validation에 **ECE·calibration curve** 별도 |
| 5칸으로 공 위치 | 연속 타깃의 해상도가 안 나오면 **행동 구간**으로 이산화 (OK / 추가검사 / 정지) |
| 패들은 칸의 **중심**으로만 이동 | 알람은 구간 대표 조치 하나. 가짜 정밀 좌표 ❌ |
| 80회로 벽돌 9개 = 데모 | 우리 수치도 **홀드아웃 n**을 같이 적음 |

## 경계

- **Qwen·MLX·비전 데모** — Model·제출 zip **❌**
- `gem-typesafe-calibrated-decisions` · `gem-laya-horizontal-oss` · `gem-awesomejev-catalog` — Jev 축. 본 gem은 **거친 질문으로 행동을 연결**만
- `gem-actionpiece-rank-consistency` — 연속값의 **순위**. 여긴 연속값을 **구간 분류**로 바꾸는 쪽. 둘 다 쓰지 말고 타깃 해상도에 따라 하나
- PDF에 M4 37초·벽돌깨기 **인용 ❌**

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 9/27 KPI | 「예측 단위 = 현장이 하는 행동의 단위」. mm가 행동과 안 맞으면 구간 3칸 |
| Sprint 1 | 분류면 기존 PR-AUC. 연속인데 잔차가 크면 **구간화 후** 정확도·비용을 같이 표 |
| default | 레포 설치 ❌ |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-jev-visual-coarse-bins` |
| 분류 | **MIX 원석** (`idea`) |
| 상태 | **deferred** (pull↑ KPI 단위 · 레포 ❌) |
| 적용 축 | KPI·infer 스키마 — 비전 모델 **❌** |

## 관련

- `gem-typesafe-calibrated-decisions` · `gem-laya-horizontal-oss` · `gem-actionpiece-rank-consistency` · `gem-quant-ts-playbook`
- [`AGENT.MD`](../AGENT.MD) §3 — 외부 API·비전 모델 ❌
