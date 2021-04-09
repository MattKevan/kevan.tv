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

* Create 3 images every day.
* Use only an iPhone.

Status: Complete.

<hr>

{% assign i = 0 %}

{% for i in (1..969) %}
<div class="col-xs-4 slc">
	<img src="https://res.cloudinary.com/dp5mvntv7/image/upload/c_scale,w_600/p1/{{ i }}.jpg" alt="{{ i }}" title="{{ i }}" />
</div>
{% endfor %}