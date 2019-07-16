---
layout: post
title:  "주간 작업 내역"
date:   2019-06-24 03:15:00
last_modified_at:  2019-07-10 04:15:00
excerpt: "이 글은 주간 작업 내역을 기록하는 글이다."
categories: lab
tags:  python
image:
  feature: mickey-lab.jpg
  topPosition: 0px
bgContrast: dark
bgGradientOpacity: darker
syntaxHighlighter: no
---

안내
==
이 글은 주간 작업 내역을 나타내는 것을 목표로 한다.

한 주간 한 내역을 표로 나타내고, 그 다음주의 목표까지 기술한다.

- 분류의 1은 저번주의 목표내역, 2는 이번주의 목표를 뜻한다.
- 분류의 번호에 +기호가 붙은것은 우선적으로 처리해야 할 사항이었거나, 목표를 세웠을때와 다르게 추가적인 작업이 생겼을 경우, 처리한 작업에 대해 나타냄.
- 이번주의 목표에 +가 붙은 경우, 목표로 세운 것이 다 완료 되었을때 추가적으로 할 작업에 대해 작성된 내용임.

7월 2째주

분류 |목표     | 진행상황     | 문제점    |    해결방안   
----- | -------------- | -------------- | -------------------- | ------------  
1 |  Cuda Programming <br>시도하기 | 50% | 행렬 덧셈 코드 작성 중 오류를 해결하지 못함  | 오류 해결 후 행렬 곱셈코드 만들어보기
1| SSA 코드 빌드/실행 및 논문 분석 | 50% | ssa_kernel.cu 코드와 논문을 자세히 살펴보지 않았음. | 1.코드숙지 필요.<br>2.논문 작성을 위해 논문 자세히 읽어볼 것(Method란 작성해야 함)
1 | JetsonNano devicequery 결과에 대한 nvidia에 질의하기 | 80 % | 답변이 안옴.... | 영작을 수정하여 질문을 다시 해야 할지도 모름...
1 | Udacity cuda 강의 | 90% | 수강은 다 하였으나, 차원에 대한 이해가 부족하다고 느껴짐. | 1.강의 여러번 시청<br> 2.빌려온 서적으로 추가 학습
1 | 전체적인 이번주 목표 완성도 높이기 | 60% | 지난주에 목표로 잡았던 것들을 많이 해냇으나, 아직 완성도가 부족하다고 느낌. | 목표로 잡은 내용을 빠르게 해결하고 mpi실습으로 넘어갈 것.
1+ | JetsonNano에 openmpi 설치하기 | 50% | 1.설치시에 라이브러리 하나가 삭제되어서 설치하지 못하였음.(mpi code 실행은 됨.)<br> 2.1대의 jetson에만 설치하였음  | 1.대체하는 라이브러리가 있는지 확인(실행에 문제가 없다면 넘어가도 될 듯 함)<br> 2. 2대의 jetson에 설치하여 병렬처리 시도해보기(NFS 설치)
2 | openmpi 공부 |  | openmpi를 처음 접해봄 | 1.주로 쓰이는 키워드에 대한 파악<br>2.MPI에 대한 이해<br>3.프로그래밍
2+ | SSA코드 병렬 실행 | |

- NVidia 측에 질문한 내용 : [링크](https://devtalk.nvidia.com/default/topic/1057267/cuda-memcheck/how-can-i-calculate-total-amount-of-global-memory-/post/5360791/#5360791)

- SSA코드 grid,block 변화에 따른 실행 결과  
(cuda : 128개, 단위 : 초 )        
|grid|block|result
|------|---|---
|2|64|7.6
|**4**|**32**|6.4
|8|16|6.5
|16|8|5.7
|32|4|8.0
|64|2|13.1

- openmpi quick install for Ubuntu  
<blockquote class="u--startsWithDoubleQuote">sudo apt-get install openmpi-bin openmpi-common openssh-client openssh-server libopenmpi1.3 libopenmpi-dbg libopenmpi-dev</blockquote>
  - libopenmpi1.3 package를 찾을 수 없다고 떠서 뒤의 숫자를 버전으로 생각하고 libopenmpi2를 install
  - libopenmpi-dbg package를 찾을 수 없다고 떠서 찾아보니 ubuntu내에서 15년 5월 이후부터 지운상태로 보여짐
  <div class="img img--fullContainer img--12xLeading" style="background-image: url({{ site.baseurl_posts_img }}libopenmpi-dbgs_status.png);"></div>
  - 간단한 mpi programming 결과
  <div class="img img--fullContainer img--12xLeading" style="background-image: url({{ site.baseurl_posts_img }}mpi_programming_result.png);"></div>


7월 1째주

분류 |목표     | 진행상황     | 문제점    |    해결방안   
----- | -------------- | -------------- | -------------------- | ------------  
1 |  Cuda Programming <br>시도하기 | 30% | 처음 접하는 내용과 개념 이기도 하고, c언어에 대해 미숙한 상태에서 진행.  | 지난주의 목표로 생각했던 점(간단한 병렬 프로그램 제작)을 보충하여 포스팅 작성할 것.
1 | JetsonNano imagenet_camera의 결과출력문구 수정 및 명령어 해석 | 완료 |  | 하단 부분에 사진 참조.
1+| SSA 코드 빌드/실행 및 논문 분석 | 5% | 1.synchronize on the stop event 발생<br> 2. 코드에 대한 이해 부족.. 3.영어.... | 교수님께 질의 할 것...
1+ | JetsonNano devicequery 결과에 대한 nvidia에 질의하기 | 50 % | 상세하게 global memory 계산하는 방법에 대해 질의해야함.<br> 찾아본 내용에서는 구조체의 멤버로서 선언 되어 있었음.. | 영작 완료 후 nvidia에 질의할 것.
1+ | NVidia Jetson Nano 강의 | Convolution Neural Networks까지 학습 | Jetson nano를 jupyter lab으로 실행할 수 있게 처음부터 다시 설정해야 해서 cuda programming이 우선이라고 생각해서 보류하였음. | 1.assign 되어 있는 cuda programming 관련 과제가 끝나면 시도<br> 2. 다른 연구원의 jetson으로 실행.
1+ | Udacity cuda 강의 | 33/39 | kernel 선언시에 작성하는 parallel block의 수와 스레드 수를 선언하는 것에 대한 이해 부족 | 1.강의 여러번 시청<br> 2.빌려온 서적으로 추가 학습
2 | Cuda Programming <br>시도하기 |  |  | Cuda programming에 익숙해지는 시간 가지기.
2 | 전체적인 저번주 목표 완성도 높이기 | |

- Udacity 강의 진도 - Configuring the Kernel Launch Parameters Part 1 - Intro to Parallel Programming
<div class="img img--fullContainer img--14xLeading" style="background-image: url({{ site.baseurl_posts_img }}190709-jetsonnano-result-change.png);"></div>

<div class="img img--fullContainer img--14xLeading" style="background-image: url({{ site.baseurl_posts_img }}190710ssa-failed.png);"></div>


6월 5째주

분류 |목표     | 진행상황     | 문제점    |    해결방안   
----- | -------------- | -------------- | -------------------- | ------------  
1 |  Numerical Python 이나 pandas Assignment <br>완벽히 풀어내기 | 보류 | 이번주에 우선적으로 해야 할 사항이 있어서 미뤄짐. | 우선적으로 맡은 역할을 처리 한 후 진행.
1 | kaggle titanic <br>문제 해석하기 | 보류 | 이번주에 우선적으로 해야 할 사항이 있어서 미뤄짐. | 우선적으로 맡은 역할을 처리 한 후 진행.(방학 안으로는 제출이 목표)
1+| JetsonNano Benchmark | 87.5% | nvidia benchmark에 포함되어 있는 model중 한 model이 컴파일 과정에서 killed되어, 측정을 못함 | 다른 연구원들과 killed되는 이유를 찾고, 해결방안을 찾아본다.
1+ | JetsonNano에서 Cuda programming <br>맛보기 | 100 % | Assign되어 있는 목표는 완료하였으나, 추가적으로 할당받은 programming에 대한 작업은 아직 시도하지 못함. | Easier intro to CUDA Programming을 참고하여 Programming 시도할 것
1+ | NVidia Jetson Nano 강의 | Convolution Neural Networks까지 학습 | 사실 진행상황보다 많이 진행되었으나, jupyter labtop을 이용해서 jetson nano를 접속하지 못하여 작업이 진행되지 못함. | jupyter labtop 관련 정보 찾아 보고 접속할 수 있게 하기
2 | Cuda Programming <br>시도하기 |  | Cuda를 처음 접해보는 것이라서 어려움이 예상됨. | Easier intro to CUDA Programming을 참고하여 Programming 시도할 것
2 | JetsonNano imagenet_camera의 결과출력문구 수정 및 명령어 해석 |  | 1.Linux명령어에 대해 익숙치 않아서 해석이 힘들것으로 예상. 2.imagenet_camera의 코드 해석이 어려울 것으로 에상. | imagenet_camera의 코드를 최대한 이해하고 결과가 출력을 하는 부분이라도 찾아보는 쪽으로 한다.

- 보류한 내역에 대해서도 진행해야 함.


6월 4째주


분류 |목표     | 진행상황     | 문제점    |    해결방안   
----- | -------------- | -------------- | -------------------- | ------------  
1 | 머신러닝 강의듣기 | Chapter 6 -1 | 실습없이 가볍게 들어서 Numerical Python & pandas에 대한 개념이 모자르다.  강의를 알아듣기 힘들어졌음 | 다시 한번 듣기. Chapter 6부터 Assignment가 나오므로 풀어 볼 수 있을 정도의 실력 만들기
1 | JetsonNano 물체인식 코드 돌려보기 | 완료 | Jetson으로 추가적인 모듈을 이용한 작업을 해 보고 싶음 | 관련된 모듈을 찾아보거나, Jetson을 사용하여 할 수 있는 가벼운 프로젝트 생각
2 | Numerical Python 이나 pandas Assignment 완벽히 풀어내기 | | 개념적인 면이 아직 모자르기 때문에 어려움이 큼 | 다른 연구원들과 같이 해보기. 강사가 수업하는 github 찾아서 해설 보기
2 | kaggle titanic 문제 해석하기 | | Numerical Python & pandas에 대한 개념이 모자르다. | kaggle 공식홈페이지에서 정답률이 높은 사람이 푼 방법을 확인하여 이해하기
