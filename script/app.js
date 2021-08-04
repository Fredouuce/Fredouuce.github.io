const hamburger = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".closeBtn");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.add("appear");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("appear");
});
