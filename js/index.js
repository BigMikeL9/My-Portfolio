$(document).ready(function () {
  $(".second-button").on("click", function () {
    $(".animated-icon").toggleClass("open");
  });

  // Parallax.js
  var scene = $("#scene").get(0);
  var parallaxInstance = new Parallax(scene);
});

document.querySelector(".title-img-container").style.opacity = "1";
document.querySelector(".my-name-container").style.opacity = "1";
