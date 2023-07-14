---
title: The best content management systems for static sites – updated
date: 2021-01-20
layout: post
tags:
- Article
- Web development
- Reviews
description: 'Static sites have been around since the dawn of the web, but thanks to the rise of static site generators like Jekyll and Hugo they''re undergoing a bit of a renaissance. '
author: Matt Kevan
image: /images/content.jpg
cover: content-banner.jpg
type: article
---
However, where they’re weakest - and the reason why content management systems were created in the first place - is in how they manage content. 

If you're happy with the command line, Git repos and markdown files then it’s fine, but a relatively untechnical user wouldn’t get very far at all. There’s no way I’d hand a standard Jekyll site to a client unless I was confident they absolutely knew what they were doing.

However, there are a range of services which set out to solve this problem, combining the speed and low overheads of a static site with the ease of use of a traditional CMS. 

<hr>

### [Forestry.io](http://www.forestry.io)

Just by connecting your git repo or uploading your site as a Zip, Forestry.io will automatically generate a content management system from your pages, posts and custom collections. It even interprets your front matter to generate the correct fields - image uploaders, tags, text etc. Works with a range of static site generators, including Jekyll, Gatsby, Hugo, 11ty, Next.js and more.

**Pros** – It's probably the quickest and easiest of the options available to get running, and is perfect for simple sites (I use it for this one). The free plan is very generous, so you can get a long way before needing to pay. The available front-matter field widgets are powerful, enabling complex functionality that would usually require a database-backed system.

**Cons** – While Forestry is usable on mobile it's clearly not designed to be mobile first.

**Price** – Free for up to three editors, $29 for five editors, $749+ for 10 or more.

<hr>

### [Cloudcannon](http://www.cloudcannon.com)

Focused purely on Jekyll, Cloudcannon works similarly to Forestry.io in that it auto-generates a CMS from your site, but it has some additional features which make it a good option for larger or more complex sites. 

**Pros** – It has inline editing, so users can edit content directly on the page, and it allows you to password protect all or some of your site. This means you can create an intranet or members-only area without the overhead of a traditional CMS.

**Cons** – The pricing is aimed more at freelancers and agencies, and functionality such as inline editing ties you into the platform a bit more deeply than other options.

**Price** – Free for one user and basic Git synchronisation, $25/m or more for more functionality including hosting.

<hr>

### [NetlifyCMS](https://www.netlifycms.org)

A free and open-source CMS that works with all SSGs, NetlifyCMS is an excellent choice if you don't want to be tied to a commercial product. It also has some powerful features not found in other offerings.

**Pros** – Workflow functionality for content teams – easily manage content from draft to review to publish. Drag and drop uploading, realtime previews and more.

**Cons** – It's not as simple to get started with as it needs careful configuring. As it's a free open source product there's not as much support.

**Price** – Free.

<hr>

### [Siteleaf](http://www.siteleaf.com)

Broadly similar to the other two services, Siteleaf has a couple of interesting features which make it stand out. 

**Pros** – Multiple user roles on the team plan and up. Users can be admins, publishers or writers, meaning Siteleaf could be a good option for larger organisations. It also allows you to define custom collections through the web UI, and there's a pretty comprehensive API to integrate with other apps or services. 

**Cons** – Only syncs via FTP, S3 or GitHub - no BitBucket support. Can only connect to public repos on the free plan.

**Price** – Free syncing to public Github repositories, $7/month or more for more functionality.

<hr>

### Honourable mentions

####  [Contentful](http://www.contentful.com), [Prismic.io](http://www.prismic.io)

These are more API-driven content management systems as a service, and while they are powerful, they may not be so straightforward to integrate. However, the benefits are that you could use the same service to manage content and users across multiple platforms. 

#### [Prose.io](http://prose.io)

Basic open source content editor for Github-based sites. Works with most SSGs, but Jekyll has more features.
