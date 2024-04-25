$(function () {
    // banner-carousel setting
    $('.banner-carousel .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    // review carousel setting
    $('.review-carousel .owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 768px up
            767.98: {
                items: 3
            },
        },
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    $('.counter').countUp();
});