# Snake Game

A classic Snake Game implemented in JavaScript, playable in the browser.

## Features

- **Responsive Grid:** The game board is a 21x21 grid that adapts to your screen size.
- **Smooth Controls:** Control the snake using arrow keys (Up, Down, Left, Right).
- **Food Generation:** Food appears at random positions on the grid, never on the snake.
- **Snake Growth:** The snake grows by one segment each time it eats food.
- **Collision Detection:**
  - Game ends if the snake hits the wall.
  - Game ends if the snake collides with itself.
- **Score Tracking:** Your score is displayed when the game ends (score = snake length - 1).
- **Restart Option:** After losing, you can restart the game with a single click.
- **Simple UI:** Clean and minimalistic design using CSS grid and custom colors.

## How to Play

1. Open `index.html` in your browser.
2. Use the arrow keys to control the snake.
3. Eat the food to grow longer.
4. Avoid running into the walls or yourself.
5. Try to achieve the highest score possible!

## Project Structure

- `index.html` - Main HTML file and game board.
- `game.js` - Game loop and main logic.
- `snake.js` - Snake movement, growth, and collision logic.
- `food.js` - Food spawning and drawing.
- `input.js` - Keyboard input handling.
- `grid.js` - Grid utilities and boundary checks.

## Requirements

- Modern web browser (Chrome, Firefox, Edge, etc.)

## Credits

Developed by Suvadeep Mandal.
