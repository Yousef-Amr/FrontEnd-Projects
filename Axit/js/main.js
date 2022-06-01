$(function() {
    'use strict';
    let windowH = $(window).height(),
        navH = $('.navbar').innerHeight(),
        barndH = $('.brand-bar').innerHeight();
    $('.header').height(windowH - (barndH + navH));

    $('.feature-img').height(300);
    $('.feature-img').width(350);

    $('.feature-img1').height(400);
    $('.feature-img1').width(550);

});