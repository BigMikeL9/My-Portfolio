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
// --> Intersection Observer API *****

const allContainers = document.querySelectorAll(".container-anim");
const allTitles = document.querySelectorAll(".h1-anim");
const allSubTitles = document.querySelectorAll(".h4-anim");
const allSpanTop = document.querySelectorAll(".span-top-anim");
const allSpanBottom = document.querySelectorAll(".span-bottom-anim");

const obsCallBack = function (entries, observer) {
  const [entry] = entries;

  // Guard Clause
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("content--hidden");
  entry.target.classList.remove("h1--hidden");
  entry.target.classList.remove("h4--hidden");
  entry.target.classList.remove("span-top--hidden");
  entry.target.classList.remove("span-bottom--hidden");

  // prevents observing revealed elements. [better for performance]
  observer.unobserve(entry.target);
};

const obsOptions = {
  root: null,
  threshold: 0, // reveals at 0%
};

// ***** Reveals Content as we scroll down
const containerObserver = new IntersectionObserver(obsCallBack, obsOptions);

allContainers.forEach((container) => {
  container.classList.add("content--hidden"); // change if necessary
  containerObserver.observe(container); // change if necessary
});

// ***** Reveals Section titles as we scroll down
const titleObserver = new IntersectionObserver(obsCallBack, obsOptions);

allTitles.forEach((title) => {
  title.classList.add("h1--hidden");
  titleObserver.observe(title);
});

// ***** Reveals Sub Section titles as we scroll down
const subTitleObserver = new IntersectionObserver(obsCallBack, obsOptions);

allSubTitles.forEach((subTitle) => {
  subTitle.classList.add("h4--hidden");
  subTitleObserver.observe(subTitle);
});

// ***** Reveals span top as we scroll down
const spanTopObserver = new IntersectionObserver(obsCallBack, obsOptions);

allSpanTop.forEach((spanTop) => {
  spanTop.classList.add("span-top--hidden");
  spanTopObserver.observe(spanTop);
});

// ***** Reveals span bottom as we scroll down
const spanBottomObserver = new IntersectionObserver(obsCallBack, obsOptions);

allSpanBottom.forEach((spanTop) => {
  spanTop.classList.add("span-bottom--hidden");
  spanBottomObserver.observe(spanTop);
});
////////////////////////////////////
