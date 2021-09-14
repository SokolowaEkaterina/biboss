$(document).ready(() => {
    $('.location').on('click', function(e){
        if($('.location').hasClass('active')){
            $('.location').removeClass('active');
            $('.location_open_block').slideUp(500);
        }
        else{
            $('.location').addClass('active');
            $('.location_open_block').slideDown(500);
        }
    });

    // $(window).resize(function() {
    //     if (document.documentElement.clientWidth < 1420) {
    //         $('.sections_title').on('click', function(e){
    //             $(this).toggleClass('active');
    //             $(this).next('ul').slideToggle(500);
    //         });
    //     }
    // });

    // var mediaQuery = window.matchMedia("screen and (width: 1420px)");
    // mediaQuery.addListener(foo);
    // foo(mediaQuery);

    // function foo(mq) {
    //     $('.sections_title').on('click', function(e){
    //         $(this).toggleClass('active');
    //         $(this).next('ul').slideToggle(500);
    //     });
    // }

    $('.menu_button').on('click', function(e){
        if($('.menu_button').hasClass('menu_active')){
            $('.menu_button').removeClass('menu_active');
            $('.navigation').removeClass('navigation_active');
        }
        else{
            $('.menu_button').addClass('menu_active');
            $('.navigation').addClass('navigation_active');
        }
    });


    // $('.competitors_slider').slick({
    //     slidesToShow: 2,
    //     arrows: false,
    //     centerMode: true,
    // });

    $(window).on('load resize', function() {
        if ($(window).width() < 768) {
          $('.competitors_slider').slick({
            centerMode: true,
            arrows: false,
            slidesToShow: 1,
          });
        } else {
          $(".competitors_slider").slick("unslick");
        }
      });
});