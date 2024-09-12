const mainHeroSwiper = new Swiper(".swiper-main-hero", {
  loop: true,
  slidesPerView: 1.25,
  spaceBetween: -12,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
});

const reservationSwiper = new Swiper(".swiper-booking", {
  slidesPerView: 1.7,
  spaceBetween: 16,
});