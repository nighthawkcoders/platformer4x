---
author: Srinaga Pillutla
layout: post
title: Coin PNG intro
description: we explain the PNG format and how to use it in Coin or any other png
permalink: help-system/platform-elevated/Coin png-intro
toc: True
comments: True
categories: ['Platforms']
---

# <span style="color: pink; text-shadow: 2px 2px 5px pink;">How to add any png</span>

## <span style="color: pink; text-shadow: 2px 2px 5px pink;">In order to add any type of coin or any type of png DO the following steps:
- First, you need to create a new folder in the assets folder and name it as coins or diamonds.
-  then you need to add the image of the coin or diamond in the folder you created.
-  then you need to add the following code in the assets or in the game file or create one if you don't have one.
- then you need to define in Gamesetter.js or any file you want to use it in.</span>



```python
// Assuming you have already created a folder named 'diamonds' in the 'assets' folder and added 'diamond.png' in it

// Load the diamond image in your game
function preload() {
    this.load.image('diamond', 'assets/diamonds/diamond.png');
}

// Create the diamond sprite in your game
function create() {
    this.add.sprite(100, 100, 'diamond');
}

// Add the preload and create functions to your game configuration
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);
```

# <span style="color: blue; text-shadow: 2px 2px 5px pink;">explantaion </span> 

The preload function is responsible for loading game assets before the game starts. In this case, it loads an image named 'diamond' from the specified path. This ensures that the image is available when needed in the game.
Create Function:

The create function is called after the assets are loaded. It creates a sprite (a 2D image) at specific coordinates (100, 100) using the 'diamond' image loaded in the preload function. This sprite will be part of the game scene.
Game Configuration:

The config object defines the configuration for the game, including the renderer type (WebGL or Canvas), the dimensions of the game canvas (800x600), and the scene configuration, which includes the preload and create functions.
Game Initialization:

The game is initialized with the specified configuration, creating a new Phaser game instance

## <span style="color: pink; text-shadow: 2px 2px 5px pink;">Application into a game explanation </span>

Applying to a Game


This code is part of setting up a basic game using the Phaser framework. Here's how it applies to a game:

Asset Management: The preload function ensures that all necessary assets (like images) are loaded before the game starts. This prevents issues where assets are missing or not loaded in time.
Game Scene Setup: The create function sets up the initial state of the game scene by adding sprites or other game objects. In this example, it adds a diamond sprite to the game at a specific position.
Configuration and Initialization: The config object and game initialization ensure that the game runs with the correct settings, such as the renderer type and canvas size, providing a smooth gaming experience.



```python
import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

export class Diamond extends GameObject {
    constructor(canvas, image) {
        super(canvas, image, 0);
        // Set the initial position and size
        this.size();
    }

    // Required, but no update action
    update() {
    }

    // Draw position is always 0,0
    draw() {
        // Save the current transformation matrix
        this.ctx.save();

        // Rotate the canvas 90 degrees to the left
        this.ctx.rotate(-Math.PI / 2);

        // Draw the image at the rotated position (swap x and y)
        this.ctx.drawImage(this.image, -this.image.height, 0);

        // Restore the original transformation matrix
        this.ctx.restore();
    }

    // Center and set Diamond position with adjustable height and width
    size() {
        // Make the image 10 times smaller
        const scaledWidth = this.image.width * 0.2;
        const scaledHeight = this.image.height * 0.169;

        // Center the object on the screen
        const randomPosition = Math.random() < 0.5; // Randomly choose between two positions

        let diamondX, diamondY;

        if (randomPosition) {
            diamondX = (GameEnv.innerWidth - scaledWidth) / 2.5;
            diamondY = (GameEnv.innerHeight - scaledHeight) / 1.01;
        } else {
            diamondX = (GameEnv.innerWidth - scaledWidth) / 7.5;
            diamondY = (GameEnv.innerHeight - scaledHeight) / 2.02;
        }

        // Set variables used in Display and Collision algorithms
        this.bottom = diamondY + scaledHeight;
        this.collisionHeight = scaledHeight;
        this.collisionWidth = scaledWidth;

        this.canvas.style.width = `${scaledWidth}px`;
        this.canvas.style.height = `${scaledHeight}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `${diamondX}px`;
        this.canvas.style.top = `${diamondY}px`;
    }
}

export default Diamond;
```

This is the class I was talking about as this calls the intization for the game to call on the diamonds.png so the picture shows up and if you want use this use it but, we might have diffrent heights so change it to your liking 

# <span style="color: pink; text-shadow: 2px 2px 5px pink;">Conclusion </span>

In Short chaning the coin is easier than you think here what I mean
- Create a class for yoru coin or anyother Thing like Thing1

- Then you define that class in gamesetetr.js

- then run make 

- then it should be in game
