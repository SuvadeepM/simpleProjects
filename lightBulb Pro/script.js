let audio = document.getElementById("clickaudio");
let onoff = document.getElementById("onoff");
let body = document.querySelector("body");
onoff.addEventListener("click", () => {
  if (onoff.checked) {
    body.classList.toggle("lighton");
    audio.play();
  } else {
    body.classList.toggle("lighton");
  }
});
