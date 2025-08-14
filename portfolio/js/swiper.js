$(function () {
    const swiper = new Swiper(".swiper", {

        loop: false,
        slidesPerView: 1,
        slidesPerGroup: 1,

        pagination: {
            el: ".swiper-pagination"
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});