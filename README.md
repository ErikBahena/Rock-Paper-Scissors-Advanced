# Frontend Mentor - Rock, Paper, Scissors solution

- Live Site URL: [Rock Paper Scissors Live](https://erik-rps-game.netlify.app)


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge
Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [Rock Paper Scissors Live](https://erik-rps-game.netlify.app)

## My process
1. Plan out html content and functionality of the site.
2. Style with css from top to bottom.
3. Integrate JavaScript with mvc pattern and feature by feature development.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop first workflow
- Vanila JavaScript

### What I learned

I learned how to create well structured html that would play easy with my javascript.

```html
<header>
      <div class="score-and-titles-container">

        <div class="titles-container">
          <img src="/images/logo.svg" alt="">
        </div>

        <div class="score-container">
          <p>Score</p>
          <div class="score-num">
            <!-- Generate With JavaScript -->
            0
          </div>
        </div>

      </div>
    </header>
```

I was able to create fairly responsive css and this is one of those elements that came out great.
```css
.score-and-titles-container{
    display: flex;
    justify-content: space-between;
	  align-items: center;
    border: 0.3rem solid var(--header-outline-color);
    margin: 0 auto;
    margin-top: 4.5rem;
    width: 50%;
	  border-radius: 1.6rem;
	  padding: 1.2% 1.5% 0.75% 1.95%;
	  letter-spacing: 0.1rem;
}
```
I was able to learn about creating an element clone so that the previous event handlers wouldn't persist, making my code more understandable for me.
```js
 const pickedPlayElementClone = e.target.closest(".outer-play-container").cloneNode(true)
```

### Continued development
Might come back to this one day and make it with scss, react, and impliment local storage to save score.

### Useful resources

- [w3 schools](https://www.w3schools.com/jsref/met_node_clonenode.asp) - This helped me while figuring out how to clone a node. I really liked the append child method used after the clone node was created. Good solution, will be using from now on.
- [Gradient Generator](https://cssgradient.io/) - This is an amazing website that allows you to visualize css gradients of all types. Allowed me to give the website the desired background color and gradient. 10/10


## Author

- LinkedIn - [Erik Bahena](https://www.linkedin.com/in/erikbahena/)

## Acknowledgments

This design was made by Front End Mentor. I would recommend them if you're looking to dive into web development.