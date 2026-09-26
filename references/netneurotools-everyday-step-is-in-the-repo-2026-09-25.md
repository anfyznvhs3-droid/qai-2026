# netneurotools · 매일의 확인은 저장소에 둔다 (2026-09-25)

## 출처

- **트리거 트윗:** [@misicbata / 2103112917080064200](https://x.com/misicbata/status/2103112917080064200) (2026-09-24). 저자 본인
- **논문:** Zhen-Qi Liu, Vincent Bazinet 외, Bratislav Misic. [Nature Protocols](https://doi.org/10.1038/s41596-026-01446-7) (2026-09-09) *netneurotools: a trainee-oriented approach to network neuroscience*. Perspective
- **Scout:** fxtwitter API + Nature 초록 (2026-09-25). 구독 본문·툴킷 **받지 않음**

## 트윗 vs 초록

| 트윗 | 초록 |
| --- | --- |
| 제목과 DOI, Nature Protocols | 일치. 2026-09-09 Perspective |
| 연구실 내부 도구로 뇌 영상의 일상 작업을 한다 | 전처리·형식 변환·데이터 준비·그림은 전문 패키지가 따로 풀어서, 신규 연구원은 고립된 우회를 만든다. netneurotools는 그 연구실 연구원들이 유지한 파이썬 도구. 큰 파이프에 없는, 자주 쓰는 함수 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| netneurotools·뇌 연결망 지표 | ❌ | 영상 신경과학. 제출은 표와 GBDT |
| 조인·분할·naive 열을 한 사람 노트북에만 | ❌ | 내일 다른 두 사람이 같은 확인을 돌릴 수 있어야 함 |
| **패턴** — 매일의 확인은 짧은 스크립트 | ✅ 저장소 | 큰 패키지를 새로 들이지 않음. 분할, 조인 키, naive 열은 저장소 파일로 남김 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 패키지 **pull ❌** |
| 밋업 이후 | 한 명이 돌린 확인은 다른 명이 같은 커맨드로 재실행할 수 있게 경로를 적음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-netneurotools-everyday-step-is-in-the-repo` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | 저장소 — 일상 확인 |

## 관련

- `gem-block-buzz-agent-workspace` · `gem-harness-zero-keep-the-check` · `gem-open-supermarkets-capability-manifest`
