---
author: ameyjadiye
layout: post
title: "Checking MySQL Database Size"
date: 2013-12-15 22:00
comments: true
category : Database
tags:
- database
- mysql
---

Hi all , in this post i am going to show you how to check current mysql database size, below queries are tested on Mysql 5.5.8

Just fire below queries on your mysql db you will have your results ready on terminal.

For calculating db size 2 things should be considered

+ Data length
+ Index length

###Checking for full database size on server :-

{% highlight sql%} 
SELECT table_schema "Database Name", SUM( data_length + index_length)
 / 1024 / 1024 /1024 "Size in GB" FROM information_schema.TABLES
 GROUP BY table_schema;
{% endhighlight %}

###Checking in details with each table size in single schema :-

{% highlight sql %}
SELECT TABLE_NAME, table_rows, data_length, index_length, 
round(((data_length + index_length) / 1024 / 1024 / 1024),2) "Size in GB"
FROM information_schema.TABLES WHERE table_schema = "your_schema_name";
{% endhighlight %}

_For checking the database size in MB just remove one '/1024' from quries._

Happy coding.. :)
