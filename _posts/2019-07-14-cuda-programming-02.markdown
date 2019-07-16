---
layout: post
title:  "CUDA Programming 시도 (2)"
date:   2019-07-14 00:14:00
last_modified_at:  2019-07-15 00:41:00
excerpt: ""
categories: lab
tags:  Jetson Nano, CUDA
image:
  feature: mickey-riding.jpg
  topPosition: 0px
bgContrast: dark
bgGradientOpacity: darker
syntaxHighlighter: no
---

자 그럼 기본적인 키워드에 대한 파악을 했으니 덧셈을 통해 CUDA Programming이 어떻게 동작하는지 살펴보자.

간단한 덧셈을 GPU에서 해 볼 생각이다.

작성한 코드는 다음과 같다.

<blockquote class="u--startsWithDoubleQuote">
#include &#60;stdio.h&#62;
<br><br>

&#95;&#95;global__ void kernel(int a, int b, int *c) {<br>


    *c = a + b ;  

}<br>

int main (void) {<br>

      int c;<br>
      int *d_c;<br>

      cudaMalloc((void**)&d_c, sizeof(int));<br><br>

      kernel<<<1,1>>>(2,5,d_c);<br><br>

      cudaMemcpy(c,d_c,sizeof(int),cudaMemcpyDeviceToHost);<br><br>

      printf("2 + 5 = %d",c);<br><br>

      cudaFree(d_c);<br><br>

      return 0;<br>

}
</blockquote>

코드를 보면서 이런 생각이 들었을 것 같다.

<div class="img img--fullContainer img--14xLeading" style="background-image: url({{ site.baseurl_posts_img }}ato_smile.jpg);"></div>

"간단한 코드를 둘러보자고 해놓고 메모리 할당을 하고 있다.

이게 어디가 간단한것인가"

그러나 cuda programming의 가장 기본 틀이라고 할 수 있다..

왜냐하면 cuda programming은 다음과 같은 처리과정을 가지기 때문이다.

- CPU가 GPU에게 메모리를 할당함 (cudaMalloc)
- CPU가 CPU에서 입력 받은 데이터를 GPU로 복사함 (cudaMemcpy)
- CPU가 입력받은 데이터를 처리할 kernel(GPU에서 실행 될 코드)을 호출한다.
- CPU가 GPU에서 처리된 결과물을 가져온다.

기본적으로 이러한 구조를 가지기 때문에, c언어에서 메모리 할당에 대한 경험이 있으면 이해하기 좋다.

그렇다면 코드에서 새로 발견한 키워드인 cudaMalloc과 cudaMemcpy에 대해서 알아보자.

cudaMalloc은 malloc의 cuda버전이다.

반환타입이 void* 인것만 제외하고 사용방법이나 기능 자체는 같다.

malloc을 처음 들어 본다면, 이 [포스팅](https://dojang.io/mod/page/view.php?id=285)을 참고하면 되겠다.

cudaMemcpy도 memcpy의 cuda버전이라고 생각하면 된다.

다만 cudaMemcpy는 memcpy와 다르게 마지막에 하나의 파라미터를 더 제공 받아야 한다.

메모리를 어디서 복사해 올 것인지에 대한 키워드를 입력해 주어야 한다.

파라미터로 입력하는 키워드는 다음과 같다.

cudaMemcpyHostToDevice : CPU에서 GPU로 메모리를 복사
cudaMemcpyDeviceToHost : GPU에서 CPU로 메모리를 복사
cudaMemcpyDeviceToDevice : GPU에서 GPU로 메모리를 복사

키워드를 막 외우려고 한다면 잘 안외워진다. 내가 메모리를 복사할때 어디에 있는 메모리를 어디로 복사 할 것인지를 생각하면 외우지 않아도 사용하기 좋다.

마찬가지로 memcpy를 처음 들어 본다면, 이 [포스팅](https://dojang.io/mod/page/view.php?id=439)을 참고 바란다.

자, 그렇다면 소스코드를 컴파일하고 실행을 해보자.

기본적으로 Jetson에는 cuda-10.0이 설치되어 있기 때문에 cuda 파일을 컴파일 할 수 있다.

c언어를 컴파일 할 때에 gcc 컴파일러를 사용했다면, cuda 파일을 컴파일 할 때는 nvcc 라는 컴파일러를 사용하면 된다.

만약 Jetson에서 nvcc 컴파일러를 찾을 수 없다는 반응이 나온다면, path 설정이 되어 있지 않은 경우이다

<blockquote class="u--startsWithDoubleQuote">
vi ~/.bashrc
</blockquote>

를 실행하여 파일의 맨 끝에 다음과 같이 경로를 설정해주자.

<blockquote class="u--startsWithDoubleQuote">
export PATH=/usr/local/cuda-10.0/bin${PATH:+:PATH}}<br>
export LD_LIBRARY_PATH=/usr/local/cuda-10.0/lib64{LD_LIBRARY_PATH:+LD_LIBRARY_PATH}}
</blockquote>

기본적인 동작은 다음과 같다.

<blockquote class="u--startsWithDoubleQuote">
nvcc 파일명.cu
</blockquote>

결과는 한번 실행 해보길 바란다. 신기하지만 우리가 아는 결과가 나올 것이다.
