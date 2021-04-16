### Run the app
* `npm install`
* `npm start`
* Visit `localhost:3000` -- you should see the initial game board

### To Do
1. Using the `game.js` file register a click event on each square that will add either the x or the o png to the center of the square
2. Add ability to track current user and switch it back and forth after each click -- current user should be displayed on the board
3. Add a variable to track the board state -- update the board state after each click
4. Add a variable to track if the game is active and add the game logic - after each click the game should be set to inactive if either of the following conditions are met:
* Current user has won (three in a row)
* There are no more spaces remaining

