# 16 · 제조현장용 Scene-Text Recognition 학습 AI 데이터셋

- 원본: `knowledge/kamp-guidebooks/Guidebook_제조현장용 Scene-Text Recognition 학습 AI 데이터셋.pdf` (SHA-256 `1E49C720716F58C4…`)
- 쪽수: 48 · 추출: pymupdf 텍스트 레이어 (이미지·표 구조 미포함)
- 출처 표기(국문): 중소벤처기업부, Korea AI Manufacturing Platform(KAMP), 제조현장용 Scene-Text Recognition 학습 AI 데이터셋, KAIST(산업 및 시스템공학과 문일철교수), 2021.12.27., www.kamp-ai.kr
- 출처 표기(영문): Ministry of SMEs and Startups., and KAIST(Korea Advanced Institute of Science and Technology). (2021, December 27). Manufacturing Scene-Text Recognition AI dataset. Korea AI Manufacturing Platform(KAMP). https://www.kamp-ai.kr/

---

<!-- p.1 -->
KAMP 제조AI데이터셋 활용 권한
 제조AI데이터셋 활용 주의사항
연구/공식적으로 사용하실 때에는 꼭 아래와 같이 ‘KAMP 출처(reference)’를 남겨주시고,
인용 시 활용한 내용과 문서 등은 아래 이메일로 보내주시기를 바랍니다.
(E-mail : kamp@kaist.ac.kr)
국문 출처 표기 양식
중소벤처기업부, Korea AI Manufacturing Platform(KAMP), 제조현장용 Scene-Text Recognition
학습 AI 데이터셋, KAIST(산업 및 시스템공학과 문일철교수), 2021.12.27., www.kamp-ai.kr
영문 출처 표기 양식
Ministry of SMEs and Startups., and KAIST(Korea Advanced Institute of Science and
Technology). (2021, December 27). Manufacturing Scene-Text Recognition AI dataset.
Korea AI Manufacturing Platform(KAMP). https://www.kamp-ai.kr/
제조AI데이터셋 개요
제조AI데이터셋명 : 제조현장용 Scene-Text Recognition 학습 AI 데이터셋
업종 : 뿌리(용접접합) | 목적 : 품질보증 | 유형 : jpg
알고리즘 : 마스크 어텐션을 활용한 Scene-Text 스포팅 알고리즘 (Mango : A Mask Attention Guided
One-Stage Scene Text Spotter)
사용조건 : 콘텐츠 변경허용
제공기관 : KAIST (산업 및 시스템공학과 문일철교수)
등록일 : 2021-12-27
인공지능 제조 플랫폼(KAMP, Korea AI Manufacturing Platform)에서 다운로드한 제조AI데이터셋의
저작권을 위하여 문서 고유 번호와 워터마크를 부여하여, 해당 문서의 표준을 준수하였음을 증명합니다.

운영기관 : KAIST 제조AI빅데이터센터
주소 : 대전광역시 유성구 문지로 193 KAIST 문지캠퍼스 행정동
전화번호 : 042-350-1331   l   이메일 : kamp@kaist.ac.kr

<!-- p.2 -->
「제조현장용
Scene-Text Recognition
학습 AI 데이터셋」
분석실습 가이드북

<!-- p.3 -->
「제조현장용
Scene-Text Recognition
학습 AI 데이터셋」
분석실습 가이드북

<!-- p.4 -->
 분석요약
 분석 실습	 1. 분석 개요

1.1 분석 배경

1) 공정(설비) 개요

2) 이슈사항(Pain point)

1.2 분석 목표

1) 분석목표 설정

2) 데이터 정의 및 소개

3) 데이터 분석 기대효과

4) 시사점(implication) 요약기술

2. 분석실습

2.1 제조데이터 소개

1) 데이터 수집 방법

2) 데이터 유형/구조

3) 데이터 (품질) 전처리

2.2 분석 모델 소개

1) 데이터 흐름 및 인공지능 모델 적용 흐름도

2) AI 분석모델

2.3 분석 체험

1) 필요 SW, 패키지 설치 방법 및 절차 가이드

2) 분석 단계별 프로세스 - Flow Chart

[단계 ①] 라이브러리/데이터 불러오기

[단계 ②] 모델 학습 관련 지식 전달

[단계 ③] 모델 학습 및 테스트

[단계 ④] 실험 결과 및 분석

3. 유사 타 현장의 「제조현장용 Scene-Text Recognition 학습 AI 데이터셋」분석 적용
부 록
분석환경 구축을 위한 설치 가이드
04
05
05
06
07
07
08
13
24
25
Contents

<!-- p.5 -->
「제조현장용 Scene-Text Recognition
학습 AI 데이터셋」 분석실습 가이드북
● 필요 S W :
● 필요 패키지 :
● 분석 환경 :
● 필요 데이터 :
Python, Anaconda – Jupyter Notebook
Pytorch, MMCV, matplotlib, scikit-learn
[운영체제] Ubuntu [CPU] Intel Core i7-4770k [GPU] TitanXP 2매 병렬연결,
[RAM] 16GB
학습 이미지 (3896매 jpg 파일) 및 JSON 기반 Label 파일 (train_data.json, valid_
data.json, test_data.json, whole_data.json)
04
No
구 분
내 용
1
분석 목적
(현장 이슈, 목적)
본 분석에서 활용하는 데이터의 공정은 제관 과정의 무게 충진 공정으로, Count-Weight 생산품의
핵심 품질을 좌우하는 공정이다.  충진량이 정확해야 하며, 이를 이미지로 기록하고 있다. 지속적인
관리를 위하여, 계측 데이터가 내놓는 수치등의 데이터를 광학적으로 탐지하고 인식하는 기계 학습
모델이 활용될 수 있다.
2
데이터셋 형태 및
수집방법
1) 데이터셋 형태 : image파일과 그에 연계된 json기반 tagging 파일
2) 데이터 수집 방법 : 클라우드 기반의 RPMS를 통해, 생산현장에서 업로드된 이미지를 확보. 실제
기업 현장에서 발생하는 계측 이미지를 직접 촬영하여 수집
3) 데이터셋 파일 확장자 : 이미지 (jpg), 레이블 (json)
3
데이터 개수
데이터셋 총량
- 데이터 개수 : 3,896개
- 데이터셋 총량 : 2.99GB
4
분석적용
알고리즘
알고리즘
- 마스크 어텐션을 활용한 Scene-Text 스포팅 알고리즘 (Mango : A Mask Attention Guided
One-Stage Scene Text Spotter)을 활용한다.
알고리즘
간략소개
- 선감지 (Detection)-후인식 (Recognition)의 2단계 학습 과정을 요하는 기존의 텍스트 인식 모
델과 달리, 본 알고리즘은 텍스트 영역 감지 및 인식을 한번에 수행할 수 있도록 Mask Attention
module을 활용한다.
- 해당 Mask attention module의 경우 단어별 attention, character별 attention을 각각 학습시킴
으로써, 보다 정확한 인식이 가능토록 한다.
- 또한 별도의 segmentation module 활용을 통하여 특정 텍스트가 위치한 영역 탐지가 보다 잘 이
루어질 수 있도록 학습한다. 이 과정에서, 각 텍스트별 중심선 (centerline)이 핵심적으로 잡혀, 보
다 다양한 형태의 텍스트 영역 탐지를 가능케 해준다.
5
분석결과 및
시사점
- 본 분석에서는 위의 알고리즘을 통해, 현장의 계측계기에서 발생하는 다양한 TEXT 중 숫자 타입에
한정하여 이를 잘 탐지하는 모델을 학습시켜보았다. 정성적 분석 결과, 해당 모델은 이미지 내 숫자
텍스트 영역을 매우 잘 탐지했을뿐만 아니라, 각 영역별 텍스트에 대한 정확한 인식력을 보여주었다.
분석요약
1

<!-- p.6 -->
05
1. 분석 개요
1.1 분석 배경
1) 공정(설비) 개요
- 제시된 분석 사례는 제관 Count-Weight의 충진과정에 대한 내용이다. Count-
Weight는 쉽게 말해 무게추로써, 규정된 무게대로 무게추의 내용물이 채워져야지만
품질 문제가 없다. 이를 위하여, 충진공정은 저울을 활용하여 충진 과정을 제어하는데,
저울에 표기된 무게를 OCR로 파악할 필요성이 있다.
[그림 1] Counter-Weight의 장착 위치 및 형태
- 해당 공정은 철가루를 무게추에 채우는 과정으로 현장의 오염도가 매우 심하여 노이즈가
심한 상태이다. 그러므로 일반적인 OCR 모듈로는 쉽게 인식되지 않는다. 매우 심한 노이
즈가 있는 경우에도, 해당 텍스트를 잘 인식할 수 있는 강건한 OCR 모듈이 필요하다.

2) 이슈 사항 (Pain point)
• 공정(설비)상의 문제 현황
- 무게추의 무게 계측은 Counter-Weight의 직접적인 품질 문제가 된다. 제시된 공정
은 경북 경주 소재 원우ENG의 Counter-Weight 작업 과정이다.
• 문제해결 장애요인
- 해당 공정은 철가루를 무게추에 채우는 과정으로 현장의 오염도가 매우 심하여 노이
즈가 심한 상태이다. 그러므로 일반적인 OCR 모듈로는 쉽게 인식되지 않는다. 매우
분석 실습
2

<!-- p.7 -->
06
심한 노이즈가 있는 경우에도, 해당 텍스트를 잘 인식할 수 있는 강건한 OCR 모듈이
필요하다.
• 극복 방안
- Counter-Weight의 품질문제 보장을 위하여, 자동화된 무게 입력 과정을 구현하고자
데이터를 수집하였다.
1.2 분석 목표
1) 분석목표 설정
제안된 분석의 목표는 원우ENG의 제관 Counter-Weight의 충진과정에서 계측되는 무
게를 저울의 LED 숫자표기를 OCR하여 Digital로 변환하는 과정을 목표로 한다.
2) 데이터 정의 및 소개
Counter-Weight의 충진 과정에서 계측되는 무게 값을 촬영한 데이터이다.
3) 데이터 분석 기대효과
현재 충청도 소재의 한 공장에는 충진 공정에서 충진이 얼마나 되었는지 자동적으로 기
록할 수 있는 AI 기법의 적용이 필요한 상황이다. 이에 AI기반 OCR모형을 구축하고 AI
로 현재 계측된 생산품의 중량을 확인할 수 있는 분석을 수행하고자 한다. 본 분석은 품
질관리 문제로 열악한 중소기업에 AI를 적용하여 품질 데이터 획득에 기여했다는 점에서
시사점이 크다고 판단된다.
4) 시사점(implication) 요약기술
감지 및 인식이 따로 이루어져야 하는 모듈이 아닌, 텍스트 영역 감지 및 인식을 한번에
수행할 수 있는 모듈을 활용한다는 점에서 현장에 보다 효율적으로 적용가능한 방법론이
라고 판단된다.
또한, 기존의 다양한 데이터셋에 선학습된 모델 (pre-trained model)에 본 충진 공정의
데이터를 fine-tuning (파라미터 미세 조정)하여 모델을 학습함으로써 보다 일반화된 성
능을 낼 수 있음은 물론, 빠른 학습 완료를 통해 기업 현장의 AI 적용의 효율성을 높일 수
있다는 점에서 시사점이 크다고 판단된다.

<!-- p.8 -->
07
2. 분석실습
2.1 제조데이터 소개
1) 데이터 수집 방법
• 제조 분야 : 제관 Counter-Weight
• 제조 공정명 : 충진공정
• 수집장비 : 무게 계량 저울의 계측 표기를 스마트폰으로 촬영후 RPMS를 통해 업로드
• 수집 기간(주기) : 모든 생산품에 대해서 수집, 1년간 수집결과

2) 데이터 유형/구조
• 데이터셋 크기, 데이터 수량 :
* 3,894매의 JPG 이미지 (2991 MB)
- 3689장의 이미지는 2448 x 3264 사이즈
- 205장 이미지는 1080 x 1920 사이즈
* 3,894개의 XML파일 (7.4 MB)
- 이미지당 평균 숫자 텍스트의 개수는 6.99
- 데이터 속성정의 표 :
파일명
설명
데이터 타입
./data/images/00001.jpg ~03894.jpg
스마트폰으로 촬영된 무게 측정 이미지
JPG 이미지
./datalist/[train_data,valid_data,test_data].json
촬영된 무게 측정의 위치 및 값에 대한 레이블 정보
JSON 파일
데이터는 총 3,894매의 이미지파일이며, 분석에 사용되는 데이터는 JSON파일로 설
정된 레이블을 활용한다. 이미지에 대한 레이블을 제시하고 있으며, 측정된 무게에 대
한 값 및 픽셀 위치를 지정하고 있다.
 - 독립변수/종속변수 정의 : 독립변수는 이미지이며, 종속변수는 레이블된 숫자 및 픽
셀위치값이다. 이미지가 주어졌을 때, 숫자값이 출력되는 것이 목표이다.

<!-- p.9 -->
08
[그림 3] (좌) 이미지 데이터의 사례, (우) Bounding Box가 포함된 Digit 판정 Annotation
2.2 분석 모델 소개
1) 데이터 흐름 및 인공지능 모델 적용 흐름도
[그림 3] 데이터 정제 및 가공 흐름도
- 이미지의 경우 현장내에서 촬영된 이미지 원본을 모델이 받아들일 수 있는 사이즈로
resize하여 활용. 별도의 augmentation 방법론을 활용하지 않는다.

<!-- p.10 -->
09
- 각 이미지에 대응되는 label의 경우, human-based annotation 과정을 거쳐 XML 파
일 형태로 저장한다.
- XML 파일의 size에 이미지의 크기, bounding box에 검출된 숫자에 대응되는 위
치와 숫자의 라벨이 표기되어 있음. bounding box의 경우 polygon 형태가 아닌
rectangular 형태로 annotation을 진행하였다.
- JSON 파일 : 각 이미지별로 별도로 생성된 XML 파일에 대하여, 이를 모델이 인식할
수 있는 형태의 dictionary로 맵핑된 json 파일로 전처리하여 저장한다.
- JSON 파일내 변수 안내
◦ height, width : 이미지 사이즈 (너비, 폭)
◦ content_ann : annotation 정보
- texts : 이미지내 텍스트 (리스트 형태로 저장)
- bboxs : 텍스트별 bounding box 좌표 정보 (texts와 동일한 순서이며, 리스트 형태로 저장.)
- cares, labels : label 유무 정보
<원본 이미지>
<해당 이미지의 annotation json 파일 예시>
2) AI 분석모델
• 해당 AI 방법론 (알고리즘) 선정 이유 기술
- 마스크 어텐션 모듈을 활용한 원샷 Scene-Text 인식 모델 (MANGO: A Mask
Attention Guided One-Stage Scene Text Spotter). 이미지 내 텍스트에 대한 탐
지 및 인식을 동시에 진행하여, 학습 및 예측에 효율을 높일 수 있기 때문에, 해당 모
델을 선정하였다.

<!-- p.11 -->
10
• 적용하고자하는 AI 분석 방법론(알고리즘)의 구체적 소개
[그림 3] 활용된 MANGO 모델의 구축 흐름 모식도
- 해당 Mask attention module의 경우 단어별 attention, character별 attention
을 각각 학습시킴으로써, 보다 정확한 인식이 가능토록 한다. 또한 별도의
segmentation module 활용을 통하여 특정 텍스트가 위치한 영역 탐지가 보다 잘
이루어질 수 있도록 학습한다. 이 과정에서, 각 텍스트별 중심선 (centerline)이 핵심
적으로 잡혀, 보다 다양한 형태의 텍스트 영역 탐지를 가능케 해준다. Segmentation
Module, Attention module, 최종 텍스트를 예측하는 Recognizer module을 동시
에 학습시킴으로써, 탐지 및 인식 각각의 과업을 균형있게 학습할 수 있다는 장점이
존재한다.
- 이미지 처리에 적합한 것으로 알려진 convolutional neural network (CNN)1) 및
Multi-Layered Perceptron을 함께 활용한다.
• 딥 뉴럴 네트워크 구조
- Backpropagation2)으로 학습되는 뉴럴 네트워크의 특성상 레이어가 많은 뉴럴 네트
워크의 경우 출력으로부터 얻은 gradient가 입력에 가까운 층의 레이어까지 잘 전파
되지 않아 학습에 어려움이 있다.
- 깊은 뉴럴 네트워크의 학습을 위하여 레이어와 레이어를 건너 뛰어 연결 시켜주는
residual connection을 추가한 Residual Neural Network (ResNet) 구조가 효율적
으로 알려져있다.
- 본 분석에서도 이미지 처리를 위해 feature extractor로, ResNet 구조를 활용한다.
1) Convolutional neural network (CNN)는 뉴럴 네트워크 구조의 한 종류로 이미지 처리 또는 자연어 처리에 주로 사용된다. CNN의 가장 큰 특징은 위치 정보
를 보존할 수 있다는 것으로 특정 크기의 필터가 서로 다른 위치에 적용되어 다른 위치에 대해서도 같은 연산이 적용된다.
2) 역전파라고 불리며 학습 과정에서 라벨 정보를 통해 계산된 손실함수를 최소화할 때 미분값을 손실함수부터 입력 지점까지 역전파하여 계산 하는 방법이다.

<!-- p.12 -->
11
[그림 4] ResNet의 구조. 일반적인 뉴럴 네트워크와 달리 연속된 레이어를 뛰어 넘어 연결시켜주는 residual connection이 존재.
- 또한, Feature Pyramid network (FPN) 구조를 추가적으로 활용하여, 보다 정제
된 형태의 feature를 얻어내고자 한다. ResNet 및 FPN 구조를 활용한 feature들은
mask attention 및 segmentation 모듈 각각의 인풋으로 활용된다.
• 위치 기반 마스크 어텐션 모듈
- 하나의 이미지내 여러 텍스트가 공존할 가능성이 높기 때문에, 각각의 텍스트별로 별
도의 feature map이 생성되어야할 필요성이 있다.
- 어텐션 모듈은 데이터 인풋내에 모델이 특히 집중해서 보아야할 구역을 탐지함으로
써, 전체 이미지 중 과업에 필요한 부분을 특정화하는 데에 큰 도움을 주는 모듈이다.
[그림 5] 마스크 어텐션 모듈의 구조. 각각의 텍스트 인풋 및 글자 (character)별 마스크 어텐션을 활용하여, 각각의 텍스트가 빠
짐없이 인식될 수 있도록 함.

<!-- p.13 -->
12
- 각각의 텍스트가 별도의 컨볼루션 채널에 맵핑되게 함은 물론, 텍스트 내부의 각 글자
(character)에 대해서도 효과적인 인식이 가능토록 본 모델에서는 Instance-level 마
스크 어텐션 모듈, Character-level 마스크 어텐션 모듈을 동시에 활용한다.
• 순차적 디코딩 모듈
- 각각의 텍스트가 별도의 채널로 맵핑된 후에는, 각 인스턴스 내의 각 글자를 순차적으
로 잘 예측할 수 있는 방향의 디코딩이 이루어져야 한다. 시계열 모델링을 효과적으로
활용하기 위해 Bi-directional LSTM 구조를 활용한다.
• 학습 방법
- 뉴럴 네트워크의 데이터를 가장 잘 설명할 수 있는 최적 파라미터는 수학적으로 바로
계산을 할 수 없기 때문에 손실 함수를 줄이는 방향으로 gradient descent3)를 사용하
여 뉴럴 네트워크를 학습한다.
- gradient descent는 손실 함수의 기울기를 이용하여 손실 함수를 줄이는 방향으로
파라미터를 학습하는 방법이며 전역적인 최적해를 구할 수 있음은 보장되지 않는다.
- gradient descent를 할 때 전체 training 데이터를 사용하는 것은 batch gradient
descent라고 하며 많은 계산량을 요구한다는 단점이 있다.
- 따라서 본 분석에서는 일부 데이터 (mini-batch)를 사용하여 gradient descent를
수행하는 stochastic gradient descent 알고리즘을 사용하여 뉴럴 네트워크를 학습
한다. 일반적으로 수행되는 방식이며, 본 논문 또한 이러한 방법론을 따른다고 명시되
어 있다.
- gradient 값을 사용하여 뉴럴 네트워크의 파라미터를 업데이트를 해줄지의 정도를
결정하는 것 또한 중요하다.
- 뉴럴 네트워크의 파라미터 업데이트의 정도를 결정하는 파라미터를 learning rate라
고 하며 일반적으로 0.1 ~ 0.0001 사이의 값을 사용한다.
- 미분 값을 사용하여 어떻게 뉴럴 네트워크의 파라미터를 업데이트를 할지 결정하는
optimizer의 설계 또한 학습에 영향을 많이 미치며, 이때까지 학습에 사용된 gradient
의 경향성을 사용하는 momentum을 사용하는 것이 효과적으로 알려져 있다.
- 학습이 진행됨에 따라 learning rate를 감소시켜줄 때 일반적으로 학습이 안정적으로
되며 learning rate를 감소시켜주는 학습 스케쥴을 지수함수, cosine 함수 등을 이용
하여 모델링할 수 있다. 이를 learning_rate_decay라고 부르며, 본 방법론 또한 이를
적용하고 있다.
3) 특정 지점에서 미분을 통해 손실 함수를 최소화하는 방향으로 파라미터를 업데이트 하는 방법이다.

<!-- p.14 -->
13
• 알고리즘 구축 절차
- 학습에 사용할 Pre-trained 모델을 불러온다.
- fine-tuning (파라미터 미세 조정) 입력으로 넣을 이미지의 크기를 설정하며, Resize
가 필요할 경우, 별도의 모듈을 통해 이미지에 대한 resize를 실행한다.
- 컴퓨터의 CPU, GPU 및 결과 분석을 통해 한 번의 iteration에 사용될 이미지의 수인
batch의 크기 설정. training 데이터를 몇 번 반복하여 뉴럴 네트워크를 학습할지 결
정하는 epoch 설정한다.
- gradient 값을 뉴럴 네트워크의 파라미터를 얼마나 업데이트 해줄지 결정하는
learning rate 및 학습 스케쥴 설정한다.
- GPU를 통한 병렬 및 분산 학습을 진행할 경우, 학습에 활용할 GPU 카드 명시 및 분
산 학습 모듈 설정한다.
- 학습에 사용되는 파라미터를 설정하여 뉴럴 네트워크의 학습을 진행하며 validation
을 통해 최적 파라미터를 찾아 최적의 뉴럴 네트워크 파라미터 학습을 진행한다.
3) 데이터 (품질) 전처리
- 이미지의 경우 촬영된 이미지 원본을 인공지능 모델이 받아들일 수 있는 사이즈로
resize하여 활용한다. 각 이미지에 대응되는 label의 경우 human annotation 기반의
xml 파일을 별도의 json 파일로 변환하여 활용한다.
2.3 분석 체험
1) 필요 SW, 패키지 설치 방법 및 절차 가이드
- Pytorch 설치 : pytorch 공식 사이트에서 OS, CUDA 버전에 맞추어 커멘드를 받아 설
치하며 터미널 창에 run this command를 복사하여 실행한다. (pytorch 공식 사이트:
https://pytorch.org/)
- 기타 library의 경우 pip를 활용하여 설치한다.
- 코드 디렉토리의 requirements.txt 활용하여 필요한 라이브러리 설치 가능. 가상 환경
에서의 설치를 권장한다.
● 명령어 : pip install –r requirements.txt
- 자세한 설치 방법은 부록 참고

<!-- p.15 -->
14
2) 분석 단계별 프로세스 - Flow Chart
[그림 6] 분석 단게별 Flow Chart

<!-- p.16 -->
15
[단계 ①] 라이브러리/데이터 불러오기
①-1. 모델 운용에 필요한 Python library 설치 및 불러오기
"""모델 관련 라이브러리 및 패키지 설치"""
!pip install -r requirements.txt
!./setup.sh
"""주피터 노트북 환경 설정"""
import IPython
from IPython.core.display import display, HTML
display(HTML("<style>.container { width:100% !important; }</style>"))
display(HTML("<style>div.output_scroll { height: 2000em; }</style>"))
"""기초 라이브러리 가져오기"""
import json
import cv2
import time
import warnings
warnings.filterwarnings(action='ignore')
import argparse
import copy
import os
import os.path as osp
cv2.setNumThreads(0)
"""해당 코드를 위해 자체적으로 만든 tool들 또한 가져오기"""
from tools.show_masks import show_text, show_segmentation, show_cate, show_mask_att
'''neural network 생성 및 inference에 관여하는 pytorch 라이브러리 가져오기'''
import torch
import torch.multiprocessing as mp
'''OpenMMLab Computer Vision Foundation의 mmcv 기반으로 코드가 만들어졌기 때문에, 해당 module들 또한 가져옵니다.'''
import mmcv
from mmcv import Config, DictAction
from mmcv.runner import get_dist_info, set_random_seed, init_dist
from mmcv.utils import get_git_hash
'''텍스트 인식 관련 함수들을 쓰기 위해, davarOCR 기반 라이브러리도 가져옵니다.'''
from davarocr import __version__
from davarocr.davar_common.apis import train_model, inference_model, init_model
from davarocr.davar_common.datasets import build_dataset
from davarocr.davar_common.models import build_model
from davarocr.davar_common.utils import collect_env, get_root_logger
from davarocr.davar_common.datasets import davar_build_dataset
from davarocr.davar_rcg.models.builder import build_recognizor
from davarocr.davar_spotting.models.builder import build_spotter

<!-- p.17 -->
16
- 본 모델의 경우 MMCV (https://github.com/open-mmlab/mmcv) 기반의 라이
브러리들을 활용합니다. 또한, davarocr library의 다양한 함수들을 활용하기 위해서
각각의 component들을 davarocr에서 가져온다.
- 이미지 분석에 활용되는 label의 경우 json 파일 형식으로 불러온다.
- 본 코드를 활용하는 데 필요한 라이브러리를 가져오는 과정이다. 대표적으로 torch
및 mmcv, davarocr 계열 라이브러리를 가져온다.
①-2. 코드의 실험 세팅 설정을 위한 configuration argument 지정
def parse_args():
    parser = argparse.ArgumentParser(description='Arguments for scene-text recognition..')
    parser.add_argument('--config',default='configs/mango_r50_ete_finetune.py', help='Train config file path.')
    parser.add_argument('--work-dir', help='The dir to save logs and models.')
    parser.add_argument(
        '--resume_from', help='The checkpoint file to resume from.')
    parser.add_argument(
        '--no-validate',
        action='store_true',
        help='Whether not to evaluate the checkpoint during training.')
    group_gpus = parser.add_mutually_exclusive_group()
    group_gpus.add_argument(
        '--gpus',
        type=int,
        help='Number of gpus to use '
        '(only applicable to non-distributed training).')
    group_gpus.add_argument(
        '--gpu-ids',
        type=int,
        nargs='+',
        help='ids of gpus to use '
        '(only applicable to non-distributed training).')
    parser.add_argument('--seed', type=int, default=None, help='Random seed.')
    parser.add_argument(
        '--deterministic',
        action='store_true',
        help='Whether to set deterministic options for CUDNN backend.')
    parser.add_argument(
        '--options',
        nargs='+',
        action=DictAction,
        help='Override some settings in the used config, the key-value pair '
        'in xxx=yyy format will be merged into config file (deprecate), '
        'change to --cfg-options instead.')
   parser.add_argument(
        '--cfg-options',
        nargs='+',
        action=DictAction,
        help='Override some settings in the used config, the key-value pair '
        'in xxx=yyy format will be merged into config file. If the value to '
        'be overwritten is a list, it should be of the form of either '
        'key="[a,b]" or key=a,b .The argument also allows nested list/tuple '
        'values, e.g. key="[(a,b),(c,d)]". Note that the quotation marks '
        'are necessary and that no white space is allowed.')
    parser.add_argument(
        '--launcher',
        choices=['none', 'pytorch', 'slurm', 'mpi'],
        default='pytorch',

<!-- p.18 -->
17
        help='Options for job launcher.')
    parser.add_argument('--local_rank', type=int, default=0)
    parser.add_argument(
        '--mc-config',
        type=str,
        default='',
        help='Memory cache config for image loading speed-up during training.')
    args = parser.parse_args([])
    if 'LOCAL_RANK' not in os.environ:
        os.environ['LOCAL_RANK'] = str(args.local_rank)
    if args.options and args.cfg_options:
        raise ValueError(
            '--options and --cfg-options cannot be both '
            'specified, --options is deprecated in favor of --cfg-options')
    if args.options:
        warnings.warn('--options is deprecated in favor of --cfg-options')
        args.cfg_options = args.options
    return args
- Scene-text Recogntion task 진행을 위한 다양한 argument의 초기값을 설정하고,
각각의 argument명을 지정해주는 코드이다.
- 대표적으로 데이터별 디렉토리, 활용할 gpu 개수, 코드 random seed등을 지정한다.
- Configuration file의 경우, 학습에 활용할 데이터 및 annotation 파일이 있는 디렉
토리를 자신의 환경에 맞게 수정해줘야 한다.
①-3. GPU Device 설정
import os
os.environ["CUDA_DEVICE_ORDER"]="PCI_BUS_ID"
os.environ["CUDA_VISIBLE_DEVICES"]="0,1"
- 본 Scene-Text Recognition 모델 또한 인공신경망 기반의 모델로, 해당 모델에 대
한 빠른 연산을 위해서 GPU 기반의 연산이 필요하다. 아래의 코드는 os 라이브러리
를 통하여 활용할 GPU 카드 번호를 정하여 준다.

<!-- p.19 -->
18
[단계 ②] 모델 학습 관련 지식 전달
②-1. Scene-Text Recognition Task 소개 (소스코드 미포함)
- 종이 문서로부터 글자를 인식하여 읽어내는 Optical Character Recognition
(OCR)의 모델링 범위를 더욱 넓혀, 일상적인 풍경, 장면 이미지에서 글자를 읽어내
는 과업을 의미한다.
- 정확한 텍스트 인식을 위해 1) 이미지 내 텍스트 영역 감지 (Detection), 2) 텍스
트 영역 내 텍스트 인식 (Recognition) 각각이 잘 수행되어야 한다. 최근 들어서는,
Scene-text detection 및 Scene-text recognition을 각각 독립적으로 수행했던
이전 모델들과 달리, 두가지 과업을 한번에 진행하는 End-to-end 방식의 연구가
최근 각광을 받고 있으며, 이러한 방식의 모델을 Text-spotting이라고 부른다.
②-2. 분석 데이터 소개 (소스코드 미포함)
- 본 코드에서는, 아래와 같이 현장에서 발생하는 계기판내 숫자 텍스트를 자동으로
탐지 및 인식할 수 있는 인공지능을 만들어보고자 한다.
- 현재 학습하는 모델의 경우 숫자만을 잘 예측하는 것을 목적으로 하지만, 차후 한글,
영어등의 텍스트도 label 정보로 넣어줄 경우 추가적인 학습이 가능하다.
②-3. Mango : A Mask Attention Guided One-Stage Scene Text Spotter 소개
(소스코드 미포함)
- 위에서 설명한 것과 같이 본 모델은 text spotting 모델이다. 이에 따라 Text
detection 및 Recognition을 동시에 진행하여, 학습 및 예측에 효율을 높일 수 있
는 모델이다.
- 별도의 텍스트 영역 (Region-of-Interest) 감지 모델이 필요하지 않도록, 각 텍스트
별 중심선 (Centerline)을 잡아내는 segmentation module 을 도입하였으며, 이러
한 중심선 예측을 통해 보다 다양한 형태의 텍스트 영역을 탐지해낼 수 있다.
- 한 이미지내 여러 텍스트들을 동시다발적으로 예측 해내기 위해, 각각의 텍스트
(instance) 및 글자 (character)에 대한 attention module 을 추가적으로 도입하
였다. 이를 Position-aware Mask Attention 모듈이라고 한다.
- Segmentation Module, Attention module, 최종 텍스트를 예측하는 Recognizer
module을 동시에 학습시킴으로써, 탐지 및 인식 각각의 과업을 균형있게 학습할
수 있다는 장점이 존재한다.

<!-- p.20 -->
19
[단계 ③] 모델 학습 및 테스트
③-1. 선행 학습된 모델에 대한 Fine-tuning 학습
!python -m torch.distributed.launch --nproc_per_node 8 tools/train.py  configs/mango_r50_ete_finetune.py --launcher
pytorch --gpus 2
- MANGO 알고리즘을 통한 계측 이미지에 대한 fine-tuning 진행과정 묘사 및 설명
한다.
- MANGO 모델에서 다양한 데이터셋 (Total-Text , ICDAR2013 , ICDAR2015,
ICDAR2017_MLT, ICDAR2019_MLT)을 통해 학습한 Pre-trained Parameter 를
통해 본 계측 이미지에 대한 Fine-tuning을 진행하여 최종 모델을 획득할 수 있다.
③-2. 학습 완료된 모델에 대한 테스트를 위한 argument 설정
#해당 모델의 configuration file 불러오기
config_file = 'configs/mango_r50_ete_finetune.py'
# pretrained model checkpoint 불러오기
checkpoint_file = 'log/checkpoint/res50_ete_finetune_epoch_10.pth' # Model weights
cfg_options = dict(model=dict(test_cfg=dict(postprocess=dict(do_visualization=True))))
#모델 초기화에 대한 코드. 불러온 checkpoint file 및 config file을 기반으로 우리가 테스트에 활용할 모델을 model이라는 object로 가
져옴.
model = init_model(config_file, checkpoint_file, cfg_options=cfg_options, device='cuda:0')
cfg = model.cfg
#Test data directory 설정
#테스트에 활용할 데이터에 대한 정보가 담긴 json 파일을 가져옴.
test_dataset = 'datalist/test_data.json'
img_prefix = 'data/'
with open(test_dataset) as load_f:
    test_file = json.load(load_f, encoding="utf-8" )
- 학습한 모델을 불러오기 위한 arguments들을 설정하는 코드이다.
- 불러올 모델에 대한 정보 및 테스트에 활용할 데이터 instance 정보를 가져온다.

<!-- p.21 -->
20
③-3. 모델 테스트
cnt = 0
time_sum = 0.0
out_dict = {}
import warnings
warnings.filterwarnings(action='ignore')
#테스트에 활용할 이미지 list
test_query = ['00053','03714','01891','03484','01563','01495']
test_query_value_dict = {}
if test_query != None:
    test_file_temp = ['images/'+img_name+'.jpg' for img_name in test_query]
    for img_name in test_file_temp:
        test_query_value_dict[img_name] = test_file[img_name]
        print(img_name)
else:
    test_file_temp = test_file
    test_query_value_dict = test_file
for filename in test_file_temp:
        # 이미지 불러오기
    img_path= img_prefix + filename
    img = mmcv.imread(img_path)
    img_copy = img.copy()
    img_name = img_path.split("/")[-1]
    true_label = test_query_value_dict[filename]['content_ann']['texts']
    # 각 이미지별 모델 예측
    # 이미지별 예측 결과는 result라는 이름의 dictionary에 저장됩니다.
    print('============================================================')
    print('{}번째 이미지에 대한 예측을 시작합니다., 이미지의 이름은 {}입니다.'.format(cnt, img_path))
    time_start = time.time()
    result = inference_model(model, img)[0]
    time_end = time.time()
    time_sum += (time_end - time_start)
    # predicted texts
    final_text_results = result['texts']
    # detected regions
    final_box_results = result['points']
    cate_preds = result['cate_preds']
    seg_preds = result['seg_preds']
    mask_att_preds = result['character_mask_att_preds']
    print('이미지내 텍스트 실제 답안은 다음과 같습니다. : ',true_label)
    print('이미지내 텍스트 예측 결과는 다음과 같습니다. : ',final_text_results)
    # Visualization Segmentation and Mask Attention
    #Segmentation results are not shown for now
    show_segmentation(img, seg_preds, final_box_results, out_prefix="vis/" + filename.split("/")[-1][:-4],show=False)
    resize_shape = cfg.data.test.pipeline[1]['img_scale']
    ##Mask attentions are not shown for now
    show_cate(img, cate_preds, resize_shape=resize_shape, pad_size_divisor=128, out_prefix="../vis/" + filename.split("/")
[-1][:-4],show=False
             )

    if mask_att_preds is not None:
        show_mask_att(img, mask_att_preds,out_prefix="vis/" + filename.split("/")[-1][:-4])

    show_text(img, final_text_results, final_box_results, out_prefix="vis/" + filename.split("/")[-1][:-4],show=True)
    cnt += 1
print('각 이미지별 예측 평균 시간은 다음과 같습니다. : {}'.format(cnt / time_sum))
print('모든 이미지의 예측에 걸린 시간은 다음과 같습니다 : {}'.format(time_sum))

<!-- p.22 -->
21
- 테스트해볼 이미지를 가져온 후, 해당 이미지 내의 텍스트에 대한 탐지 및 인식 예측
을 실행하는 코드이다.
- 본 코드는 지정해준 1) 디렉토리 내의 모든 이미지에 대한 예측을 하거나, 2) 디렉토
리 내 설정해준 일부 이미지에 대한 예측을 하거나 두가지 중 하나의 옵션을 선택할
수 있다.
- 현 코드에서는 test_query list에 예측에 활용할 이미지명을 입력해놓았다.
- Fine-tuning (파라미터 미세 조정) 완료된 모델에 대한 테스트 데이터 기반 예측을
실행한다.

<!-- p.23 -->
22
③-4. 모델 테스트 결과에 대한 정성적 분석
- Fine-tuning (파라미터 미세 조정) 완료된 모델에 대한 테스트 데이터 예측 결과
plot 및 분석을 진행한다.

<!-- p.24 -->
23
[단계 ④] 실험 결과 및 분석
- ResNet 구조와 stochastic gradient descent 알고리즘을 momentum을 주어 사
용한 optimizer 그리고 learning rate를 0.1으로 cosine 학습 스케쥴링으로 학습을
진행한다.
- batch의 크기는 16 (gpu 가용 개수에 따라 batch size를 조절해야할 경우가 있다.
batch size에 ᄄᆞ른 성능의 차이는 크지 않는 것으로 관찰된다. epoch 수는 10으로
입력하였다.
- batch의 크기는 16, epoch 수는 10으로 입력한다.
- 이미지내 텍스트 영역 탐지에 대한 segmentation의 경우, 각 텍스트가 속한 영역
을 매우 정확하게 탐지하는 것으로 나타났다.
[그림 7] 이미지별 테스트 영역 및 인식 결과 1
- 본 충진 공정에서 얻어낸 이미지의 경우 상부에 큰 크기의 숫자가 위치해있으며, 상
대적으로 작은 크기의 동일한 숫자가 하부에 위치해있다.
- 모델 예측 결과, 큰 크기의 텍스트에 대해서는 매우 정확한 탐지 및 인식력을 보여
주는 반면, 작은 크기의 텍스트에 대해서는 영역 탐지의 경우 정확하나, 각 숫자들을
정확히 인식하지 못하는 것으로 파악된다.
- OCR 혹은 STR 방법론이 대체적으로 큰 크기의 글자에 좋은 예측력을 보여주며, 작
은 크기의 글자에 상대적으로 정확도가 낮아지는 문제는 자주 일어나는 문제로, 해
당 학습의 불안정성의 경우 작은 크기의 텍스트에 학습의 중요도를 상대적으로 높
이는 방식을 통해 해결할 수 있을 것으로 기대한다.

<!-- p.25 -->
24
[그림 8] 이미지별 테스트 영역 및 인식 결과 2
3. 유사 타 현장의 「제조현장용 Scene-Text Recognition 학습 AI 데이터셋」분석 적용
3.1. 본 분석이 적용 가능한 제조현장 소개
- 많은 현장에서 센서와 클라우드와의 연계가 쉽지 않은 상황이다. 특히 레가시 센서가 많
은 상황이고, 이것이 숫자 등으로 현장에서 표출되는 상황이라면, STR의 활용성은 매우
높을 수 있다. 즉, 레가시 센서가 많은 산업현장에 본 분석은 적용가능하다.
3.2 본 「제조현장용 Scene-Text Recognition 학습 AI 데이터셋」 분석을 원용하여 타 제조
현장 적용 시, 주요고려사항
- STR의 표출 폰트, 색상, 위치, 뒤틀림에 따라 학습의 난이도가 달라질 수 있으며, 입력되
는 이미지의 흔들림, 각도, 조도 등에 따라서도 학습 성능이 달라질 수 있다. 각 현장에 맞
는 STR 커스터마이즈가 필요하다. 예를 들어, 특정 현장에서 검출되는 텍스트의 색상, 폰
트등이 높은 확률로 변치 않는다면, 해당 정보를 해당 현장 데이터의 prior information
으로 활용해볼 수 있을 것이다.

<!-- p.26 -->
25
1. 파이썬(Python) 설치
파이썬은 컴퓨터 언어로서 최근 데이터 분석 및 AI 분석모델 개발 등에 널리 사용되는 도구이다.
다운로드 및 설치가 간편하고 활용도가 높은 파이썬을 로컬 컴퓨터에 설치하고 적용하는 방법
을 안내한다.
① google.com 등의 검색 엔진에 ‘python’을 검색한다.
② 제일 처음에 보이는 ‘Welcome to Python.org’를 클릭한다.
부록 _ 분석환경 구축을 위한 설치 가이드
3

<!-- p.27 -->
26
③ 클릭후 보이는 페이지의 정면에서 상단 좌측 2번째 ‘Downloads’를 클릭한다.
④ 컴퓨터의 운영체제에 따라 상단에서 세번째(macOS의 경우 네번째) 탭을 선택한 후, Python
3.10.0을 다운로드한다. (Python 3.10.0 버전은 업데이트 될 수 있다)
⑤ 아래와 같은 설치창이 뜨면, ‘Install Now’를 클릭한다.

<!-- p.28 -->
27
⑥ 아래와 같은 설치 진행창이 완료가 될 때까지 유지한다.
⑦ 완료가 되면 아래와 같은 창이 뜨는 것을 확인 후 종료한다. [설치완료]

<!-- p.29 -->
28
2. 아나콘다(Anaconda) 설치
아나콘다란 파이썬과 같은 분석 도구를 사용할 때 필요한 고급 기능 및 분석을 보조하는 도구이
다. 아나콘다를 설치함으로써 다양한 기능들을 바로 사용할 수 있고, 결과물을 쉽게 확인할 수
있다. 아나콘다를 설치하고 분석을 실시할 수 있는 환경을 구축하는 방법에 대해 안내한다.
① https://www.anaconda.com/distribution/ 로 접속한다.

<!-- p.30 -->
29
 ② 다음과 같은 화면이 나올 때 까지 스크롤하여 아래로 내린 후, 로컬 컴퓨터 사용 환경에 맞는
파일을 다운받는다.
▶ Windows: 64-Bit Graphical Installer
▶ MacOS: 64-Bit Graphical Installer
③ 다운로드 받은 파일로 이동하여, 설치된 아나콘다 파일 위에서 마우스 오른쪽을 클릭한 후,
방패모양의 ‘관리자 권한으로 실행’을 클릭한다.
▶ (예) ‘다운로드’ 폴더로 아나콘다를 다운 받은 경우

<!-- p.31 -->
30
④ 파일을 실행 한 후, ‘Next’ 버튼을 클릭한다.
⑤ 다음 창이 나타나면 ‘I Agree’를 선택한다.

<!-- p.32 -->
31
⑥ 셋팅 창이 뜨면 화면의 ‘All Users’를 선택 후 아래의 ‘Next’를 클릭한다.
⑦ 다운로드 받을 경로를 물어보는 창이 뜨면, 아래의 ‘Next’를 클릭한다.

<!-- p.33 -->
32
⑧ 고급 옵션 선택창이 뜨면, 아래와 같이 모두 선택 후, ‘Install’을 클릭한다.
⑨ 다음과 같은 설치창이 뜨면 완료가 될 때까지 대기 (5분이상 소요)

<!-- p.34 -->
33
⑩ 마지막 화면에서, 모두 체크 해제한 후, ‘Finish’를 눌러 설치를 완료한다.
⑪ 화면상의 ‘홈(
)'키를 눌러서 화면과 같이 anaconda prompt가 잘 설치 되었는지를 확인
한다. Anaconda Navigator, Anaconda Prompt, Jupyter Notebook 등의 다른 응용 프로
그램들도 함께 확인이 된다면 설치가 완료된 것이다.

<!-- p.35 -->
34
3. 주피터 노트북 (Jupyter Notebook) 실행
주피터 노트북은 실제로 사용자가 코딩(분석 문장 작성)을 할 수 있는 도구이다. 쉽게 비교하자
면, 문서 도구로 마이크로소프트 사의 ‘Word’ 프로그램이나, 한컴소프트 사의 ‘한글’ 프로그램
등과 같은 도구라고 생각할 수 있다. 데이터 분석에 다양한 입력, 실행 도구가 있지만, 본 가이드
북에서는 주피터 노트북을 활용하는 방법을 안내하기로 한다. Anaconda를 설치한 이후 주피터
노트북(Jupyter Notebook) 설치 방법을 확인하면 된다.
① 화면상의 ‘홈(
)'키를 눌러서 화면과 같이 'anaconda' 검색 및 폴더 리스트 중 ‘Jupyter
Notebook (anaconda3)’을 실행한다.
② Jupyter Notebook을 클릭시 아래처럼 2개의 윈도우가 실행된다.
(1) 검은색 배경의 화면은 주피터 노트북이 실행되는 환경에 대한 상태를 나타내주는 상태 표
시 창이다. 주피터 노트북을 사용하는 동안 종료하면 안된다.

<!-- p.36 -->
35
(2) 사용하는 인터넷 프로그램(크롬, 인터넷 익스플로러)에 주피터 노트북이 열린다. (다른 확
장 프로그램 사용하고 싶다면 기본 브라우저를 변경해주어야한다)
③데이터를 저장하고, 불러오고, 분석할 경로의 폴더를 하나 생성한다.
▶ (예) ‘바탕화면’에 ‘python data’ 폴더를 생성 후 (미리 생성), 파이썬 코드 실행하고 저장한다.
(1) 주피터 노트북에서 ‘python data’ 폴더를 확인한다.

<!-- p.37 -->
36
(2) python data에서 파이썬 파일을 생성한다. 오른쪽 상단의 ‘New’를 누른 후, ‘Python
3’을 선택한다.
(3) ‘hello world’ 출력을 확인해본다. 보이는 In [ ] 우측 회색 창에 print(‘hello world’)
입력 후, 상단의
 버튼 혹은 shift + Enter 키를 눌러서 실행한다. 코드 파일의 확
장자는 '.ipynb’로 저장된다.

<!-- p.38 -->
37
4. 아나콘다 가상환경 설정
가상환경 : 독립적인 작업환경에서 패키지 및 버전 관리를 하기 위한 가상의 환경을 의미한다.
각 패키지(모듈, 라이브러리)는 버전에 따라 의존성을 갖고 있으므로 오류가 발생할 수 있으며,
이를 관리하기 위해 가상환경을 사용하여 가상환경마다 다른 패키지 버전을 사용할 수 있다.
① ‘Anaconda Prompt’ 실행
* ‘Anaconda Prompt’는 실습을 진행하는 동안 종료시키면 안 되며, 켜둔 상태로 진행

<!-- p.39 -->
38
② 가상환경 생성
1) ‘conda create -n test python=3.7’ 입력 후 엔터
2) ‘y’ 입력 후 엔터

<!-- p.40 -->
39
3) 가상환경 생성 완료
4) 가상환경 진입 - ‘conda activate test’ 입력 후 엔터
5) 가상환경 종료 - ‘conda deactivate’ 입력 후 엔터

<!-- p.41 -->
40
5. 주피터 노트북(Jupyter Notebook) 설정
주피터 노트북(Jupyter Notebook) : 파이썬 코딩을 할 수 있는 대화형 인터프리터
(Interpreter)로 웹 브라우저 환경에서 파이썬 코드를 작성 및 실행할 수 있는 툴이다.
① 가상환경 진입
‘conda activate test’ 입력 후 엔터
② 주피터 노트북 설치
‘conda install jupyter notebook’ 입력 후 엔터, 중간에 ‘y’ 입력 후 엔터
③ 주피터 노트북 테스트
‘jupyter notebook’ 입력 후 엔터
④ 주피터 노트북 시작 폴더 설정
1) ‘jupyter notebook --generate-config’ 입력 후 엔터
2) 입력 후 아래에 출력되는 경로에 진입하여 ‘jupyter_notebook_config.py’ 파일을 메모장
으로 열기
3) 메모장에서 ‘#c.NotebookApp.notebook_dir=’‘’ 문장 찾기
4) ‘#c.NotebookApp.notebook_dir=’‘’를 찾아서 ‘c.NotebookApp.notebook_
dir=folder_directory’로 변경
[그림 54]  기존 가상환경 Base Directory 코드

<!-- p.42 -->
41
[그림 55] 변경하는 가상환경 Directory 코드
* folder_directory는 주피터 노트북을 시작하고 저장하는 기본 폴더로 해당 위치에 모든 작
업물이 저장된다. 시작 전 folder_directory를 해당 위치에 생성시켜줘야 함.
* folder_directory 예시 : ‘C:\JupyterTest’ (folder_directory는 작은따옴표까지 포함되어야 함)
5) 변경 완료 후 저장 및 메모장 종료
⑤ 주피터 노트북 커널 추가
1) ‘pip install ipykernel’ 입력 후 엔터
2) ‘python -m ipykernel install --user --name test —display-name “test”’ 입력
후 엔터

<!-- p.43 -->
42
• 아나콘다 패스 설정 오류
– 아래의 경로를 최대한 변경하지 않는 것이 좋다. 모든 모듈은 저 베이스를 가본으로 하므로
특이한 사항이 아니라면 저 경로 그대로 진행하도록 한다.
만일 경로를 다르게 지정했다면 보통은 잘 진행된다. 하지만 특이 케이스에는 모듈을 불러올
때 에러가 발생할 수 있다는점 인지하고 설치하기 바란다. 이 이슈가 발생한다면 아나콘다를
삭제하고 재설치 작업을 진행하기를 추천한다.

<!-- p.44 -->
43
• Add Anaconda3 to the system PATH environment variable 미 체크 경우
• 패키지끼리의 버전 충돌 혹은 호완되지 않는 각각의 패키지
- 케라스(Keras)라던지, 텐서플로(TensorFlow)처럼 타 패키지에 영향을 많이 받는 모듈은 최
대한 가상환경을 생성하고 base보다는 가상환경을 생성해서 설치하는 것이 좋다. 또한, 아
나콘다를 사용한다면 가능한 conda로 설치(install)하고 관리하는 것을 추천한다.
이유는 아래와 같다.
◦ conda의 경우는 아나콘다에서 지원하는 혹은 사용 가능한 패키지만 관리한다.
◦ pip 같은 경우는 python에서 사용 가능하다고 한 것만 관리하는 패키지이다.
여기서 주의할 점은 간혹 같은 패키지이지만 설치 방법이 다른 경우가 있고 호환이 안 될 수도 있다는 점
이다.
부득이하게 conda install 안될 때가 있다. 이렇게 설치가 안 된다면 pip로 시도해보거나 그래도 동작하지
않는다면
아래와 같이 진행하면 된다.

<!-- p.45 -->
44
1. 콘솔 창을 연다.
2. 아나콘다 경로 아래에 bin이라는 폴더 경로까지 이동한후
3. `pip install 설치 패키지`로 설치하면 동작하는 것을 확인 할 수 있으며 아래 그림과 같이 설치하면 된다.
6. 리눅스/우분투 기반 Jupyter Notebook 원격 접속
윈도우 환경에서 코드를 개발하기 힘들 경우, 우분투 서버에 주피터 노트북을 설치 후 주피터
노트북 서버를 실행해두면 원격으로 접속이 가능하다.
① cmd, putty등을 활용하여 해당 서버 접속 및 주피터 노트북 설치
‘pip install jupyter’ 입력 후 엔터, 중간에 ‘y’ 입력 후 엔터
‘pip install ipykernel’ 입력 후 엔터
② 주피터 노트북 테스트
‘jupyter notebook’ 입력 후 엔터
③ 주피터 노트북 비밀번호 설정
1) ‘jupyter notebook —generate-config’ 입력 후 엔터
2) ‘ipython’ 입력
3) ‘from notebook.auth import passwd’ 입력
4) ‘passwd()’ 입력시 패스워드 생성
5) Enter password -> 비밀번호 입력
6) verify password -> 비밀번호 입력, 입력시 출력되는 암호화된 비밀번호 복사해놓기 (뒤
에서 사용)
7) exit() 종료

<!-- p.46 -->
45
④ 주피터 노트북 Configuration 설정
1) ‘jupyter notebook --generate-config’ 입력 후 엔터
2) 입력 후 아래에 출력되는 경로에 진입하여 ‘jupyter_notebook_config.py’ 파일을 메모장
으로 열기
3) 메모장에서 아래와 같은 부분의 주석을 해제하여 입력
c.NotebookApp.ip = #접속할 ip 입력(우분투 서버 ip)
c.NotebookApp.open_browser = False  # 원격 실행이므로 브라우저 실행x
c.NotebookApp.password = #미리 복사해놓은 암호화된 비밀번호 붙여넣기
c.NotebookApp.password_required = True # 비밀번호 요구
c.NotebookApp.port = 8888 # 8888 포트번호 열기
⑤ 주피터 노트북 커널 추가
1) ‘pip install ipykernel’ 입력 후 엔터
2) ‘python -m ipykernel install --user --name test —display-name “test”’ 입력 후 엔
터 (가상환경명이 test일 경우의 예시)
⑥ 주피터 노트북 실행
‘jupyter notebook’ 입력 후 엔터
http://xxx.xxx.xx.xx:888x/ 링크 복사하여 브라우저를 통해 접속

<!-- p.47 -->
46
③에서 설정한 비밀번호를 입력하여 주피터 노트북 접속 및 코드 디렉토리로 이동 및 실행.

<!-- p.48 -->
「제조현장용
Scene-Text Recognition
학습 AI 데이터셋
분석실습 가이드북
34141 대전광역시 유성구 대학로 291 한국과학기술원(KAIST)   T. (042)350-2114   F. (042)350-2210(2220)
