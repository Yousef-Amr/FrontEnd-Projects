$(function() {
    'use strict';
    let windowH = $(window).height(),
        // upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(windowH - navH);


    $('.controls .menu div').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).data('class'));
        if ($(this).data('class') === 'all') {
            $('.shuffle-images .col-sm').css('opacity', 1);
        } else {
            $('.shuffle-images .col-sm').css('opacity', '0.08');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });


});