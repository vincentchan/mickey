---
author: ameyjadiye
layout: post
title: "Sentiment analysis with R"
date: 2015-05-10 20:00
category : analytics
comments: true
tags:
- R, analytics, sentiment, analysis
---

With lot of free time i did a small project based on WhatsApp group chat sentiment analysis with 'R'. R is a great language for statistical calculations and analytics, this small code sample can show you a showcase usefullness of that.

<table border="0" align="center">
<tr>
<td><img src="http://codeinventory.com/images/WA1.png" height="400" width="400"/></td>
<td><img src="http://codeinventory.com/images/WA2.png" height="400" width="400"/></td>
</tr>
<tr>
<td><img src="http://codeinventory.com/images/SA1.png" height="400" width="400"/></td>
<td><img src="http://codeinventory.com/images/SA2.png" height="400" width="400"/></td>
</tr>
</table>


Full project can be found here  [https://github.com/ameyjadiye/whatsapp-analyst](https://github.com/ameyjadiye/whatsapp-analyst)
{% highlight R %}
#!/usr/bin/r

# Load the necessary packages
library(wordcloud)
library(RColorBrewer)
library(plyr)
library(ggplot2)
library(sentiment)


whatsapp_chat_txt <- read.csv("__data_for_R",header=FALSE)$V3

#cat(whatsapp_chat_txt)

whatsapp_chat_txt = gsub("@\\w+", "", whatsapp_chat_txt)
whatsapp_chat_txt = gsub("[[:punct:]]", "", whatsapp_chat_txt)
whatsapp_chat_txt = gsub("[[:digit:]]", "", whatsapp_chat_txt)
whatsapp_chat_txt = gsub("http\\w+", "", whatsapp_chat_txt)
whatsapp_chat_txt = gsub("[ \t]{2,}", "", whatsapp_chat_txt)
whatsapp_chat_txt = gsub("^\\s+|\\s+$", "", whatsapp_chat_txt)


catch.error = function(x)
{
y = NA
catch_error = tryCatch(tolower(x), error=function(e) e)
if (!inherits(catch_error, "error"))
y = tolower(x)
return(y)
}
whatsapp_chat_txt = sapply(whatsapp_chat_txt, catch.error)

whatsapp_chat_txt = whatsapp_chat_txt[!is.na(whatsapp_chat_txt)]

names(whatsapp_chat_txt) = NULL

whatsapp_chat_class_emo = classify_emotion(whatsapp_chat_txt, algorithm="bayes", prior=1.0)

emotion = whatsapp_chat_class_emo[,7]

emotion[is.na(emotion)] = "unknown"

whatsapp_chat_class_pol = classify_polarity(whatsapp_chat_txt, algorithm="bayes")

polarity = whatsapp_chat_class_pol[,4]

sentiment_dataframe = data.frame(text=whatsapp_chat_txt, emotion=emotion, polarity=polarity, stringsAsFactors=FALSE)

sentiment_dataframe = within(sentiment_dataframe, emotion <- factor(emotion, levels=names(sort(table(emotion), decreasing=TRUE))))

ggplot(sentiment_dataframe, aes(x=emotion)) + geom_bar(aes(y=..count.., fill=emotion)) +
scale_fill_brewer(palette="Dark2") +
ggtitle('Sentiment Analysis with emotions categotisation') +
theme(legend.position='right') + ylab('Number of messages') + xlab('Emotion Categories')

ggsave(filename="./output/SA1.png")

ggplot(sentiment_dataframe, aes(x=polarity)) +
geom_bar(aes(y=..count.., fill=polarity)) +
scale_fill_brewer(palette="Dark2") +
ggtitle('Sentiment Analysis with polarity') +
theme(legend.position='right') + ylab('Number of messages') + xlab('Polarity Categories')

#SA2
ggsave(filename="./output/SA2.png")

whatsapp_chat_emos = levels(factor(sentiment_dataframe$emotion))
n_whatsapp_chat_emos = length(whatsapp_chat_emos)
whatsapp_chat.emo.docs = rep("", n_whatsapp_chat_emos)
for (i in 1:n_whatsapp_chat_emos)
{
tmp = whatsapp_chat_txt[emotion == whatsapp_chat_emos[i]]
whatsapp_chat.emo.docs[i] = paste(tmp, collapse=" ")
}

{% endhighlight %}

Happy coding .. :)
