---
author: ameyjadiye
layout: post
title: "Functions in shell script"
date: 2014-01-19 15:09
comments: true
category: Linux
tags:
- shell
- linux
---

Have  lot of repeated shell code ? try writing function in that :)

writing functions in any languages lowers the headache of any programmer , it implements DRY (Do not Repeat Yourself!) rule and that’s cool to why would i write code again and again ? that’s bullshit!

i am explaining very usefull methods and tricks to write and use functions within shell.

taking an example ,i need to fetch data from mysql again and again and have to write big repeated code again and again ,let’s write a function for that and just pass your query to it
{% highlight bash %}
#!/bin/sh
 
sql_exec()
{
user=root
password=rut@123
result=mysql -u $user -p'$password' mydb -se "$@"
echo $result
}
 
count=$(sql_exec "select count(*) from my_table")
 
echo 'total number of rows are : ' $count
 
engr_count=$(sql_exec "select count(*) from my_table where job='ENGR'")
 
echo 'total engineer count is '$engr_count ' this saved my code repeating '
{% endhighlight %}

Here i passed all the coming arguments to functions to mysql by $@ you can differentiate  arguments by $1 $2 $3 ….. $n 

Always remember unlike C ,Java or any other language you must write functions before calling to it.

you can either echo $result or return $result it doesn’t matter but i prefer echo as it doesn’t make side effects of escape characters like \t \n etc.

Hope you got how to use functions in shell.

Happy coding ….. :)
