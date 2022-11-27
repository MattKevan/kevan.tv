---
title: About
layout: page
description: Hi, I'm a designer and artist with a mission to create innovative, people-first digital experiences through building and leading creative teams.
permalink: "/about/"
---
		

<p>I currently lead the UX team at <a href="https://www.highspeedtraining.co.uk" target="_blank">High Speed Training</a>. Before that I was lead UX designer at <a href="ao.com" target="_blank">AO.com</a>, head of product and design at <a href="https://www.mumsnet.com" target="_blank">Mumsnet</a> and creative manager at <a href="https://www.ndp-studio.com" target="_blank">NDP Studio</a>.</p>



<p>I also create art with generative artificial intelligence, draw, build websites and curate <a href="https://www.uxlift.org" target="_blank">UX Lift</a>, a newsletter and website featuring the latest UX news and resources.</p>

<p><i>– Matt Kevan, Manchester, England.</i></p>
<hr />

#### Who I've worked with

<div class="row">
	{% assign sorted_clients = site.data.clients-info | sort: 'name' %}
	{% for client in sorted_clients %}
		<div class="col-xs-3 col-md-2 imgfit">
			<img src="/images/about/{{ client.logo }}" alt="{{ client.name }}" />
		</div>
	{% endfor %}
</div>
<hr />

#### Get in touch

<form name="contact" method="POST" netlify>
<div class="form-group">
<label>Your name:</label>  
<input type="text" name="name" class="form-control">  
</div>
<div class="form-group">
<label>Your email:</label>
<input type="email" name="email" class="form-control">
</div>
<div class="form-group">
<label>Your message:</label> 
<textarea name="message" class="form-control" rows="4"></textarea>
</div>
<div class="form-group">
<div data-netlify-recaptcha></div>
</div>
<button type="submit" class="btn btn-default">Send</button>

</form>

<hr />

#### Colophon

This site is built with <a href="https://jekyllrb.com" target="_blank">Jekyll</a>, stored in <a href="https://www.github.com" target="_blank">Github</a> and hosted by <a href="https://www.netlify.com" target="_blank">Netlify</a>. 

I use <a href="https://affinity.serif.com/en-gb/designer/ipad/" target="_blank">Affinity Designer</a>, <a href="https://affinity.serif.com/en-gb/photo/ipad/" target="_blank">Affinity Photo</a> and <a href="https://www.sketch.com" target="_blank">Sketch</a> for graphics, <a href="https://www.sublimetext.com" target="_blank"> Sublime Text</a> and <a href="https://workingcopyapp.com" target="_blank">Working Copy</a> for code and <a href="https://bear.app" target="_blank">Bear</a> for words. The fonts are <a href="https://www.ibm.com/plex/" target="_blank">Plex Sans</a> and <a href="https://software.sil.org/gentium/download/" target="_blank">Gentium Basic</a>.

