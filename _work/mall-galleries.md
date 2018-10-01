---
title: Federation of British Artists
date: '2018-08-30 00:00:00'
description: Creating an online gallery space for the Federation of British Artists.
thumbnail: "https://res.cloudinary.com/dl4abuxel/image/upload/q_auto/v1537975996/mall-galleries.jpg"

slides:
  - i: "/images/work/mgs1.png"
    cols: 3
    captions:
      - c: "1. The homepage showing a promoted exhibition."
      - c: "2. Top half of an artwork page, showing the hero image."
      - c: "3. Second half of an artwork page, showing the purchasing details."
      - c: "4. Part of an exhibition page, showing the details."
  - i: "/images/work/mgs2.png"
    cols: 6
    captions:
      - c: "1. The homepage showing a promoted exhibition plus upcoming events."
      - c: "2. Part of an exhibition page, showing the details"
  - i: "/images/work/mgs3.png"
    cols: 6
    captions:
      - c: "1. An artwork page, showing information about the piece and artist and purchasing details."
      - c: "2. Users can commission artists through the site. This is the jumping-off point for the process."
  - i: "/images/work/mgs4.png"
    cols: 12
    captions:
      - c: "Part of the site map, showing the different content types and how they fit together."
work-url: http://www.mallgalleries.org.uk
roles:
- UX lead
- Creative lead
- Front-end
tech:
- Drupal 7
- Bootstrap
- UXPin
slug: mall-galleries
tags:
- User experience 

---

## Background
The Federation of British Artists (FBA) consists of nine artist societies, representing over 500  member artists, and is based at the Mall Galleries in London.

## The challenge

The FBA had larger ambitions than just wanting a better version of their existing site: their plan was to create an online space that would both compliment and extend their galley exhibtions and showcase the work of their members.

## The solution

Gallery sites (done well) give you all the information you need about their exhibitions, but the artwork itself, beyond a few samples, is often omitted. If you want to see the work, visit the gallery.

This approach, while understandable, seems out of step in the age of enormous online art marketplaces like Artfinder or Artsy - almost every piece of art from any artist in any gallery is available to view in just a few clicks. 

The client and I decided at the start that we’d approach the design more like an art marketplace than a traditional gallery. I’d already had a lot of experience designing and building art marketplaces through my own marketplace site Illustrators.co, so I had a good idea of how to begin.  

My plan was that every artwork shown in the gallery or that was part of their permanent collection would also be exhibited on the site. We could bring in e-commerce functionality, enabling online art sales and not just in-person at the gallery as was the current process. We could also create profile pages for artists and member societies, meeting the goal of promoting their artwork. 

## Implementation 

To make all of these pieces fit together, I used Drupal’s ability to create references from one piece of content to another. These are links that are set up when publishing content, and can be used to pull content from one page to another. References can work both ways, so referencing an artist from an artwork page  sets up a reciprocal reference from the artwork back to the artist. 

For example, when adding an artwork, if I reference an artist, the system will display content from that artist’s profile on my artwork page, such as their name and profile picture. 

These references formed the backbone of the site, joining the different types of content in a meaningful way. Artwork could be referenced by exhibitions and artist profiles, artist profiles could be referenced by exhibitions and member society profiles and so on. 

I used Drupal’s taxonomy system to aid searching and filtering artwork, creating vocabularies for genre, medium, subject and more. 

As time progresses, the site will build up a complete picture of the exhibitions, artists and artwork that have been shown at the gallery - a much richer experience than a traditional gallery website. 

In addition to creating the user experience and information architecture I was heavily involved in the design and development process, art directing the design and contributing towards the front-end development. 