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
        slidesPerView: 1,
        spaceBetween: 0,
        // freeMode: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 0,
                touchRatio: 0
            }
        }
    });

    var tabs1 = document.querySelectorAll(".content-nav-tab li");

    var GS_Series = document.querySelectorAll('.content-nav-tab[data-content="Laptops"] .gs');
    var GT_Series = document.querySelectorAll('.content-nav-tab[data-content="Laptops"] .gt');
    var GL_Series = document.querySelectorAll('.content-nav-tab[data-content="Laptops"] .gl');

    tabs1.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs1.forEach((tab) => {
                tab.classList.remove("active");
            })
            tab.classList.add("active");
            var tabval = tab.getAttribute("data-content-tab");

            if (tabval == "gs") {
                GS_Series.forEach((gs) => {
                    gs.style.display = "block";
                })
            }
            else if (tabval == "gt") {
                GT_Series.forEach((gt) => {
                    gt.style.display = "block";
                })
            }
            else if (tabval == "gl") {
                GL_Series.forEach((gl) => {
                    gl.style.display = "block";
                })
            }
            else if (tabval == "gl") {
                GL_Series.forEach((gl) => {
                    gl.style.display = "block";
                })
            }

        })
    })
});