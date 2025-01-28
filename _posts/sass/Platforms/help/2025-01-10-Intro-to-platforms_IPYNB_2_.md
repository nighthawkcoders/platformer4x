---
comments: True
layout: post
title: Introduction to platform and elevation in Platformer 4x
categories: ['Platforms']
description: Introduction to how the platform and elevation works
type: ccc
permalink: _notbooks/Help/Platforms/2025-01-10-Intro-to-platforms.ipynb
author: Lara Banjac
---

<style>
  h1 {
    animation: glow 1s ease-in-out infinite alternate;
    font-size: 3em; /* Increased font size */
  }
</style>

<h1>
  Introduction to platforms in Platformer 4x
</h1>

<style>
@keyframes glow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #00f, 0 0 15px #00f, 0 0 20px #00f; /* Changed color to blue (#00f) */
  }
  to {
    text-shadow: 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 50px #00f; /* Changed color to blue (#00f) */
  }
}
</style>

<h5><span style="; color:#9999ff"> Platforms are one of the base foundations of platformer 4x. After all, what would you do, if there wasn't a floor, paths or blocks to stand on? They are the building blocks that allow characters to traverse the game world. Without them, there would be no way to move, jump, or explore—leaving the game static and uninteresting. Therefore in this lesseon you will learn the basics of platforms in Platformer4x, including adding platforms, designing platforms, positioning platforms and implenting them in special game aspects.

<style>
  h1 {
    animation: glow 1s ease-in-out infinite alternate;
    font-size: 3em; /* Increased font size */
  }
</style>

<h1>
  Designing Platforms
</h1>

<style>
@keyframes glow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #00f, 0 0 15px #00f, 0 0 20px #00f; /* Changed color to blue (#00f) */
  }
  to {
    text-shadow: 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 50px #00f; /* Changed color to blue (#00f) */
  }
}
</style>

<h5><span style="; color:#9999ff"> To design platforms the main thing you will have to focus on is working in your level's file (like in my case for example, it's GameSetterWater.js). Here you will have to scroll down to a JSON array called platforms. The only thing have to do is change the image source as shown below.BONUS: If you want you can also try changing the size by adding/changing a Scalesize to a certain object.



```python
//SIDE NOTE: THIS IS NOT A WORKING CODE; IT'S A SNIPPET FROM THE ACTUAL CODE. THEREFORE EVERYTHING IRRELEVANT TO THE CURRENT PROBLEM Is COMMENTED TO MAKE FOCUSING ON THE SPECIFIC TASK EASIER.

//platforms: {
    sand: { src: "/images/platformer/platforms/sand.png" }, //Change this image source for replacing the floor's platform image with another one
    sandblock: {src:"/images/platformer/platforms/sandblock.png"},//Change this image source to replace the sandblock with a different image
    block: { src: "/images/platformer/platforms/brick_block.png" }, //Change this image source to replace the brickblock with a different image
    //itemBlock: {
        src: "/images/platformer/platforms/mario_block_spritesheet_v2.png",
        //sizeRatio: 83.2,
        //widthRatio: 0.5,
        //heightRatio: 1.0,
        //width: 204,
        //height: 204,
        //scaleSize: 80,
        //speedRatio: 0.7,
        //hitbox: { widthPercentage: 0.4, heightPercentage: -0.2 }
    //}
```

<style>
  h1 {
    animation: glow 1s ease-in-out infinite alternate;
    font-size: 3em; /* Increased font size */
  }
</style>

<h1>
  Positioning Platforms
</h1>

<style>
@keyframes glow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #00f, 0 0 15px #00f, 0 0 20px #00f; /* Changed color to blue (#00f) */
  }
  to {
    text-shadow: 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 50px #00f; /* Changed color to blue (#00f) */
  }
}
</style>

<h5><span style="; color:#9999ff"> For this you will have to scroll down until the end of your game's file. There you will see a list of objects in your game's file. Scroll right and you will be able to see their positions. The only thing that is left to do is simply change it to your desired position in your level.


```python
//AGAIN THIS IS SIMPLY A SNIPPET FROM THE CODE WHICH IS WHY IT'S NOT SUPPOSED TO WORK.

const objects = [
    //{ name: 'water', id: 'background', class: Background, data: assets.backgrounds.water }, //Notice how this object's class says "background". In your case try to focus on the ones classified as either Platform, BlockPlatform or JumpPlatform
    //{ name: 'fish', id: 'background', class: BackgroundParallax, data: assets.backgrounds.fish },
    //{ name: 'reef', id: 'background', class: Background, data: assets.backgrounds.reef },
    { name: 'sand', id: 'floor', class: Platform, data: assets.platforms.sand },
    { name: 'sandblock', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.sandblock, xPercentage: 0.2, yPercentage: 0.85 },
    { name: 'sandblock', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.sandblock, xPercentage: 0.2368, yPercentage: 0.85 },
    { name: 'sandblock', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.sandblock, xPercentage: 0.2736, yPercentage: 0.85 },
    { name: 'sandblock', id: 'wall', class: BlockPlatform, data: assets.platforms.sandblock, xPercentage: 0.6, yPercentage: 1 },
    { name: 'itemBlock', id: 'jumpPlatform', class: JumpPlatform, data: assets.platforms.itemBlock, xPercentage: 0.4, yPercentage: 0.65 }, //item block is a platform
    //{ name: 'goomba', id: 'goomba', class: Goomba, data: assets.enemies.goomba, xPercentage: 0.5, yPercentage: 1, minPosition: 0.05 },
    //{ name: 'goomba', id: 'goomba', class: Goomba, data: assets.enemies.goomba, xPercentage: 0.4, yPercentage: 1, minPosition: 0.05, difficulties: ["normal", "hard", "impossible"] },
    //{ name: 'goomba', id: 'goomba', class: Goomba, data: assets.enemies.goomba, xPercentage: 0.3, yPercentage: 1, minPosition: 0.05, difficulties: ["normal", "hard", "impossible"] },
    //{ name: 'goomba', id: 'goomba', class: Goomba, data: assets.enemies.goomba, xPercentage: 0.2, yPercentage: 1, minPosition: 0.05, difficulties: ["hard", "impossible"] },
    //{ name: 'goomba', id: 'goomba', class: Goomba, data: assets.enemies.goomba, xPercentage: 0.1, yPercentage: 1, minPosition: 0.05, difficulties: ["impossible"] },
    //{ name: 'goombaSpecial', id: 'goomba', class: Goomba, data: assets.enemies.goomba, xPercentage: 0.95, yPercentage: 1, minPosition: 0.5, difficulties: ["hard", "impossible"] }, //this special name is used for random event 2 to make sure that only one of the Goombas ends the random event
    //{ name: 'flyingGoomba', id: 'flyingGoomba', class: FlyingGoomba, data: assets.enemies.flyingGoomba, xPercentage: 0.9, minPosition: 0.5, difficulties: ["normal", "hard", "impossible"] },
    //{ name: 'flyingGoomba', id: 'flyingGoomba', class: FlyingGoomba, data: assets.enemies.flyingGoomba, xPercentage: 0.9, minPosition: 0.5, difficulties: ["hard", "impossible"] },
    //{ name: 'flyingGoomba', id: 'flyingGoomba', class: FlyingGoomba, data: assets.enemies.flyingGoomba, xPercentage: 0.9, minPosition: 0.5, difficulties: ["impossible"] },
    //{ name: 'bubbles', id: 'mushroom', class: Mushroom, data: assets.enemies.bubbles, xPercentage: 0.49 },
    //{ name: 'dimonds', id: 'coin', class: Coin, data: assets.obstacles.dimonds, xPercentage: 0.1908, yPercentage: 0.75 },
    //{ name: 'dimonds', id: 'coin', class: Coin, data: assets.obstacles.dimonds, xPercentage: 0.2242, yPercentage: 0.75 },
    //{ name: 'dimonds', id: 'coin', class: Coin, data: assets.obstacles.dimonds, xPercentage: 0.2575, yPercentage: 0.75 },
    //{ name: 'dimonds', id: 'coin', class: Coin, data: assets.obstacles.dimonds, xPercentage: 0.5898, yPercentage: 0.900 },
    //{ name: 'mario', id: 'player', class: PlayerHills, data: assets.players.mario },
    //{ name: 'Chest', id: 'finishline', class: FinishLine, data: assets.obstacles.chest, xPercentage: 0.85, yPercentage: 0.82 },
    //{ name: 'miniEnd', id: 'background', class: BackgroundTransitions, data: assets.transitions.miniEnd },
  ];
```

<style>
  h1 {
    animation: glow 1s ease-in-out infinite alternate;
    font-size: 3em; /* Increased font size */
  }
</style>

<h1>
  Adding platforms
</h1>

<style>
@keyframes glow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #00f, 0 0 15px #00f, 0 0 20px #00f; /* Changed color to blue (#00f) */
  }
  to {
    text-shadow: 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 50px #00f; /* Changed color to blue (#00f) */
  }
}
</style>

<h5><span style="; color:#9999ff"> If you want to add another platform, you will have to work in the same part of the code as the one responsible for positioning the platforms. Here, you will have to put all the important to your object, including its name, id, class, data and location (see previous code for example).

<style>
  h1 {
    animation: glow 1s ease-in-out infinite alternate;
    font-size: 3em; /* Increased font size */
  }
</style>

<h1>
  Adding Special Platforms
</h1>

<style>
@keyframes glow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #00f, 0 0 15px #00f, 0 0 20px #00f; /* Changed color to blue (#00f) */
  }
  to {
    text-shadow: 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 50px #00f; /* Changed color to blue (#00f) */
  }
}
</style>

<h5><span style="; color:#9999ff"> Now you might be wondering how to add a platform different from the others and can't be classfied as any of the already created classes. For this you will have to create your own class, specifically made for your individuaal platform, following its own individual rules. To do this, create a file for your platform and your own ruless and characteristics to it. Here is an example of how it was done for BlockPlatform.js:


```python
import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

export class BlockPlatform extends GameObject {
    constructor(canvas, image, data, xPercentage, yPercentage) {
        super(canvas, image, data);
        this.platformX = xPercentage * GameEnv.innerWidth;
        this.platformY = yPercentage;

        // Add glow effect
        this.canvas.style.boxShadow = "0 0 10px 5px rgba(0, 255, 255, 0.7)";
    }

    // Required, but no update action
    update() {
        //console.log(this.platformY)
    }

    // Draw position is always 0,0
    draw() {
        this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
    }

    // Set platform position
    size() {
        // Formula for Height should be on constant ratio, using a proportion of 832
        const scaledHeight = GameEnv.innerWidth * (1/27);
        const scaledWidth = scaledHeight;  // width of jump platform is 1/10 of height
        const platformX = this.platformX;
        const platformY = (GameEnv.bottom - scaledHeight) * this.platformY;
        // set variables used in Display and Collision algorithms
        this.bottom = platformY;
        this.collisionHeight = scaledHeight;
        this.collisionWidth = scaledWidth;
        //this.canvas.width = this.width;
        //this.canvas.height = this.height;
        this.canvas.style.width = `${scaledWidth}px`;
        this.canvas.style.height = `${scaledHeight}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `${platformX}px`;
        this.canvas.style.top = `${platformY}px`;
    }
}

export default BlockPlatform;
```
