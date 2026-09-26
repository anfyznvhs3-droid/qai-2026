# 임계 국면 · 사건 날짜는 원인 열이 아니다 (2026-09-25)

## 출처

- **트리거 트윗:** [@GerardoMunck / 2103173804197572797](https://x.com/GerardoMunck/status/2103173804197572797) (2026-09-24, 영어)
- **같은 링크의 스페인어:** [@GerardoMunck / 2103175300997956066](https://x.com/GerardoMunck/status/2103175300997956066) (6분 뒤). 제목만 *Coyunturas críticas y efectos persistentes*. PDF 두 개와 이미지가 같음. 별도 gem **없음**
- **왼쪽:** Ruth Berins Collier, David Collier. *Shaping the Political Arena* (Princeton, 1991) 1장 *Framework: Critical Junctures and Historical Legacies*. [버클리 PDF](https://polisci.berkeley.edu/sites/default/files/people/u3827/Collier-Collier%20SPA%20Chap%201.pdf)는 스캔 7쪽, 텍스트 추출 0. 저장소에 두지 않음
- **오른쪽:** David Waldner. *Qualitative Causal Inference and Critical Junctures: The Problem of Backdoor Paths*. Collier·Munck 편, Rowman & Littlefield, 2022. Academia 페이지는 봇 차단. 제목은 트윗 이미지의 첫 쪽과 같음
- **Scout:** fxtwitter API + PDF 쪽수 + 트윗 이미지 (2026-09-25). 본문 전재 **❌**

## 트윗 vs 첫 쪽

| 트윗 | 첫 쪽 |
| --- | --- |
| 두 장이 임계 국면의 인과 주장을 생각하고 평가하게 한다 | 큐레이터의 말. 왼쪽은 1991년 1장 제목, 오른쪽은 2022년 Waldner 장 제목과 출판 정보 |
| Collier and Collier / davidwaldnerdc | 저자 표기 일치. Waldner 장은 Academia가 아니라 위 편저의 장 |

1장 서두는 갈림이 이후 경로를 가른다는 정치사 서술이다. 뒷 문장은 이 노트에 옮기지 않는다. Waldner 제목의 backdoor는, 사건 이전에 이미 갈라진 요인이 이후 차이로 이어지는 길을 닫지 않으면 그 사건을 원인이라고 쓸 수 없다는 문제 이름이다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 장 본문·정치학 사례 | ❌ | 제조 제출과 무관. 스캔 전재 ❌ |
| 변경 일자를 그 날짜 이후 영원히 1인 원인 열로 | ❌ | 날짜 코드는 원인이 아님. 이전에 이미 다르던 설비·품목을 닫지 않으면 그 열이 사건을 대신함 |
| **패턴** — 사건 이후의 지속은 나중 구간에서 다시 잰다 | ✅ 문장 | 레시피가 바뀐 뒤의 차이는 그 이후 홀드아웃에 남아 있을 때만 적음. 그룹 더미 자체는 `gem-blanchard` |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 장·도표 **pull ❌** |
| decision-log | 공정 변경을 넣을 때는 변경 전과 변경 후를 나누고, 전 구간의 설비·품목 차이를 같이 적음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-critical-juncture-date-is-not-a-cause` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | 피처 — 사건 날짜 ≠ 원인 |

## 관련

- `gem-blanchard-ratings-debt-deficits` · `gem-yokota-tensor-completion-not-observed` · `gem-sato`
