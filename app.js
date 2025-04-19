
// <!-- ============== Elements Fade ============== -->

AOS.init({
    duration: 1000, 
    offset: 120,
    once: true    
  });



// <!-- ============== Navbar Fixed On Scroll ============== -->

window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".top-header-2");

    if (window.scrollY > 110) { 
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});

// <!-- ============== Image slider Carousel ============== -->


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
        delay: 8000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



// <!-- ============== Draggable Slider ============== -->




$('.owl-carousel').owlCarousel({
  loop:true,
  margin: 30,
  items: 4,
  nav:true,
  autoplay: true,
  smartSpeed: 1500,
  dots:false,
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

// <!-- ============== Image Filters  ============== -->

var $galleryContainer = $('.gallery');
$galleryContainer.imagesLoaded(function(){
  $galleryContainer.isotope({
    itemSelector: '.item1',
    layoutMode: 'fitRows'
  });
});
$('.button-group .button').on('click', function(){
  $('.button-group .button').removeClass('active');
  $(this).addClass('active');

  var value = $(this).attr('data-filter');
  $galleryContainer.isotope({ filter: value });
});



// <!-- ============== Animate Number Counter  ============== -->

function animateCount(id, number, duration = 5000) {
  $(id).animateNumber({ number: number }, duration);
}
var counterStarted = false;
$('#counter').waypoint(function(direction) {
  if (direction === 'down' && !counterStarted) {
    animateCount('#counter', 11);
    animateCount('#counter1', 100);
    animateCount('#counter2', 30);
    animateCount('#counter3', 1500);
    counterStarted = true; 
  }
}, {
  offset: '100%'
});