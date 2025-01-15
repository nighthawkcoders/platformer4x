---
comments: True
layout: post
title: CSP Period 4 Unit 3.7.2 Nested Conditionals Javascript Lesson
categories: ['Platforms']
description: None
permalink: None
type: ccc
author: Avantika Chittari
---

<style>
  h1 {
    animation: glow 1s ease-in-out infinite alternate;
    font-size: 3em; /* Increased font size */
  }
</style>
<h1>
  Hacks to platforms in Platformer 4x
</h1>
<style>
@keyframes glow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #f0f, 0 0 15px #f0f, 0 0 20px #f0f; /* Changed color to pink (#f0f) */
  }
  to {
    text-shadow: 0 0 20px #f0f, 0 0 30px #f0f, 0 0 40px #f0f, 0 0 50px #f0f; /* Changed color to pink (#f0f) */
  }
}
</style>

<h5><span style=“; color:#FFC0CB”>Collaborate with Lara to develop the code for a better game project. Brainstorm ideas and features to enhance the game.

Ideas to incorporate

- Visualization: Use dynamic visuals to improve the user interface and bring the game environment to life.
- Platform Trackers: Elements to track player progress across platforms and different levels.
- Power-Up Coins: Add collectible items that provide unique abilities or boosts to the player.
- Hidden Features: Adding surprises like secret paths and hidden objects.
- Mystery Boxes: Introduce boxes that offer randomized rewards or challenges when interacted with.
- Slow-Motion Effects: For specific movements like dodging obstacles or performing special actions.
- Interactive Platforms: Include levers/switches to unlock new areas or activate special mechanisms.
- Customizable Characters: Allow players to change.
- Sound Effects and Music: Changing the audio to different sounds.

Visulization


```python
platforms: {
      sand: { src: "/images/platformer/platforms/sand.png" },
      sandblock: {src:"/images/platformer/platforms/sandblock.png"},
      block: { src: "/images/platformer/platforms/brick_block.png" }, 
      itemBlock: {
        src: "/images/platformer/platforms/mario_block_spritesheet_v2.png",
        sizeRatio: 83.2,
        widthRatio: 0.5,
        heightRatio: 1.0,
        width: 204,
        height: 204,
        scaleSize: 80,
        speedRatio: 0.7,
        hitbox: { widthPercentage: 0.4, heightPercentage: -0.2 }
      }
    },
    //In the code above you can see where you have to go to change the images to make the game environment look better.
    // However if we run this code now it will not work it is just here to showcase what it looks like.
```
