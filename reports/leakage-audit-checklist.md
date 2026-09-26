# 누수·검증 감사 체크리스트

작성일: 2026-09-11  
목적: KAMP 후보 데이터에서 공개 과제 수령 직후 재사용할 공통 감사표.

상태값은 `pass / fail / review_needed / not_applicable` 중 하나만 사용한다. 확인하지 않은 항목을 pass로 표시하지 않는다.

## A. 데이터 계보와 원본 보존

| ID | 확인 항목 | 상태 | 증거/메모 |
|---|---|---|---|
| A01 | 원본 파일명·크기·해시를 기록했는가 | review_needed | |
| A02 | 원본을 덮어쓰지 않고 raw/processed를 분리했는가 | review_needed | |
| A03 | 가이드북의 입력/출력 파일과 실제 파일 목록을 매핑했는가 | review_needed | |
| A04 | 컬럼명·자료형·단위·샘플링 주기를 데이터 사전으로 만들었는가 | review_needed | |
| A05 | 파싱/전처리 스크립트와 버전을 저장했는가 | review_needed | |

## B. 타깃과 조인

| ID | 확인 항목 | 상태 | 증거/메모 |
|---|---|---|---|
| B01 | 공식 과제의 예측 단위(row/LOT/session)를 확정했는가 | review_needed | |
| B02 | 타깃 생성·수집 시점을 기록했는가 | review_needed | |
| B03 | 입력-타깃 조인 키가 유일한가 | review_needed | |
| B04 | 미매칭·중복·다대일/일대다 조인을 별도 표로 출력했는가 | review_needed | |
| B05 | 타깃 산출에 사용된 후공정·완료 정보가 입력에 섞이지 않았는가 | review_needed | |
| B06 | 라벨 파일·컬럼·값의 의미를 가이드북과 실제 헤더로 교차 확인했는가 | review_needed | |

## C. 시간·그룹 분할

| ID | 확인 항목 | 상태 | 증거/메모 |
|---|---|---|---|
| C01 | 같은 LOT/실험/녹화 세션이 train·valid·test에 동시에 들어가지 않는가 | review_needed | |
| C02 | 시간 순서가 있는 경우 마지막 기간 홀드아웃을 구성했는가 | review_needed | |
| C03 | 슬라이딩 윈도우가 분할 경계를 넘지 않는가 | review_needed | |
| C04 | 동일 원본 기록에서 만든 인접 윈도우가 서로 다른 split에 가지 않는가 | review_needed | |
| C05 | 센서 위치·설비·제품군 일반화 평가를 별도로 구성했는가 | review_needed | |
| C06 | 클래스 비율을 split별로 확인했는가 | review_needed | |

## D. 특징 생성·전처리

| ID | 확인 항목 | 상태 | 증거/메모 |
|---|---|---|---|
| D01 | 결측 대체·이상치 경계·정규화 파라미터를 train에서만 fit했는가 | review_needed | |
| D02 | 전체 데이터의 평균·분산·분위수로 필터 기준을 만들지 않았는가 | review_needed | |
| D03 | 미래 시점 값 또는 종료 후 집계값이 특징에 들어가지 않았는가 | review_needed | |
| D04 | `Index`, 순번, 파일명, 날짜가 타깃/세션을 암기하는 대리변수인지 검사했는가 | review_needed | |
| D05 | 파생 특징의 사용 가능 시점(as-of)을 기록했는가 | review_needed | |
| D06 | 중복 행·복제 파형·동일 이미지/프레임을 해시로 점검했는가 | review_needed | |
| D07 | SMOTE·오버샘플링·증강을 split 이후 train에만 적용했는가 | review_needed | |

## E. 모델·튜닝·평가

| ID | 확인 항목 | 상태 | 증거/메모 |
|---|---|---|---|
| E01 | 테스트 세트는 모델 선택·threshold·feature selection에 사용하지 않았는가 | review_needed | |
| E02 | 모든 비교 모델이 동일한 split과 동일한 타깃으로 평가됐는가 | review_needed | |
| E03 | 단일 점수가 아니라 평균·표준편차 또는 반복 결과를 기록했는가 | review_needed | |
| E04 | 불균형 문제에서 accuracy만으로 결론내리지 않았는가 | review_needed | |
| E05 | 확률 calibration과 운영 threshold를 validation에서만 정했는가 | review_needed | |
| E06 | 오류를 LOT/세션/시간/클래스별로 분석했는가 | review_needed | |
| E07 | 최종 테스트 1회 평가 전 모델·코드·설정을 동결했는가 | review_needed | |

## F. 후보별 필수 감사

### ID 21 — 도금욕 품질

- [ ] `Error Lot list.csv`의 실제 컬럼과 입력 `LoT`의 조인 성공률을 계산한다.
- [ ] `LoT`와 `LoT2`의 의미가 같은지, 라벨이 LOT 전체에 적용되는지 확인한다.
- [ ] Error Lot 목록이 생산 종료 후 작성된 것인지 확인하고, 공정 중 조기경보 실험에서는 사용 가능한 과거 시점만 특징으로 만든다.
- [ ] `Index`·`Time`·`Date`가 시간 순서/LOT을 암기하는지 제거 전후로 비교한다.
- [ ] 행 단위 split과 LOT 단위 split의 점수 차이를 보고한다. 차이가 크면 행 단위 점수는 무효로 표시한다.

### ID 18 — 회전기계 진동

- [ ] 각 CSV가 하나의 140초 녹화인지, 여러 녹화가 이어진 파일인지 확인한다.
- [ ] 고장 상태·센서 그룹·실험 회차를 기준으로 원본 recording ID를 만든다.
- [ ] 선형보간·필터링·정규화를 train recording만으로 fit한다.
- [ ] 윈도우 겹침률을 기록하고, 같은 recording의 윈도우가 split을 넘지 않게 한다.
- [ ] group 1 학습→group 2 평가, 반대 방향 평가를 별도 실행한다.
- [ ] Type 1/2/3가 사실상 고장 장착 조건 또는 녹화 파일 식별자로만 구분되는지 확인한다.

### ID 19 — 공정운영 최적화

- [ ] `Process Rate`가 LOT당 하나인지, LOT 내 여러 시점의 관측값인지 확인한다.
- [ ] Process Rate 계산에 후공정 결과·완료 시점·사후 검사값이 포함됐는지 확인한다.
- [ ] pH·Temp의 사용 시점과 Process Rate의 측정 시점을 정렬한다.
- [ ] 추천 최적화 범위를 train 관측 min/max와 물리적 운전 제약의 교집합으로 제한한다.
- [ ] 관측 범위를 벗어난 조합의 성능을 예측만으로 주장하지 않는다.
- [ ] 회귀 타깃인데 정확도/혼동행렬을 사용한다면 binning 규칙과 경계값을 별도로 기록한다.

## 판정 규칙

- A02, B05, C01, C03, D01, D03, E01 중 하나라도 `fail`이면 해당 실험 점수는 경쟁 비교에서 제외한다.
- C02 또는 C05가 `review_needed`이면 “현장 일반화” 주장을 하지 않는다.
- 후보 간 비교는 누수 없는 동일 프로토콜에서만 한다.
- 모든 `review_needed`는 원본 파일·가이드북 페이지·검증 코드·결과표 중 하나의 증거를 붙여야 `pass`로 바꿀 수 있다.

## 첫 실행 산출물

1. `data_inventory.csv`: 파일, 해시, 행/열 수, 기간, 그룹 키, 타깃 후보.
2. `join_audit.csv`: 입력-출력 키별 매칭·중복·미매칭 결과.
3. `split_manifest.csv`: 각 row/window/recording의 split과 group ID.
4. `baseline_results.csv`: B0부터 후보 모델까지 동일 split의 결과.
5. `error_cases.csv`: 오분류/큰 오차 샘플과 원인 가설.
