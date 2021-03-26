$(document).ready(function () {

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
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },

  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-menu").toggleClass("navbar-menu--visible");
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');

  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);


  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  // Обработка форм
  $('.form').each(function () {
    $(this).validate({
      messages: {
        name: {
          required: "Enter your name",
          minlength: "At least 2 letters",
        },
        email: {
          required: "Enter your email",
          email: "name@domain.com"
        },
        phone: {
          required: "Enter your phone number",
          minlength: "Need full phone number",
        },
      },
    });

    $('[type="tel"]').mask('+7 (999) 999-99-99', {
      'translation': {
        9: {
          pattern: /[0-9*]/
        }
      }
    });

  });

   $('.newsletter__subscribe').validate({
    errorClass: "invalid-subscribe",
    messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      }
    }
  });
  AOS.init();
});