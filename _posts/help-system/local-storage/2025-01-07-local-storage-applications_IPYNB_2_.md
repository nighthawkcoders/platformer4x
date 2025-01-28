---
author: Ethan Fu
layout: post
title: Local Storage Applications
description: What more can you do??
permalink: /local-storage/applications
menu: nav/local_storage.html
categories: ['Local Storage']
toc: True
---

# What Else Can You Use Local Storage For?

If you want to cache user data for multiple sessions, you can use local storage! (As long as the data is smaller than 5 MB, which is the limit)

Local storage has two main uses on websites:
- Storing user preferences
- Saving user progress (such as text)

![skull](https://media1.tenor.com/m/ykQxscm4x1cAAAAd/skull-skull-skull-skull-skull-skull-skull-skull.gif)

## How?

All the data is stored in local storage in key value pairs, similar to the example given before. Since these are all simple pieces of data, all you would have to do to make the local storage function work for something else is to define new key value pairs and make them actually do things by making the functions for updating local storage additionally run code that actually changes the user frontend to save preferences.

### Demo:
(Written in html to actually function on the site)

<br>

<div>
    <button onclick="saveLight()">Light Mode</button>
    <button onclick="saveDark()">Dark Mode</button>
    <button onclick="showPreference()">Show Preference</button>
    <pre id="output" style="border: 1px solid #ccc; padding: 10px; background-color: rgb(15, 15, 15);"></pre>
    <div id="colorSquare" style="width: 100px; height: 100px; border: 1px solid #000; margin-top: 10px; background-color: #ccc;"></div>
</div>

<script>
function saveLight() {
    localStorage.setItem("theme", "light");
    alert("Data saved!");
    updateSquareColor();
}

function saveDark() {
    localStorage.setItem("theme", "dark");
    alert("Data saved!");
    updateSquareColor();
}

function showPreference() {
    const data = localStorage.getItem("theme");
    document.getElementById("output").innerText = data ? `Theme: ${data}` : "No data found";
}

function updateSquareColor() {
    const theme = localStorage.getItem("theme");
    const square = document.getElementById("colorSquare");
    if (theme === "light") {
        square.style.backgroundColor = "#e9e3f2";
    } else if (theme === "dark") {
        square.style.backgroundColor = "#2b2731";
    } else {
        square.style.backgroundColor = "#e9e3f2";
    }
}

updateSquareColor();
</script>

### Code Example with comments:


```python
<div>
    <button onclick="saveLight()">Light Mode</button>
    <button onclick="saveDark()">Dark Mode</button>
    <button onclick="showPreference()">Show Preference</button>
    <pre id="output" style="border: 1px solid #ccc; padding: 10px; background-color: rgb(15, 15, 15);"></pre>
    <div id="colorSquare" style="width: 100px; height: 100px; border: 1px solid #000; margin-top: 10px; background-color: #ccc;"></div>
</div>

<script>
function saveLight() { // Saves light mode preference
    localStorage.setItem("theme", "light"); // Changes the value for the key (theme) to light
    alert("Data saved!");
    updateSquareColor(); // Updates the square color
}

function saveDark() { // Saves light mode preference
    localStorage.setItem("theme", "dark"); // Changes the value for the key (theme) to dark 
    alert("Data saved!");
    updateSquareColor(); // Updates the square color
}

function showPreference() { // Shows what preference is currently active
    const data = localStorage.getItem("theme");
    document.getElementById("output").innerText = data ? `Theme: ${data}` : "No data found";
}

function updateSquareColor() { // Function that visually shows the change in theme
    const theme = localStorage.getItem("theme");
    const square = document.getElementById("colorSquare");
    if (theme === "light") {
        square.style.backgroundColor = "#e9e3f2"; // Changes to light theme when theme's value is light
    } else if (theme === "dark") {
        square.style.backgroundColor = "#2b2731"; // Changes to light theme when theme's value is dark
    } else {
        square.style.backgroundColor = "#e9e3f2"; // Default theme when no preference is set (light)
    }
}

updateSquareColor();
</script>
```

And just like that, you can use local storage to save user preferences!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
If you'll notice, when you reload or close and reopen the page, the previous theme you had will still be visible on the square!

Using similar logic, you can also use local storage to save user inputs, but that's up to you to figure out yourself :)

### Summary

By assigning functions that run based on locally stored data, you can save user preferences.

(unofficial homework: figure out how to save user text for yourself)
