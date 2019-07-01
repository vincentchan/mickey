---
layout: post
title:  "Jetson Nano '그 녀석'의 스펙"
date:   2019-07-02 02:41:00
last_modified_at:  2019-07-02 02:41:00
excerpt: ""
categories: lab
tags:  Jetson Nano
image:
  feature: mickey-hello.jpg
  topPosition: 0px
bgContrast: dark
bgGradientOpacity: darker
syntaxHighlighter: no
---
Jetson Nano '그 녀석'의 스펙
==
일반적으로 사람을 처음 만나면 이름, 나이, 주소 같은 개인 정보들을 물어본다.

그 사람에 대한 관심을 표하는 것이다.

그런데 나는 Jetson의 이름만 알지 다른 사항에 대해서는 아는 것이 없다.

그렇다. 나는 이 녀석에게 소홀했다.

그렇게 부려먹고도 Jetson에 대해 하나도 모른다는 것은 Jetson을 서운하게 할 수 있는 일이다.

지금부터 Jetson에 대해서 알아보면서 서운함을 풀어주도록 하자.

<div class="img img--fullContainer img--14xLeading" style="background-image: url({{ site.baseurl_posts_img }}jetson_nano_qualification.png);"></div>

출처 - [한컴MDS 온라인숍 - jetson nano](http://www.mdsshop.co.kr/product/detail.html?product_no=134&cate_no=59&display_group=1)  
중요 : **홍보 아님**

위 표에서 Jetson의 은밀한 사생활 정보를 알 수 있다.

간단하게 크기부터 시작해서 CPU, GPU, 메모리등등 많은 정보를 확인 할 수 있다.

그렇다면 위 표를 보고 Jetson이 머리가 좋은지 안좋은지 어떻게 알 수 있을까?

보통 친구들이 머리가 좋은지 궁금 할 때는 IQ,EQ 같은 것들을 물어본다.

Jetson에게 있어서 IQ, EQ같은 정보는 단연 CPU와 GPU라고 할 수 있겠다.

그럼 머리가 얼마나 좋은지 알아보자.

Jetson에 사용된 CPU는 쿼드 코어 ARM Cortex-A57 MPCore 프로세서라고 한다.

이름만 들어도 뭔지 모르겠는데 일단 멋은 있다. 영어로 쓰여 있어서 그런 것 같다.

ARM Cortex의 A는 **Application** 을 의미한다.

주로 복잡한 OS 및 사용자 응용 프로그램에 사용하는 응용 프로그램 프로세서 계열에 사용된다고 한다.

이 CPU가 사용된 핸드폰 모델은 삼성 갤럭시 S6 엣지 플러스, 삼성 갤럭시 노트5가 대표적이다.

아! 노트 5 ~ S6 edge plus 정도의 성능을 내는구나 라고 생각하면 될 것 같다.

다음으로 GPU에 대해 알아보자.

GPU는 128개의 NVIDIA CUDA core를 장착한 128-core Maxwell을 사용한다.

보통 CPU는 많이 들어보는데 GPU라는 말은 좀 들어보기 어려운 것 같다.

그럼 GPU란 무엇일까?

GPU는 Graphic Processing Unit의 줄임말로, 메모리를 빠르게 처리하고 바꾸어 화면으로 출력할 프레임 버퍼 안의 영상 생성을 가속하도록 설계된, 전문화된 전자 회로이다.

한글인데 무슨 말인지 잘 모르겠다. 쉽게 말하자면, 그래픽 카드에 들어있는 CPU로서 컴퓨터 그래픽을 처리하는 장치라고 생각하면 되겠다.

그래픽 처리는 CPU에 비해 병렬적으로 동시에 처리를 해야 하기 때문에(게임 화면 출력 등등) core가 많다.

그럼 GPU는 대충 이해가 되었다고 치고, 128개의 **CUDA core** 가 들어있다는데 이것은 또 무슨 소리인가 산넘어 산이다.

GPU라는 산을 넘었으니 이제 CUDA라는 산을 넘어보자. 이게 다 Jetson과 친해지는 과정들이다. 어렵게 사귄 친구일수록 더 깊게 친해질 수 있을것이다.

CUDA는 GPU컴퓨팅의 컴파일러 역할을 수행하는 도구라고 생각하면 간단하다.

우리가 Compile 과정을 통해서 고급언어(C,java)를 로 기계어로 번역하여 컴퓨터와 소통하는 것처럼 그래픽카드의 기능을 사용하기 위해 거쳐야 하는 과정인것이다.

GPU를 사용하면 순차적인 처리를 담당하는 CPU와는 다르게 병렬처리를 할 수가 있는데, 그렇다면 **"컴퓨터와는 고급 언어를 통해서 컴파일을 거쳐 소통을 하는데 그래픽 카드와 소통을 하려면 어떤 언어를 알아야 하는것인가?"** 의문이 들 것이다.

이 점이 바로 CUDA가 열일하는 점이라고 볼 수 있을 것 같다.

**CUDA**(Computed Unified Device Archetecture)는 GPU에서 수행하는 그래픽 병렬처리 알고리즘을 산업 표준 언어들을 사용하여 작성할 수 있도록 하는 *GPGPU* 기술이 접목되어 있어, C언어로 GPU 프로그래밍을 할 수 있게 해준다!

*GPGPU* - 일반적으로 컴퓨터 그래픽 처리를 위한 계산만 맡았던 GPU를 CPU가 맡은 응용 프로그램들의 계산에 사용하는 기술

nvidia에서는 cuda core라고 하고, AMD에서는 compute unit 또는 stream processor라고 한다.

Jetson은 태생이 nvidia 이므로 cuda를 가지고 있다.

잘 이해가 안된다면 nvidia에서 제공하는 [영상](https://www.youtube.com/watch?v=-P28LKWTzrI)을 참고하면 한방에 이해가 될 것이다.

<div class="img img--fullContainer img--14xLeading" style="background-image: url({{ site.baseurl_posts_img }}before&after.png);"></div>
-영상 보기 전 후가 이렇게나 다르다.  

자 이정도면 Jetson과 많이 친해진 듯 하다. 사실 거리감이 더 생긴 것 같지만.

자기 자신도 인식 못하는 기계라고 생각했는데 생각한것보다 많이 똑똑하다.

그렇다면 더 친해지도록 노력을 해보자.

CUDA가 설치되어 있는 경로로 가서 devicequery를 해보자.

절대로 Jetson의 스펙을 의심해서 query를 날려보는 것은 아니다.

CUDA가 설치되어 있는 경로에서 samples 폴더에 들어가면 devicequery 폴더가 있다.

그 폴더에 들어가면 makefile이 존재한다.

make를 치고 컴파일해주면 devicequery라는 실행프로그램이 생성된다.

해당 프로그램을 생성하면 Jetson의 정보를 확인할 수 있다.

<div class="img img--fullContainer img--14xLeading" style="background-image: url({{ site.baseurl_posts_img }}jetson_nano_devicequery.png);"></div>

정직한 정보를 제공해 준 한컴MDS 온라인숍에게 감사를 표하며 도망가도록 하자.

참고한 포스팅
- [nvidia blog](https://blogs.nvidia.co.kr/2018/01/16/cuda-toolkit/)  
- [cuda란 왜 사용하는 것인가](https://kaen2891.tistory.com/20)
- [playing with CUDA on MY NVIDIA Jetson Nano](https://smist08.wordpress.com/2019/04/03/playing-with-cuda-on-my-nvidia-jetson-nano/)
