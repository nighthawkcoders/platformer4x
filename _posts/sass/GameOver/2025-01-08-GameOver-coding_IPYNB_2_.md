---
author: Shay, Akhil, William
layout: post
title: GameOver coding
description: Understanding the concepts behind GameOver / transitions / and the leaderboard
permalink: /GameOverHelp/coding
menu: nav/GameOverHelp.html
toc: True
search_exclude: False
---

go in depth on how your topic works, how it is implemented, some changes you can make, and how it is important to have in the game

Game Over

Transitions

GameConstrol(210)
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
    },
```

GameLevel.js(36)
```js
async load() {
        Socket.removeAllListeners("stateUpdate") //reset Socket Connections
        Socket.removeAllListeners("disconnection")
        Socket.removeAllListeners("leaderboardUpdate")
        // Socket.createListener("leaderboardUpdate",this.handleLeaderboardUpdates)
        // Socket.createListener("stateUpdate",this.handleStateUpdates)
        Socket.createListener("disconnection",this.handleSocketDisconnect)
        try {
            var objFile = null;
            for (const obj of this.gameObjects) {
                if (obj.data.file) {
                    // Load the image for the game object.
                    objFile = obj.data.file; 
                    console.log(objFile);
                    obj.image = await this.loadImage(obj.data.file);
                    // Create a new canvas for the game object.
                    const canvas = document.createElement("canvas");
                    canvas.id = obj.id;
                    document.querySelector("#canvasContainer").appendChild(canvas);
                    // Create a new instance of the game object.
                    new obj.class(canvas, obj.image, obj.data, obj.xPercentage, obj.yPercentage, obj.name, obj.minPosition);
                }
            }
        } catch (error) {
            console.error('Failed to load one or more GameLevel objects: ' + objFile, error);
        }
    }

```

Leaderboard
