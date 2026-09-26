# VaultysClaw · 워크플로 편집기는 빠졌다 (2026-09-26)

## 출처

- **트윗:** [DanKornas](https://x.com/DanKornas/status/2103463435203735886) · 2026-09-25 · 그림은 제품 화면이 들어간 문서
- **저장소:** [vaultys/VaultysClaw](https://github.com/vaultys/VaultysClaw) · README는 2026-09-26에 연 본문
- **Scout:** fxtwitter API + README (2026-09-26). 클론 **하지 않음**

자리의 사람 잠금은 `RULE.md`다. 이 건은 트윗의 끌어다 놓기 워크플로가 지금 저장소의 지원 범위가 아니라는 쪽이다.

## 트윗 vs README

| 트윗 | README |
| --- | --- |
| 암호학적 신원, 기본 거절, 사람 승인, 감사 기록 | 사람·에이전트·센서·장치를 Actor로 두고, 서명된 권한 증명서로 범위를 주고, 만료·취소·킬 스위치가 있다. 콘솔에 감사 이력이 있다. MIT는 맞다 |
| 순차·병렬·반복·승인 단계를 끌어다 놓는다 | 지금 제품은 신원과 신뢰다. 예전 에이전트 컨트롤러, 워크플로 편집기, 묶여 있던 실행 도구는 이 저장소의 지원 구조에서 빠졌다고 적는다 |
| 키 대신 권한 | 권한 결정은 SDK를 쓰는 쪽이나 가로채는 지점이 집행한다. 에이전트를 등록하는 것만으로 그 기계의 프로세스가 막히지는 않는다고 적한다 |
| 그림의 「수백만 에이전트」, 대시보드의 워크플로·스킬·지식 | 그 문장과 그 메뉴는 지금 README 본문에 없다. 로컬 기동은 Docker Compose와 OpenSSL이고, 콘솔은 localhost:3010이다 |

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| VaultysClaw를 자리나 제출 경로에 두기 | ❌ | 제어면·Postgres·Redis·SDK다. 자리는 보드이고 제출은 GBDT |
| 끌어다 놓기 오케스트레이션을 진행 카드로 쓰기 | ❌ | 그 편집기는 저장소가 지원에서 뺐다. 진행은 자리마다 덮어쓰는 다섯 줄이다 |
| 위험한 쓰기는 사람 승인 전에 하지 않기 | 이미 있음 | `RULE.md`의 잠금·원자료·다른 사람 행 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| 에이전트 | 저장소를 받지 않음 |
| 경진 제출 | 제품 문장은 PDF에 인용하지 않음 · 코드 **반입 ❌** |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-vaultysclaw-editor-is-retired` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | Report — 워크플로 편집기를 진행 공유로 적지 않음 |

## 관련

- `gem-agor-live-session-is-not-the-lock` · `gem-seekdb-agent-state` · `gem-harness-zero-keep-the-check`
