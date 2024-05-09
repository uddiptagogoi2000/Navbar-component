// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menu-button");
const closeBtn = document.getElementById("close-button");
const overlay = document.getElementById("overlay");
const root = document.getElementById("root");

let closed = false;

menuBtn.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("invisible");
  root.classList.add("overflow-hidden");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.remove("bg-black/50");
  root.classList.remove("overflow-hidden");
  closed = true;
});

sidebar.addEventListener("transitionend", () => {
  if (closed) {
    overlay.classList.add("invisible");
    overlay.classList.add("bg-black/50");
    closed = false;
  }
});
