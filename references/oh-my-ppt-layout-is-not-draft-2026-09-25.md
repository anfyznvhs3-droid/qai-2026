# Oh My PPT · 생성 개요는 제출 문장이 아님 (2026-09-25)

## 출처

- **트리거 트윗:** [@GitHub_Daily / 2103024170900877398](https://x.com/GitHub_Daily/status/2103024170900877398) (2026-09-24) — `gem-jabref`·`gem-jev-visual-coarse-bins`와 같은 큐레이터
- **1차:** [github.com/arcsin1/oh-my-ppt](https://github.com/arcsin1/oh-my-ppt) README (조회 2026-09-25) · Apache-2.0 · Electron
- **Scout:** fxtwitter API + README. 앱·Ollama **설치 ❌**

## 트윗 vs README

| 트윗 | README |
| --- | --- |
| 내용은 정해졌는데 시간이 정렬에 감 | 「为什么做这个」의 동기와 같음 |
| 한 줄 설명이면 AI가 개요·색·레이아웃·그림을 만듦 | 주제 창작은 그렇게 동작. HTML 슬라이드 |
| 「제목 색」「차트 추가」로 한 페이지만 수정 · 드래그 | 대화 수정 · 요소 드래그·크기 조절. 맞음 |
| 옛 PPTX 가져오기 · PowerPoint·Keynote로 내보낼 수 있는 파일 | 있음. README는 일반 파일 **약 100%**라고 쓰고, 복잡한 도표·표·애니메이션은 **아직 최적화 중** |
| 스타일 90+ · 넘김 16+ | 섹션 제목과 같음 |
| txt·md·docx → 슬라이드 · 연설문 | txt·md·**csv**·docx. 전체 또는 현재 페이지 연설문 |
| 세션·소재·결과는 내 PC · 계정 없음 · 모델은 자기 것 · Ollama | Oh My PPT 계정·클라우드 없음. Ollama는 OpenAI 호환 `127.0.0.1:11434`, 권장 **14B+**. 클라우드 모델·생图 Provider를 고르면 **그 요청은 밖으로 나감** |

트윗이 빠뜨린 문장: 로컬 저장과 「프롬프트가 나가지 않음」은 다르다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| 앱·스타일 스킬·Ollama·생图·연설문 생성 | ❌ | 제출은 블라인드 **PDF**와 zip. 슬라이드 생성기가 개요를 쓰면 `gem-dualgraph`의 빈 절 채우기다 |
| 현장 메모·아이디어 폼을 이 앱의 클라우드 모델에 | ❌ | `gem-qualembed`와 같은 선. 계정 없음 ≠ 전송 없음 |
| **패턴** — 말할 내용은 도구 앞에서 잠겨 있다 | ✅ | 트윗 첫 문장이 맞을 때만 레이아웃이 남는다. 우리 문장은 `experiment-log` 행과 `submission-outline`에 있는 것만 |
| 숫자 하나가 바뀌면 발표 원고 전체를 다시 생성 | ❌ | 한 페이지 수정이 README의 기능인 이유. 로그 한 행이 바뀌면 그 절만 고친다 |

`gem-nature-abstract-playbook`은 초록 6문장 역할. 본 건은 **생성기가 쓴 개요·차트·연설문을 제출 문장으로 올리지 않는다**만 담당한다.

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | **pull ❌** |
| PDF 초안 | 절의 문장은 로그 행에서 온다. 앱이 만든 HTML·PPTX는 초안이 아니다 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-oh-my-ppt-layout-is-not-draft` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌ · 형식 경계) |
| 적용 축 | 보고서 — 슬라이드 생성 **❌** |

## 관련

- `gem-dualgraph-outline-vs-knowledge` · `gem-nature-abstract-playbook` · `gem-qualembed-text-is-not-measure`
