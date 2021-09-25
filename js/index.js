"use strict";

const burgerMenu = document.querySelector(".second-button");
const animatedIcon = document.querySelector(".animated-icon");

const titleCurtain = document.querySelector(".title__curtain");
const titleImgCont1 = document.querySelector(".title-img-container");
const titleImgCont2 = document.querySelector(".second-title-img-container");
const nameCont = document.querySelector(".my-name-container");

// const parallax = document.querySelector(".parallax-js");

////////////////////////////////////

const burgerMenuAnimation = function () {
  burgerMenu.addEventListener("click", function () {
    animatedIcon.classList.toggle("open");
  });
};

burgerMenuAnimation();

const titleSectionAnimation = function () {
  // fade in animation
  titleImgCont1.style.opacity = "1";
  nameCont.style.opacity = "1";

  // curtain slide up
  setTimeout(() => {
    titleCurtain.style.height = "0";
  }, 100);

  // title image slide left animation
  [...titleImgCont2.children].forEach((child) => {
    if (child.classList.contains("i")) {
      child.style.transform = "translateX(0)";
    }

    if (child.classList.contains("t")) {
      child.style.transform = "translateY(0)";
    }
  });

  // name container slide right animation
  [...nameCont.children].forEach(
    (child) => (child.style.transform = "translateX(0)")
  );
};

titleSectionAnimation();

// Title image Parallax
// let parallaxInstance = new Parallax(parallax);
