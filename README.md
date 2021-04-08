<img width="923" alt="Artlogic_header" src="https://user-images.githubusercontent.com/44004811/113947653-08821a00-9803-11eb-9cf3-045327d24c04.png">

# Artlogic FAQs

## Overview

A simple FAQ's responsive page using HTML, CSS, and Vanilla JavaScript.

## Code Installation

1. Clone or download repo
2. Run `npm install` in your command line to install dependencies
3. Run `live-server` in your command line
4. Page will be launched on http://127.0.0.1:8080/

## Responsiveness

![ezgif com-gif-maker](https://user-images.githubusercontent.com/44004811/114022562-ccce6b00-9869-11eb-8edd-a95967dcd5b1.gif)

One of the main requirements was to ensure the page was 100% responsive. I set out to achiveve this by using max-widths and percentage units allowing the content to scale up or down based on its container width. Because of this, I was able to adapt to all screen sizes and resolutions, which meant only using media query's when the content started to appear distorted.

## Rendering json

To render to FAQ points from the json file, I used the `live-server` library.

## Interactivity

In order to expand the questions to reveal the answers, I added a class that has a css max-height property to the element, on click using JavaScript. The class also had a transition attripute to display a seamless effect.
