---
author: Cason Pollak, Veera Kalakota, Ethan Wong
layout: post
title: Enemies & Collision in the Platformer Game
description: A lesson on enemies and collision in the platformer game
permalink: /help-system/enemies-collision/lesson
categories: ['Enemies and Collision']
toc: True
comments: True
---

# <span style="color: pink; text-shadow: 2px 2px 5px pink;">Enemies & Collision</span>

### Basics of Enemies and Collisions in the platformer game 

Here is what you need to know about enemies and how they interact in the platformer game:

##### **What is an Enemy?**  
- An enemy is a game object designed to challenge the player
- They can move and be defeated  

##### **What Must Enemies Do?**  
- **Move:** Enemies have movement patterns, for the goombas it is randomzied horizontal movement 
- **Collide:** They interact with the player, such as dealing damage or being destroyed
- **React:** Enemies die when hit by the player

##### **Collision Basics:**  
- Collisions determine how enemies and players interact
- Use boundaries or hitboxes to check if they touch

 ##### **Common results of collisions:**
  - **Player Hits Enemy:** Player takes damage  
  - **Player Jumps on Enemy:** Enemy is defeated

##### **Styling and Design:**  
- The enemies fit the game’s theme (appearance, behavior, and placement)  
-  Enemies challenge but not overwhelm the player

### Now that we are done with the boring stuff, we can start what we actaully need to do to create an enemy with basic features

---

## How Enemies were created in the Game

### Step 1 - Creating the Enemy

1. **Create the Enemy File**  
   - In `assets/js/platformer`, a file called `Enemy.js` can be seen

2. **Define the Enemy Class**  



```python
%%js

import Character from './Character.js';
import GameEnv from './GameEnv.js';

export class Enemy extends Character {
    // constructors sets up Character object 
    constructor(canvas, image, speedRatio, enemyData){
        super(canvas, 
            image, 
            speedRatio,
            enemyData.width, 
            enemyData.height, 
        );

        // Player Data is required for Animations
        this.enemyData = enemyData;
    }
}

export default Enemy

```

- Note the `Enemy` class extends the `Character` class

3. **Add Enemy to Main Game**  
   - Define the enemy in the assets object (define the enemy’s image source and size)



```python
%%js 

var assets = {
    enemies: {
        goomba: {
            src: "/images/platformer/sprites/goomba.png",
            width: 448,
            height: 452,
        }
    }
};

```

4. **Include Enemy in Game Levels**

    - Add the enemy to the game level setup:


```python
%%js

new GameLevel({
    tag: "hills",
    background: assets.backgrounds.hills,
    platform: assets.platforms.grass,
    player: assets.players.mario,
    enemy: assets.enemies.goomba,
    tube: assets.obstacles.tube,
    callback: testerCallBack
});

```

- This integrates the enemy into the game

---

### Step 2 - Basic Features

1. **Add Movement to the Enemy**  
   - Update the `Enemy` class to include movement


```python
%%js

update() {
    // Reverse direction at boundaries
    if (this.x <= 0 || this.x + this.width >= GameEnv.innerWidth) {
        this.speed = -this.speed;
    }

    // Move the enemy
    this.x += this.speed;
}
```

- The enemy moves left and right, reversing direction at the canvas edges

2.  **Add Collisions**

- Collision logic is handled in `Player.js` using existing frameworks
- Example collision handling code:

**NOTE:** Mr. Mortensen has already laid out the foundation for the collision code. We aren't coding the actual logic for collisions here but rather a simpler version of such. Code for collisions will be handled in Player.js rather than in the Enemy file


```python
%%js 

if (this.collisionData.touchPoints.other.id === "enemy") {
    if (this.collisionData.touchPoints.other.left) {
        // Reset game (player hit enemy from the side)
    }
    if (this.collisionData.touchPoints.other.right) {
        deathController.setDeath(1);
        // Reset game (player hit enemy from the other side)
    }
    if (this.collisionData.touchPoints.other.ontop) {
        // Defeat enemy and make player bounce
    }
}

```

- This ensures the player and enemy can interact effectively

---

### Summary

- Define the enemy in the `assets` object
- Add movement and boundary detection to the enemy
- Handle collisions in the Player.js file

