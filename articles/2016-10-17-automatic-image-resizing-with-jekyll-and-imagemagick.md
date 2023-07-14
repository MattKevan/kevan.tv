---
title: Automatic image resizing with Jekyll and ImageMagick
date: 2016-10-17
layout: post
description: How to get Jekyll to take care of the boring business of resizing and cropping images.
tags:
- Article
- Web development
- Jekyll
author: Matt Kevan
type: article
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

I found a plugin called [Jekyll MiniMagic](https://github.com/zroger/jekyll-minimagick) which looked like it could do exactly what I wanted: Take an image, process it according to a preset and save the results. However it doesn’t work. 

Thankfully, some fellow travellers have fixed the problems and added new features, but they’ve not yet been incorporated by the original author. I’ve created my own version with all the patches applied [here](https://github.com/MattKevan/Jekyll-MiniMagick-new).

## Configuration
Put the file in your `_plugins` folder, make sure ImageMagick is installed, and define your Image presets in `_config.yml`

```
mini_magick:
    thumbnail:
        source: images/originals
        destination: images/thumbnail
        resize: "100x70^"
        gravity: "center"
        extent: "100x70"
    large:
    	...
```

`thumbnail:` and `large:` are the preset names. Change them to whatever you want.

`source:` is the source directory location. Change this to wherever you keep your images.

`destination:` is the location of the generated images. Folders will be automatically added to `_site` on build.

`resize:`, `gravity:` and `extent:`  are the ImageMagick options. Change these to whatever you need.

## Putting it all together

How you get the images into your templates is up to you, but here's what I did:

In my post front matter, I referenced images like this:

```
image1: myimage.jpg
image2: ...
```

Then as each preset is stored in its own folder, all I needed to do was put in the path for the preset I wanted in front of the liquid tag for printing the image field.

The tag and generated output looks something like this:

For 'thumbnail' presets:

```
{% raw %}<img src="/images/thumbnail/{{ page.image1 }}" /> {% endraw %}
<img src="/images/thumbnail/myimage.jpg" /> 
```

For 'large' presets:

```
{% raw %}<img src="/images/large/{{ page.image1 }}" />{% endraw %}
<img src="/images/large/myimage.jpg" /> 
```

As the images are pre-generated and there's nothing more complex going on at the template level than just including some fields, it works even when used in a layout file.

So there we have it – an easy way to generate automatically resized images, while still keeping a strong separation between content and presentation.