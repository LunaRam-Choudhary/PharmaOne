$(document).ready(function () {

  $("#carousel").owlCarousel({
    autoplay: true,
    lazyLoad: false,
    loop: true,
    margin: 20,
    autoplayHoverPause: true,
    /*
   animateOut: 'fadeOut',
   animateIn: 'fadeIn',
   */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 3
      },

      1024: {
        items: 4
      },

      1366: {
        items: 4
      }
    }
  });

  $('#customers-testimonials').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: [
      "<i class='fa fa-arrow-left'></i>",
      "<i class='fa fa-arrow-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3,
        margin: 20
      },
      1000: {
        items: 3,
        margin: 20
      }
    }
  });
});