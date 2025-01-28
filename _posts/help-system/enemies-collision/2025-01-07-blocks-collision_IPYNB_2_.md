---
author: Cason Pollak, Veera Kalakota, Ethan Wong
layout: post
title: Collision with blocks
description: Lesson on collision with blocks in the platformer game
permalink: /help-system/enemies-collision/blocks
categories: ['Enemies and Collision']
toc: True
comments: True
---

# <span style="color: purple; text-shadow: 2px 2px 5px purple;">Collisions with blocks</span>

In this lesson, we’ll be going over the different characteristics of block collisions and how you can add fully functional block collisions into your own game.

#### Step 1 - Creating the Block
The first step in creating the block in the game is creating a new file just for it. The file should be in platformer and should be called Block.js or something related. Once you have created the file, we shall now start defining the Block class.




```python
import GameObject from './GameObject.js';
import GameEnv from './GameEnv.js';

export class Block extends GameObject {
    // Constructor sets up Block object
    constructor(canvas, image, blockData) {
        super(canvas, image, blockData.width, blockData.height);
        this.blockData = blockData;
    }

    // Update method to handle block logic
    update() {
        // Add block-specific update logic here if needed
    }
}

export default Block;
```

This code is similar to the enemy code but tailored for blocks. The Block class extends the GameObject class, and we can start defining the different properties and methods for our block.

After configuring the block in Block.js, you will then have to connect Block to the main game. There are two files in which you’ll have to do this: the main file where the game is initialized and GameLevels.js where the block is actually created as an instance.

First, we’ll be adding the block into the main file. You’ll notice here that there is a variable that defines all the different assets of the game. Players, Backgrounds, Obstacles, etc.


```python
var assets = {
    // previous code above ...

    platforms: {
        grass: {
            src: "/images/platformer/platforms/grass.png",
            width: 256,
            height: 256,
        },
        block: {
            src: "/images/platformer/platforms/block.png",
            width: 256,
            height: 256,
        },
    },
};
```

Here is a snippet on how one of the platforms is defined. We can base our block after the platform. Our block has an image (src), a width, and a height.

Once we define the block in assets, we’ll have to add it to the GameLevel (refer to the code).


```python
new GameLevel(
    { tag: "hills", 
        background: assets.backgrounds.hills, 
        platform: assets.platforms.grass, 
        player: assets.players.mario, block: assets.platforms.block, 
        tube: assets.obstacles.tube, callback: testerCallBack 
    });
```

#### Step 2 - Handling Collisions
Now that we have the block actually defined and created within our game, we can now begin the process of handling collisions between the player and the block.

Collision detection is crucial for ensuring smooth gameplay. We need to check if the player collides with the block and handle the collision appropriately.

The following is how this can be done (this will be added onto the Player class):


```python
// Check for collisions with blocks
checkBlockCollision(block) {
    if (this.x < block.x + block.width &&
        this.x + this.width > block.x &&
        this.y < block.y + block.height &&
        this.y + this.height > block.y) {
        // Collision detected, handle it
        this.handleBlockCollision(block);
    }
}

handleBlockCollision(block) {
    // Handle the collision with the block
    // For example, stop the player's movement or bounce off the block
    if (this.y + this.height <= block.y + block.height / 2) {
        // Collision from the top
        this.y = block.y - this.height;
        this.velocityY = 0; // Stop downward movement
    } else if (this.y >= block.y + block.height / 2) {
        // Collision from the bottom
        this.y = block.y + block.height;
        this.velocityY = 0; // Stop upward movement
    } else if (this.x + this.width <= block.x + block.width / 2) {
        // Collision from the left
        this.x = block.x - this.width;
        this.velocityX = 0; // Stop rightward movement
    } else if (this.x >= block.x + block.width / 2) {
        // Collision from the right
        this.x = block.x + block.width;
        this.velocityX = 0; // Stop leftward movement
    }
}
```

The code checks for collisions between the player and the block and handles the collision by stopping the player's movement or bouncing off the block.

#### Summary
In this lesson, we covered the basics of creating a block, handling collisions with the player, and integrating the block into the game. By following these steps, you can add fully functional block collisions to your platformer game.
