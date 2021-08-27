const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElemns = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (header.classList.contains("open")) {
    // close menu
    body.classList.remove("noscroll");
    // cannot scroll the page when the helper menu is open
    header.classList.remove("open");
    fadeElemns.forEach(function (element) {
      // loop every element that has the has-fade class
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // open menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElemns.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
