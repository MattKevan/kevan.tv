---
title: "How to set up a Gopher server on a Raspberry Pi"
date: 2019-06-24
layout: post
tags:
- Article
categories:
- Retro tech
- Raspberry Pi
image: /images/gopher2-2.jpg
description: Run your own Gopher server in a few easy steps (and some harder ones). 
cover: pi-banner.jpg
type: article
---

To get the full Gopher experience, I realised I had to set up my own Gopher server. This turned out to be much easier than expected.  I used a Raspberry Pi, but it'll run on any Linux machine. 

## Setting up your Raspberry Pi

The Gopher server will work on any Raspberry Pi, as long as it's running a Linux variant of some sort. Rasbpian is recommended as it's the best supported option. Here's a [guide to setting up your Pi](https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up).

## Installing the Gopher server

```sudo apt install pygopherd```

## Configuring

Not much needs configuring, but the main things to do are to set the network name and the location of your Gopher files.

Open /etc/pygopherd/pygopherd.conf in an editor. Find the 'servername' entry and set it to the correct address. 

```servername = <IP or Domain>```

If you only want to access it on your local network, use your device's IP or hostname. If you want to make it available on Internet, then it should be the domain or IP you want to access it from. For example, I wanted my gopher site to be accessible from gopher://gopher.kevan.tv, so I set it to ```servername = gopher.kevan.tv```.


Next, choose the location of your Gopher files. By default this is /var/gopher but you may want to change it to somewhere more convenient, like in your home folder. In the config file, scroll down to the Filesystem and MIME section and change ```root = /var/gopher``` to ```root = <your folder path>```.

## Starting and stopping

Your Gopher server will be running by default, but you can control it with:

```sudo /etc/init.d/pygopherd stop```

```sudo /etc/init.d/pygopherd start```

```sudo /etc/init.d/pygopherd restart```

You'll need to stop and restart your server whenever you modify the config file for the changes to take effect.

## Remote access

I wanted to make my Gopher service accessible to the Internet, so I set up port forwarding on my router (Gopher uses port 70) and a dynamic DNS service – in this case a free [No–IP](https://www.noip.com) account. I then added a CNAME entry to my domain's DNS settings to map the No-IP address to gopher.kevan.tv.



