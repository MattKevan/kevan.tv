---
title: "Exploring the Gopher protocol"
date: 2019-06-24
layout: post
tags:
- Article
categories:
- Retro tech
image: /images/gopher.jpg
description: In the beginning, before the Web, there was Gopher. 
type: article
---

Introduced in 1991, Gopher is a lightweight protocol designed for distributing, searching and retrieving documents over the Internet. It's long been supplanted by HTTP and the modern Web as we know it, but it stubbornly clings to life in various places. And there's many reasons why in 2019 it's still an interesting choice to use.

## Why Gopher? Why now?

**It's lightweight and fast.** Gopher pages are just plain text, in compariston to web pages which can contain many megabytes of images, CSS, ads and tracking scripts. Perfect for low-bandwidth connections and low powered machines.

**It's interesting.** It's fun to see how the Internet got to where it is today and to explore pre-Web technologies. Had Tim Berners Lee never sat down in front of his Next cube and written HTTP, we may all still be using Gopher today.

**It's noncommercial.** The Web as we know it today is dominated by megacorporations, turning the dream of a better world through cyberspace into a surveillance capitalism nightmare. Gopher sidesteps all of that. A hark back to a simpler and more optimistic time.


## How do I browse Gopher sites?

Gopher isn't supported natively by most Web browsers, but there's still plenty of ways to access Gopher content:

#### Gopher on iOS

I was delighted to find there is a native iOS [Gopher client](https://apps.apple.com/gb/app/gopher-client/id1235310088) – £1.99 well spent.

#### Gopher on the Mac

After exploring a bunch of alternatives, I found the [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29) text-only browser worked best. Install with [Homebrew](https://brew.sh) by running ```brew install lynx```. Accessing a Gopher site is as simple as ```lynx gopher://<site-url>```.

#### Gopher in a browser

There are [Firefox](http://gopher.floodgap.com/overbite/) and [Chrome](https://chrome.google.com/webstore/detail/burrow-gopherspace-explor/plhaaggiajlcjclagmjnjmaonhkdhhji) extensions, and Floodgap maintains a [Gopher-to-HTTP proxy](http://gopher.floodgap.com/gopher/), enabling access to any Gopher site in a standard Web browser. 

## What content can I find?

I was surprised at how much content is actually available. Most Gopher sites are hosted by enthusiasts or community-run servers, and it's all determinedly, refreshingly non-commercial. Here's some recommended links, though you'll need one of the clients above to view them:

**[Floodgap](gopher://gopher.floodgap.com)** – Probably the best place to start exploring Gopherspace. As well as hosting Veronica-2, a Gopher search engine, Floodgap also links to a wide range of Gopher resources.

**[Gopherpedia](gopher://gopherpedia.com)** – A direct Gopher interface to Wikipedia.

**[Hacker News](gopher://hngopher.com)** – A mirrored version of Hacker News, updated hourly.

**[Gophereddit](gopher://gopherreddit.com)** – Simple Gopher interface to Reddit.

**[Floodgap's list of known servers](gopher://gopher.floodgap.com/1/world)** – All servers found by the Veronica-2 search engine.

**[Kevan.tv](gopher://gopher.kevan.tv)** – A work-in-progress Gopher version of this site.

**See the next post on [how to set up your own Gopher server](/articles/how-to-set-up-a-gopher-server-on-a-raspberry-pi/).**