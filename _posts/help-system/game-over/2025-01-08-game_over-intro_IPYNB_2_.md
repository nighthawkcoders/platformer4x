---
author: Shay, Akhil, William
layout: post
title: GameOver intro
description: Understanding the concepts behind GameOver / transitions / and the leaderboard
permalink: /GameOverHelp/intro
menu: nav/GameOverHelp.html
toc: True
categories: ['Game Over']
search_exclude: False
---

## Game Over



```python
### Summary of GameSetterEnd.js

The `GameSetterEnd.js` file handles the end-of-game logic, including transitioning between levels and resetting the game environment.

- **Transitioning between levels**: This involves destroying current game objects and loading new ones. The transition process is managed by the `transitionToLevel` function.

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

    The above code sets the game in transition mode, destroys existing game objects to clear the current level, checks if the new level is different from the current one, clears any claimed coins, loads the new level, updates the current level, updates properties like the invert setting, triggers a resize event to redraw canvas elements, and then ends the transition mode.

- **Resetting game variables**: This prepares the game for a new session by resetting variables and properties. The reset process is managed by checking the completion status of the current level.

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
    }

    The above code checks if the current level is complete by running the `isComplete` callback function. If the current level is complete and the next level index is within bounds, it transitions to the next level using the `transitionToLevel` function.

```

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


```python
const data = {
    userID: GameEnv.userID,
    time: GameEnv.time - 10, // Adjusted time
    coinScore: GameEnv.coinScore,
    date: Date(),
    gameSpeed: GameEnv.gameSpeed,
    difficulty: GameEnv.difficulty
};

const currDataList = JSON.parse(localStorage.getItem(this.localStorageTimeKey));

if (!currDataList || !Array.isArray(currDataList)) {
    localStorage.setItem(this.localStorageTimeKey, JSON.stringify([data]));
} else {
    currDataList.push(data);
    localStorage.setItem(this.localStorageTimeKey, JSON.stringify(currDataList));
}

```

The leaderboard functionality in this code is indirectly implemented through the saveTime() and getAllTimes() methods. These methods interact with localStorage to persist and retrieve player performance data, such as time, score, and other metadata. Here's how it works:

1. Saving Data for the Leaderboard
The saveTime() method is responsible for storing the player's game performance data:

Inputs: Time (GameEnv.time), score (GameEnv.coinScore), and additional information like user ID, game speed, difficulty, and date.
Steps:
Constructs an object (data) representing the player's game session.
Fetches the current leaderboard data from localStorage using the key localStorageTimeKey.
If no previous data exists, initializes a new array with the current game session.
Appends the new game session data to the existing leaderboard data.
Updates localStorage with the updated leaderboard data.
javascript


