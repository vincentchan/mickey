---
author: ameyjadiye
layout: post
title: "Install lollipop 5.0 to Nexus 4"
date: 2014-11-23 21:00
comments: true
category : android
tags:
- android
- lollipop
---

Google takes lot of time to throw OTA update to your phone, may be they do it lot by lot for not loading their servers, if you are lucky you got it early else wait for may days :p.

I was lucky i got it early but my nexus4 also had Ubuntu so at the time of reboot i lost that upgrade routine :(, and i was so eager to see brand new Android 5.0 Lollipop i Flashed my Nexus 4(worth it!).

Here are few steps i did for flashing my Nexus 4, that will upgrade your kitkat 4.4.4 (KTU84P) to **Lollipop 5.0 (LRX21T)**, easy to do for you guys :)


+ First thing is to install ADB and Fastboot to your machine, i use ubuntu so **apt-get** is easy way to get it.

{% highlight bash%}
sudo add-apt-repository ppa:phablet-team/tools
sudo apt-get update
sudo apt-get install android-tools-adb android-tools-fastboot
{%endhighlight%}

+ Now connect  Nexus 4 to your machine via USB, make sure you enable your USB debugging ON, so start USB Debugging go to Settings >> Developer Options >> USB debugging. (If you dont have Developer Options go to Settings >> About Phone >> Build number and tap on Build number until you become developer).

<img src="{{ site.url }}/images/nxs2.png" style="height: 25%;width: 25%;"/>
<img src="{{ site.url }}/images/nxs1.png" style="height: 25%;width: 25%;"/>

Now try below commands to make sure you are connected to machine.

{% highlight bash%}
amey@amey-xps:~$ adb devices -l
List of devices attached 
0202dc7rh2934b2a    device usb:3-2 product:occam model:Nexus_4 device:mako
{%endhighlight%}

+ Now unlock bootloader 
Turn off your Nexus 4.
Press and hold Volume Down and Power to enter the Fastboot menu.
Connect the Nexus 4 to your computer via USB cable.

{% highlight bash%}
fastboot oem unlock
{%endhighlight%}
Press the Volume Up button on the Nexus 4 to accept the command and press the Power button to confirm. The bootloader will now be unlocked, you will loss all data with this.

+ Download the factory image from [Google](https://developers.google.com/android/nexus/images), OR direct download clicking [HERE](https://dl.google.com/dl/android/aosp/occam-lrx21t-factory-51cee750.tgz).
unzip it

{% highlight bash%}
tar -xf occam-lrx21t-factory-51cee750.tgz
cd occam-lrx21t
{%endhighlight%}
+ Now the final step to Flash and install new lollipop image to your Nexus 4

{% highlight bash%}
adb reboot-bootloader
sleep 15
sudo ./flash-all.sh
{%endhighlight%}

This command will  generate following logs on your terminal, put your password if prompted, your phone may be rebooted few times.

<img style="height: 25%;width: 25%;" src="{{ site.url }}/images/nxs3.jpg"/>

{% highlight bash%}
amey@amey-xps:~/Downloads/occam-lrx21t$ sudo ./flash-all.sh
Password:
sending 'bootloader' (2264 KB)...
OKAY [ 0.091s]
writing 'bootloader'...
OKAY [ 0.667s]
finished. total time: 0.758s
rebooting into bootloader...
OKAY [ 0.001s]
finished. total time: 0.001s
< waiting for device >
sending 'radio' (45537 KB)...
OKAY [ 1.607s]
writing 'radio'...
OKAY [ 3.458s]
finished. total time: 5.065s
rebooting into bootloader...
OKAY [ 0.001s]
finished. total time: 0.001s
< waiting for device >
archive does not contain 'boot.sig'
archive does not contain 'recovery.sig'

archive does not contain 'system.sig'
--------------------------------------------
Bootloader Version...: MAKOZ30f
Baseband Version.....: M9615A-CEFWMAZM-2.0.1701.04
Serial Number........: 0202dc7d0b934b2a
--------------------------------------------
checking product...
OKAY [ 0.002s]
checking version-bootloader...
OKAY [ 0.002s]
checking version-baseband...
OKAY [ 0.002s]
sending 'boot' (6348 KB)...
OKAY [ 0.725s]
writing 'boot'...
OKAY [ 0.357s]
sending 'recovery' (6892 KB)...
OKAY [ 0.853s]
writing 'recovery'...
OKAY [ 0.453s]
erasing 'system'...
OKAY [ 2.274s]
sending 'system' (809641 KB)...
OKAY [ 25.485s]
writing 'system'...
OKAY [ 63.027s]
erasing 'userdata'...
OKAY [ 40.306s]
formatting 'userdata' partition...
Creating filesystem with parameters:
Size: 14129561600
Block size: 4096
Blocks per group: 32768
Inodes per group: 8144
Inode size: 256
Journal blocks: 32768
Label: 
Blocks: 3449600
Block groups: 106
Reserved block group size: 847
Created filesystem with 11/863264 inodes and 95427/3449600 blocks
sending 'userdata' (137438 KB)...
writing 'userdata'...
OKAY [ 15.651s]
erasing 'cache'...
OKAY [ 0.662s]
formatting 'cache' partition...
Creating filesystem with parameters:
Size: 587202560
Block size: 4096
Blocks per group: 32768
Inodes per group: 7168
Inode size: 256
Journal blocks: 2240
Label: 
Blocks: 143360
Block groups: 5
Reserved block group size: 39
Created filesystem with 11/35840 inodes and 4616/143360 blocks
sending 'cache' (10984 KB)...
writing 'cache'...
OKAY [ 1.090s]
rebooting...
finished. total time: 150.897s
{%endhighlight%}

If your phone missbehave after finishing, just hard reboot it pressing power button for few seconds.

Happy coding ..... :)
