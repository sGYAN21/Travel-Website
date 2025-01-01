const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  effect: "creative",
  creativeEffect: {
    prev: {
      //will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      //will set`translateX(100%)` on next slides
      translate: ["100%", 0, 0],
    },
  },
  loop: true,
  direction: "horizontal",

  autoplay:{
    delay: 5000,
  },
  speed: 400,
  spaceBetween:100,
});
const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 3,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,

  autoplay:{
    delay: 5000,
  },
  speed: 400,
  breakpoints:{
    320:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
   
    },
    968:{
      slidesPerView: 3,
   
    },

  }
});
const swiper3 = new Swiper(".swiper3", {
  slidesPerView: 2,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,

  autoplay:{
    delay: 5000,
  },
  speed: 400,
  breakpoints:{
    320:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
   
    },
    968:{
      slidesPerView: 2,
   
    },

  }
});
const swiper4 = new Swiper(".swiper4", {
  slidesPerView: 1,
  spaceBetween: 95,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,

  autoplay:{
    delay: 5000,
  },
  speed: 400,
  breakpoints:{
    320:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 1,
   
    },
    968:{
      slidesPerView: 1,
   
    },

  }
});
