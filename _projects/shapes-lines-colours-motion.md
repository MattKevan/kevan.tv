---
title: "Shapes Lines Colours – CMY motion"
date: '2021-04-01 00:00:00'
description: Abstract motion graphics with cyan, magenta and yellow.
thumbnail: "/images/cmy-motion.jpg"
cover: motion-banner.jpg
tags:
- Personal project
- Art
---

#### Notice:

* Use only cyan, magenta and yellow.
* Multiply may be applied.
* Artworks must be animated.
* There must be be 85 animations.

Status: 33% complete.

<div class="wide">
<hr>
{% assign i = 0 %}

{% for i in (1..28) %}
<div class="col-xs-4 slc">
	<video width="100%" controls loop>
		<source src="https://res.cloudinary.com/dp5mvntv7/video/upload/v1617879457/phase4/{{ i }}.mov" type="video/mp4">
	</video>
</div>
{% endfor %}
</div>