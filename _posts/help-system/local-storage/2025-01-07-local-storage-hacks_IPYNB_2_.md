---
layout: post
title: Local Storage Hacks
author: Matthew Borg
description: Carti once told me that to master Local Storage, you have to complete the following hacks.
permalink: /local-storage/hacks/
menu: nav/local_storage.html
categories: ['Local Storage']
toc: True
---

# Local storage Hack #1

Heres a quick first hack for local storage that can help you understand the basics of it. As seen before, the following code can be used for storing and retrieving data after refreshing the session by local storage.




```python

<div>
    <button onclick="saveData()">Save Data</button>
    <button onclick="loadData()">Load Data</button>
    <pre id="output" style="border: 1px solid #ccc; padding: 10px; background-color:rgb(15, 15, 15);"></pre>
</div>

<script>
function saveData() {
    localStorage.setItem("cat", "meow");
    alert("Data saved!");
}

function loadData() {
    const data = localStorage.getItem("cat");
    document.getElementById("output").innerText = data ? `Stored data: ${data}` : "No data found";
}
</script>
```

Now, try to replicate the code above, and change some parts of it

# Local Storage Hack #2 Ingame



Use localStorage to save and load a player's progress in a game using score and levels


```python
// Add let level and check if score and level are stored in localStorage; if not, initialize them
let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
// Delete this comment and add code here


// Update the displayed score and level
document.getElementById('score').textContent = `Score: ${score}`;
// Delete this comment and add code here


// Event listener for the "Earn Points" button
document.getElementById('scoreButton').addEventListener('click', function() {
    score += 10;  // Increase score by 10 points
    if (score >= 100) {
        level++;  // Increase level if score reaches 100
        score = 0; // Reset score when level up
    }
    // Update the displayed score and level
    document.getElementById('score').textContent = `Score: ${score}`;
    // Delete this comment and add code here
   
    // Add and save the updated score and level in localStorage
    // Delete this comment and add code here
    localStorage.setItem('level', level);
});


// Event listener for the "Reset Game" button
document.getElementById('resetButton').addEventListener('click', function() {
    score = 0;
    level = 1;
    // Update the displayed score and level
    document.getElementById('score').textContent = `Score: ${score}`;
    // Delete this comment and add code here
   
    // Reset localStorage and add score
  // Delete this comment and add code here
    localStorage.setItem('level', level);
});


```

# Local Storage Hack #3 

Below is a modified version of the code shown in applications. It expands on saving info given, and when there is no info then there is an output of usually "no data" or "nothing was entered"


```python
<div>
    <button onclick="saveData()">Save Data</button>
    <button onclick="loadData()">Load Data</button>
    <pre id="output" style="border: 1px solid #ccc; padding: 10px; background-color:rgb(15, 15, 15);"></pre>
</div>


<script>
function saveData() {
    // Prompt the user for input to customize the bird's sound
    const birdSound = prompt("Enter the sound of the bird (e.g., chirp):");


    // Check if the user entered something
    if (birdSound) {
        localStorage.setItem("bird", birdSound); // Save the bird sound in localStorage
        alert("Data saved!");
    } else {
        alert("No sound entered. Data was not saved.");
    }
}


function loadData() {
    // Retrieve the stored bird sound from localStorage
    const data = localStorage.getItem("bird");


    // Display the data if found, otherwise show a message saying no data
    document.getElementById("output").innerText = data ? `Stored data: ${data}` : "No data found";
}
</script>

```

Copy the code and change the const to whatever and change the animal,sound, and try to make 2 getItems
