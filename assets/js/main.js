$(window).on('load', function() {

  const Header = (function() {

    // var $wndwHght, $bnnr, $loader;

    const init = function() {
      loadElements();
    };

    var loadElements = function() {
      // $bnnr = $('#banner');
      // $loader = $('.loader');
      console.log("hello")
    };


    return {
      init: init
    }


  })();



  const ProjectSwiper = (function() {

    let $galleryTop, $galleryThumbs;

    const init = function() {
      makeSwiper();
    }

    function makeSwiper() {
      // 	$mySwiper = new Swiper ('.swiper-container', {
      //     // Optional parameters
      //     direction: 'horizontal',
      //     loop: true,

      //     // If we need pagination
      //     pagination: {
      //       el: '.swiper-pagination',
      //     },

      //     // Navigation arrows
      //     navigation: {
      //       nextEl: '.swiper-button-next',
      //       prevEl: '.swiper-button-prev',
      //     }
      //   })
      // }
      $galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      $galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      });
      $galleryTop.controller.control = $galleryThumbs;
      $galleryThumbs.controller.control = $galleryTop;
    }

    return {
      init: init
    }

  })();



  // call the functions
  Header.init();
  ProjectSwiper.init();
});