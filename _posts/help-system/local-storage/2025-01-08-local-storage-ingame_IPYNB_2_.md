---
layout: post
title: Local Storage In-Game
author: Alex Van Linge
description: The current usage of local storage in game
permalink: /local-storage/in-game/
menu: nav/local_storage.html
categories: ['Local Storage']
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





## Further Explanation 

To be more in depth, this code works by creating a data object, that collects several types of data like userID, coinScore, etc.

After this it checks for saved data in localStorage with `this.localStorageTimekey` and if no data is found then it creates a new list with the current data and saves it 

Now if there is a list of saved data, then it adds new data to the list and then saves this updated list back into the local storage. Neat huh! (i am in pain)

## Leaderboard

Recently me and my team members discovered that the mythical leaderboard apparently does work, after previously believeing the opposite.

Here is the code that saves and loads the leaderboard data, which includes both time and coin scores


```python
const localData = JSON.parse(localStorage.getItem(this.currentKey));
localStorage.setItem(this.currentKey, JSON.stringify([data]));
localStorage.setItem(this.currentKey, JSON.stringify(currDataList));
```

## Detailed Code Excerpts

This is what physically saves and loads the leaderboard data, the function being `getTimeSortedLeaderboardData`, `getCoinSortedLeaderboardData`, and `getDateSortedLeaderboardData`.


```python
%%js
getTimeSortedLeaderboardData (slowestFirst) {
    const localData = JSON.parse(localStorage.getItem(this.currentKey));
    if (!localData) {
        console.log("NO DATA");
        return [];
    }
    localData.sort((a, b) => a.time - b.time);
    if (slowestFirst) {
        localData.reverse();
    }
    return localData;
}
```


```python
%%js
getCoinScoreSortedLeaderboardData (highestFirst) {
    const localData = JSON.parse(localStorage.getItem(this.currentKey));
    if (!localData) {
        console.log("NO DATA");
        return [];
    }
    localData.sort((a, b) => a.coinScore - b.coinScore);
    if (highestFirst) {
        localData.reverse();
    }
    return localData;
}
```


```python
%%js
getDateSortedLeaderboardData (newestFirst) {
    const localData = JSON.parse(localStorage.getItem(this.currentKey));
    if (!localData) {
        console.log("NO DATA");
        return [];
    }
    localData.sort((a, b) => new Date(a.date) - new Date(b.date));
    if (newestFirst) {
        localData.reverse();
    }
    return localData;
}
```

### Handling Leaderboard Updates (Present in `GameLevel.js`)


```python
%%js
handleLeaderboardUpdates(data) {
    const existingTimeScores = JSON.parse(localStorage.getItem('GtimeScores')) || [];
    existingTimeScores.push(data);
    localStorage.setItem('GtimeScores', JSON.stringify(existingTimeScores));
}
```

### Clearing Leaderboard Data 


```python
%%js
clearTable () {
    const table = document.getElementsByClassName("table scores")[0];
    localStorage.removeItem(Leaderboard.currentKey);
    Leaderboard.currentPage = 1;
    if (table) {
        table.remove(); //remove old table if it is there
    }
    Leaderboard.updateLeaderboardDisplay();
}
```

# Summarization

Local storage is utilized in `Leaderboard.js` to manage data, which includes saving, loading, sorting, and wiping scores. `GameLevel.js` also has a function which handles updates by saving new scores to the local storage. This is present in order to assure that the data is continuous across sessions and is able to be both retrieved and displayed when neccessary 

Here is what the actual leaderboard looks like in-game! (srum master lucas abuses us)

![screenshot](/images/platformer/leaderboardScreenshot.png)
