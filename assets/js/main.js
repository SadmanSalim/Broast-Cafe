$(document).ready(function(){
    $('.banner_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.featured_slider').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
        nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
                      
  });