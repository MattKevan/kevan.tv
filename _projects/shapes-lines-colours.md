---
title: Shapes Lines Colours
date: '2018-12-19 00:00:00'
description: Abstract artwork, created daily.
thumbnail: "/images/slc.png"
tags:
- Personal project
- Art
cover: slc1-cover.jpg
theme: dark
---

#### Notice:

* There must be 3 artworks created daily.
* They must be created on an iPhone.
* This will continue for a year.

Status: Complete.

--- 

<div class="grid wide">
	{% assign i = 0 %}
	{% for i in (1..969) %}
	<img src="https://res.cloudinary.com/dp5mvntv7/image/upload/c_scale,w_600/p1/{{ i }}.jpg" alt="{{ i }}" title="{{ i }}" />
	{% endfor %}
</div>