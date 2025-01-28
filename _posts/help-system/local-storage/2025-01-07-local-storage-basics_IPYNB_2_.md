---
author: Lucas Masterson
layout: post
title: Local Storage Basics
description: What the heck is local storage?? A brief overview of the basics.
permalink: /local-storage/basics
menu: nav/local_storage.html
categories: ['Local Storage']
toc: True
---

# What is Local Storage?

Simply put, it's storage... that's local! Thank you, thank you. Lesson over.

In all seriousness, it's storage that is hosted locally on the host computer that remains when a browsing session ends. So, for example, maybe I decided to turn off a specific setting on the game site. The idea is that this configuration will persist even after I close the browser session and reopen it.

Ok, but WHAT and HOW? Let's get into it.

![banana...](https://media1.tenor.com/m/nZjB4sgIeHoAAAAd/d2-destiny-2.gif)

# Fair Share of Warnings...

Keys and values stored with `localStorage` are *always* UTF-16 string format (2 bytes per char). As such, integer keys are automatically converted to strings.

`localStorage` data is **specific to the protocol of the document**. What this means, basically, is that sites loaded using HTTP will differ in `localStorage` for the same site loaded using HTTPS.

Documents using `file:` URLs (loaded from the local filesystem, rather than from online) are *volatile*. This probably won't matter for most part here, unless you're serving Jekyll locally for testing, but that should be ok since it won't be in prod.

<img src="https://i.ytimg.com/vi/Q1sroG_iGnc/maxresdefault.jpg" alt="suggestion" width="300">

OH and also, people refresh their browser cache, so this local storage data will be wiped. The best option, naturally, would be to use server-side storage, but we aren't there yet. Perhaps you can add that in a later iteration of the platformer.

# Simple Implementation

Here we demonstrate the `Storage` object and add a data item using `Storage.setItem()`:

1. Run the program
2. Press `Save Data`
3. Reload the page
4. Press `Load Data`

Complete that here:

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


<br>


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

Wow! What you just saw there was storing the data item `"cat"` and retrieving it *after refreshing the session* via local storage! Oh what possiblities!

> The mind is malleable, filled with transient and fleeting ideas. Let us shape it, so that you may see the infinite splendor of the universe.

# Documentation (bleh)

Here I'll give you some documentation that you could probably google, but for the sake of first time learning...

**Access the `Storage` object and add a data item**
```js
localStorage.setItem("myCat", "Tom");
```

**Read a `localStorage` item**
```js
const cat = localStorage.getItem("myCat");
```

**Remove a `localStorage` item**
```js
localStorage.removeItem("myCat");
```

**Clear all `localStorage` items**
```js
localStorage.clear();
```

I really need a macro for code cells :(

# We are not bound by logic. We define its shape.

That's all the basics... basically. Now go do something with this! Orrrrr you could read more documentation. But I digress, you're ready to build local storage functionalities into `platformer#x`.

(This is me for context)

![cat on pc](https://media1.tenor.com/m/XPRG-4ujVMIAAAAd/cat-work-in-progress.gif)
