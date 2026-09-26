# noise() · 문서의 이름과 격자에 올린 값이 다르다 (2026-09-25)

## 출처

- **트리거 트윗:** [@ngsm / 2103330222359855409](https://x.com/ngsm/status/2103330222359855409) (2026-09-25)
- **글:** Toshiyuki Nagashima. [noise() とは何か？](https://note.com/ngsm/n/n44c3677e0f91) (note, 2026-09-25 12:45)
- **소스:** [p5.js `src/math/noise.js`](https://github.com/processing/p5.js/blob/main/src/math/noise.js) (2026-09-25 확인)
- **Scout:** fxtwitter API + note 본문 + 소스 (2026-09-25). 생성 노이즈로 행을 만들지 않음

## 트윗·카드 vs 글·소스

| 트윗 | 글과 소스 |
| --- | --- |
| noise()가 난수와 다르고, 쓰고 있는 노이즈의 정체를 묻는다 | 글: 「난수를 매끄럽게 한 것」은 원전의 Perlin(기울기 노이즈)에는 맞지 않음. 인접 입력은 인접 출력을 내도록 **설계**됨 |
| (p5 미언급, 해시태그만) | 글: p5 문서는 Perlin이라 하고, 소스는 격자에 `Math.random()` 스칼라를 두고 `0.5*(1-cos(πt))`로 섞음. 기울기·내적 없음. 소스 주석은 improved noise를 나중에 고려한다고 적음. JSDoc은 반환을 0–1 Perlin이라 하고, `noiseDetail`은 falloff가 0.5보다 크면 1을 넘을 수 있다고 함 |

이슈 #7430이 2026년에도 열려 있다는 말은 글의 확인이다. 메인테이너 최종 견해는 글도 미확인으로 둔다.

## Q.AI 판단

| 옵션 | 판정 | 이유 |
| --- | --- | --- |
| p5 noise·Perlin으로 결측·이상을 메우기 | ❌ | 이웃이 가까운 것은 측정이 아니라 함수 설계. 빈 시간은 `gem-pytimetk`대로 NaN |
| 열 이름·주석의 「노이즈」「무작위」를 구현으로 | ❌ | 문서와 소스가 다르면 소스. 분할이 독립인지는 코드가 이웃 행을 묶는지로 봄 |
| **패턴** — 붙은 값은 설계된 상관 | ✅ 계보 | 생성·보간으로 이웃 시각이 비슷해진 열은 원열과 Ablation에서 분리 |

## pull 조건

| 시기 | 용도 |
| --- | --- |
| default | 노이즈 함수 **pull ❌** |
| EDA | 스무딩·보간 열은 원 센서와 다른 칸. 이름만으로 흰 잡음이라 적지 않음 |

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| 레지스트리 id | `gem-p5-noise-label-is-not-the-lattice` |
| 분류 | **MIX 원석** (`playbook`) |
| 상태 | **deferred** (pull ❌) |
| 적용 축 | 계보 — 이름 ≠ 소스 |

## 관련

- `gem-pytimetk-pad-is-not-observed` · `gem-yokota-tensor-completion-not-observed` · `gem-sato`
