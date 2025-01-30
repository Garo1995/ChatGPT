$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-content').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.menu-content').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-content').removeClass('transition-menu');
        }
    });
    $('.head-menu a').on('click', function () {
        $('.menu-content').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.menu-content').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
        $('.head-menu a').removeClass('menu-href-active');
        $(this).addClass('menu-href-active');
    })
});



$('.lang-name').on('click', function (e) {
    $(this).parent().toggleClass('languages-open');
    e.stopPropagation();
});

$('.lang-drop li').on('click', function () {
    let text_in = $('.lang-name').html();
    let selected_text = $(this).html();
    $('.lang-name').html(selected_text);
    $(this).html(text_in);
    $('.languages').removeClass('languages-open');
});
$(window).on('click', function (e) {
    let menuSort = $('.languages');
    if (e.target !== menuSort) {
        menuSort.removeClass('languages-open');
    }
});



$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }

    let accordion = new Accordion($('#accordion'), false);
});


$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});





let featuresSwiper = new Swiper(".chat-features-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        '1199': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '991': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        '575': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".features-pagination",
    },
    navigation: {
        nextEl: ".features-button-next",
        prevEl: ".features-button-prev",
    },

});
let featuresMobileSwiper = new Swiper(".features-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        '991': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '575': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".features-mobile-pagination",
    },

});


let reviewsSwiper = new Swiper(".reviews-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        '767': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        '575': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
    },

});










let benefitsSwiper = new Swiper(".benefits-using-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        '991': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '575': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".benefits-mobile-pagination",
    },

});