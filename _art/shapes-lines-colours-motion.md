---
title: "Shapes Lines Colours – CMY motion"
date: '2021-04-01 00:00:00'
description: Abstract motion graphics with cyan, magenta and yellow.
thumbnail: "/images/cmy-motion.jpg"
cover: motion-banner.jpg
tags:
- Self-initiated
- Art
---

#### Notice:

* There must only be cyan, magenta and yellow.
* There may be blend modes applied.
* The animations must loop.
* There must be be 85 animations.

Status: 33% complete.

---

<div class="grid wide">
	{% assign i = 0 %}
	{% for i in (1..28) %}
	<video width="100%" controls loop>
	<source src="https://res.cloudinary.com/dp5mvntv7/video/upload/v1617879457/phase4/{{ i }}.mov" type="video/mp4">
	</video>
	{% endfor %}
</div>