let xhr = new XMLHttpRequest();
xhr.open("GET", "./Data/productsData.json");
xhr.send("");

let xhr2 = new XMLHttpRequest();
xhr2.open("GET", "./Data/sliderData.json");
xhr2.send("");

var menuBtn = document.querySelector(".menu-btn");
var navMenu = document.querySelector("#nav-buttons");
var menuBtnIcon = document.querySelector(".menu-btn i");
var categoryBtns1 = document.querySelectorAll(".categories-buttons input");
var categoryBtns2 = document.querySelectorAll("nav ul input");
var categoryBtns = [...categoryBtns1, ...categoryBtns2];
var cardsContainer = document.querySelector(".cards-container");
var underLines = document.querySelectorAll(".under-line");
var slider = document.querySelector("#slides-content");
var slidingButtons = document.querySelectorAll(".news-slider span i");
var slideImage = document.querySelector(".sliding-img");
var slideParagraph = document.querySelector("#slides-content h3");
var currentCategory = "Cars";

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      setProducts(JSON.parse(xhr.response)[currentCategory]);
    }
  }
};
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("hide-nav-menu");
  menuBtnIcon.classList.toggle("bi-list");
  menuBtnIcon.classList.toggle("bi-x-lg");
});
var currentBtn = categoryBtns[0];
categoryBtns.forEach((element) => {
  element.addEventListener("click", function (e) {
    categoryBtns.forEach((btn) => {
      btn.classList.remove("active-category-button");
      btn.parentNode.classList.remove("active-btn");
    });
    currentCategory = e.target.value;

    currentBtn = document.querySelector(
      `.categories-buttons input[value=${e.target.value}]`
    );
    currentBtn.classList.add("active-category-button");
    currentBtn.parentNode.classList.add("active-btn");
    cardsContainer.innerHTML = "";
    setProducts(JSON.parse(xhr.response)[currentCategory]);
  });
});

underLines[0].style.visibility = "visible";
underLines.forEach(function (underLine) {
  underLine.parentNode.addEventListener("mouseenter", function () {
    underLine.style.animation = "0.3s spread-under-line ease forwards";
  });
  underLine.parentNode.addEventListener("mouseleave", function (e) {
    if (!underLine.parentNode.classList.contains("active-btn")) {
      underLine.style.animation = "0.3s shrink-under-line ease ";
    }
  });
  underLine.parentNode.addEventListener("click", function (e) {
    underLines.forEach((u) => {
      u.style.visibility = "hidden";
      if (e.target !== u)
        u.style.animation = "0.00003s shrink-under-line ease ";
    });
    underLine.style.visibility = "visible";
  });
  categoryBtns2.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      underLines.forEach((u) => {
        u.style.visibility = "hidden";
      });
    });
  });
});

//------------------ SET PRODUCTS ------------------
function setProducts(products) {
  products.forEach(function (product) {
    cardsContainer.innerHTML += `
              <div class="card">
            <div class="card-content">
              <div class="product-image">
                <img src=${product.image} id="product-image"/>
              </div>
              <p class="product-model">${product.model}</p>
              <p class="product-price">Price: ${product.price}$</p>
              <p class="product-specs">${product.specs}</p>
              <button onclick= "handleAddToCart()" class="add-to-cart">Add to cart</button>
            </div>
          </div>
    `;
  });
}

//------------------ SLIDER ------------------
var index = 0;
var sliderInterval;
slidingButtons[1].addEventListener("click", function () {
  slideImage.setAttribute("src", JSON.parse(xhr2.response).images[index]);
  slideParagraph.innerHTML = JSON.parse(xhr2.response).paragraphs[index];
  index === JSON.parse(xhr2.response).images.length - 1 ? (index = 0) : index++;
});
slidingButtons[0].addEventListener("click", function () {
  slideImage.setAttribute("src", JSON.parse(xhr2.response).images[index]);
  slideParagraph.innerHTML = JSON.parse(xhr2.response).paragraphs[index];
  index === 0 ? (index = JSON.parse(xhr2.response).images.length - 1) : index--;
});
function playSliding() {
  sliderInterval = window.setInterval(function () {
    slideImage.setAttribute("src", JSON.parse(xhr2.response).images[index]);
    slideParagraph.innerHTML = JSON.parse(xhr2.response).paragraphs[index];
    index === JSON.parse(xhr2.response).images.length - 1
      ? (index = 0)
      : index++;
  }, 1200);
}
function pauseSliding() {
  clearInterval(sliderInterval);
}
slider.addEventListener("mouseover", function () {
  pauseSliding();
});
slider.addEventListener("mouseleave", function () {
  playSliding();
});
playSliding();
// //------------------ Styling ------------------
window.onscroll = function () {
  if (window.scrollY > 188) {
    myNav.classList.add("colored-nav");
  } else {
    myNav.classList.remove("colored-nav");
  }
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
