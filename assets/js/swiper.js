new Swiper("#productSwiper", {
  slidesPerView: 4,
  spaceBetween: 22,
  speed: 500,
  loop: false,
  navigation: {
    nextEl: ".nav-next",
    prevEl: ".nav-prev",
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