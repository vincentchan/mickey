---
layout: post
title:  "CUDA는 과연 그래픽카드에서 실행이 되는 것일까?"
date:   2019-07-15 17:00:00
last_modified_at:  2019-07-17 00:25:00
excerpt: ""
categories: lab
tags:  Jetson Nano, CUDA
image:
  feature: mickey-questions.jpg
  topPosition: 0px
bgContrast: dark
bgGradientOpacity: darker
syntaxHighlighter: no
---

갑자기 이런 생각이 든다.

_겨우 예전에 함수 선언 하는거에서 __&#95;&#95;global&#95;&#95;__ 이라는 키워드만 하나 붙었다고
그게 그래픽카드에서 처리가 된다는게 말이 되나? 생각보다 너무 간단한 것 같은데 아무래도 의심스럽다._

그렇다면 코드로서, 간단하게 알아보자.

일반적으로 처리해야 하는 데이터가 엄청 많지 않은 이상, CPU는 GPU보다 속도가 빠를 것이다.

그렇다면 CPU에서 처리하는 일반적인 함수와 __&#95;&#95;global&#95;&#95;__ 이라는 키워드가 붙는 GPU에서 처리하는 함수의 수행속도를 비교하면 될 것이다.

코드는 다음과 같다.

* * *

<blockquote class="u--startsWithDoubleQuote">
#include  &#60;stdio.h &#62;<br>
#include  &#60;time.h &#62;<br><br>

&#95;&#95;global__ void kernel(int a, int b, int *c){<br><br>

    *c = a + b;<br><br>

}<br><br>

void sum(int a, int b, int *c){<br><br>

    *c = a + b;<br><br>

}<br><br>

int main(void){<br><br>

    int c; <br>
    int *dev_c; <br>
    clock_t start, end; <br>

    //GPU Programming <br>

    cudaMalloc((void**))&dev_c, sizeof(int)); <br>
    start = clock(); <br>
    kernel<<<1,1>>>(2,5,dev_c); <br>
    end = clock(); <br>

    printf("cuda programming time = %lf\n", (end-start)/(double)1000); <br>
    cudaMemcpy(&c, dev_c, sizeof(int), cudaMallocDeviceToHost); <br>
    printf("2 + 5 = %d\n", c); <br>
    cudaFree(dev_c); <br>

    //CPU Programming <br>

    dev_c = (int*)malloc(sizeof(int)); <br>
    start = clock(); <br>
    sum(2,5,dev_c); <br>
    end = clock(); <br>

    memcpy(&c, dev_c, sizeof(int)); <br>
    printf("cpu programming time = %lf\n", (end-start)/(double)1000); <br>
    printf("2 + 5 = %d\n", c); <br>
    free(dev_c); <br><br>

    return 0; <br>
}<br>
</blockquote>

* * *

각 함수가 시작되고 종료되는 시간의 차이를 이용하여 시간을 측정하고, 그 시간을 출력하여 어디서 실행된 함수가 수행속도가 빠른지 알 수 있다.

저번 포스팅에서 이야기했던 nvcc 컴파일러를 사용해서 컴파일해보시라 !

결과가 어떻게 나오는가?
