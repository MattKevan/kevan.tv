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

## Writing

{% assign datesort = site.posts | where: 'type','article' | sort: 'date' | reverse %}
{% for article in datesort limit: 3 %}
{% include article-teaser.html %}
{% endfor %}

[More writing »](/articles)

---

## Projects

{% assign sort = site.projects | sort: 'date' | reverse %}
{% for item in sort limit: 3 %}
{% include work-teaser.html %}
{% endfor %}

[More projects »](/projects)