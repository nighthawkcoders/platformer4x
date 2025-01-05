---
layout: post
title: SASS play
description: Experiment with SASS using your project
permalink: /sass_basics/play
menu: nav/sass_basics.html
toc: True
categories: ['SASS']
---

## Popcorn Hack #1
> Go to the _sass/minima/custom-styles.scss file and change the style. You can do this by changing the imported themes.  To see these changes _config.yml needs to be set to minima.

```scss
// Comment in or Uncomment out the following themes to use them 

// Dark themes
//@import "minima/leaf/_leaf";  //Leaf theme
//@import "minima/hacker/jekyll-theme-hacker"; //Hacker theme 
@import "minima/dracula/_dracula";

// Light themes
//@import "minima/hamilton/main"; //Hamilton theme
//@import "minima/monophase/main"; //Monophase theme 
//@import "minima/minimal-mistakes/__minimal-mistakes"; //Minimal Mistakes theme 
// Mix Light themes with this if your eyes are bleeding 
@import "minima/dracula/dark-mode";

// Styles for nighthawk theme, do not remove
@import "nighthawk/main";

```

## SASS vs CSS
The awesomeness of SASS (Syntactically Awesome Stylesheets) really comes down to having programattic and reusable features that it can turn SASS into CSS.  
- SASS is a powerful extension of CSS that enables developers to use features not available in pure CSS, such as variables, mixins, and nesting.  Such features, as well the SASS preprocessor can create consistent CSS for multiple pages out of a single SASS definitions.
- CSS remains the foundational language for styling Web Pages.  SASS contains a scripting languages and a preprocessor (build step) that creates CSS stylesheets. 

### CSS sample
Below you see a traditional CSS page.  This page ensure tags are only styled if they are nested.

- Notice that each color value is coded in style directly
- Notice how nav is repeated in each line to clarify that the a, ul or li is specified inside the nav key.


```python
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<!-- This is CSS which doesn't utilize nesting -->
<style>
  nav {
  background-color: #333;
  }

  nav ul {
  list-style: none;
  }

  nav ul li {
  display: inline-block;
  }

  nav ul li a {
  color: white;
  text-decoration: none;
  }

  nav ul li a:hover {
  color: #ff0;
  }
</style>
```

## Changing to SASS          
Observe the SASS rework of the previous CSS.

- Variables in SASS are declared with a dollar sign ($), and it's a common practice to separate words in variable names with dashes.

- Nesting is a SASS feature that allows the programmer to define CSS rules in a hierarchical manner, mirroring the HTML structure. This can be used for Custom JS id's.  This could be very useful if you want to modify your definition.

<!-- This code is written in SCSS and must be compiled into CSS to be applied to HTML. Browsers do not understand SCSS syntax directly.-->

```scss
// Variables in SASS are declared with a dollar sign and naming conventions is to seperate words with dashes.
$bg-color: #333;
$bg-a-color: white;
$bg-a-hover-color: #ff0;
// Nesting in SASS is done by indenting the child elements.
nav {
    background-color: $bg-color;

    ul {
        list-style: none;

        li {
            display: inline-block;

            a {
                color: $bg-a-color;
                text-decoration: none;

                &:hover {
                    color: $bg-a-hover-color;
                }
            }
        }
    }
}
```

## Mixins

Mixins are a powerful feature in SASS that allow you to create reusuable blocks of styles.  This is the SASS way of creating a reusable style block.

- Declaration: mixins are declared using the @mixin declaration followed by a name and optionally parameters
- Usage: To apply a mixin to a selector, use the @include directive followed by the mixin name and arguments (if any).

<!-- Here's how we can use mixins! -->
```scss
// Mixins are just like functions. They are declared with the mixin directive and can take arguments
@mixin border-radius($radius) {
    border-radius: $radius;
}
// We can use the mixin to reduce complexity in our code
.box {
    @include border-radius(10px);
}
```

## SASS example
This last example shows and example of how to use features of SASS to customize your project.

- Observe the definition and reuse of the color variables.
- Look at how body, header, and footer are using Mixins and Colors to define properties.
- The variables and mixins really help to minimize something like color change.

<!-- Here's a custom SASS that I made with my group before. Don't be afraid to look online to borrow outlines to customize and make your own! The SASS below is a Christmas themed SASS. It uses variables and mixins with minimal nesting due to it being a simple theme-->

```scss
// Variables
$primary-font: 'Lobster', cursive;
$primary-bg-color: #61c0a8;
$secondary-bg-color: #ffffff;
$primary-color: white;
$secondary-color: #cc0000;
$tertiary-color: #ffd700;
$th-bg-color: rgb(123, 35, 53);
$tbody-bg-color: rgb(182, 49, 80);
$border-color: rgb(123, 35, 53);
$star-unicode: '\2605';

// Mixins
@mixin font-family($font) {
font-family: $font !important;
}

@mixin background($color) {
background-color: $color !important;
}

@mixin text-style($color) {
color: $color;
}

@mixin border($color) {
border-color: $color !important;
}

@mixin box-shadow($shadow-color) {
text-shadow: 2px 2px 4px $shadow-color;
}

@mixin animation($name, $duration, $timing, $iteration) {
animation: #{$name} #{$duration} #{$timing} #{$iteration};
}

// Styles
header, footer {
@include font-family($primary-font);
@include background($primary-bg-color);
}

body {
@include font-family($primary-font);
@include background($secondary-bg-color);
@include text-style($primary-color);
background-image: url('https://images3.alphacoders.com/196/196797.jpg');
//filter: blur(8px);
}

.snow, .snow:before, .snow:after {
z-index: -3;
position: absolute;
top: -650px;
left: 0;
bottom: 0;
right: 0;
background-image: 
    radial-gradient(4px 4px at 100px 50px, #fff , transparent), 
    radial-gradient(6px 6px at 200px 150px, #fff, transparent), 
    radial-gradient(3px 3px at 300px 250px, #fff 50%, transparent), 
    radial-gradient(4px 4px at 400px 350px, #fff 50%, transparent), 
    radial-gradient(6px 6px at 500px 100px, #fff 50%, transparent), 
    radial-gradient(3px 3px at 50px 200px, #fff 50%, transparent), 
    radial-gradient(4px 4px at 150px 300px, #fff 50%, transparent), 
    radial-gradient(6px 6px at 250px 400px, #fff 50%, transparent), 
    radial-gradient(3px 3px at 350px 500px, #fff 50%, transparent);
background-size: 650px 650px;
@include animation(snow, 3s, linear, infinite);
content: "";
}

.snow:after {
margin-left: -250px;
opacity: 0.5;
filter: blur(2px);
@include animation(snow, 6s, linear, infinite reverse);
z-index: -4;
}

.snow:before {
margin-left: -350px;
opacity: 0.7;
filter: blur(1px);
@include animation(snow, 9s, linear, infinite reverse);
z-index: -4;
}

@keyframes snow {
to {
    transform: translateY(650px);
}
}

th {
@include text-style($primary-color);
@include background($th-bg-color);
@include border($th-bg-color);
}

ul {
@include text-style($primary-color);
}

tbody, td, tr, table {
@include font-family($primary-font);
@include text-style($primary-color);
@include background($tbody-bg-color);
@include border($border-color);
}

a {
@include font-family($primary-font);
@include text-style($primary-color);
}

h2, p {
@include font-family($primary-font);
@include text-style($primary-color);
}

h1 {
font-size: 36px;
@include text-style($secondary-color);
text-align: center;
text-transform: uppercase;
letter-spacing: 2px;
margin-bottom: 20px;
font-weight: bold;
@include box-shadow($primary-color);
}

h1::before {
content: $star-unicode;
font-size: 42px;
margin-right: 10px;
}

h1::after {
content: $star-unicode;
font-size: 42px;
margin-left: 10px;
}

/* Additional styles for a Christmas-themed feel */
h1::before, h1::after {
display: inline-block;
@include animation(twinkling, 1.5s, ease-in-out, infinite);
@include text-style($tertiary-color);
}

.basicChex {
@include text-style($primary-color);
}

/* Animation for a twinkling effect */
@keyframes twinkling {
0%, 100% { opacity: 1; }
50% { opacity: 0.8; }
}

form {
@include text-style($primary-color);
}
```
