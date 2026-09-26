# ScienceBuddy · 찍어 둔 쪽은 그 문장이 아니다 (2026-09-25)

## 출처

- **트리거 트윗:** [@rwayne / 2103062324739543398](https://x.com/rwayne/status/2103062324739543398) (2026-09-24). 인용은 [@jinchenma_ai / 2102938407873953894](https://x.com/jinchenma_ai/status/2102938407873953894)
- **제품:** [science-buddy.io](https://science-buddy.io/) — 본문은 제목만 열림
- **논문:** [arXiv:2609.17523](https://arxiv.org/abs/2609.17523) Xue·Zhong·Nan 외, PhAI Labs 기술 보고. 대응 저자 Yin·Wu·Yang
- **ScienceIDE:** [arXiv:2609.19134](https://arxiv.org/abs/2609.19134) Geng·Huang·Li 외. 스폰서 PhAI-Labs. 같은 대응 저자. 코드는 설치하지 않음
- **Scout:** fxtwitter API + 인용 트윗의 두 화면 + 두 초록 (2026-09-25). 수면 용량·서열·도구 목록 **전재 ❌**

인용 순서는 `gem-sakurai-paper-reading`, 로그 칸과 문장의 불일치는 `gem-conflict-circuit-fluency-is-not-evidence`가 담당한다. 이 건은 도구가 찍어 둔 쪽 번호이다.

## 트윗 vs 원문

| 트윗 | 원문 |
| --- | --- |
| 박사 과정이 필요 없고, 어떤 문제든 논문을 찾아 해결책을 분석시키면 된다 | rwayne의 인용 문구. 논문 초록에 **없음** |
| 무료, 브라우저에서 연다. 원문 위치로 거슬러 올라간다. 다만 쪽 번호 일부가 틀렸다 | 제품 페이지 본문은 확인하지 못함. 화면에는 「PDF 定位」 열이 있다. 틀린 쪽은 **작성자 본인의 말** |
| 세 편의 수면 자료. 늦게 자도 총수면과 규칙이면 불건강이 아니다 | 화면의 파일명은 AASM 2015, Sletten 2018, Facer-Childs 2019. 그 건강 문장은 **도구 표**이지, 여기서 연 원문이 아님 |
| PhAI Labs가 ScienceIDE를 열었고, 코드를 고친 뒤 계산이 맞는지 본다 | ScienceIDE 초록은 과학 코드를 검증 가능한 환경으로 만들고, 수리·구현 궤적으로 PhAI-IDE를 학습한다고 적음. 수면 표와는 **다른 논문** |

논문은 연구자 요청·피드백·실행 흔적으로 과제와 루브릭을 만들고, 하네스와 모델을 번갈아 고친다고 한다. 과거 답이나 연구자 승인을 그대로 과학적 참값으로 두지 않는다고 적는다. 화면의 수면 결론을 그 참값으로 받지 않는다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| ScienceBuddy·ScienceIDE로 문헌을 읽고 PDF에 넣기 | ❌ | 제출에 LLM·외부 작업대 없음. 생물·수면 절차도 가져오지 않음 |
| 도구가 찍은 쪽 번호를 확인 없이 각주에 쓰기 | ❌ | 같은 글이 추적을 팔면서 쪽 일부가 틀렸다고 함 |
| **패턴** — 쪽 표시는 연 뒤에만 행이 된다 | ✅ PDF | 그 쪽을 열어 문장이 있을 때만 `experiment-log`에 둔다. 틀리면 그 행은 넣지 않음 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 제품·학습 코드·수면 표 **pull ❌** |
| 참고 문장 | 가이드북·우리 표·연 논문의 그 쪽. 도구가 만든 위치 열은 초안 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-sciencebuddy-page-pointer-is-not-the-page` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | PDF — 인용 위치 |

## 관련

- `gem-sakurai-paper-reading` · `gem-conflict-circuit-fluency-is-not-evidence` · `gem-jabref` · `gem-fast-journal-weeks-are-not-a-citation`
