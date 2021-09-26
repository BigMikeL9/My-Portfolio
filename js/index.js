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

////////////////////////////////////
// Title image Parallax
// let parallaxInstance = new Parallax(parallax);

////////////////////////////////////
// ***** Reveals Content as we scroll down --> using Intersection Observer API *****

const allContainers = document.querySelectorAll(".container-fluid");

const sectionObsCallBack = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry.target); // the elements that we intersected

  // Guard Clause
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("content--hidden");

  // prevents observer from observing the current revealed section after it is revealed. [better for performance]
  observer.unobserve(entry.target);
};

const sectionObsOptions = {
  root: null,
  threshold: 0, // greater than '0' because we dont want to show the section right as it enters the viewport, but a little bit later. Section will be revealed only when it is 15 percent visible.
};

const sectionObserver = new IntersectionObserver(
  sectionObsCallBack,
  sectionObsOptions
);

allContainers.forEach((container) => {
  container.classList.add("section--hidden"); // change if necessary
  sectionObserver.observe(container); // change if necessary
});

////////////////////////////////////
// ***** Reveals Section titles as we scroll down --> using Intersection Observer API *****

const allTitles = document.querySelectorAll(".h1-anim");

const titleObsCallBack = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry.target); // the elements that we intersected

  // Guard Clause
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("h1--hidden");

  // prevents observer from observing the current revealed section after it is revealed. [better for performance]
  observer.unobserve(entry.target);
};

const titleObsOptions = {
  root: null,
  threshold: 0, // greater than '0' because we dont want to show the section right as it enters the viewport, but a little bit later. Section will be revealed only when it is 15 percent visible.
};

const titleObserver = new IntersectionObserver(
  titleObsCallBack,
  titleObsOptions
);

allTitles.forEach((title) => {
  title.classList.add("h1--hidden"); // change if necessary
  titleObserver.observe(title); // change if necessary
});
