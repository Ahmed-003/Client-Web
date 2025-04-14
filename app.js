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