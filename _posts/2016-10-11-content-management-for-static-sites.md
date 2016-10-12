---
title: Content management systems for static sites
date: '2016-10-11 20:41:00'
layout: post
tags:
- 'Content management '
- Static sites
- Reviews
- Development
description: 'Static sites have been around since the dawn of the web, but thanks to the
  rise of static site generators like Jekyll and Hugo they''re undergoing a bit of
  a renaissance. '
thumbnail: ''
banner: ''
author: Matt Kevan
---
However, where they’re weakest - and the reason why content management systems were created in the first place - is in how they manage content. 

If you're happy with the command line, Git repos and markdown files then it’s fine, but a relatively untechnical user wouldn’t get very far at all. There’s no way I’d hand a standard Jekyll site to a client unless I was confident they absolutely knew what they were doing.

However, there are a range of services which set out to solve this problem, combining the speed and low overheads of a static site with the ease of use of a traditional CMS. 

## [Forestry.io](http://www.forestry.io)

Just by connecting your git repo or uploading your site as a Zip, Forestry.io will automatically generate a content management system from your pages, posts and custom collections. It even interprets your front matter to generate the correct fields - image uploaders, tags, text etc. 

####  Pros

It's probably the quickest and easiest of the options available to get running, and is perfect for simple sites (I use it for this one). The free plan is very generous, so you can get a long way before needing to pay.

####  Cons

It's probably a bit too feature-light for more complex sites, where you may need multiple content editors or defined levels of access. 

The interface also doesn't work well on mobile, but apparently there are some updates on their way so hopefully this will be fixed soon. Paid plan is expensive. 

####  Pricing

$99/month per site for 11+ users

## [Cloudcannon](http://www.cloudcannon.com)

Cloudcannon works similarly to Forestry.io in that it auto-generates a CMS from your site, but it has some additional features which make it a good option for larger or more complex sites. 

####  Pros

It has inline editing, so users can edit content directly on the page, and it allows you to password protect all or some of your site. This means you can create an intranet or members-only area without the overhead of a traditional CMS.

####  Cons

The pricing is probably too steep for a single site, but if you’re a freelancer or in an agency it would make a ton of sense.

####  Pricing

$25 per month per developer for the basic plan, or $75 per month per developer to access the custom user authentication features. All plans include unlimited websites.

## [Prose.io](http://www.prose.io)

Created by Development Seed (who dropped Drupal to go all-in on static-sites a few years ago), Prose.io is a basic content editor for Github-based sites.

####  Pros

It’s simple, free and mostly works.

####  Cons

It's only for Github, the features are basic and I found the interface confusing - I could never tell whether an update had actually published or not.

####  Pricing

Free.

## [Siteleaf](http://www.siteleaf.com)

Broadly similar to the other two services, Siteleaf has a couple of interesting features which make it stand out. 

#### Pros

Multiple user roles on the team plan and up. Users can be admins, publishers or writers, meaning Siteleaf could be a good option for larger organisations. It also allows you to define custom collections through the web UI, and there's a pretty comprehensive API to integrate with other apps or services. 

#### Cons

Only syncs via FTP, S3 or GitHub - no BitBucket support. Can only connect to public repos on the free plan.

#### Pricing

Free to $89+ per site per month. Multiple user roles need the team plan at $29 per site per month. 

## Honourable mentions

####  [Contentful](http://www.contentful.com), [Userapp](http://www.userapp.com), [Prismic.io](http://www.prismic.io)

These are more API-driven content management systems as a service, and while they are powerful, they may not be so straightforward to integrate. However, the benefits are that you could use the same service to manage content and users across multiple platforms. 
