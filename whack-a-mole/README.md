# Whack-a-Mole
Borrowed from / inspired by [Wes Bos 30-Day JS Challenge](https://github.com/wesbos/JavaScript30/tree/master/30%20-%20Whack%20A%20Mole)


## Before you start...
* run `npm install` then `npm start`
* Play around with adding the `up` class to a `hole` element (i.e. the element with the `hole` class). The goal of this project is to add / remove the up class on an interval, capture the click of the mole and increment the score if the mole is "whacked". Add code to game.js to make that happen.

## Part 1 -- Make the moles pop up randomly
* Write a function called popUpRandom that will pick a random number between 0 and 5
* Select the hole associated with the random number and add "up" to its classList
* Remove "up" from the classList after 1 second
* Run popUpRandom every 1 second

## Part 2 -- Register Clicks
* Add a click event to all moles
* If a mole is clicked, AND its parent div has the "up" class then the mole was "HIT" -- you should incremement the score by 1

## Bonus
* Bind to click on "start game" button so game doesn't start until user clicks that
* Increase the speed of the moles as the game progresses
* End the game after 20 hits