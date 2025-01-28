---
author: Srinaga Pillutla
layout: post
title: Collision intro
description: In the intro we will be learning how we can detect collisions in the platformer game and how it applied.
permalink: help-system/platform-elevated/collisions-intro
toc: True
comments: True
categories: ['Platforms']
---

# <span style="color: pink; text-shadow: 2px 2px 5px pink;">Collisons Introduction </span>

What is Collisons?
- collisons are used to detect when two objects are touching, and to make them react accordingly. for example, when a player character touches a wall,
 - collison is detected, and the player character is stopped from moving through the wall.
- collisons are an important part of game development, as they help to create a sense of realism and immersion in the game world.


```python
if (this.collisionData.touchPoints.other.id === "jumpPlatform") {
    // Collision with the left side of the Platform
    console.log("id");
    if (this.collisionData.touchPoints.other.left && this.topOfPlatform) {
        this.movement.right = false;
        console.log("a");
    }
    // Collision with the right side of the platform
    if (this.collisionData.touchPoints.other.right && this.topOfPlatform) {
        this.movement.left = false;
        console.log("b");
    }
    // Collision with the top of the player
    if (this.collisionData.touchPoints.this.ontop) {
        this.gravityEnabled = false;
        console.log("c");
    }
    if (this.collisionData.touchPoints.this.bottom) {
        this.gravityEnabled = false;
        console.log("d");
    }
    if (this.collisionData.touchPoints.this.top) {
        this.gravityEnabled = false;
        this.topOfPlatform = true;
        console.log(`${this.topOfPlatform} top`);
        console.log(`${this.gravityEnabled} grav`);
    }
}
```

## <span style="color: pink; text-shadow: 2px 2px 5px pink;">Explanation to the code </span>

Identify Platform: Checks if the collision is with "jumpPlatform".

Left/Right Collision: Stops player movement if colliding with the left or right side.

Top/Bottom Collision: Disables gravity if colliding with the top or bottom.

Landing on Platform: Disables gravity and sets the player on top of the platform.

## <span style="color: pink; text-shadow: 2px 2px 5px pink;">Application in IRL </span>

Personally I would love this section of Programming cause this deals with coding cause it isn't always about game it can be applied in real life here an example code


```javascript
%%javascript

import java.awt.geom.Point2D;

public class Robot {

    private Point2D.Double position;
    private double radius;

    public Robot(double x, double y, double radius) {
        this.position = new Point2D.Double(x, y);
        this.radius = radius;
    }

    public boolean detectCollision(Robot otherRobot) {
        double distance = position.distance(otherRobot.position);
        return distance <= this.radius + otherRobot.radius;
    }
}

public class Main {

    public static void main(String[] args) {
        Robot robot1 = new Robot(10, 10, 5);
        Robot robot2 = new Robot(20, 20, 5);

        if (robot1.detectCollision(robot2)) {
            System.out.println("Robot 1 is colliding with Robot 2.");
        } else {
            System.out.println("No collision between robots.");
        }
    }
}
```

1. Robot Class

We have a Robot class. Think of it like a blueprint for creating robot objects.
Each Robot has a position (where it is located) and a radius (how big it is).
The detectCollision() method checks if two robots are touching.

2. How Collision is Checked

Imagine the robots as circles.
The code calculates the distance between the centers of the two robots.
If the distance is smaller than the sum of their radii, it means the robots are overlapping, and a collision has occurred.

3. Main Class

In the main part, we create two robot objects, robot1 and robot2.
We give them starting positions and sizes (radius).
Finally, we use the detectCollision() method to check if they are touching.

# <span style="color: pink; text-shadow: 2px 2px 5px blue;">Summary   </span>

Summary
 In conclusions Collisons are important for many reasons
   
   - As it Stopping you from going through walls: This makes the game world feel more solid and believable.

 - Making you interact with objects: You can pick up items, jump on platforms, and knock over obstacles.
 
 -Creating challenges: Collisions can be used to create obstacles and challenges that you need to overcome.




