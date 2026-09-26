# Jev 청사진 · Choice는 승자 하나다 (2026-09-25)

## 출처

- **트리거 트윗:** [@vartekxx / 2101771888888533468](https://x.com/vartekxx/status/2101771888888533468) (2026-09-20). 12쪽 합성·10단계라고 하나 **링크 없음**
- **공식 글:** [Introducing System One Models and Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) (2026-09-15)
- **Scout:** fxtwitter API + 공식 글 (2026-09-25). API **호출 ❌**

Noul·Choice·Score와 로컬 보정은 `gem-typesafe-calibrated-decisions`가 담당한다. 완료 로그가 실행은 아닌 일은 `gem-layerx`다.

## 트윗 vs 공식 글

| 트윗 | 공식 글 |
| --- | --- |
| 결정 층과 실행 층을 나눈다. LLM은 쓰고 Jev가 결정하고 코드가 실행 | 글은 문자열 생성 대신 타입이 있는 결정. 세 층 분업 문장은 트윗 |
| Choice는 하나, Score는 루브릭, Noul은 yes 확률. 상태는 프롬프트가 아니라 증거 | 출력은 미리 정한 구조와 확률. 「can't hallucinate」는 타입 오류가 없다는 뜻 |
| GDPR 문항 13개, 배치 0.27초·$0.0005, 순차 2.71초·$0.006, 10배·12배 | **이 숫자 없음.** 글의 속도는 70–500ms, 자사 워크플로 벤치 193.6배·444.6배. 독립 배수는 기존 gem |
| 다섯 금지: 프롬프트를 상태로, Choice를 다중 라벨로, 증명 없는 DONE, 낡은 행동 메뉴, 확신을 참으로 | 글에 이 목록 없음 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| Jev API·12쪽 청사진 | ❌ | 유료 결정 모델. 제출은 로컬 GBDT |
| 트윗의 0.27초·$0.0005를 비용 근거로 | ❌ | 공식 글에 없음 |
| Choice 한 칸에 불량 유형을 여러 개 | ❌ | 트윗의 Choice는 승자 하나. 여러 유형이면 칸을 나눔 |
| **패턴** — 잠그기 전의 행동 목록을 쓰지 않음 | ✅ KPI | 9/27에 잠근 손실 문장과 맞는 선택지만 남김. 문턱 자체는 `gem-jev-judge-threshold` |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | API·배치 요금 **pull ❌** |
| infer 스키마 | 범주가 하나면 Choice 하나. 잠금 전의 메뉴는 폐기 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-jev-blueprint-choice-is-one-winner` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | infer — Choice는 하나 |

## 관련

- `gem-typesafe-calibrated-decisions` · `gem-jev-visual-coarse-bins` · `gem-layerx-qa-add-vs-drop`
