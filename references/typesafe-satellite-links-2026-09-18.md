# TypeSafe 주변 링크 묶음 (2026-09-18)

Jev 본체 패턴은 [`typesafe-calibrated-decisions-2026-09-17.md`](typesafe-calibrated-decisions-2026-09-17.md) (`gem-typesafe-calibrated-decisions`). **신규 Jev 링크 발굴:** [`awesomejev-catalog-2026-09-19.md`](awesomejev-catalog-2026-09-19.md) (`gem-awesomejev-catalog`) — X-only 데모는 여기 **없을 수 있음**. 아래는 **기각·보관**용 위성 링크.

## 출처

| 링크 | 내용 |
| --- | --- |
| [typesafe-ai/skills](https://docs.typesafe.ai/agent-skill) | Claude Code·Codex용 Jev API **스킬 패키지** — 코드 생성 가이드 |
| [@mahler83 / 2100405595274887203](https://x.com/mahler83/status/2100405595274887203) | Jev 한국어 Belebele·PAWS-X·KorMedMCQA n=100 벤치 |
| [@faadilhshaik / 2100086301894881578](https://x.com/faadilhshaik/status/2100086301894881578) | Jev로 Super Mario Bros — latency·Choice 데모 |
| [@mattdesl / 2100899669802963060](https://x.com/mattdesl/status/2100899669802963060) (2026-09-18) | **「does Jev understand colour?」** — 65s 영상 · 크리에이티브 코더 관점 UX/UI · 저렴·고속·병렬 확률 UI |
| [@roiyaruRIZ / 2101130711067431018](https://x.com/roiyaruRIZ/status/2101130711067431018) (2026-09-19) | **バイタル急変シミュレーター** — Jev vs 기계적 모니터 알람 · 2분할 영상(정상/서맥) |
| [@rinte0321 / 2100840961870082515](https://x.com/rinte0321/status/2100840961870082515) (2026-09-18) | **Jev=분류기 vs 룰베이스** · 텍스트 UX·폼 vs 속도 · Physical AI·영상 입력 |
| [@maubaron / 2100738237237002706](https://x.com/maubaron/status/2100738237237002706) (2026-09-18) | **Smash Bros** — Jev가 4캐릭 **동시 Choice** · 자기 대전 · **초저지연** (107s 영상) |
| [@yyyole / 2100879695017632025](https://x.com/yyyole/status/2100879695017632025) (2026-09-18) | **竞品广告批量** — [@TheMattBerman](https://x.com/TheMattBerman/status/2100654891756589230) · 37品牌·724广告 · **6维 Choice** |

## MIX 잠재 (deferred)

| 위성 | 건질 패턴 | 우리 적용 |
| --- | --- | --- |
| skills | API 스키마를 에이전트 **SKILL.md**로 고정 | `infer` 스키마 문서화 (제품 API ❌) |
| kor bench | 소표본 + Wilson 구간 | PDF 검증표에 **n·신뢰구간** 필수 |
| mario | state+typed question 루프 | 실시간 분류기 은유 — **게임 데모 ❌** |
| **maubaron smash** | **4스트림·초저지연 Choice** — state→best move (게임) | PDF §8 **추론 지연·엣지** 1문장 — **Smash·API ❌** |
| **berman ad-batch** | **배치 + 고정 6维 스키마** (Hook·Format·Offer·CTA·受众·LP) | `infer` **다필드 일괄** · `gem-opennews-ops-layer` 카탈로그 — **광고·Jev ❌** |

**6维 → 제조 §6 오류 분석 (은유):** 설비·LOT·공정조건·센서·라벨·조치 — **6축 체크리스트** (광고 차원 그대로 ❌)

**berman ad-batch:** 竞品分析·StealAds 마케팅 — **비용·40초 수치 인용 ❌** · KAMP 데이터 **외부 API ❌**
| **mattdesl colour** | **Choice + 병렬 확률**을 실시간 UI에 매핑 — 미적·주관적 판단도 typed criteria로 | PDF Fig **reliability·임계 UI** 은유 — **컬러·UX 제품 ❌** |
| **roiyaru vital** | **보정 급변 확률** vs **고정 임계 알람** — 문맥(서맥=정상 baseline) 구분 | **PdM·§7 최강 analog** — Jev API ❌ · `gem-quant-ts` 비용표 |
| **rinte product** | 「**룰베이스로 충분하지?**」 vs typed classifier · **텍스트 폼 UX** sweet spot | 제조=**센서·표** → Jev 제품 fit **낮음** · PDF §7 **ML 정당화** |

**rinte 논점 (제조):**

| Jev 제품 | K-AI |
| --- | --- |
| 룰베이스로 대체? | **고정 임계=룰** · 희규 불량·교호=**GBDT+보정** (PDF §4 근거) |
| 텍스트 입력 UX | **배치 CSV infer** — 폼·채팅 UX 무관 |
| 영상·Physical AI | 9/21 **비전 과제**일 때만 exp · `gem-grf-recon` 등 |

**vital 데모 (제조 대응):**

| 데모 장면 | ICU | K-AI 제조 |
| --- | --- | --- |
| 정상 + **体動** 오탐 | 모니터 알람 | **공정 변동·노이즈** → 고정 임계 false alarm |
| **서맥** 환자 알람 상시 | baseline 다른데 전역 규칙 | **구형 설비·느린 라인** — LOT/설비별 **보정·τ** |
| Jev 급변 확률 | calibrated acute change | **CalibratedClassifierCV** + τ_auto / τ_review |

**colour 데모 해석:** Matt DesLauriers(제너레이티브 컬러·WebGL) — Jev가 **색 이름·팔레트·조화** 같은 **의미적 버킷** Choice는 잘 하고, `#FF4B0A` hex 거리 같은 **수치 연산은 코드**가 맡아야 함 ([flaviocopes Jev deep dive](https://flaviocopes.com/jev/)). 데모가 “미친” 이유 = LLM 토큰 생성 대신 **전 질문 확률이 한 번에** 뜨는 UX.

## 경계

- Jev API·스킬·Cloud **투입 ❌** (`AGENT.MD` §3)
- 바이럴 수치(193×·22M tok·**$0.09·40초** 등) **인용 ❌**

## 이 프로젝트에서의 위치

| 항목 | 값 |
| --- | --- |
| id | `gem-typesafe-satellite` |
| 유형 | `artifact` |
| 상태 | **deferred** |
| 적용 축 | Model(보정 표기) · PDF(구간) — 패턴만 |
