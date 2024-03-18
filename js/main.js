// Setting Gear Dropdown //

$(document).ready(function () {
    $('.setting-gear-icon').click(function (event) {
        event.stopPropagation();
        $(this).toggleClass('rotate');
        $('ul').toggleClass('active');
    });

    $(document).click(function () {
        $('.setting-gear-icon').removeClass('rotate');
        $('ul').removeClass('active');
    });
});

// Carousel  //
$('.owl-carousel-banner').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.trending-section-slide').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3500,
    smartSpeed: 1300,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


$('.trending-product').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 2000,
    nav: true,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})


$('.about-us-carousel').owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 1200,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$(".sunglasses").owlCarousel({
    loop: true,
    margin: 20,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$('.sneakers').owlCarousel({
    loop: true,
    margin: 20,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    dots: false,
    autoplay: true,
    autoplayTimeout: 3500,
    smartSpeed: 1200,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
