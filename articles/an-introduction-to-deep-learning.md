---
title: "An introduction to deep learning"
date: 2023-07-14
layout: post
tags:
- Article
categories:
- Artificial intelligence
image: /images/gopher.jpg
description: In the beginning, before the Web, there was Gopher. 
type: article
---

These are my notes while completing the Practical Deep Learning course by Fast.ai.

Deep learning is a technique to extract and transform data by using multiple layers of neural networks. Each layer takes inputs from the previous layer and refines them. Layers are trained by algorithms that minimise their errors and improves accuracy, so the network learns to perform a specified task.

Deep learning can be applied to many different tasks, including:

* Natural language processing 
* Computer vision
* Medicine 
* Biology
* Image generation
* Recommendation systems
* Playing games
* Robotics
* Text to speech.

Deep learning also doesn’t need advanced mathematics or expensive equipment – a lot of the resources are available for free. 

## History
Warren McCulloch and Walter Pitts first developed a [mathematical model of an artificial neuron](https://archive.org/details/a-logical-calculus-of-ideas-immanent-in-nervous-activity) in 1943. Later, Frank Rosenblatt developed the idea further, giving the neuron the capability to learn. In 1958 he built a device called the [Mark 1 Perceptron](https://en.wikipedia.org/wiki/Perceptron) that could recognise simple shapes. Marvin Minsky and Seymour Papert wrote a paper demonstrating that a single layer of neurons was unable to learn basic mathematical functions, but they also showed that it could when using multiple layers.

Unfortunately only the first insight was widely recognised and research into neural networks almost stopped for the next 20 years.

The most important work in neural networks in the last 50 years was a book called *Parallel Distributed Processing (PDP)*, released in 1986 by David Rumelhart, James McClellan, and the PDP Research Group.

Their premise was that brains work differently to traditional computer programs, which is why computers finds it hard to do things the brain finds easy, like recognising objects in pictures. By taking an approach closer to how the brain works, computers might be able to handle these tasks better. 

The book defined parallel distributed processing as needing:

1. A set of *processing units*
2. A *state of activation*
3. An *output function* for each unit
4. A *pattern of connectivity* among units
5. A *propagation rule* for propagating patterns of activities through the network of connectivities
6. An *activation rule* for combining the inputs impinging on a unit with the current state of that unit to produce an output for the unit
7. A *learning rule* whereby patterns of connectivity are modified by experience
8. An *environment* within which the system must operate.

In the 1980s models were built with a second layer of neurons, avoiding the problem of earlier models.  They were used in practical applications, such as recognising handwritten postcodes on letters (1989). 

Even though theory suggested adding further layers of neurons would allow any mathematical function to be approximated and lead to better performance, the models were often too big and slow to be useful. It’s only recently, with vast improvements in storage and processing power, that neural nets are really living up to their potential.

## What is machine learning?
Machine learning is a way to get computers to complete a task, just like any other program. Writing a program consists of thinking through the steps necessary and translating them into code. However for tasks like recognising objects it’s more difficult as the steps involved aren’t obvious – it’s something our brain does without us being aware of it.

In 1949 Arthur Samuel started working on a different way to get computers to complete tasks, which he called machine learning. Instead of telling computers the exact steps needed to solve a problem, he proposed to show it examples of the problem to solve and let it work out how to solve it itself. This worked well: by 1961 his draughts playing program had beaten the Connecticut state champion.

> Suppose we arrange for some automatic means of testing the effectiveness of any current weight assignment in terms of actual performance and provide a mechanism for altering the weight assignment so as to maximise the performance. We need not go into the details of such a procedure to see that it could be made entirely automatic and to see that a machine so programmed would “learn” from its experience.

A standard program consists of the inputs, the program itself (a step-by-step breakdown of the actions to perform on the inputs) and the outputs, which are the results of those actions on the inputs.

A machine learning program is slightly different, in that it has the

## Limitations of machine learning
Machine learning has some fundamental limitations, which includes:

A model can’t be trained without labelled data. For example, it won’t be able to learn the difference between cats and dogs unless the training images are labeled as to which is which. 

Another drawback is that models can only make predictions from their training data, they can’t give recommended actions. This can result in a big gap between an organisation’s goals for a system and the its actual capabilities. 

For example, a music recommendation model that learns from users’ listening or purchasing habits is likely to only recommend music they know about already. This is different to how we might make recommendations by asking a few questions to find out what the person likes and suggesting something they’ve never heard before.

It’s important to understand how a model will be used and what unexpected effects might happen as it interacts with its environment. 

* A hiring model is created to streamline the application process, based on past hiring decisions. In practice, it’s not finding the best applicants, but predicting the ones most likely to be hired, reflecting biases in the current hiring processes.
* Hiring managers use the outputs of the model to make hiring decisions.
* Data on hiring decisions is fed back to retrain later instances of the model.

In this example, which [happened at Amazon](https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G), their processes were already biased towards hiring men for technical roles. The model learned  that men were more likely to be hired, and therefore recommended more men, so more men were hired. This caused a positive feedback effect, where the more a model is used, the more biased the data becomes making the model even more biased. For Amazon, a model that was hoped would reduce gender-inequality in the hiring process actually made things worse.

This can also be seen with content recommendation models that optimise for views and therefore become biased towards promoting controversial or divisive content.

Given an input, they try and recreate the label that might be applied to it

Labelling data is a hugely important task and Companies like OpenAI spend a huge amount of resources

* Machine learning can only creates predictions, it can’t recommend actions.


In this quote, weights are variables, and a weight assignment is a particular choice of values for those variables. Inputs are what it processes to produce results, for example an image
Building an image classifier
As part of the Practical Deep Learning course by Fast.ai