# LayerX QA · 완료 로그는 실시가 아니고, 빼는 결정은 사람 (2026-09-25)

## 출처

- **트리거 트윗:** [@MacopeninSUTABA / 2103319328774815813](https://x.com/MacopeninSUTABA/status/2103319328774815813) (2026-09-25) — `gem-iwashi-meeting-facilitation`와 같은 큐레이터
- **1차:** 中野直樹(LayerX 바쿠라쿠 QA부장), [AI에 맡긴 품질은 누가 판단하는가](https://speakerdeck.com/nakanao/ai-ni-makaseta-hinshitsu-ha-dare-ga-mitateru-no-ka-ai-jidai-no-tesuto-manejimento) · JaSST'26 Niigata · Speaker Deck 2026-09-19 · © LayerX
- **Scout:** fxtwitter API + 트랜스크립트 (2026-09-25). 슬라이드 **복제 ❌** · QA 에이전트 **설치 ❌**

## 트윗 vs 슬라이드

| 트윗 | 슬라이드 |
| --- | --- |
| 6공정에서 사람이 정하고, 넘기고, 확인한다 | 표지·p.14와 같음. 계획 → 분석·설계 → 실행 → 리포팅 → 산출물 리뷰 → 정밀도 개선 |
| LayerX QA부장 | 中野直樹. 바쿠라쿠 사업부 QA부장. JSTQB Foundation 제4판 공저 |

p.7: AI는 작업을 할 수 있고, 품질 책임은 지지 못한다. p.27: 한 공정 안에서도 「무엇을 어디까지 확인할지」는 사람과 위험 기준, 「정한 것을 케이스로 적기」는 명세가 있으면 넘길 수 있다. p.30: 계획·케이스를 만드는 쪽과, 실행해도 되는지·애매한 판정을 맡는 쪽이 갈린다.

p.34: 밤샘 회귀에서 브라우저가 안 붙어 전 케이스가 BLOCK. 다음 실행이 그 결과를 「실시 완료」로 읽고 「테스트 완료」라고 보고했다. 사람이 상세를 보기 전에는 몰랐다.

p.42: 케이스를 **늘리는** 실수는 나중에 사람이 빼면 된다. **줄이는** 실수는 검출이 조용히 죽는다. 줄이기·위험 점수를 내리기·레벨을 내리기는 사람이 근거를 남기고 정한다.

p.8의 89%·15%·60%·40%는 World Quality Report·Gartner 인용. 우리 수치가 아니다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 테스트 에이전트·MCP·이 슬라이드를 PDF에 | ❌ | 제출은 GBDT. LayerX 저작 |
| 공수가 공짜가 되면 범위를 넓힌다 (p.16) | ❌ | 데이터는 9/27에 잠근 두 개. `gem-suzuki` |
| **패턴** — 완료 로그와 실시를 다른 칸에 | ✅ | BLOCK·조인 실패·학습 중단을 `experiment-log`에서 「완료」로 올리지 않는다. `gem-open-supermarkets`의 조인 실패 ≠ 0건과 같은 축. 여기는 **다음 단계가 그 실패를 실시로 읽는 것** |
| **패턴** — 열을 빼는 결정은 사람이 이유를 남긴다 | ✅ | 비교 열을 더하는 안은 파이프가 내고 사람이 자른다. 검사 열을 빼는 것은 사람이 `decision-log`에 근거를 쓴다. 채택 조건 자체는 `gem-rrsi`·`gem-harness-zero` |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 강연 자료 **pull ❌** |
| 실험 로그 | 각 행은 완료 / 실패 / 건너뜀. 실패 이유를 다음 행이 성공으로 덮지 않음 |
| Ablation에서 열을 뺄 때 | 사람 이름과 이유. 점수만으로 검사 열을 지우지 않음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-layerx-qa-add-vs-drop` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (패턴만) |
| 적용 축 | 검증 — 완료 ≠ 실시 · 삭제는 사람 |

## 관련

- `gem-open-supermarkets-capability-manifest` · `gem-harness-zero-keep-the-check` · `gem-sato-randomness-research` · `gem-iwashi-meeting-facilitation`
