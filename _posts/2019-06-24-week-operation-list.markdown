---
layout: post
title:  "주간 작업 내역"
date:   2019-06-24 03:15:00
last_modified_at:  2019-06-24 03:15:00
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

6월 5째주

분류 |목표     | 진행상황     | 문제점    |    해결방안   
----- | -------------- | -------------- | -------------------- | ------------  
1 |  Numerical Python 이나 pandas Assignment 완벽히 풀어내기 | 보류 | 이번주에 우선적으로 해야 할 사항이 있어서 미뤄짐. | 우선적으로 맡은 역할을 처리 한 후 진행.
1 | kaggle titanic 문제 해석하기 | 보류 | 이번주에 우선적으로 해야 할 사항이 있어서 미뤄짐. | 우선적으로 맡은 역할을 처리 한 후 진행.(방학 안으로는 제출이 목표)
1+| JetsonNano Benchmark | 87.5% | nvidia benchmark에 포함되어 있는 model중 한 model이 컴파일 과정에서 killed되어, 측정을 못함 | 다른 연구원들과 killed되는 이유를 찾고, 해결방안을 찾아본다.
1+ | JetsonNano에서 Cuda programming 맛보기 | 100 % | Assign되어 있는 목표는 완료하였으나, 추가적으로 할당받은 programming에 대한 작업은 아직 시도하지 못함. | Easier intro to CUDA Programming을 참고하여 Programming 시도할 것
1+ | NVidia Jetson Nano 강의 | Convolution Neural Networks까지 학습 | 사실 진행상황보다 많이 진행되었으나, jupyter labtop을 이용해서 jetson nano를 접속하지 못하여 작업이 진행되지 못함. | jupyter labtop 관련 정보 찾아 보고 접속할 수 있게 하기
2 | Cuda Programming 시도하기 |  | Cuda를 처음 접해보는 것이라서 어려움이 예상됨. | Easier intro to CUDA Programming을 참고하여 Programming 시도할 것
2 | JetsonNano imagenet_camera의 결과출력문구 수정 및 명령어 해석 |  | 1.Linux명령어에 대해 익숙치 않아서 해석이 힘들것으로 예상. 2.imagenet_camera의 코드 해석이 어려울 것으로 에상. | imagenet_camera의 코드를 최대한 이해하고 결과가 출력을 하는 부분이라도 찾아보는 쪽으로 한다.

- 보류한 내역에 대해서도 진행해야 함.


6월 4째주


분류 |목표     | 진행상황     | 문제점    |    해결방안   
----- | -------------- | -------------- | -------------------- | ------------  
1 | 머신러닝 강의듣기 | Chapter 6 -1 | 실습없이 가볍게 들어서 Numerical Python & pandas에 대한 개념이 모자르다.  강의를 알아듣기 힘들어졌음 | 다시 한번 듣기. Chapter 6부터 Assignment가 나오므로 풀어 볼 수 있을 정도의 실력 만들기
1 | JetsonNano 물체인식 코드 돌려보기 | 완료 | Jetson으로 추가적인 모듈을 이용한 작업을 해 보고 싶음 | 관련된 모듈을 찾아보거나, Jetson을 사용하여 할 수 있는 가벼운 프로젝트 생각
2 | Numerical Python 이나 pandas Assignment 완벽히 풀어내기 | | 개념적인 면이 아직 모자르기 때문에 어려움이 큼 | 다른 연구원들과 같이 해보기. 강사가 수업하는 github 찾아서 해설 보기
2 | kaggle titanic 문제 해석하기 | | Numerical Python & pandas에 대한 개념이 모자르다. | kaggle 공식홈페이지에서 정답률이 높은 사람이 푼 방법을 확인하여 이해하기
