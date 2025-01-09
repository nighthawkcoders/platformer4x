---
layout: post
title: Local Storage In-Game
author: Alex Van Linge
description: The current usage of local storage in game
permalink: /local-storage/in-game/
menu: nav/local_storage.html
toc: True
---

<br>

# Usage of Local Storage in Game 

Currently in game, local storage is used in numerous of the js files for the platformer. 

One of the places where Local Storage is used is in `SettingsControl.js`, where it is used to save and load several settings in the game like the user ID, the current level, game speed, gravity, and difficulty

```js
localStorage.setItem('funFact', GameEnv.funFact);
localStorage.setItem(lightmodekey, GameEnv.isLightMode);
this.save(this.keys.userID);
this.save(this.keys.currentLevel);
this.save(this.keys.isInverted);
this.save(this.keys.gameSpeed);
this.save(this.keys.gravity);
this.save(this.keys.difficulty);
```

Another place that it is used is in `GameControl.js`, where it is used for saving and loading game times. 

```js
const data = {
    userID: GameEnv.userID,
    time: GameEnv.time - 10,
    coinScore: GameEnv.coinScore,
    date: Date(),
    gameSpeed: GameEnv.gameSpeed,
    difficulty: GameEnv.difficulty
};

const currDataList = JSON.parse(localStorage.getItem(this.localStorageTimeKey));

if (!currDataList || !Array.isArray(currDataList)) {
    localStorage.setItem(this.localStorageTimeKey, JSON.stringify([data]));
    return;
}

currDataList.push(data);
localStorage.setItem(this.localStorageTimeKey, JSON.stringify(currDataList));
```

To be more in depth, this code works by creating a data object, that collects several types of data like userID, coinScore, etc.

After this it checks for saved data in localStorage with `this.localStorageTimekey` and if no data is found then it creates a new list with the current data and saves it 

Now if there is a list of saved data, then it adds new data to the list and then saves this updated list back into the local storage


