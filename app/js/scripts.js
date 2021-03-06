$(document).ready(function () {
    "use strict";

    $("#menu-trigger").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $(".nav-panel").slideToggle();

        if($(this).hasClass('open')) {
            disableScroll();
        } else {
            enableScroll();
        }
    });

    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
        if (window.addEventListener) { // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        }
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove  = preventDefault; // mobile
        document.onkeydown  = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        }
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }


    if (window.matchMedia("(max-width: 767px)").matches) {
        $('.menu > li > a').click(function () {
            $(".nav-panel").slideToggle();
            $("#menu-trigger").toggleClass("open");
            enableScroll();
        });
    }
});
$(document).ready(function () {
    "use strict";

    //  ----- SLIDER -----

    // // SLICK SLIDER COUNTER
    // $('#link3 .slider').on('init reInit afterChange', function (event, slick, currentSlide) {
    //     var i = (currentSlide ? currentSlide : 0) + 1;
    //     $('.slider-counter').text(i + '/' + slick.slideCount);
    // });
    //
    // // SLICK SLIDER
    $(".slider-full").slick({
        // slide: ".slide",
        prevArrow: "<div class='arrow left'><img src='img/slides/arrow-left.svg'></div>",
        nextArrow: "<div class='arrow right'><img src='img/slides/arrow-right.svg'</div>",
        dots: true

    });
    //
    // $(".slider-two").slick({
    //     // slide: ".slide",
    //     dots: true,
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
    //     nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
    //     responsive: [
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });
    //
    //
    // $(".slider-three").slick({
    //     // slide: ".slide",
    //     dots: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
    //     nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
    //     responsive: [
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ],
    //
    //
    // });

    // ----- SELECT -----

    //CHOSEN
    $(".chosen-select").chosen({
        disable_search_threshold: 10,
        no_results_text: "Нічого не знайдено"
    });
    // $(".chosen-image").chosenImage({disable_search_threshold: 10});

    // ----- MODAL -----

    // MODAAL PLUGIN
    // $(".inline").modaal();

    // ----- ANIMATION -----

    // WOW JS
    // new WOW().init();


    // // ----- ACCORDION -----
    // $(function () {
    //     $("#accordion").accordion({
    //         collapsible: true,
    //         heightStyle: "content"
    //     });
    // });
    //
    // // ----- TABS -----
    // $(function () {
    //     $("#tabs").tabs();
    // });

    // ----- SCROLLSPY -----

    // $(function(){ // on document load
    //     $('.menu').ddscrollSpy({ // initialize first demo
    //         scrolltopoffset: -50
    //     });
    // });

    // SCROLLING CLASS CHANGE
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 200) {
    //         $(".link-up").addClass("visible");
    //     }
    //     else {
    //         $(".link-up").removeClass("visible");
    //     }
    // });

    // ANCHOR LINKS SCROLLING
    // $(".smooth").click(function (event) {
    //     event.preventDefault();
    //     var id = $(this).attr("href"),
    //         top = $(id).offset().top - 70;
    //     $("body,html").animate({
    //         scrollTop: top
    //     }, 1500);
    // });
});

// !!! RESPONSIVE SCRIPTS !!!

// $(window).on('load resize', function() {
//     'use strict';
//     if (window.matchMedia("(max-width: 767px)").matches) {
//
//     } else if (window.matchMedia("(min-width: 768px)").matches) {
//
//     }
// });


