var myNav = document.getElementsByTagName("nav")[0];

var productsBtn = document.querySelector("#products-btn");
var productsMenu = document.querySelector("nav ul");
var carlImage = document.querySelector(".about-image");
var aboutParagraph = document.querySelector(".about-paragraph");
var upArrow = document.querySelector(".up-arrow");

productsBtn.addEventListener("mouseover", function () {
  productsMenu.classList.add("show-menu");
  productsMenu.classList.remove("hide-menu");
  productsMenu.classList.remove("products-menu");
});
productsBtn.addEventListener("mouseleave", function () {
  productsMenu.classList.add("hide-menu");
  productsMenu.classList.remove("show-menu");
});

window.onscroll = function () {
  if (window.scrollY > 188) {
    myNav.classList.add("colored-nav");
  } else {
    myNav.classList.remove("colored-nav");
  }
};
upArrow.addEventListener("click", function () {
  window.scroll(0, 0);
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 768) upArrow.style.visibility = "visible";
  else upArrow.style.visibility = "hidden";
});

carlImage.onclick = function () {
  window.open("https://en.wikipedia.org/wiki/Carl_Benz", "_blank");
};
document.addEventListener("scroll", function () {
  if (window.scrollY > 640 && window.scrollY < 1500) {
    carlImage.style.animation = "0.9s 0s image-dropping forwards";
    aboutParagraph.style.animation = "1s 0.5s about-appearance forwards";
  } else {
    carlImage.style.animation = "none";
    aboutParagraph.style.animation = "none";
  }
});
