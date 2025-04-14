window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".top-header-2");

    if (window.scrollY > 110) { 
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


//   $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav: true,           // 👈 This enables next/prev buttons
//     dots: true, 
//     responsive: {
//       0: {
//           items: 1,
//       },
//       430: {
//           items: 2, 
//       },
//       768: {
//           items: 3, 
//       },
//       992: {
//           items: 4,
//       }
//     }
// })

$('.owl-carousel').owlCarousel({
  loop:true,
  margin: 30,
  items: 4,
  nav:true,
  autoplay: true,
  smartSpeed: 1500,
  dots:true,
  navContainerClass: 'cake_feature_slider',
  navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  responsiveClass: true,
  responsive: {
      0: {
          items: 1,
      },
      430: {
          items: 2, 
      },
      768: {
          items: 3, 
      },
      992: {
          items: 4,
      }
  }
})
