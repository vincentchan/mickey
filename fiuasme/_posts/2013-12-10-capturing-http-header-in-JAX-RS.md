---
author: ameyjadiye
layout: post
title: "Capturing HTTP Header In JAX-RS"
date: 2013-12-10 20:30
comments: true
category: java
tags:
- java
- webservices
---

In this post i will explain you how to capture http-request header in JAX-RS.

+ Using @HeaderParam
+ Using @Context

###@HeaderParam Example

In this example we can have only the selected attribute we want , JAX-RS will have filter internally and return you the selected Attributes

{% highlight java %}
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
 
import org.apache.log4j.Logger;
 
public class RequestHandler
{
 
Logger logger = Logger.getLogger(RequestHandler.class);
 
private DataServiceController dataServiceController;
 
@Path("/ready")
@GET
@Produces(MediaType.TEXT_HTML)
public boolean ready(@HeaderParam("user-agent") String userAgent)
{
 
logger.info("User Agent : " + userAgent);
 
return true;
}
}
 
{% endhighlight %}
 

This will going to print below output :
{% highlight bash %}
User Agent : Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.112 Safari/534.30
{% endhighlight %}

### @Context Example

@Context gives you the whole damn Request Header

{% highlight java %}

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
 
import org.apache.log4j.Logger;
 
public class RequestHandler
{
 
    Logger logger = Logger.getLogger(RequestHandler.class);
 
    private DataServiceController dataServiceController;
 
    @Path("/ready")
    @GET
    @Produces(MediaType.TEXT_HTML)
    public boolean ready(@Context HttpHeaders headers)
    {
 
for(String header : headers.getRequestHeaders().keySet()){
            System.out.print(header + "==> ");
             for (String value : headers.getRequestHeader(header)) {
                System.out.print(value + ":");
            }
            System.out.println();
        }
 
return true;
}
}
{% endhighlight %}

This will going to print below output :
{% highlight bash %}

Accept==> text/html:application/xhtml+xml:application/xml;q=0.9:*/*;q=0.8:
accept-encoding==> gzip:deflate:
accept-language==> en-US:en;q=0.5:
connection==> keep-alive:
Content-Type==> 
host==> localhost:8080:
user-agent==> Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:25.0) Gecko/20100101 Firefox/25.0:
{% endhighlight %}



Happy Coding .. :)
