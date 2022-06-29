---
layout: post
title:  An overview of the visual tracking problem
date:   2022-06-29
categories: visual tracking, computer
excerpt_separator: <!-- excerpt-end -->
---
<p>Computer vision as a field has seen tremendous progress this last decade with the development of deep learning, the ability to do efficient computations on GPUs, and the massive increase in the volume of image and video data available. Among the main problems of the field of computer vision, object classification and object detection are often cited first. In this article, we will present <em>the interesting problem of visual tracking</em>. This is <em>the first of a few coming articles that will present a few approaches to do visual tracking</em>.</p>

<!-- excerpt-end -->
<p>
Let's first remind us briefly about object classification and detection:
</p>
<ul>
    <li>
        Object classification is the problem of answering whether or not an object is displayed in the image. The answer can be binary ("is there a cat?") or not (being able to detect the presence of many kinds of objects)
    </li>
    <li>
        Object detection is not only about answering whether or not an object is present or not in the image, but also about finding the location of the object in the frame.
    </li>
</ul>

<p>To answer the problem they are facing, object classification as well as object detection models are trained on many images (such as the <a href="https://image-net.org/">ImageNet</a> dataset). They are hence able to detect the objects belonging to the categories seen during training (1000 classes for ImageNet). Object detection models take as input an image, and output a list of locations (bounding boxes or segmentation masks depending on the implementation) and a list of corresponding labels. Basically they are saying: "there is what is probably a cat in this area of the image, and what is probably a tree in this area of the image". Object classication and object detection are not our focus here, so we won't go much further into how they are working, but many resources are available if you are interested in the topic.
<img src="/assets/images/object_detection_vs_visual_tracking.svg" alt="Object detection vs Visual tracking">
</p>

<p>
Let's take the example of sports analytics, and let's say that we would like to analyse basketball games. In a game of basketball, players move fast in many directions, many times a player will come between the camera and another player. Tracking all players could be done with object detectors or with visual trackers: object detectors would try to detect from scratch whether each player is in the frame, and if so what is the location of the player. Visual trackers would need a first manual information (the location of each player), but should be then able to track each player individually, <em>without having been trained to detect these players</em>. This is interesting since it would be very difficult to train a model to differentiate between every player, and to retrain them when players change their appearances (by changing haircuts, shoes, or shirts). A visual tracker would not need to be trained at all on players.
</p>


Tracking by detection