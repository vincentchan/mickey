---
layout: post
title:  "Jetson nano benchmark에 사용된 Inference Network model"
date:   2019-06-28 02:09:00
last_modified_at:  2019-06-28 02:09:00
excerpt: "저번 Jetson Nano Benchmark에서 지나간 내용인 Network model에 대해서 간단히 알아보자. 저번에 Benchmark를 했던 모델들만 진행한다."
categories: lab
tags:  Network model
image:
  feature: mickey-oreo.jpg
  topPosition: 0px
bgContrast: dark
bgGradientOpacity: darker
syntaxHighlighter: no
---
Inference Network model
==

저번 Jetson Nano Benchmark에서 지나간 내용인 Network model에 대해서 간단히 알아보자.

저번에 Benchmark를 했던 모델들만 진행한다.

## ResNet

deep learning은 기본적으로 network의 깊이가 깊어질수록 성능이 더 좋아진다 라고 생각한다.

그렇다면, 이런 생각이 문득 들 것이다.

### "무조건 network만 깊게 하면 성능이 좋아진다고? 그러면 layer를 늘려서 깊게 설계하면 좋아진다는 말이 되는거네"

그런 생각을 가지고 실험을 하였다. 과연 network와 성능이 무조건적인 비례관계를 가지는 것인가 ...  

<div class="img img--fullContainer img--14xLeading" style="background-image: url({{ site.baseurl_posts_img }}degradation_problem.png);"></div>
출처 - https://hichoe95.tistory.com/35

특정 부분까지는 network가 깊으면 깊을수록 성능이 좋아지는 것이 사실이나, 특정 부분을 벗어나게 되면 오히려 성능이 더 떨어지는 현상이 발생하였다.

*degradation* 문제가 발생했기 때문이다.

network의 깊이가 깊어질수록, 정확도가 포화(더이상 받아들일 수 없는 상태)되고 급속도로 성능이 저하되는 것

쉽게 말해 얕은 깊이를 가진 model이 깊은 깊이를 가진 model보다 우수한 성능을 보이는 현상이 일어나는 것이다.

과적합(overfitting)의 문제라면 test error만 높은 수치로 나타나야 한다.

그러므로 deep model에 적합한 layer를 추가한 것이 higher training error로 이어진 것 이라고 보는것이 맞다. training error도 높은 수치이니 말이다.


이 현상을 해결하기 위해서 *Identity mapping* 과 *Residual learning* 을 사용하였다.

<div class="img img--fullContainer img--14xLeading" style="background-image: url({{ site.baseurl_posts_img }}residual_learning.PNG);"></div>

(relu = 음수의 값을 0으로 매핑, 활성화(activate))

기존의 Neural network의 학습목적이 input값을 target으로 mapping하는 함수 f(x)를 찾는 것이라고 한다면, Neural network는 f(x) - target이 최소화 하는 방향으로 학습을 한다.

ResNet은 f(x) - input를 얻는 것이 목표이다.  입력과 출력의 차이를
## g(x) = f(x) - input
로서 표현하고 Network는 g(x)를 학습하는 것이다.

이렇게 되면,
## f(x) = g(x) + input
으로 표현이 가능하다.

이와 같은 방법을 *skip connection* 이라고 하는데 layer의 입력을 layer의 출력에 바로 연결시키는 방법이다.

위 방식을 사용한 Convolution Neural Network가 **ResNet** 이고 잔차를 학습하는 것이기 때문에 ResNet 이라고 불리운다.

출처 - [Deep Residual Learning for Image Recognition](https://arxiv.org/pdf/1512.03385.pdf)   
    - https://hichoe95.tistory.com/35  
    - https://datascienceschool.net/view-notebook/958022040c544257aa7ba88643d6c032/  
    - https://m.blog.naver.com/PostView.nhn?blogId=laonple&logNo=221259295035&proxyReferer=https%3A%2F%2Fwww.google.com%2F
