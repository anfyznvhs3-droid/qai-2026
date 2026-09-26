# 桜井政成 · 論文の探し方・読み方 (立命館 2023 ゼミ) (2026-09-24)

## 출처

- **트리거 트윗:** [@developer_quant / 2102731803576664448](https://x.com/developer_quant/status/2102731803576664448) (2026-09-23) — 슬라이드 링크만
- **원 자료:** [Speaker Deck · 2023年度桜井政成ゼミ資料](https://speakerdeck.com/masanari/2023nian-du-ying-jing-zheng-cheng-semizi-liao-lun-wen-notan-sifang-du-mifang) · 桜井政成 · 立命館大学 政策科学部 · 2024-02 공개
- **대상:** 사회과학 학부·대학원. 표지에 **무단 복제·전재 금지**
- **Scout:** fxtwitter API + Speaker Deck transcript (2026-09-24)

## 슬라이드에서 가져올 것

| 단계 | 내용 |
| --- | --- |
| 신뢰 사다리 | 심사 있는 학회지 > 심사 있는 기요 > 심사 없는 기요 > 상업 잡지. 「심사 있음」이 안 적혀 있으면 없는 것 |
| 종류 | 학술 논문 vs 연구노트·DP·워킹페이퍼·보고서. 후자는 **다른 종류**라고 표지에 적힘 |
| 참고문헌 냄새 | 한 자리 수 · 저자 자신만 · 신문·신서만 · 고전만 · 번역서만 → 선행연구에 안 놓임 (「내가 생각한 최강」) |
| 읽기 순서 | 제목(캐치프레이즈일 수 있음) → **초록** → 그림. 초록에 구조가 보이면 좋은 논문 |
| 구조 | 배경 → 선행 → 방법 → 결과. RQ와 결론. IMRAD는 이과 틀이고 문과에 그대로는 안 맞음 |
| 채택 기준 | ① 제목·초록·그림으로 저장 ② 게재지·참고문헌으로 질 ③ RQ·방법·결과를 한 줄로 목록 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 9/25 전에 논문 3편으로 RQ를 만들게 하기 | ❌ | 출제안 ①의 문제는 **현장**. 슬라이드의 「3본」은 세미나 워크. 아이디어 양식과 충돌 |
| 슬라이드 본문 복제 | ❌ | 무단 복제 금지 · 사회과학 세미나 |
| Scholar·CiNii로 선행연구 사냥 | ❌ | 18일 · 공식 근거는 KAMP 공지·가이드북 · `gem-stanford-storm`도 검색 API ❌ |
| **패턴** — 트윗이 아니라 원문 | ✅ 이미 하는 중 | 등록 절차가 이 슬라이드 ①②와 같음. `gem-jurafsky`(헤지펀드 트윗 교정)·`gem-aers`(23000 과장) |
| **패턴** — PDF 참고문헌 사다리 | ✅ pull↑ | 보고서 인용의 우선순위: **KAMP 공식·가이드북 > 심사 논문 > arXiv 프리프린트 > 블로그·트윗**. 트윗은 발견 경로로만, 본문 인용 ❌ |
| **패턴** — 참고문헌 = 본문에서 말한 것만 | ✅ | `gem-jabref`와 같음. 안 읽은 gem을 참고문헌에 넣지 않음 |
| IMRAD를 KAMP 양식에 덮어쓰기 | ❌ | 제출은 hwpx 목차. 방법·결과·재현은 그 목차 안에 들어감 |

## K-AI — 우리 파이프 대응

| 桜井 | Q.AI |
| --- | --- |
| 제목·초록·그림으로 거르기 | `references/*.md`는 abstract·표 1개까지. 전문 통독 ❌ |
| 게재지 신뢰 | 공식 공지·가이드북이 학회지 자리. arXiv는 패턴만 |
| 참고문헌 냄새 | PDF에는 **우리 홀드아웃 수치 + 가이드북**. gem 브랜드 나열 ❌ |
| RQ → 방법 → 결과 한 줄 | 9/27 lock 문장 = 문제 1문장 · 2종 · KPI. 논문 RQ ❌ |
| 3본으로 관심 폭 | 아이디어 10개는 **현장 관점** (`gem-stanford-storm`). 논문 3편 ❌ |

## 경계

- **사회과학 논문 검색 파이프** — 이번 대회 ❌
- `gem-ars-academic-research-skills` · `gem-stanford-storm` · `gem-jabref`와 축이 겹침. 본 gem은 **인용 사다리**만
- QDくん은 무료 교재 큐레이터 — 슬라이드 저자는 **桜井政成**

## pull 조건

| 시기 | 용도 |
| --- | --- |
| PDF 참고문헌 작성 시 | 사다리 적용. 트윗·Medium·Speaker Deck은 각주 ❌ |
| 지금~9/27 | 논문 읽기 **추가 ❌**. 현장 아이디어가 우선 |
| 기본 | 슬라이드 복제 ❌ |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-sakurai-paper-reading` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull↑ PDF 인용 사다리) |
| 적용 축 | PDF 참고문헌 — 모델·아이디어 수집 **❌** |

## 관련

- `gem-jabref` · `gem-stanford-storm-knowledge-curation` · `gem-ars-academic-research-skills` · `gem-jurafsky-hmm-appendix`
- [`reports/submission-outline.md`](../reports/submission-outline.md)
