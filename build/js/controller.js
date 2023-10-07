const buttons = document.querySelectorAll("[data-carousel-button]");

console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    console.log(newIndex, "here");
    if (newIndex < 0) newIndex = slides.children.length - 1;
    console.log(newIndex);
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const burgerBars = document.querySelector(".bars-list");
const list = document.querySelector(".links");

burgerBars.addEventListener("click", () => {
  console.log("here");
  list.classList.toggle("show-listed__items");
  list.classList.toggle("animeate-mov");
});

const topSearchBarContanier = document.querySelector(".bar-top");
const bottomSearchBarContanier = document.querySelector(".bar-bottom");
const showBottomSearchBar = document.querySelector(".glass-show");
const topSearchBar = topSearchBarContanier.querySelector(".search-bar");
console.log(bottomSearchBarContanier);
console.log(topSearchBar);

topSearchBar.addEventListener("focus", () => {
  topSearchBarContanier.classList.toggle("search-shrink");
  topSearchBarContanier.classList.toggle("search-extend");
});

topSearchBar.addEventListener("blur", () => {
  topSearchBarContanier.classList.toggle("search-extend");
  topSearchBarContanier.classList.toggle("search-shrink");
});

showBottomSearchBar.addEventListener("click", () => {
  bottomSearchBarContanier.classList.toggle("appear");
});
