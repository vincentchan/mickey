---
author: ameyjadiye
layout: post
title: "Working with GIT patch"
date: 2014-12-31 11:36
category : Linux
comments: true
tags:
- git, patch
---

My last post in 2014 ;), *Working with git patches*.

Git is a famous versioning tool now days, many times you git access to work directly with your remote repo but few times you dont, Patch file is to save you there.

you can work locally and commit all the changes to local repository, create patch file with your authority and send to review, reviewer will chech the code and signoff your commit to remote repo as you dont have assess.

So here are steps to work with it.

+ create patch file with last few commits, say i want to send my last 3 commits to review and apply do :

{% highlight bash%} 
git format-patch -3 HEAD --stdout > my-last-3-commits.patch
{% endhighlight %}

+ Applying patch (this is for reviewer)
First step is check the patch.
{% highlight bash%}
git apply --stat my-last-3-commits.patch
{% endhighlight %}

Second  step is check the patch, git allows you to try it and see how troublesome is the code.
{% highlight bash%}
git apply --check my-last-3-commits.patch
{% endhighlight %}

If it didnt gave any error, you are good to go.

Now final part is to use git am rather than git apply as it allows you to *sign off* the commit for future reffrence.
{% highlight bash%}
git am --signoff < my-last-3-commits.patch
{% endhighlight %}

Happy coding and a happy new year 2015 :)
