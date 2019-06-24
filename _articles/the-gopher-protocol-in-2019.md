---
title: "Exploring the Gopher protocol in 2019"
date: 2019-06-24 00:00:00 +0000
layout: post
tags:
- Gopher
- Internet history
description: In the beginning, before the Web, there was Gopher. 

---

Introduced in 1991, Gopher is a lightweight protocol designed for distributing, searching and retrieving documents over the Internet. It's long been supplanted by HTTP and the modern Web as we know it, but it stubbornly clings to life in various places. And there's many reasons why in 2019 it's still an interesting choice to use.

## Why Gopher now?

*It's lightweight and fast.* Gopher files are just plain text, in compariston to standard web pages have tens of megabytes of images, CSS and tracking scripts. 

## How to browse Gopher sites

Gopher isn't supported natively by most Web browsers, but there's still plenty of ways to access Gopher content:

**Gopher on iOS** 

I was delighted to find there was a [native iOS Gopher client](https://apps.apple.com/gb/app/gopher-client/id1235310088) – £1.99 well spent.

**Gopher on the Mac** 

After exploring a bunch of alternatives, I found the [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29) text-only browser worked best. Install with [Homebrew](https://brew.sh) by running ```brew install lynx```. Accessing a Gopher site is as simple as ```lynx gopher://<site-url>```.

**Gopher in a browser** 

There are [Firefox](http://gopher.floodgap.com/overbite/) and [Chrome](https://chrome.google.com/webstore/detail/burrow-gopherspace-explor/plhaaggiajlcjclagmjnjmaonhkdhhji) extensions, and Floodgap Systems maintain a [Gopher-to-HTTP proxy](http://gopher.floodgap.com/gopher/), enabling access to any Gopher site in a standard Web browser. 

## Running a Gopher server

To get the full Gopher experience, I realised I had to set up my own Gopher server. This turned out to be much easier than expected.  I used a Raspberry Pi, but it'll run on any Linux machine. 

### Installing

```sudo apt install pygopherd```

### Configuring

Not much needs configuring, but the main things to do are to set the network name and the location of your Gopher files.

Open /etc/pygopherd/pygopherd.conf in an editor. Find the 'servername' entry and set it to the correct address. 

```servername = <IP or Domain>```

If you only want to access it on your local network, use device's IP or hostname. If you want to make it available on Internet, then it should be the domain or IP you want to access it from. For example, I wanted my gopher site to be accessible from gopher://gopher.kevan.tv, so I set it to ```servername = gopher.kevan.tv```.


Next, choose the location of your Gopher files. By default this is /var/gopher but you may want to change it to somewhere more convenient, like in your home folder. In the config file, scroll down to the Filesystem and MIME section and change ```root = /var/gopher``` to ```root = <your folder path>```.

### Starting and stopping

Your Gopher server will be running by default, but you can control it with:

```sudo /etc/init.d/pygopherd stop```

```sudo /etc/init.d/pygopherd start```

```sudo /etc/init.d/pygopherd restart```

You'll need to stop and restart your server whenever you modify the config file for the changes to take effect.

### Remote access

I wanted to make my Gopher service accessible to the Internet, so I set up port forwarding on my router (Gopher uses port 70) and a dynamic DNS service (in this case [No–IP](https://www.noip.com)). I then used a CNAME entry in my domain's DNS settings to map the No-IP address to gopher.kevan.tv.



