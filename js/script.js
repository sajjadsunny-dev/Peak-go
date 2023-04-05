// slick slider js for destination_part start
$('.slider_part').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  centerMode: true,
  centerPadding: '250px',
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// slick slider js for destination_part end

// counterup js for counter_part start
$('.counter').counterUp({
  delay: 7,
  time: 500
});
// counterup js for counter_part end

// slick slider js for explore_part start
$('.explore_slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  centerMode: true,
  centerPadding: '0',
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// slick slider js for explore_part end

// slick slider js for testimonial start
$('.testimonial_slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: false,
  centerMode: true,
  centerPadding: '0',
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// slick slider js for testimonial end

// slick slider js for testimonial start
var mixer = mixitup('.container');
// slick slider js for testimonial end