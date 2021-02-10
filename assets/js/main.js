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

    var contentItemsSlider = new Swiper('.swiper-container.content-items', {
        slidesPerView: 2,
        spaceBetween: 0,
        freeMode: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 0,
                touchRatio: 0
            }
        }
    });

    // var contentItemsSlider = undefined;
    // function initSwiper() {
    //     var screenWidth = $(window).width();
    //     if (screenWidth < 1200 && contentItemsSlider == undefined) {
    //         // jQuery('.swiper_item_only_mobile').removeClass('col-md-6');
    //         jQuery('.swiper_item_only_mobile').removeClass('col');
    //         jQuery('.swiper_item_only_mobile').removeClass('p-0');
    //         jQuery('.swiper_item_only_mobile').addClass('swiper-slide');
    //         contentItemsSlider = new Swiper('.content-items', {
    //             slidesPerView: 2,
    //             spaceBetween: 0,
    //             breakpoints: {
    //                 768: {
    //                     slidesPerView: 2,
    //                     spaceBetween: 0,
    //                 },
    //                 1200: {
    //                     slidesPerView: 5,
    //                     spaceBetween: 0,
    //                 }
    //             }
    //         });
    //     } else if (screenWidth > 1199 && contentItemsSlider != undefined) {
    //         contentItemsSlider.destroy();
    //         contentItemsSlider = undefined;
    //         // jQuery('.swiper-wrapper.content-items').removeAttr('style');
    //         jQuery('.swiper-container.content-items').removeClass('swiper-container');
    //         // jQuery('.swiper-container.content-items .swiper-wrapper').removeClass('swiper-wrapper');
    //         jQuery('.content-items .swiper-slide').removeAttr('role');
    //         jQuery('.content-items .swiper-slide').removeAttr('aria-label');
    //         jQuery('.content-items .swiper-slide').removeClass('swiper-slide');
    //         // jQuery('.swiper_item_only_mobile').addClass('col-md-6');
    //         jQuery('.swiper_item_only_mobile').addClass('col');
    //         jQuery('.swiper_item_only_mobile').addClass('p-0');
    //     }
    // }

    // //Swiper plugin initialization
    // initSwiper();

    // //Swiper plugin initialization on window resize
    // $(window).on('resize', function () {
    //     initSwiper();
    // });

});