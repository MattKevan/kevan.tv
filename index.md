---
title: User experience, design & code.
layout: page
---

---

## Links

{% assign sort = site.posts | where: 'type','link' | sort: 'date' | reverse %}
{% for item in sort limit:4 %}		
{% include link.html %}
{% endfor %}

[More links »](/links)

---

## Blog


{% assign datesort = site.posts | where: 'type','article' | sort: 'date' | reverse %}
{% for article in datesort limit: 3 %}
{% include article-teaser.html %}
{% endfor %}

[More articles »](/blog)


---

## Work
<div class="project-grid">
{% assign sort = site.work | sort: 'date' | reverse %}
{% for item in sort limit: 2 %}
{% include work-teaser.html %}
{% endfor %}
</div>
[More projects »](/work)

---

## Art
<div class="project-grid">
{% assign sort = site.art | sort: 'date' | reverse %}
{% for item in sort limit: 2 %}
{% include work-teaser.html %}
{% endfor %}
</div>
[More projects »](/art)