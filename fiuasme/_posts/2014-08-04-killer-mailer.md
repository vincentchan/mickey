---
author: ameyjadiye
layout: post
title: "Killer mailer script in Python"
date: 2014-08-04 09:23
category : python
comments: true
tags:
- python
---


Hey guys i always needed a mailer script which can send me hourly/daily/weekly updates of my diffrent programs running on linux box.

I tried **sendmail** and **mutt** but they were not much impressive.

I made a python script for myself and this works like KILLER.

I dont had a SMTP details of my clients server neither access to it.

This badass script in python  worked well for me, hope it will help you too ;)

{% highlight python %}
#!/usr/bin/python

# Import smtplib for the actual sending function
import smtplib
import argparse

# Import the email modules we will need
from email.mime.text import MIMEText


parser = argparse.ArgumentParser(description='This is a demo script by Amey Jadiye')
parser.add_argument('-s','--subject', help='Subject',required=True)
parser.add_argument('-b','--body',help='Body', required=True)
parser.add_argument('-t','--to',help='To', required=True)
parser.add_argument('-f','--sender',help='From', required=False)
args = parser.parse_args()

msg = MIMEText(args.body)
# me == the sender's email address
# you == the recipient's email address
me="demo@any-domain-you-want.com"
if args.sender is not None:
        me=args.sender
you=args.to
msg['Subject'] = args.subject
msg['From'] = me
msg['To'] = you

# Send the message via our own SMTP server, but don't include the
# envelope header.
s = smtplib.SMTP('localhost')
s.sendmail(me, [you], msg.as_string())
s.quit()
{% endhighlight %}

if you do adjust following things you can send attachment too.

{%highlight python%}
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart

file='/home/amey-xps/logs/server.out.png'
fp = open(file, 'rb')
img = MIMEImage(fp.read())
fp.close()
msg.attach(img)

# I used image here , you can use diffrent file types with MIMEText, MIMEImage, MIMEAudio, MIMEBase

{% endhighlight %}



Happy coding ..... :)
