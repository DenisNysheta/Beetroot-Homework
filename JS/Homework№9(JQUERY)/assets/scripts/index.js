$('.hero').slick({
    slidesToShow:1,
    infinite:true,
    autoplay:false,
    arrows:false,
    dots:true,
    dotsClass:"my-dots",
    autoplaySpeed:3000,
    speed:1000,
    lazyload:"ondemand",
    draggable:true
});

let x = document.querySelector(".my-dots")

for(let i = 0; i < x.children.length; i++) {
    x.children[i].firstElementChild.textContent = ""
}

//Guitars slider 
$.getJSON("./assets/json/arrivals.json", function(data) {
    data.forEach((guitar) => {
        let guitarItem = `
            <li class="arrivals__guitar">
                <span data-stock=${guitar.inStock}>${guitar.inStock ? "in stock" : "sold"}</span>
                <img class="arrivals__img" src="${guitar.img}" data-lazy="${guitar.img}" alt="guitar">
                <h3 class="arrivals__title">${guitar.name}</h3>
                <p class="arrivals__price">${guitar.price}</p>
            </li>
        `

        $(".arrivals__slider__list").slick("slickAdd", guitarItem);
    })
})

$(".arrivals__slider__list").slick({
    autoplay:false,
    arrows:true,
    infinite:true,
    slidesToShow:4.99,
    slideToScroll:1,
    autoplaySpeed:1200,
    speed:1000,
    prevArrow:$(".arrivals__prev"),
    nextArrow:$(".arrivals__next"),
    responsive:[
      {
      breakpoint:1350,
      settings:{
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite:true
      }
    },
      {
      breakpoint:890,
      settings:{
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:true,
        arrows:false,
        dots:true,
        dotsClass:"arrivals__dots"
      }
    },
  ]
})


// Partners slider
$.getJSON("./assets/json/partners.json", function(data) {
    data.forEach((partner) => {
        let partnerItem = `
            <div class="partners__wrapper">
                <div class="partners__partner">
                    <img src="${partner.img}" alt="${partner.partner}">
                 </div>
            </div>
        `

        $(".partners__slider").slick("slickAdd", partnerItem);
    })
})

$(".partners__slider").slick({
    autoplay:true,
    arrows:true,
    infinite:true,
    slidesToShow:8.99,
    slideToScroll:4,
    autoplaySpeed:2900,
    speed:900,
    draggable:true,
    prevArrow:$(".partners__prev"),
    nextArrow:$(".partners__next"),
    responsive:[
      {
      breakpoint:1350,
      settings:{
        autoplay:false,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite:true
      }
    },
      {
      breakpoint:890,
      settings:{
        autoplay:false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite:true,
        arrows:false,
        dots:true,
        dotsClass:"partners__dots"
      }
    },
  ]
})

let burger = document.querySelector(".burger")

burger.addEventListener("click", () => {
    let firstLine = burger.firstElementChild
    let secondLine = burger.children[1]
    let thirdLine = burger.lastElementChild
    firstLine.classList.toggle("first")
    secondLine.classList.toggle("second")
    thirdLine.classList.toggle("third")
    burger.classList.toggle("transform")
    let menu = document.querySelector(".menu")
    menu.classList.toggle("right")
})