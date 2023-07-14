---
title: "Can an artificial intelligence be unreasonable?"
date: 2018-09-24
layout: post
tags:
- Article
categories:
- Artificial intelligence
description: Mumsnet’s Am I being unreasonable? forum is famous for the hilarious, disturbing and hilariously disturbing topics discussed. I wondered, what would happen if I used it to train a neural network?
author: Matt Kevan
image: /images/aibu.jpg
cover: aibu-banner.jpg
type: article
---
If you’ve not heard of it, [AIBU](https://www.mumsnet.com/Talk/am_i_being_unreasonable) is a place where you can ask the Mumsnet hivemind whether you’re being unreasonable about a particular issue or circumstance (quick tip: if you have to ask, you are). Favourite topics include the neighbours, shoddy parking, mothers in law, parents at school and the DH’s general uselessness. Swears abound.

Top AIBU threads at the time of writing include:

* To be getting sick of my next door neighbour?
* To wonder if anyone else will admit to being a soap dodger?
* To ask for your Pelvic Organ Prolapse Surgery success stories?

Like most communities, Mumsnetters have developed their own particular slang and abbreviations, the knowledge of which is vital to fully understand what’s going on. Here's a quick primer: DH is ‘dear husband’, OH is ‘other half’, DD is ‘dear daughter’, DS is ‘dear son’, MIL is ‘mother in law’, CF is ‘cheeky fucker’. You get the idea.

The question was: could an AI be just as unreasonable as an angry sleep-deprived parent? 

After training a neural network on around 35,000 AIBU thread titles, it turns out that yes, yes it can.

## I hereby present: AIBU – Artificial Intelligences Being Unreasonable

Pleasingly it seems to have grasped the AIBU question construction and Mumsnet abbreviations. And it turns out that artificial intelligences are just as concerned with pets, schools, children and misbehaving partners as the rest of us. We’re not so different after all…

Changing the amount of randomness in the output affected the results more than I expected. Set it too low, and it just banged on about schools and job interviews like a tired dad at the end of a party.

* To think that the school should be able to get a job interview?

However, setting it high got it so hyper it lost all coherence, like a toddler hopped up on E numbers and cake.	

* To wonder what the hen keep is not a handbag based?

Setting the randomness to about 70% seemed to be about right – the results could be a bit mad at times, but then so are a lot of the real ones. There's plenty which I'm sure must have actually been posted before, including:

* Aibu - help please
* To be furious about the state of this laundry
* AIBU to ask what happened to the police?
* AIBU to go back out
* AIBU to ask what you would do?
* To have been a bit angry about this
* To be frustrated with the NHS

Here are a few more generated titles, sorted by topic:

### Relationships

* AIBU to be a bit shocked that my DH may be rude?
* To be mad at DP for not giving birth??
* To not want DH to control my colleague
* To ask you to help me marry a present?
* To ask about your bedroom woman and then get something wrong?
* Could you let him I think I have to stop smells?

### Happy families

* To want to start a grandma
* AIBU to ask for a daughter or not!
* To feel that babies should be really upset that I am being unreasonable?  
* AIBU to change my baby?
* To think if your children may have ran a baby?
* To let DD may not pay for something to my sex and live in our children?
* To think 12 year old shouldn't buy a cat wear a dick?
* AIBU to be disappointed with the last minute kids?

### Animals

* To be irritated by this puppy?
* To use my kitten to take the rent of Granny
* To think that my cats want to do this wedding?
* To wonder what the hen keep is not a handbag based?
 
### Education, education, education

* To think that the school should be able to go to the party?
* To think that the school is a bit odd?
* To not want to shoot in term time?
* To think that the school should be able to have a baby?

### You won't like me when I'm angry

* To have been a bit angry about this
* To be annoyed at being a pushed from the hedge tea?
* AIBU to think this is a bit too far?
* AIBU to think I am poorly shit!
* To be annoyed at the demondance is wrong with me?

### General questions

* Explosive potatoes - AIBU to feel really abused?
*  To think I should be spooked out of legs?
* Can you recommend yesterday?
* To think the parents should be able to get the end of my house??
* To think this is a bit of a day and leave them to trampoom?
* To think that 11am is too long to be ashamed?
* To be concerned about the next door with my name?
* Grandchild and Mumsnet Computer??
* To ask for a hand hold over my arse of the face?

### Eh?

* Daily Mail :)
* To not understand why someone's old Trump
* TMI AND Slying video toilet
* To think formal vair to Sports buying a brain
* To want a bikini but stinky but have had kids to looked
* To ask if you would show you have a bottle of the delivery dog on the street
* To ask that you can some help for public to have a baby is fine re volunteering for the face of the Daily Mail from a glove on the pill.

## Technical details

I used [textgenrnn](https://github.com/minimaxir/textgenrnn) a character-based Python 3 neural network built on top of Keras/TensorFlow. The data source was three years of AIBU thread titles saved as a text file.

I tried running the training locally on my laptop, setting the training to three epochs. This took ages – around an hour for each epoch – and didn't give particularly good results.

For the next attempt, I discovered it was possible to run the training with [Google's Colaboratory](https://drive.google.com/file/d/1mMKGnVxirJnqDViH7BDJxFqWrsXlPSoK/view), basically Google Docs for code. With Colaboratory it took about 45 minutes to run 10 epochs. Apparently Google's servers are faster than a three-year-old MacBook Pro. 

Once done, I downloaded the trained models to run locally.



