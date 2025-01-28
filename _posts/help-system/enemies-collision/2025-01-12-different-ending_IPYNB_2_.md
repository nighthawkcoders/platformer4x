---
author: Cason Pollak, Veera Kalakota, Ethan Wong
layout: post
title: Enemies & Collision with Different Ending
description: A lesson on how to change the end of the game
permalink: /help-system/different-ending/lesson
categories: ['Enemies and Collision']
toc: True
comments: True
---

**Different Endings In The Mario Game:**

*In Mario, in order to exit the level, most games have you go through a tube.*

<img src="data:image/jpeg;base64,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" >


However, this gets extremely boring, as this happens for each level. 

In order to change the ending, there is something that is crucial from your end. Without it, you won't be able to make much progress, and your ideas will be just as boring as the original ending. 

You need to get creative!! Whatever your ideas are, write them down, and create pseudo code (rough draft) on how you can accomplish this. In our team's level for the Mario Game (level 1), we created a lock and key system. If the player obtained the key, then Mario would be able to exit the level. However, if Mario did not collect the key, they would not be able to exit the level. Also, the tube was changed to a door, and we animated the door. When the player got the key and collided with the door, the door would "open", and the player would be able to go through. If you can, try playing with the first level. Here is the link: https://nighthawkcoders.github.io/platformer4x/

Although coding something similar may seem tough, just remember that the hardest part in trying to code in this game is to find the file to put the code in. After that, it is just a few lines of code. However, keep in mind that this process may be repeated multiple times. 
In my case, here were the files that we changed for this level: (Anything circled in red was changed or added to the original code)

**GameSetterHills:**


```python
const assets = {  
    obstacles: {
      tube: { src: "/images/platformer/obstacles/doorclosed.png",
      hitbox: { widthPercentage: 0.5, heightPercentage: 0.5},
      width: 52, //87
      height: 81, //125
      scaleSize: 100,
      },
      coin: { src: "/images/platformer/obstacles/coin.png" },
    },
    platforms: {
      grass: { src: "/images/platformer/platforms/grass.png" },
      bricks: { src: "/images/platformer/platforms/brick_wall.png" },
      block: { src: "/images/platformer/platforms/brick_block.png" }, 
      itemBlock: {
        src: "/images/platformer/sprites/key.png",
        sizeRatio: 83.2,
        widthRatio: 1.0,
        heightRatio: 1.0,
        width: 5952, // 204
        height: 6000, // 204
        scaleSize: 10, // 80
        speedRatio: 0.7,
        hitbox: { widthPercentage: 0.4, heightPercentage: -0.2 }
      },
    },
}
```


    <IPython.core.display.Javascript object>


In GameSetterHills, the only thing that was changed were the sprites, as well as their width, height, and scaleSize. Those 3 variables control the size of the sprite when it is displayed on screen. In VSCode, keep in mind that the sprite data will be listed as the width times the height (eg. 500 x 600). 

**PlayerHills:**


```python
// 2. Collision between player right and finishline  
if (this.collisionData.touchPoints.this.right && GameEnv.keyCollected) {
    this.state.movement.right = false;
    this.state.movement.left = true;
    GameEnv.gameObjects[GameEnv.gameObjects.length - 1].updateImg()
    setTimeout(() => {
        this.x = GameEnv.innerWidth + 1;
    }, 1250);
// 3. Collision between player left and finishline
} else if (this.collisionData.touchPoints.this.left && GameEnv.keyCollected) {
    this.state.movement.left = false;
    this.state.movement.right = true;
    GameEnv.gameObjects[GameEnv.gameObjects.length - 1].updateImg()
    setTimeout(() => {
        this.x = GameEnv.innerWidth + 1;
    }, 1250);
}
```

In PlayerHills, we needed the if statement to check for the key being collected, as well as changing the closed door to the open door. Also, we added a delay so that the player had time to "go through the door" in order to leave the level. The intial lines of the if statements prevent the player from moving befind the door when they collided with it. 

### Conclusion:

Overall, the most difficult part of this assignment is to find the files in which the code should go. Also, keep in mind that the more creative you are, the better your level would look like. As you can see, it is only a few lines of code that are added. 

Here are some ideas to get you started:
1. Collect All Coins
- Mechanic: Mario must collect all the coins in the level to trigger the exit.
- How it works: Once Mario collects the last coin, a special exit point (like a flagpole or warp pipe) appears, allowing him to leave the level.
2. Defeat All Enemies
- Mechanic: Mario must defeat every enemy in the level before the exit becomes available.
- How it works: The game could provide a counter to show how many enemies are left. Once the final enemy is defeated, a victory sound plays, and the exit appears.
3. Time Challenge
- Mechanic: Mario must reach a specific location or collect a certain number of items within a time limit to unlock the exit.
- How it works: If the time runs out, Mario loses a life. If successful, the exit becomes accessible.
4. Puzzle Completion
- Mechanic: Mario must solve a puzzle (e.g., moving blocks to a specific configuration, hitting switches in the correct order) to unlock the exit.
- How it works: The puzzle could involve environmental elements like moving platforms or hidden triggers.
5. Star Power Activation
- Mechanic: Mario must find and collect a hidden star item in the level to power up the exit.
- How it works: Once the star is collected, the exit becomes available, but enemies temporarily speed up or get tougher.
6. Ally Rescue
- Mechanic: Mario must find and rescue a trapped ally (e.g., Toad, a Yoshi egg) hidden somewhere in the level.
- How it works: Once the ally is rescued, they follow Mario, and both must reach a specific point to finish the level.
7. Environmental Cleanup
- Mechanic: Mario must "fix" the environment by collecting trash (e.g., broken blocks, debris) or planting flowers in designated spots.
- How it works: Once the environment is restored, the level exit becomes available.
8. Coin Race
- Mechanic: Certain coins appear only for a limited time, and Mario must collect all of them before they disappear to finish the level.
- How it works: If Mario misses even one coin, the timer resets, and he has to try again.
9. Boss Fight
- Mechanic: Instead of a door, Mario encounters a mini-boss or a group of tougher enemies guarding the exit.
- How it works: Defeating the boss unlocks the way forward.
10. Build the Exit
- Mechanic: Mario must find scattered parts of an exit (e.g., a broken bridge, pieces of a warp pipe) and assemble them.
- How it works: Each piece is hidden or guarded, and once all are collected, the exit activates.
