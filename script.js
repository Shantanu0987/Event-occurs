function myFunction() {
  alert("Clicked");
}
function Hover() {
  alert("Hover");
}
function dblClick() {
  alert("Duble Click");
}
function drag() {
  alert("drag");
}
function exit() {
  alert("Exit");
}
let Right = document.getElementById("Right");

Right.addEventListener("contextmenu", (event) => {
  alert("Right click");
});

let scrollUp = document.getElementById("scrollup");

scrollUp.addEventListener("wheel", (event) => {
  if (event.deltaY < 0) {
    alert("ScrollUp");
  }
});

let scrollDown = document.getElementById("scrolldown");

scrollDown.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    alert("ScrollDown");
  }
});
