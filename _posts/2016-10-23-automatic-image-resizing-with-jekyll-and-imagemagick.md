---
title: Automatic image resizing with Jekyll and ImageMagick
date: '2016-10-23 14:27:00'
layout: post
description: How to get Jekyll to take care of the boring business of resizing and cropping images.
tags:
- Content management
- Jekyll
- Drupal
author: Matt Kevan
---
## The problem
I’ve recently been migrating some of my sites from Drupal to Jekyll. As part of this, I’ve been looking for Jekyll alternatives to some common pieces of Drupal functionality.

The first is image handling. Rather than having to manually create different sized images for use in listings or full pages, I wanted the system to automatically create them – rather like Drupal’s Imagecache module.

## Potential options

After some searching, I found [Jekyll Picture Tag](https://github.com/robwierzbowski/jekyll-picture-tag) and [Jekyll Image Tag](https://github.com/robwierzbowski/jekyll-image-tag), which while they looked good, they didn’t do quite what I wanted.

My plan was to keep posts and collections completely Markdown-only, with no liquid tags or HTML. Images and metadata would be specified in the front matter, and I’d use a layout template to print out everything in the right place. 

However, I found that the image and picture tags would only work if they were used on the post or collection itself, and not in a layout. Not so good, as it’d mean adding the tag manually to every post. I’m sure there’s a way of getting round this, but whatever it is, it’s beyond my coding skills.

Instead, I thought, surely there must be a way of just watching a folder, running any images found through ImageMagick and saving the results somewhere? 

## The solution

As it turns out, there is. Kind of. 

I found a plugin called [Jekyll MiniMagic](https://github.com/zroger/jekyll-minimagick) which looked like it could do exactly what I wanted: Take an image, process it according to a preset and save the results. 

However it didn’t work. 

Thankfully, some fellow travellers have fixed the problems and added new features, but they’ve not yet been incorporated by the original author. I’ve created my own version with all the patches applied [here](https://github.com/MattKevan/Jekyll-MiniMagick-new).

## How it works
Put the file in your `_plugins` folder, make sure ImageMagick is installed, and define your Image presets in `_config.yml`

```
mini_magick:
    teaser:
        source: images/originals
        destination: images/teaser
        resize: "100x70^"
        gravity: "center"
        extent: "100x70"
    profile:
    	...
```

`teaser:/profile:` these are the preset names - change to whatever you want
`source:` is the source directory location - change this to wherever you keep your images
`destination:` is the folder for the generated images. This will be automatically added to the `_site` folder on build.
`resize:` these are standard ImageMagick options. You can chain multiple commands together and they'll be processed in order.

How you then get the images into your templates is up to you, but here's how I did it:

In my post front matter, I referenced images like this:

`image1: myimage.jpg`

Then as each preset is stored in its own folder, all I needed to do was put in the path for the preset I wanted just before printing the image field.

The generated output looked something like this:

```
<img src="/images/teaser/myimage.jpg" /> 
```

As there’s no processing going on at the template level, it works when used in a layout file as well.

So there we have it – an easy way to generate automatically resized images, while still keeping a strong separation between content and presentation.