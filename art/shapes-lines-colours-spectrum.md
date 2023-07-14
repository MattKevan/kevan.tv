---
title: "Shapes Lines Colours – Spectrum"
date: 2020-12-19 00:00:00
description: The RGB colour space in 510 geometric artworks.
image: "/images/slc-2020.png"
cover: slc2-cover.jpg
tags:
- Abstract art
- Art
layout: post

---

#### Notice:

* There may only be lines.
* There may only be one colour.
* The colour must start at red.
* The colour must increment 3 RGB points.
* There must be 510 images.

Status: 50% complete.

---

<div class="grid wide">
{% assign i = 0 %}
{% for i in (1..255) %}
<img src="https://res.cloudinary.com/dp5mvntv7/image/upload/c_scale,w_600/v1589979350/phase2/{{ i }}.jpg" alt="{{ i }}" title="{{ i }}" />
{% endfor %}
</div>