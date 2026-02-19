new Swiper("#productSwiper", {
  slidesPerView: 4,
  spaceBetween: 22,
  speed: 500,
  loop: false,
  navigation: {
    nextEl: ".prod-next",
    prevEl: ".prod-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1.2, spaceBetween: 14 },
    520: { slidesPerView: 2.2, spaceBetween: 16 },
    900: { slidesPerView: 3.2, spaceBetween: 18 },
    1200: { slidesPerView: 4, spaceBetween: 22 },
  },
});

var swiper = new Swiper(".categorySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 500,
  loop: false,
  navigation: {
    nextEl: ".cat-next",
    prevEl: ".cat-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
  }
});


var swiper = new Swiper(".heroSwiper", {
  slidesPerView: 1,
  loop: true,
  speed: 100,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});