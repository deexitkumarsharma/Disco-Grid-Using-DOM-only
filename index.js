// Body Element
let body = document.querySelector("body");
body.style.margin = "0px";
body.style.padding = "0px";
body.style.boxSizing = "border-box";

// Header
let heading = document.createElement("h1");
heading.innerText = "🤯 Disco Grid 🤩";
body.append(heading);
heading.style.textAlign = "center";
heading.style.margin = "0px";
heading.style.padding = "30px";

// container contains boxes
let boxContainer = document.createElement("div");
body.appendChild(boxContainer);
boxContainer.style.width = "100%";
boxContainer.style.height = "100%";
boxContainer.style.display = "flex";
boxContainer.style.flexWrap = "wrap";
boxContainer.style.alignItems = "center";
boxContainer.style.justifyContent = "center";

for (let index = 0; index <= 500; index++) {
  let innnerBox = document.createElement("div");
  innnerBox.textContent = Math.floor(Math.random() * 500);
  innnerBox.classList.add("child");
  innnerBox.style.width = "4rem";
  innnerBox.style.height = "4rem";
  innnerBox.style.border = "1px solid black";
  boxContainer.appendChild(innnerBox);
}

/* event listener */

let innnerBox = document.querySelectorAll(".child");
boxContainer.addEventListener("mousemove", doThing);

/* function */
function doThing() {
  for (let index = 0; index < innnerBox.length; index++) {
    innnerBox[index].textContent = Math.floor(Math.random() * 500);
    innnerBox[index].style.backgroundColor =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      ", " +
      Math.floor(Math.random() * 255) +
      ", " +
      Math.floor(Math.random() * 255) +
      ")";
  }
}
