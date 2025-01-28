---
layout: post
title: Local Storage Hacks
author: Matthew Borg
description: Carti once told me that to master Local Storage, you have to complete the following hacks.
permalink: /local-storage/Hacks
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

Now, try changing some stuff in the above code, like change cat to anything you want, but most importantly, try to change some parts of the code like change the "No data found" to something similar and change some visuals like the color and the sie

# Local Storage Hack #2


