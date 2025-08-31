let off = document.getElementById("bulb");
let btn = document.getElementById("button");

btn.addEventListener("click", () => {
  if (bulb.src.includes("lightBulbOff.png")) {
    bulb.src = "lightBulbOn.png";
    btn.textContent = "off";
  } else {
    bulb.src = "lightBulbOff.png";
    btn.textContent = "on";
  }
});

//         <img id="bulb-on" src="./lightBulbOn.png" alt="">

// let on = new Image();
//   on.src = "lightBulbOn.png";
//   document.body.appendChild(on);

// we can create an Image class in JS by using `new Image()`
// to change the textContent of a button, use btn.textContent.
// see this. I am using bulb as an element but not declaring it. still the project is working fine. How?

// In browsers, when you give an element an id, the browser automatically creates a global variable with the same name as that id.

// This is not reliable or recommended because:

// It only works in the browser global scope (not in strict mode, ES modules, or Node.js).

// If you had a variable with the same name, it could cause conflicts.

// Modern best practices recommend explicitly selecting elements (like you did with document.getElementById).
