---
author: ameyjadiye
layout: post
title: "Timezone conversion in python -Easy way"
date: 2014-08-08 10:17
comments: true
category: python
tags:
- python
---

This lib i found most usefulll [python-dateutil](http://niemeyer.net/python-dateutil).

```bash
sudo pip install python-dateutil
```

{% highlight python %}
from datetime import datetime
from dateutil import tz

date_str = "2014-08-08 19:18:01"
fmt="%Y-%m-%d %H:%M:%S"
from_zone = tz.gettz('UTC')
to_zone = tz.gettz('America/New_York')

utc = datetime.strptime(date_str, fmt)
utc = utc.replace(tzinfo=from_zone)
print utc.strftime(fmt)
# Convert time zone
central = utc.astimezone(to_zone)
print central.strftime(fmt)
{% endhighlight %}

Happy coding ..... :)
