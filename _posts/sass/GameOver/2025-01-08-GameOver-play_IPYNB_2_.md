---
layout: post
title: GameOver intro
description: Understanding the concepts behind GameOver / transitions / and the leaderboard
permalink: /GameOverHelp/play
menu: nav/GameOverHelp.html
toc: True
---

create snippets of code that that can be changed and played with to teach them how your topic works with hands on changes

Game Over

## Transitions

You can add checks before the level transition to make requrments needed to procead to the next level


```python
            //add checks here

                // Transition to the next level when touching the flag
                const index = GameEnv.levels.findIndex(level => level.tag === "Water")
                GameControl.transitionToLevel(GameEnv.levels[index]);

//errors will occur as there is no such thing as GameEnv in this example
```

Transitions are a very important game futrue as it allows the made levels to alternate after finishing a level.
Look at the code below and play around with it in your game to see what breaks it, how it breaks, and ways it could possible be imporved.
(found in  gameControl.js 210)


```python
async transitionToLevel(newLevel) {
    this.inTransition = true;

    // Destroy existing game objects
    GameEnv.destroy();

    // Load GameLevel objects
    if (GameEnv.currentLevel !== newLevel) {
        GameEnv.claimedCoinIds = [];
    }
    await newLevel.load();
    GameEnv.currentLevel = newLevel;

    // Update invert property
    GameEnv.setInvert();
    
    // Trigger a resize to redraw canvas elements
    window.dispatchEvent(new Event('resize'));

    this.inTransition = false;
}

//might err if ran inside the nb
```

Leaderboard
