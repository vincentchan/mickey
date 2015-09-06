---
author: ameyjadiye
layout: post
title: "Super awesome automation testing"
date: 2014-08-30 21:45
comments: true
category: Testing
tags:
- python
- testing
---

As a ***born*** developer i never came across actual/serious testing of softwares, but some times you are the one man army of your project and gotta make all the things yourself.

I went through a situation where i needed to test the application on wide verity of OS and diffrent browsers for checking the compatibility of my app, doing it all of them manually is such a headache :(

Then i found a super awesome thing provided by [browserstack.com](https://www.browserstack.com/automate) with the power of *Selenium*, and boom i did it in few minuts, _god bless programmers_.

Here are few things you have to setup for testing your webapp quickly.

+ Create account on [browserstack.com](browserstack.com).
+ Go to **AUTOMATE**.
+ Keep the screen open.
+ click on *Username and Access Keys* upper left corner and put in code below, as in code i gave mine as ameyjadiye and xxxx....
+ Install few things as below.

{%highlight bash%}
sudo pip install selenium
vim automation_testing.py
{%endhighlight%}
copy and paste below code, modify according to your requirement.

{%highlight python%}
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

desired_cap_default = {'os': 'Windows', 'os_version': 'xp', 'browser': 'IE', 'browser_version': '7.0','browserstack.debug':'true' }

username='ameyjadiye3'
access_key='xxxxxxxxxxxxxxx'

def zip_zap_zoom(desired_cap=desired_cap_default):
        driver = webdriver.Remote(command_executor='http://'+username+':'+access_key+'@hub.browserstack.com:80/wd/hub',desired_capabilities=desired_cap)

        driver.get("http://www.google.com")
        if not "Google" in driver.title:
            raise Exception("Unable to load google page!")
        elem = driver.find_element_by_name("q")
        elem.send_keys("Amey Jadiye")
        elem.submit()
        print driver.title
        driver.quit()



def go_test():

        desired_cap_1 = {'os': 'Windows', 'os_version': 'xp', 'browser': 'IE', 'browser_version': '7.0','browserstack.debug':'true' }
        desired_cap_2 = {'os': 'Windows', 'os_version': '7', 'browser': 'Firefox', 'browser_version': '31.0','browserstack.debug':'true' }
        desired_cap_3 = {'os': 'OS X', 'os_version': 'Mavericks', 'browser': 'Safari', 'browser_version': '7.0','browserstack.debug':'true' }
        desired_cap_4 = {'os': 'Windows', 'os_version': '8.1', 'browser': 'Chrome', 'browser_version': '36.0','browserstack.debug':'true' }
        desired_cap_5 = {'browserName': 'android', 'platform': 'ANDROID', 'device': 'LG Nexus 4','browserstack.debug':'true' }
        desired_cap_6 = {'browserName': 'iPad', 'platform': 'MAC', 'device': 'iPad mini Retina','browserstack.debug':'true'}
        desired_cap_7 = {'browserName': 'iPad', 'platform': 'MAC', 'device': 'iPad mini Retina','browserstack.debug':'true'}
        desired_cap_8 = {'browserName': 'iPhone', 'platform': 'MAC', 'device': 'iPhone 5S'}

        all_platforms=(desired_cap_1, desired_cap_1, desired_cap_2, desired_cap_3, desired_cap_4, desired_cap_5, desired_cap_6, desired_cap_7, desired_cap_8)

        for test_platform in all_platforms:
                zip_zap_zoom(test_platform)
                print "Done : ", test_platform

if __name__ == "__main__":
        go_test()

{%endhighlight%}

Run the code, you will see something like below

{%highlight bash%}
amey@amey-xps:~/work/python$ python automated_test.py 
Amey Jadiye - Google Search
Done :  {'os_version': 'xp', 'browser_version': '7.0', 'os': 'Windows', 'browserstack.debug': 'true', 'browser': 'IE'}
Amey Jadiye - Google zoeken
Done :  {'os_version': '7', 'browser_version': '31.0', 'os': 'Windows', 'browserstack.debug': 'true', 'browser': 'Firefox'}
Amey Jadiye - Google zoeken
Done :  {'os_version': 'Mavericks', 'browser_version': '7.0', 'os': 'OS X', 'browserstack.debug': 'true', 'browser': 'Safari'}
Amey Jadiye - Google Search
Done :  {'os_version': '8.1', 'browser_version': '36.0', 'os': 'Windows', 'browserstack.debug': 'true', 'browser': 'Chrome'}
Amey Jadiye - Google zoeken
Done :  {'device': 'LG Nexus 4', 'platform': 'ANDROID', 'browserName': 'android', 'browserstack.debug': 'true'}
Amey Jadiye - Google zoeken
Done :  {'device': 'iPad mini Retina', 'platform': 'MAC', 'browserName': 'iPad', 'browserstack.debug': 'true'}
Amey Jadiye - Google zoeken
Done :  {'device': 'iPhone 5S', 'platform': 'MAC', 'browserName': 'iPhone'}
{%endhighlight%}

Another Awesome thing browserstack provides is visual logs i.e Screenshots for test done by them, you just have to give _'browserstack.debug': 'true'_ as a extra parameter.

below are the few screen shots taken from my test.

![Automation page]({{ site.url }}/images/screenshot-1.png)
![Screenshot1]({{ site.url }}/images/screenshot-2.jpeg)
![Screenshot2]({{ site.url }}/images/screenshot-3.jpeg)
![Screenshot3]({{ site.url }}/images/screenshot-4.jpeg)

Unknowingly i found a bug in browserstack, see the screeshot's, by default they should use english but google page is in Dutch, may be their servers are located in europ with dutch version of OS :p

Happy coding .... :)
