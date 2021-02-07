$(document).ready(function () {
    var homeSlider = new Swiper('.swiper-container.standart', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var productSlider = new Swiper('.swiper-container.products', {
        slidesPerView: 2,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            // 992: {
            //     slidesPerView: 4,
            //     spaceBetween: 0,
            // },
            1200: {
                slidesPerView: 5,
                spaceBetween: -10,
            }
        }
    });
});