---
layout: post
title: Collisions Intro
author: Srinaga
permalink: /collisions/intro
toc: True
---

what are Collisons?
- collisons are the interactions between objects in a game. 
- collisons are used to detect when two objects are touching, and to make them react accordingly. for example, when a player character touches a wall,
 - collison is detected, and the player character is stopped from moving through the wall.
- collisons are an important part of game development, as they help to create a sense of realism and immersion in the game world.

```python
%%html
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




```python

```
