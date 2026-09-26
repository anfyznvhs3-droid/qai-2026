# DCScore · 복제한 행은 다양성이 아니다 (2026-09-25)

## 출처

- **트리거:** 사용자가 준 [arXiv:2502.08512](https://arxiv.org/abs/2502.08512). 트윗 없음
- **논문:** Yuchang Zhu, Huizhe Zhang, Bingzhe Wu, Jintang Li, Zibin Zheng, Peilin Zhao, Liang Chen, Yatao Bian. *Measuring Diversity in Synthetic Datasets*. 중산대·선전대·텐센트 AI Lab·NUS. 코드 bluewhalelab/dcscore — **설치 ❌**
- **Scout:** arXiv HTML 초록·서론 (2026-09-25)

키워드에 ICML이 적혀 있다. 게재 여부는 이 페이지에서 확인하지 않았다.

## 초록이 말하는 것

LLM이 만든 텍스트 분류·요약 데이터의 다양성을 DCScore로 잰다. 각 표본을 서로 구분하는 분류 문제로 두고, Leinster & Cobbold의 네 공리(유효 개수, 동일 표본, 대칭, 단조성)를 만족한다고 한다. 같은 표본은 다양성을 올리지 않는다. n-gram은 겉모양만 보고, 참조 분포는 기준 수집이 편향되며, 임베딩 후 고유값 요약은 비싸다는 것이 서론의 비교다. 합성 데이터에서 여러 대리 정답과 상관이 더 높고 비용은 낮다고 한다. 수치는 여기에 옮기지 않는다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| DCScore·LLM 합성 행 | ❌ | 텍스트 생성. 제출 데이터는 KAMP 원본 |
| 같은 로트를 복제하거나 문장만 바꿔 행 수를 늘리기 | ❌ | 동일 표본 공리. 구분되지 않는 행은 새 관측이 아님. 행을 늘려도 고차원이 안 풀리는 일은 `gem-qiita-curse` |
| **패턴** — 증강 행은 원본과 다른 칸이 있을 때만 | ✅ 계보 | 학습 행 수에는 서로 다른 시간·설비의 측정만 센다 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 코드·합성 **pull ❌** |
| `data-card` | 복제·보간으로 만든 행이 있으면 원본 행 수와 따로 적음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-dcscore-copy-is-not-diversity` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | 계보 — 복제 ≠ 다양 |

## 관련

- `gem-qiita-curse-rows-do-not-restore-neighbors` · `gem-qualembed-text-is-not-measure` · `gem-yokota-tensor-completion-not-observed`
