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
            1200: {
                slidesPerView: 6,
                spaceBetween: 0,
            }
        }
    });

    var testimonialSlider = new Swiper('.swiper-container.testimonial', {
        slidesPerView: 1,
        mousewheel: {
            enable: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
});