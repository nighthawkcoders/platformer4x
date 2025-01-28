---
author: Shay, Akhil, William
layout: post
title: GameOver play
description: Understanding the concepts behind GameOver / transitions / and the leaderboard
permalink: /GameOverHelp/play
menu: nav/GameOverHelp.html
toc: True
categories: ['Game Over']
search_exclude: False
---

## Game Over


```python
// To build GameLevels, each contains GameObjects from below imports
import Background from './Background.js'

// Define the assets
const assets = {  
  backgrounds: {
    end: { src: "/images/platformer/backgrounds/game_over.png" },
  },
};

// Game Level defintion...
const objects = [
  // GameObject(s), the order is important to z-index...
  { name: 'end', id: 'background', class: Background, data: assets.backgrounds.end },
];

const GameSetterEnd = {
  tag: 'End',
  assets: assets,
  objects: objects
};

export default GameSetterEnd;

```

## Transitions

You can add checks before the level transition to make requrments needed to procead to the next level


```python
            %%js
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
%%js
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

## Leaderboard

I have some cool ideas to improve the code for the current leaderboard and some started code for each to help contribute to that!


```python
sortLeaderboard(entries) {
    return entries.sort((a, b) => {
        // Sort by time (ascending), then by score (descending)
        if (a.time === b.time) {
            return b.score - a.score; // Higher score first if times are equal
        }
        return a.time - b.time; // Shorter time first
    });
},
getAllTimes() {
    let timeTable = localStorage.getItem(this.localStorageTimeKey);
    if (!timeTable) return [];
    const parsedTable = JSON.parse(timeTable);

    // Sort the leaderboard before returning
    return this.sortLeaderboard(parsedTable);
},

```

Idea 2: Add Date Stamps and Display Recent Achievements
Add a date field to each entry to show when the score was achieved. Filter and display only scores achieved within the last 7 days.

Implementation:

Modify the saveTime() method to include a timestamp.
Add a getRecentTimes() method to filter scores by date.


```python
saveTime(time, score) {
    if (time === 0) return;
    const data = {
        userID: GameEnv.userID,
        time: time,
        score: score,
        date: new Date().toISOString(), // Add current timestamp
    };

    const oldTable = this.getAllTimes() || [];
    oldTable.push(data);

    localStorage.setItem(this.localStorageTimeKey, JSON.stringify(oldTable));
},
getRecentTimes() {
    const allTimes = this.getAllTimes();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    // Filter scores achieved within the last 7 days
    return allTimes.filter(entry => new Date(entry.date) >= oneWeekAgo);
},

```

Create a Leaderboard Summary Display
Provide a leaderboard summary that includes the top score, average time, and total players. This gives users insights into their performance relative to others.

Implementation:

Add a getLeaderboardSummary() method.
Calculate key statistics like average time, top score, and player count.


```python
getLeaderboardSummary() {
    const allTimes = this.getAllTimes();
    if (allTimes.length === 0) return null;

    const totalPlayers = allTimes.length;
    const topScore = Math.max(...allTimes.map(entry => entry.score));
    const averageTime = (allTimes.reduce((sum, entry) => sum + entry.time, 0) / totalPlayers).toFixed(2);

    return {
        totalPlayers,
        topScore,
        averageTime,
    };
},
displayLeaderboardSummary() {
    const summary = this.getLeaderboardSummary();
    if (!summary) {
        console.log("No leaderboard data available.");
        return;
    }

    console.log(`Total Players: ${summary.totalPlayers}`);
    console.log(`Top Score: ${summary.topScore}`);
    console.log(`Average Time: ${summary.averageTime} ms`);
}

```

Bonus: Improve User Experience
Add these features to the UI using DOM manipulation (e.g., a dynamic leaderboard table).
Allow users to filter by specific criteria (e.g., top scores or recent achievements).
