let hitbox = document.getElementById("hitbox");
let timerbox = document.getElementById("timerbox");
let bubblepage = document.getElementById("bubblepage");
let buttons = document.getElementsByTagName("button");
let scorebox = document.getElementById("scorebox");
let hitNumber = document.getElementById("hitnumber");
let timeLeft = document.getElementById("timeleft");
let score = document.getElementById("score");
let bubbles = document.getElementsByClassName("bubble");
let hit;

function generateBubbles() {
  let clutter = "";
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let bubbleInputs = array.sort(() => Math.random() - 0.5);
  for (let i = 0; i < 10; i++) {
    clutter += `<div class="bubble">
                    ${bubbleInputs[i]}
                </div>`;
  }
  bubblepage.innerHTML = clutter;
}

function generateHit() {
  hit = Math.floor(Math.random() * 10);
  hitNumber.innerHTML = hit;
}

function setTimer() {
  let remainingTime = 60;
  setInterval(() => {
    remainingTime--;
    if (remainingTime <= 0) {
      remainingTime = 0;
      finishGame();
    }
    timeLeft.innerText = remainingTime;
  }, 1000);
}

function increaseScore() {
  let increament = 10;
  let number = Number(score.textContent);
  score.innerText = number + increament;
}

// for (let bubble of bubbles) {
//       bubble.addEventListener("click", () => {
//         console.log("I am here");
//         if (number === Number(bubble.innerText)) {
//            increaseScore();
//         // }
//       });

function finishGame() {
  let totalScore = score.innerText;
  console.log(totalScore);
  bubblepage.innerHTML = `Game Finishes. Your score is ${totalScore}`;
  bubblepage.style.backgroundColor = "#C5F527";
  bubblepage.style.color = "#B05D81";
}

bubblepage.addEventListener("click", (dets) => {
  let target = Number(dets.target.innerText);
  let hit = Number(hitNumber.innerText);
  if (hit === target) {
    increaseScore();
    generateBubbles();
    generateHit();
  } else {
    finishGame();
  }
});

generateBubbles();
setTimer();
generateHit();
// updateScore();
