


AOS.init({
    duration: 1000, // animation ki speed
    offset: 120,
    once: true    // kitni scroll ke baad start ho    // sirf 1 dafa animate kare
  });



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
        delay: 8000,
        disableOnInteraction: false,
      },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



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

var defaultSelector = $(".cake-filter ul li.active").attr("data-filter");
if (defaultSelector) {
    $(".grid_portfolio_area").isotope({
        filter: defaultSelector,
        animationOptions: {
            duration: 450,
            easing: "linear",
            queue: false,
        }
    });
}


portfolio_isotope();




function portfolio_isotope(){
  if ( $('.cake-filter ul li').length ){
      // Add isotope click function
      $(".cake-filter ul li").on('click',function(){
          $(".cake-filter ul li").removeClass("active");
          $(this).addClass("active");

          var selector = $(this).attr("data-filter");
          $(".grid_portfolio_area").isotope({
              filter: selector,
              animationOptions: {
                  duration: 450,
                  easing: "linear",
                  queue: false,
              }
          });
          return false;
      });
  }
}

portfolio_isotope();



// var count = 1;
// var max = 11;

// function startCounter() {
//   var countElement = document.getElementById('count');
//   var interval = setInterval(function() {
//     countElement.innerText = count;
//     count++;
//     if (count > max) {
//       clearInterval(interval);
//     }
//   }, 300); // Delay ko slow ya fast karne ke liye number change karo
// }

// startCounter()



function animateCount(id, number, duration = 4000) {
  $(id).animateNumber({ number: number }, duration);
}

var counterStarted = false;

$('#counter').waypoint(function(direction) {
  if (direction === 'down' && !counterStarted) {
    animateCount('#counter', 11);
    animateCount('#counter1', 100);
    animateCount('#counter2', 30);
    animateCount('#counter3', 1500);
    counterStarted = true; // only once
  }
}, {
  offset: '100%' // triggers when 90% of the element is visible
});