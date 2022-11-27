---
title: Black & white photography
date: '2019-3-24 00:00:00'
description: 
thumbnail: "/images/photo-thumb.jpg"
theme: dark
tags:
- Photography

---

<div class="grid wide">
	{% assign i = 0 %}
	{% for i in (1..24) %}
	<img src="/images/p{{ i }}.jpg" />
	{% endfor %}
</div>