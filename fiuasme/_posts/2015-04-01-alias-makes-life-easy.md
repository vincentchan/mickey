---
author: ameyjadiye
layout: post
title: "Alias makes life easy"
date: 2015-04-01 18:45
category : Linux
comments: true
tags:
- alias, commands
---

From couple of years i'm using it but never thought its also shareable with community, alias is helping me shortning big and repeating commands, you just have to declare the short abbreviation of your short command and use it again n again, so here are usage : 

I use commandline git a lot, may be maven build and deploy too, so i have defined few commands for easy use.

Open the ~/.bashrc and copy-paste below lines, close .bashrc and repoen terminal to use it.

{% highlight bash %}

alias gs='git status'
alias gps='git push origin master' 
alias gpl='git pull origin master'
alias gc='git commit -am' # i use it like gc "this is commit message"
alias build='mvn clean compile install && cd target \ 
	     && scp -i xxx.pem 1.3.4.zip ubuntu@192.168.0.9:~/build/.'

{% endhighlight %}
 
