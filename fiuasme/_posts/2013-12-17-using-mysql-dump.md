---
author: ameyjadiye
layout: post
title: "Using MySQL dump"
date: 2013-12-17 20:00
category : Database
comments: true
tags:
- database
- mysql
---

HI All, mysqldump is a very handy and useful command for keeping backup of your Db or to migrate them to another server.

lets see how can we use it in different way ..

+ To take a backup of data from mysqlserver itsself
{% highlight sql %}
mysqldump -u root -p'my_password' my_db_name > /root/my_dump_file.sql
{% endhighlight %}
+ To take dump from remote server where i have access.
{% highlight sql %}
mysqldump -h xxxxx.xxx.us-east-1.rds.amazonaws.com -u root -p'my_aws_password' my_remot_db_name   > /vol1/my_dump_file.sql
{% endhighlight %}
+ To take dump from remote server but with only selected tables  where i have access.
{% highlight sql %}
mysqldump -h xxxxx.xxx.us-east-1.rds.amazonaws.com -u root -p'my_aws_password' my_remot_db_name  table3 table2 table3 > /vol1/my_dump_file.sql
{% endhighlight %}
+ Resorting back dump  to local  mysqlserver
{% highlight sql %}
mysql  -u root -p'my_aws_password' my_remot_db_name   < /vol1/my_dump_file.sql
{% endhighlight %}
+ Resorting back dump  to remote  mysqlserver
{% highlight sql %}
mysql  -h xxxxx.xxx.us-east-1.rds.amazonaws.com -u root -p'my_aws_password' my_remot_db_name   < /vol1/my_dump_file.sql
{% endhighlight %}


Happy Coding .... :)
