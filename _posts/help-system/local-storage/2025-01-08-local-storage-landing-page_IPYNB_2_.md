---
author: Lucas Masterson
layout: post
title: Local Storage Landing Page
description: Landing page for the Local Storage section
permalink: /local-storage/landing/
menu: nav/local_storage.html
categories: ['Local Storage']
toc: True
---

# Welcome to Local Storage!

<img src="https://media1.tenor.com/m/Mle3dtAOrfEAAAAd/cat-keyboard.gif" alt="welcome" width="200">

# Ideation for Local Storage 

## Ideas for implementing local storage:

### Saving current progress in-game

Essentially, when you reset you will stay on the same level that you left on at, instead of having to go back to the beginning and choose the level again.

Main way to achieve this would be to create some subroutine in the `GameControl.js` file that saves the current  level index when transitioning levels via the `async transitionToLevel(newLevel)` method. You can just append this to a key in local storage then retrieve this in `GameSetup.js` to load the level index (you might need to do some parsing in this).


### Preferences QoL

Another idea that we had planned is to save the player's preferences (all the settings that you can input, like game speed and difficulty, etc) with local storage as well.

Main way to achieve this is similar to that of the p reference lock for fun facts under `SettingsControl.js`. All settings are saved there, and you can refer to the code for locking fun facts:

```js
hintsButton() {
        const container = document.createElement("div")
        const title = document.createElement("span")
        title.textContent = "Show Hints: "
        const hintsButton = document.createElement("input");
        hintsButton.type = "checkbox";

        // Reference the hints section
        const hints = document.getElementsByClassName("fun_facts")[0];

        // Check localStorage for existing funFact state and set the initial state
        const localStorageFunFact = window.localStorage.getItem('funFact');

        if (localStorageFunFact !== null) {
            GameEnv.funFact = localStorageFunFact.toLowerCase() === "true";
        } else {
            // Default value if nothing is found in localStorage
            // Default is to disable fun facts
            GameEnv.funFact = false;
        }

        // Set the initial state of hints and the checkbox based on GameEnv.funFact
        if (GameEnv.funFact) {
            hints.style.display = "unset";
            hintsButton.checked = true;
        } else {
            hints.style.display = "none";
            hintsButton.checked = false;
        }

        // Add event listener to the button to update display and localStorage
        hintsButton.addEventListener("click", () => {
            if (!hintsButton.checked) {
                hints.style.display = "none";
                GameEnv.funFact = false;
            } else {
                hints.style.display = "unset";
                GameEnv.funFact = true;
            }

            localStorage.setItem('funFact', GameEnv.funFact);
        });
                    
        container.append(title)
        container.append(hintsButton)

        return container
    },
```

