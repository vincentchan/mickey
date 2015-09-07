---
author: ameyjadiye
layout: post
title: "Bang-Bang, Be lazy!!"
date: 2014-09-14 09:00
category : Linux
comments: true
tags:
- linux
---

I found another great thing linux provides for the lazy programmers ;)
Most of the time we need to repeat the commands we entered in linux terminal and many hardworking engineers typing it again and again ;)

Famous quote **"Those who cannot remember the past are condemned to repeat it"** preety much applies here when you use commandline mode to operate your machine or working on remote server via ssh.

Linux provides many tools which remembers history and on top of that we can make our life easy.

Usually i work on servers and whenever try to fire few root access commands and it dont allow  me!! -_-,feels insulting. 
Anyway **sudo !!**  is here to rescue you :)

<img  src="{{ site.url }}/images/bang-bang.jpg"/>

{% highlight bash bash%}
amey@amey-xps:~/$ touch /etc/apache2/apache2.conf 
touch: cannot touch ‘/etc/apache2/apache2.conf’: Permission denied
amey@amey-xps:~/work/blog/codeinventory.github.io/_posts$ sudo !!
sudo touch /etc/apache2/apache2.conf 
[sudo] password for amey: 
amey@amey-xps:~/$ 
{% endhighlight bash %}
Not only _sudo_, Bang (!) can do may more things <3

## Repeating Commands
### Repeat last command

{% highlight bash %}
!!
{%endhighlight bash%}
### Repeat last command that started with x
{% highlight bash %}
!x
{%endhighlight bash%}
### Repeat last command that has the substring x
{% highlight bash %}
!?x
{%endhighlight bash%}
### Repeat 10th command in the history file
{% highlight bash %}
!10
{%endhighlight bash%}
### Repeat 10th from last command in the history file
{% highlight bash %}
!-10
{%endhighlight bash%}
## Fetching Parameters
### Fetch parameters from last command
{% highlight bash %}
!!*
{%endhighlight bash%}
### Fetch first parameter from last command
{% highlight bash %}
!!^
{%endhighlight bash%}
### Fetch last parameter from last command
{% highlight bash %}
!!$
{%endhighlight bash%}
### Fetch third parameter from last command
{% highlight bash %}
!!3
{%endhighlight bash%}
## Modifiers
### Repeat last command substituting foo for bar
{% highlight bash %}
!!:s/foo/bar/
{%endhighlight bash%}
### Print last command without running it
{% highlight bash %}
!!:p
{%endhighlight bash%}

Happy coding ..... :)
