---
title: Version control for Sketch – Plant, Abstract and Kactus reviewed
date: 2018-04-20
layout: post
tags:
- Article
- Design
- Sketch
- Version Control
description: Developers have used version control systems like Git for years. Lots
  of people can collaborate on a project, everyone has access to the latest version
  and mistakes can be rolled back. So why can't we use them for design?
author: Matt Kevan
image: /images/cactus.jpg
cover: cactus-banner.jpg
type: article
---

It's complicated. But thanks to some services which have appeared over the last few months and some specific features of Sketch, it's now possible.

As designers, working with others on a project is hard. The options are to do lots of file swapping, with names like 'Project 2 FINAL v3', or to use something like Dropbox, with all the risks of overwriting files or problems with synchronisation.

### Why is version control a good thing?

* **Never lose or overwrite work.** Git keeps a complete log of all changes to a file, so you can roll back to a previous version if there's any problems
* **Experiment with versions.** Git's branching and merging features means you can create a copy to experiment with and either merge your changes back into the master document or delete them as you see fit. Without affecting anyone else's work. 
* **Access work from anywhere.** Cloud-based storage means you can pull the latest version of your designs to any machine with the right software.

### How does it work?

Git was designed to manage code projects. These are generally text files and resources like icons or images. It's unusual for more than one person to work on the same file at the same time so conflicts are rare, and when they do happen it's possible to sort them out.

Design projects are different. A project generally consists of only one or two documents and the format of those documents are compressed binary data instead of text. Changes almost always result in conflicts that are impossible to resolve without corrupting the file.

So a design version control system has to do two things: to process the file in a way that enables safe editing and provide a way to visually resolve conflicts.

This is possible because Sketch documents are actually a compressed folder of code files which define the layout of your designs and any embedded images. Change the .sketch extension to .zip and extract it and you’ll see what I mean. These can be  managed by Git as they're text and images, and the version control system can read the files to create version previews. 

All the services work in a similar way: they unwind a Sketch file into its constituent parts, manage the changes via Git, then reconstitute them into a single file when you want to start work.

<hr>

### [Plant](https://plantapp.io/)

Plant is the simplest of the three and does the most work to hide the technical nature of Git. One Sketch file equals one project and there's no branching or merging. Projects are kept in Plant's cloud storage and are accessed through a widget in the menu bar or through a panel in Sketch itself. Team features make it easy to share projects between contributors and there's a toolbar  to push and pull changes.

Having used Plant in production with a team of four designers, we've found a major flaw. Although the paid plan advertises unlimited projects, if you have more than about 30 the system breaks and you lose access to your work. Plant's tech support say they're working on a fix but its ETA is unknown.

#### Pros
* Simple and easy to use
* Interface for managing conflicts works well
* Good value for teams
* Easy workflow - open a Sketch file and pull/push changes from within the document.

#### Cons
* Simple - no branching or merging
* Not really unlimited projects. Get to the magic number and the whole thing will break.

**Pricing** – $8/month per contributor for up to 10 projects, $12/month per contributor for unlimited projects.

<hr>

### [Abstract](https://www.abstract.com)

Abstract was one of the first, if not the first, on the scene and is definitely the most feature complete. It's possible to include multiple Sketch files in one project, and it supports Git's branching and merging features. In fact branching is a key part of the workflow as you have to create a new branch before starting work. 

Abstract's commenting and collaboration features make it easy to share and get feedback on designs without having to use something like Marvel or InVision. The 'Business' plan also includes collections, which are a way to create a custom group of artboards to present.

#### Pros
* Powerful - branching and merging features mean it's possible to create multiple versions of the same design, without running into conflicts.
* Good desktop app.
* Linked library support - keep libraries in Abstract and have them pull new changes automatically.

#### Cons
* With great power comes great complexity. It's not that easy to get started and it's possible to get lost in a sea of branches and commits.
* Have to use the desktop app to open Sketch files - it's not possible to open a file and get started (as with Plant) as Abstract must create a new branch first.
* Can't link libraries to libraries. If you have a library that pulls in elements from another library, importing them into Abstract will cause that link to break.

**Pricing** – From $9/month per contributor.

<hr>

### [Kactus](https://kactus.io)

Unlike Plant or Abstract which use their own cloud storage, Kactus uses Github. Great if you or your company already uses Github, but  you'll need a paid account to make repositories private. 

Kactus' app is a modified version of the standard Github client, adding features for handling Sketch files and previewing versions. While this approach exposes all Git's functionality, it requires an understanding of Git to use properly. And, as the app was intended for managing code not design, the workflow isn’t intuitive and it feels like a bit of a kludge.

I'd forgive Kactus’ clunkiness if it were free as well as open source. I can understand a developer wanting to make a living from their product, but charging a monthly subscription without providing cloud storage seems a bit steep. A better model would be to provide the software for free, especially as the app is a forked version of GitHub’s free app, but to make it easy to subscribe to a paid storage plan. 

#### Pros

- Use your own Github account to store your files.
- Open source.

#### Cons
- Clunky interface and workflow. 
- Needs a good understanding of Git to use. 
- Needs a paid Github account on top of a Kactus subscription for private repositories. 
- Expensive if you want to use a different Git server to Github - more than Plant and almost as much as Abstract, both of which also provide storage.

**Pricing** – Free for public GitHub repos. $4/month per contributor for private repos, $12.99/month per contributor to use any Git server. 

<hr>

As of early 2018 Abstract is the best choice – it's been around the longest and it's the most feature-complete – and is the one we're using in our design team.

The benefits of version control are worth the risk, but I'm uncomfortable trusting such important files to such new services which may disappear or break – as we found with Plant. People sitting around not working because they can't access their files gets expensive fast.

I'd like to see an open-source alternative with a simple workflow that can connect to any Git server, so that files are still accessible even if the service stops working or goes away.

This is a new and exciting development for design, and as these services mature and new ones come on the scene it's only going to get more interesting from here.