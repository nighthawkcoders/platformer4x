---
layout: post
title: SASS hacks
description: Applying review to setting up a SASS project
permalink: /sass_basics/hacks
menu: nav/sass_basics.html
toc: True
comments: True
---

## SASS Hacks Overview
The key objective of this Hack is to manage your own SASS effectively. By the end of this activity, you should be able to:
1. **Organize Your SASS Files**: Create a structured folder that contains your SASS files.
2. **Customize Styles**: Copy the provided SASS files into your own blog and make necessary changes to fit your design requirements.

### Resources
- **Reviewed Articles**: Refer to the articles we have reviewed for fundamental concepts and best practices in SASS.
- **ChatGPT**: Use ChatGPT to get assistance with specific SASS features, troubleshooting, and code examples.

### Example Folder Structure
Be sure to reference `portfolio_2025/_sass` and make adjustments to your needs.

- Review the folder named `_sass` in your project directory.
- Inside the `_sass` folder, create a `nighthawk` directory.
- Observe the `portfolio_2025` folder and its files.

  ```
  _sass/nighthawk
    |_ _main.scss
    |_ _mixins.scss 
    |_ calculator-button.scss
    |_ profile.scss
    |_ dropdown-menu.scss
    |_ platformer-game.scss
    |_ chatbot.scss
    |_ hacks.scss
  ```


#### Hack Requirements
Describe are the required setup requirements to complete this hack.

- In this hack you will need a nighthawk folder, but NOT all of the files.
- Copy the _main.scss file and adjust the insides to just what is requested.
  ```scss
  // _main.scss

  @import 'mixins';
  @import 'calculator-button';
  ```
- Copy the `_mixins.scss` as this file will contain the "button partial" that is needed for our calculators.
- Copy the `calculator-button.scss` as this file contains the "button classes" that will be used in the project.
- Do not copy the remaining files, you will only need these styles if required in the future.
- Future enhancements, to avoid conflicts, create your own folder structure and organizing your styles accordingly.

### Add Calculator files to Project
Obtain code for [JS Calculator](https://nighthawkcoders.github.io/portfolio_2025/javascript/project/calculator) and [Binary Calculator](https://nighthawkcoders.github.io/portfolio_2025/javascript/project/binary-calculator)

#### Javascript Calculator
Observe the button classes.

```html
<div id="animation">
  <div class="calculator-container">
      <!--result-->
      <div class="calculator-output" id="output">0</div>
      <!--row 1-->
      <div class="calculator-number">1</div>
      <div class="calculator-number">2</div>
      <div class="calculator-number">3</div>
      <div class="calculator-operation">+</div>
      <!--row 2-->
      <div class="calculator-number">4</div>
      <div class="calculator-number">5</div>
      <div class="calculator-number">6</div>
      <div class="calculator-operation">-</div>
      <!--row 3-->
      <div class="calculator-number">7</div>
      <div class="calculator-number">8</div>
      <div class="calculator-number">9</div>
      <div class="calculator-operation">*</div>
      <!--row 4-->
      <div class="calculator-clear">A/C</div>
      <div class="calculator-number">0</div>
      <div class="calculator-number">.</div>
      <div class="calculator-equals">=</div>
  </div>
</div>
```

#### Binary Calculator
Observe the `class="calc-button"`

```html
<td><div class="calc-button" id="add1" onclick="add(1)">+1</div></td>
<td id="binary">00000000</td>
<td id="octal">0</td>
<td id="hexadecimal">0</td>
<td id="decimal">0</td>
<td><div class="calc-button" id="sub1" onclick="add(-1)">-1</div></td>
```

#### Modify Styles
Moify the SASS files (e.g., `_mixins.scss`, `calculator-button.scss`) into your `sass` folder.
 
It is important to review the style files and see if you can make the best style ever :)  This is focussed on buttons. In a large website, you would want to establish a convention for something like buttons and make sure they are consistent across pages in project.

- Make changes to style and capture in your project. 
- Document some of the following in an Issue and discuss how they were accomplished
  - What is _mixins.scss file?  Where is it used?
  - Explain this code.  What does it define?  How is it referenced in HTML?
    ```
    .calc-button {
        @include button();
    }
    ```
  - Where is button reused?  In SASS?  In HTML?

### Rainbow
Optional fun stuff with rainbow.  Suggested by Finn, ask him for help.

- Setup files and personal SASS in correct places.
- Make the animation work in an infinite loop
- Make the colors match the rainbow
- Fix the keyframes

```scss
@keyframes rainbow {
  // 0% { color: red; }
  14% { color: orange; }
  28% { background-color: yellow; }
  42% { border-color: red; }
  // 57% { background-color: red; }
  71% { background-color: red; }
  85% { background-color: violet; }
  100% { background-color: yellow; }
}

.rainbow {
  width: 100px;
  height: 100px;
  animation: rainbow 1s linear;
}
```



```python
<!-- HTML CODE NEEDED-->
<div class="rainbow"></div>
```

<div class="rainbow"> ;) </div>



### Spin
Optional fun stuff with spin, ask Finn for help.

- Setup files and personal SASS in correct places.
- Make the entire sping animation

```scss
@keyframes spin {

}

@keyframes move {

}
```


```python
<!-- HTML CODE NEEDED-->    
<div class="spinMove"></div>
```
