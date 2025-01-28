---
author: Aditya Srivastava
layout: post
title: Player, Animation, and Collisons (PAC)
description: How does PAC really work?
permalink: /help-system/player/animation
categories: ['Player']
toc: True
---

# What is animation: 
Animating is the process of creating the illusion of movement by displaying a sequence of images or frames. This is important to our game and many other games because this is how our characters appear to be walking and jumping. Here is an example:

![Image Description](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKlmwdjgWq7yCxuEGoBFMlyS1tYSbEzjw2Q&s)


# How Do We Animate in Our Game?

In our game, all characters across levels use **sprite sheets** for animation. A **sprite sheet** is a large image containing a grid of smaller images (frames), each showing the character in a slightly different pose. These frames are displayed in rapid succession to create smooth animations for actions like walking, jumping, or attacking.

Each frame represents a character from different angles or performing specific actions, with slight variations between frames to create the illusion of movement.

Here's an example of what a sprite sheet might look like:

- **Character Actions**: The sprite sheet contains frames for different actions (e.g., walking, jumping, attacking).
- **Animation Flow**: The frames are shown in sequence to make the animation appear seamless and natural.
  
By cycling through the frames at the correct speed, we create fluid and continuous motion for the character in the game.


### How It Works:
1. **Loading the Sprite Sheet**: The game loads the sprite sheet, breaking it into individual frames.
2. **Animation Timing**: Each frame is displayed for a brief period before moving to the next one, based on the animation's frame rate.
3. **Smooth Transitions**: By repeating this process continuously, the character's animation looks smooth and lifelike.

This technique helps bring our characters to life and gives the game its dynamic feel!


![Image Description](https://nighthawkcoders.github.io/portfolio_2025/images/platformer/sprites/lopezanimation.png)

# What types of animation is in our game? 

 1. Idle Animations: These are subtle movements during idle states (just standing) making the character more lifelike

 2. Movement Transitions: These are gradual shifts between running and walking 
 
 3. Special Animations: These can include a dying animation or a victory animation

# Behind the scenes:


![image.png](attachment:image.png)

### Width and Height: 
The width and height are the dimensions of each frame in the spritesheet. This means each sprite in the spritesheet will have dimensions of 46 X 52.5. 

### Idling
"row: 6" points to the 6th row of the sprite sheet. "frames: 1" Indicates that there is one frame in the row for the idling animation. Essentially this is searching for a sprite in the sprite sheet which to display when the character isn't in action.
