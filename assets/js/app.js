let windowWidth = $(window).width();
const handleTouchMove = function (ev) {
    ev.preventDefault();
}

const partnerSlide = function () {
    new Swiper('#partner-slide', {
        speed: 1000,
        spaceBetween: 15,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
            },
            600: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 3.5,
            },
            991: {
                slidesPerView: 4.5,
            },
            1024: {
                slidesPerView: 5.5,
            },
            1281: {
                slidesPerView: 6.5,
            }
        }
    });
}

$(function () {
    partnerSlide();
});