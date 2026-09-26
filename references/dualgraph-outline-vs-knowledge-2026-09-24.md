# DualGraph · 목차와 사실을 한 문서로 잠그지 않기 (2026-09-24)

## 출처

- **트리거 트윗:** [@marfinxx / 2102729802708918385](https://x.com/marfinxx/status/2102729802708918385) (2026-09-23)
- **트윗이 인용한 글:** 같은 계정의 X Article [Master Agent Architecture](https://x.com/marfinxx/status/2081687570488954915) (2026-07-27) · 텔레그램 링크. **Microsoft 논문이 아님**
- **1차:** [arXiv:2602.13830](https://arxiv.org/abs/2602.13830) Shi, Ma, Yao, Yang, Zhang 외 · Microsoft · 「A Tale of Two Graphs」 · [코드](https://github.com/microsoft/DKI_LLM/blob/main/DualGraph/README.md)
- **Scout:** fxtwitter API + arXiv HTML v3 Table 1 (2026-09-24)

## 트윗 vs 논문

| 트윗 | 논문 Table 1 |
| --- | --- |
| Claude Opus 5.5 · GPT-6 Sol이 천장을 깼다 | 백본은 **gpt-4.1** 과 **gpt-5-chat**. Opus 5.5 · GPT-6 Sol · GPT-6 Luna **없음** |
| RACE **53.08** | DualGraph + **GPT-5** = **53.08**. Gemini-2.5-Pro Deep Research 52.54. 숫자 자체는 맞음 |
| 사실 근거 **98.6%** · 탐색 비용 −68.2% · 캐시 −40% · $0.10/백만 토큰 | 논문에 **없음**. 98.6%는 인용 글의 「테스트 통과율」표. DualGraph(GPT-5) 인용 정확도(C.acc.)는 **57.55**, 유효 인용 수는 79.65 |
| 파이프: Luna 추출 → Opus 합성 | 검색은 Bing API, 페이지는 Crawl4AI, 최대 5라운드 |

인용 정확도가 93.80인 Claude-3.5 Search는 유효 인용이 태스크당 **8.96**이다. 높은 정확도와 충분한 근거는 다른 칸이다.

DeepResearch Bench 평가 모델은 이후 GPT-5.5로 바뀌었다. 53.08은 **그 논문의 심판**에서 나온 점수이고, 지금 리더보드 숫자와 나란히 두지 않는다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| DualGraph · Bing · Crawl4AI · 딥리서치 에이전트 | ❌ | LLM·검색 API. 제출은 GBDT. Library Drift |
| RACE 53.08 · 98.6% · GPT-6를 PDF에 | ❌ | 앞의 둘은 논문 밖이거나 심판이 바뀐 점수 |
| **패턴** — 목차(OG)와 확인된 사실(KG)을 분리 | ✅ | 개요만 먼저 잠그면 빈 절을 문장으로 채운다. 논문이 STORM류 outline-centric의 약점으로 적은 바로 그 지점 |
| 빈 절을 남기는 규칙 | ✅ Sprint 1 PDF | 절을 쓰려면 `experiment-log`에 그 숫자의 행이 있어야 한다. 없으면 절을 비운다 |

`gem-stanford-storm`은 아이디어를 모을 때 **관점을 바꾸는 질문**이다. 본 건은 보고서를 쓸 때 **목차를 사실로 착각하지 않는 것**이다. 둘을 한 문장으로 합치지 않는다.

## 경계

- Leiden, SBM, 구조적 공백(Burt) 구현 **❌**
- `reports/submission-outline.md`의 절 제목은 자리일 뿐, 근거가 아니다
- `gem-sakurai` 인용 사다리와 별개. 여기의 인용은 「로그에 행이 있는가」

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 코드·벤치 **pull ❌** |
| PDF 초안 | 각 절 첫 줄에 로그 행 번호. 없으면 그 절은 공란 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-dualgraph-outline-vs-knowledge` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (패턴만 · 트윗 교정) |
| 적용 축 | 보고서 — 목차 ≠ 실험 로그 |

## 관련

- `gem-stanford-storm-knowledge-curation` · `gem-sakurai-paper-reading` · `gem-sato-randomness-research`
- [`reports/submission-outline.md`](../reports/submission-outline.md)
