const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  effect: "coverflow",
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-swiper__button--next',
    prevEl: '.reviews-swiper__button--prev',
  },

});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  document
    .querySelector(".navbar-menu")
    .classList.toggle("navbar-menu--visible");
})