# Bubble Game

A simple interactive web-based game where you test your reflexes and accuracy by clicking on the correct bubble within a time limit. The game is built using HTML, CSS, and JavaScript.

---

## 🕹️ How to Play

- **Objective:** Click on the bubble that matches the "hit" number displayed on the scoreboard.
- **Scoring:** Each correct click increases your score by 10 points.
- **Game Over:** 
  - If you click the wrong bubble, the game ends immediately.
  - The game also ends automatically after 60 seconds.
- **Winning:** Try to score as high as possible within the time limit!

---

## 🏗️ Project Structure

```
Bubble Game/
│
├── index.html      # Main HTML structure
├── style.css       # Styling for the game
├── script.js       # Game logic and interactivity
└── Readme.MD       # This documentation
```

---

## 📄 Code Overview

### HTML (`index.html`)

- **Navbar:** Displays the game title and rules.
- **Scoreboard:** Shows the current "hit" number, timer, and score.
- **Bubble Page:** The area where bubbles appear for interaction.

### CSS (`style.css`)

- Responsive and visually appealing layout.
- Styles for bubbles, scoreboard, and game area.
- Hover effects for bubbles to enhance interactivity.

### JavaScript (`script.js`)

#### Key Variables

- `hitbox`, `timerbox`, `scorebox`: DOM elements for scoreboard.
- `bubblepage`: Container for bubbles.
- `hitNumber`, `timeLeft`, `score`: Elements displaying current hit number, timer, and score.

#### Main Functions

- **generateBubbles()**
  - Randomly generates 10 bubbles, each with a unique number (0-9).
  - Shuffles the numbers for each round.

- **generateHit()**
  - Randomly selects a number (0-9) as the "hit" number.
  - Updates the scoreboard with the new hit number.

- **setTimer()**
  - Starts a 60-second countdown.
  - Ends the game when the timer reaches zero.

- **increaseScore()**
  - Increments the score by 10 points for each correct hit.

- **finishGame()**
  - Displays the final score and ends the game.
  - Changes the bubble area to show a game over message.

- **Event Listener on `bubblepage`**
  - Detects which bubble is clicked.
  - If the clicked bubble matches the "hit" number:
    - Increases score, regenerates bubbles, and selects a new hit number.
  - If not:
    - Ends the game immediately.

---

## 🚀 Getting Started

1. **Clone or Download** this repository.
2. Open `index.html` in your browser.
3. Start playing!

---

## 📝 Customization

- You can adjust the timer, scoring, or bubble count by modifying the respective variables and logic in `script.js`.
- Style the game further by editing `style.css`.

---