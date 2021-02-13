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

    var tabs1 = document.querySelectorAll('.content-nav-tab[data-content="laptops"] li');
    var tabs2 = document.querySelectorAll('.content-nav-tab[data-content="desktops"] li');

    var GS_Items = document.querySelectorAll('[data-tab-laptops="gs"]');
    var GT_Items = document.querySelectorAll('[data-tab-laptops="gt"]');
    var GL_Items = document.querySelectorAll('[data-tab-laptops="gl"]');
    var GE_Items = document.querySelectorAll('[data-tab-laptops="ge"]');

    var INFINUTE_Items = document.querySelectorAll('[data-tab-desktops="infinute"]');
    var TRIDEN_Items = document.querySelectorAll('[data-tab-desktops="triden"]');
    var DESKTOPGL_Items = document.querySelectorAll('[data-tab-desktops="desktopgl"]');
    var NIGHTBLADE_Items = document.querySelectorAll('[data-tab-desktops="nightblade"]');

    tabs1.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs1.forEach((tab) => {
                tab.classList.remove("active");
            })
            tab.classList.add("active");

            var selectedTab = tab.getAttribute("data-content-tab");
            console.log(selectedTab)

            if (selectedTab == "gs") {
                GS_Items.forEach((gs) => {
                    gs.style.display = "block";
                })
                GT_Items.forEach((gt) => {
                    gt.style.display = "none";
                })
                GL_Items.forEach((gl) => {
                    gl.style.display = "none";
                })
                GE_Items.forEach((ge) => {
                    ge.style.display = "none";
                })
            }
            else if (selectedTab == "gt") {
                GT_Items.forEach((gt) => {
                    gt.style.display = "block";
                })
                GS_Items.forEach((gs) => {
                    gs.style.display = "none";
                })
                GL_Items.forEach((gl) => {
                    gl.style.display = "none";
                })
                GE_Items.forEach((ge) => {
                    ge.style.display = "none";
                })
            }
            else if (selectedTab == "gl") {
                GL_Items.forEach((gl) => {
                    gl.style.display = "block";
                })
                GT_Items.forEach((gt) => {
                    gt.style.display = "none";
                })
                GS_Items.forEach((gs) => {
                    gs.style.display = "none";
                })
                GE_Items.forEach((ge) => {
                    ge.style.display = "none";
                })
            }
            else if (selectedTab == "ge") {
                GE_Items.forEach((ge) => {
                    ge.style.display = "block";
                })
                GL_Items.forEach((gl) => {
                    gl.style.display = "none";
                })
                GT_Items.forEach((gt) => {
                    gt.style.display = "none";
                })
                GS_Items.forEach((gs) => {
                    gs.style.display = "none";
                })
            }

        })
    });

    tabs2.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs2.forEach((tab) => {
                tab.classList.remove("active");
            })
            tab.classList.add("active");

            var selectedTab = tab.getAttribute("data-content-tab");
            console.log(selectedTab)

            if (selectedTab == "infinute") {
                INFINUTE_Items.forEach((infinute) => {
                    infinute.style.display = "block";
                })
                TRIDEN_Items.forEach((triden) => {
                    triden.style.display = "none";
                })
                DESKTOPGL_Items.forEach((desktopgl) => {
                    desktopgl.style.display = "none";
                })
                NIGHTBLADE_Items.forEach((nightblade) => {
                    nightblade.style.display = "none";
                })
            }
            else if (selectedTab == "triden") {
                TRIDEN_Items.forEach((triden) => {
                    triden.style.display = "block";
                })
                INFINUTE_Items.forEach((infinute) => {
                    infinute.style.display = "none";
                })
                DESKTOPGL_Items.forEach((desktopgl) => {
                    desktopgl.style.display = "none";
                })
                NIGHTBLADE_Items.forEach((nightblade) => {
                    nightblade.style.display = "none";
                })
            }
            else if (selectedTab == "desktopgl") {
                DESKTOPGL_Items.forEach((desktopgl) => {
                    desktopgl.style.display = "block";
                })
                TRIDEN_Items.forEach((triden) => {
                    triden.style.display = "none";
                })
                INFINUTE_Items.forEach((infinute) => {
                    infinute.style.display = "none";
                })
                NIGHTBLADE_Items.forEach((nightblade) => {
                    nightblade.style.display = "none";
                })
            }
            else if (selectedTab == "nightblade") {
                NIGHTBLADE_Items.forEach((nightblade) => {
                    nightblade.style.display = "block";
                })
                DESKTOPGL_Items.forEach((desktopgl) => {
                    desktopgl.style.display = "none";
                })
                TRIDEN_Items.forEach((triden) => {
                    triden.style.display = "none";
                })
                INFINUTE_Items.forEach((infinute) => {
                    infinute.style.display = "none";
                })
            }

        })
    })

    var showSearchboxBtn = document.querySelector('.show__searchbox_btn');
    var hideSearchboxBtn = document.querySelector('.cancel__search');
    var searchInput = document.querySelector('.search-input');

    showSearchboxBtn.addEventListener('click', function () {
        showSearchboxBtn.classList.toggle('d-none')
        hideSearchboxBtn.classList.toggle('d-none')
        searchInput.classList.toggle('active')
    });
    hideSearchboxBtn.addEventListener('click', function () {
        showSearchboxBtn.classList.toggle('d-none')
        hideSearchboxBtn.classList.toggle('d-none')
        searchInput.classList.toggle('active')
    })

});