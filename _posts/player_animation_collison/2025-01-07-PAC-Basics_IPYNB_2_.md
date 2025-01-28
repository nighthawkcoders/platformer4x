---
layout: post
title: Player, Animation, and Collisons (PAC)
author: Aaryav Lal
description: How does PAC really work?
permalink: /player_animation_collison/PAC
toc: True
---

# Game Development Overview

In game development, three core components often involved in creating interactive experiences are **Player**, **Animation**, and **Collision**. Understanding these components is crucial to building a functional game. Let's break them down:

## 1. Player

The **Player** is typically the entity that the user controls within the game. It can represent a character, vehicle, or object, and the player's actions often define the core gameplay. Key aspects include:

- **Movement**: The player can be moved using input controls like keyboard, mouse, or game controllers.
- **Attributes**: Players often have specific attributes like health, speed, or strength.
- **Interaction**: The player interacts with the game world by collecting items, fighting enemies, or completing objectives.

### Example:
```python
class Player:
    def __init__(self, x: float, y: float, speed: float = 5.0):
        """
        Initialize the player at position (x, y) with a default movement speed.
        
        Parameters:
        x (float): The player's starting x-coordinate.
        y (float): The player's starting y-coordinate.
        speed (float): The player's movement speed. Defaults to 5.
        """
        self.x = x
        self.y = y
        self.speed = speed

    def move(self, dx: float, dy: float):
        """
        Move the player based on input direction (dx, dy) and speed.

        Parameters:
        dx (float): The change in the x-direction.
        dy (float): The change in the y-direction.
        """
        self.x += dx * self.speed
        self.y += dy * self.speed

    def get_position(self) -> tuple:
        """
        Get the current position of the player as a tuple (x, y).

        Returns:
        tuple: The player's current position.
        """
        return self.x, self.y


## 2. Animation

**Animation** is what brings the game world to life by providing movement or visual changes to the game’s elements. This involves changing the appearance or position of sprites over time to simulate movement or transitions. 

Key concepts in animation include:

- **Frames**: Animation is typically composed of individual images called frames. When shown in sequence, they create the illusion of motion.
- **Frame Rate**: The speed at which frames are displayed, usually measured in frames per second (FPS). A higher FPS makes animations smoother.
- **Sprites**: These are 2D images or 3D models that are animated within the game.
- **Tweening**: Short for "in-betweening", this is the process of generating intermediate frames between two keyframes, providing a smooth transition.

### Example:
```python
class Animation:
    def __init__(self, frames, frame_rate):
        self.frames = frames
        self.frame_rate = frame_rate
        self.current_frame = 0
        self.elapsed_time = 0

    def update(self, delta_time):
        self.elapsed_time += delta_time
        if self.elapsed_time > 1 / self.frame_rate:
            self.current_frame = (self.current_frame + 1) % len(self.frames)
            self.elapsed_time = 0


## 3. Collision

**Collision** detection is crucial in games to determine when objects or characters interact with each other. It allows the game to respond to events like a player hitting an obstacle, picking up an item, or attacking an enemy.

Key concepts in collision include:

- **Bounding Box**: The simplest method of collision detection, where each object is enclosed in a rectangular or circular boundary. If these boundaries overlap, a collision is detected.
- **Pixel-Perfect Collision**: A more precise method of detection where the individual pixels of two objects are compared. This ensures more accurate detection but is computationally more expensive.
- **Collision Response**: Once a collision is detected, the game must decide how to respond, whether stopping movement, bouncing off surfaces, triggering damage, or generating game events.

### Example:
```python
class Collision:
    @staticmethod
    def check_collision(rect1, rect2):
        """
        Check for a collision between two rectangular objects.
        
        Parameters:
        rect1: The first rectangle with attributes x, y, width, and height.
        rect2: The second rectangle with attributes x, y, width, and height.

        Returns:
        bool: True if the rectangles are colliding, False otherwise.
        """
        return (
            rect1.x < rect2.x + rect2.width and
            rect1.x + rect1.width > rect2.x and
            rect1.y < rect2.y + rect2.height and
            rect1.y + rect1.height > rect2.y
        )

