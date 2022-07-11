var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    // type: "custom",
    clickable: true,
    // renderCustom: function (swiper, current, total) {
    //   return ("0" + current).slice(-2) + " of " + ("0" + total).slice(-2);
    // },
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  renderCustom: function (swiper, current, total) {
    return current + " of " + total;
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
  },
});
