---
author: ameyjadiye
layout: post
title: "'N' for NodeJS"
date: 2014-08-17 11:45
comments: true
category : nodejs
tags:
- nodejs
---

From last few months i came across the the coolest thing in programming and because of that i'm gonna teach my childrens that 'N' is for NodeJS ;)

Nodejs is the programmig platform developed by some super awesome people who love Javascript by heart over the Googles V8 VM which powers your crome.

I used to use the javascript scence i was 17 years old ,but never expected that node will make it work on servers, i'm really happy it works well :)

Their are many programming languages crowding out on streets like Ruby, Cloujur, Lua, Scala, Go .... any many more but NodeJs is little diffrent, its lightweight easy to build and maintain as its nothing but the javascript, a newbie in a crowd also can program it well, just need to think diffrently.

As [Wikipedia](http://en.wikipedia.org/wiki/Nodejs) says: "Node.js is a packaged compilation of Google’s V8 JavaScript engine, the libuv platform abstraction layer, and a core library, which is itself primarily written in JavaScript." Beyond that, it’s worth noting that Ryan Dahl, the creator of Node.js, was aiming to create real-time websites with push capability, "inspired by applications like Gmail". In Node.js, he gave developers a tool for working in the non-blocking, event-driven I/O paradigm.

The main idea of Node.js is to use non-blocking, event-driven I/O to remain lightweight and efficient in the face of data-intensive real-time applications that run across distributed devices...... it means you can use node for whatever you want, the way you like.


Let me show you how to install and run few easy programs based on nodeJS.

+ First thing install it, you gonna need nodejs and **npm** (Node package manager), you will need it to  install diffrent node packages , packages are just like a gems in Ruby or Jars in Java.

{%highlight bash%}
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
{%endhighlight%}

Walah .. you got all you want (y), not put the below code say in server.js

{%highlight javascript%}
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8080);

{%endhighlight%}
Run it

{%highlight bash%}
node server.js
{%endhighlight%}


But this gonna spawn the single threaded application for you sticking to only one core, we have quad, hexa, octa core processors now day, how node will adjust with it? well, node can do preety anything, [Cluster](http://nodejs.org/api/cluster.html) is there for you.

install package with npm

{%highlight bash%}
sudo npm install cluster
{%endhighlight%}


and run below code say in cluster.js

{%highlight javascript%}
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
  // Workers can share any TCP connection
  // In this case its a HTTP server
  http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(8080);
}
{%endhighlight%}


When i did a performacen testing of clustered code, it sucked all juice of my XPS, and fan was running like a Ferrari.

{%highlight bash%}
amey@amey-xps:~/work/node$ ab -c 8 -k -n 1000000 "http://localhost:8080/"
This is ApacheBench, Version 2.3 <$Revision: 655654 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100000 requests
Completed 200000 requests
Completed 300000 requests
Completed 400000 requests
Completed 500000 requests
Completed 600000 requests
Completed 700000 requests
Completed 800000 requests
Completed 900000 requests
Completed 1000000 requests
Finished 1000000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /
Document Length:        12 bytes

Concurrency Level:      8
Time taken for tests:   75.377 seconds
Complete requests:      1000000
Failed requests:        0
Write errors:           0
Keep-Alive requests:    0
Total transferred:      87000000 bytes
HTML transferred:       12000000 bytes
Requests per second:    13266.56 [#/sec] (mean)
Time per request:       0.603 [ms] (mean)
Time per request:       0.075 [ms] (mean, across all concurrent requests)
Transfer rate:          1127.14 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       6
Processing:     0    0   0.4      0      28
Waiting:        0    0   0.4      0      28
Total:          0    1   0.4      1      28

Percentage of the requests served within a certain time (ms)
  50%      1
  66%      1
  75%      1
  80%      1
  90%      1
  95%      1
  98%      1
  99%      1
 100%     28 (longest request)

{%endhighlight%}


And i said Req/sec : **13266.56** Wow :)
Loved NodeJS ♥

A small but awesome tutorial i found on youtube, hope you will love it.

Happy coding .. :)

<p id="vidn">
<iframe style="height: 315px;width: 560px;text-align: center !important;" src="https://www.youtube.com/embed/ndKRjmA6WNA"  frameborder="0">
</iframe> 
</p>
