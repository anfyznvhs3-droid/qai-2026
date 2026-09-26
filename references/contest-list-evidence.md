# KAMP 대회 목록 근거

- 원문: <https://www.kamp-ai.kr/contestList>
- 확인일: 2026-09-03 (Asia/Seoul)
- Scout 문서 ID: `doc-f023aa2ad32b7111`
- 백엔드/전략/lane: `crawl4ai` / `stealth` / `forced`
- 실행 ID: `od-20260903T122456Z-b5c7626f75`
- 증거 디렉터리: `F:\working\003.RESEARCH\var\overdrive\od-20260903T122456Z-b5c7626f75`

## 진행 중인 2026년 항목

| 상세 ID | 부문 | 상태 |
| --- | --- | --- |
| `CPT_SEQ=39` | 중소·중견기업 재직자 | 진행중 |
| `CPT_SEQ=38` | 일반 국민/대학(원)생 | 진행중 |

목록 페이지의 `doDetail(cptSeq)` 함수는 선택한 ID를 `CPT_SEQ`에 넣고 `/contestDetail`로 GET 요청한다. 따라서 처음 확인한 `CPT_SEQ=39`는 재직자 부문이며, 일반 부문의 상세 주소는 목록 구조상 `https://www.kamp-ai.kr/contestDetail?CPT_SEQ=38`이다. 일반 부문 상세 페이지 본문은 이번 작업에서 별도로 수집하지 않았다.

## 수집 경로

일반 HTTP 수집은 `robots_disallows_path: /contestList`로 거부되었고 접근 영수증 `acc-b10e70425ebd5161`이 기록되었다. 사용자가 지정한 정확한 공개 목록 URL 한 건만 제한적으로 렌더링했다. 로그인, 프록시, Ladder, 관련 페이지 크롤링은 사용하지 않았다.
