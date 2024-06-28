$(".news__slider").slick({
    slidesToShow: 2.99,
    dots:true,
    autoplay:true,
    speed:900,
    autoplaySpeed: 1000,
    arrows:true,
    responsive: [
        {
          breakpoint: 1390,
          settings: {
            slidesToShow: 2,
            autoplay:false
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow:1,
            arrows:false,
            autoplay:false
        }
        }
      ]
})