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
            breakpoint: 768,
            settings: {
                arrows: true,
                dots: false,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '35px'
            }
        }
      ]
  });
  $('.category_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
    nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  
  
                      
  });