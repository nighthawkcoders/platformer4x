---
author: Shay, Akhil, William
layout: post
title: GameOver intro
description: Understanding the concepts behind GameOver / transitions / and the leaderboard
permalink: /GameOverHelp/intro
menu: nav/GameOverHelp.html
toc: True
search_exclude: False
---

Explain what your topic is and how it is being used in the game/ what it is

Game Over


## Transitions




Transitions are how the game switches you from your current level to the next level or a selected level if you are using the level select menu

Upon reaching the end of a level you will trigger a function that will update the current level and switch to the next level
(code below)
```js
            if (currentLevel) {
                // run the isComplete callback function
                if (currentLevel.isComplete && currentLevel.isComplete()) {
                    const currentIndex = GameEnv.levels.indexOf(currentLevel);
                    // next index is in bounds
                    if (currentIndex !== -1 && currentIndex + 1 < GameEnv.levels.length) {
                        // transition to the next level
                        this.transitionToLevel(GameEnv.levels[currentIndex + 1]);
                    } 
                }
```

In the code below you can see how the function works by removing all the objects on the screen and adds the objects for the next level which is found inside the levels object array
(code below)
```js
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
```

Leaderboard
