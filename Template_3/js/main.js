$(function() {
    'use strict';
    let windowH = $(window).height(),
        navH = $('.navbar').innerHeight();
    $('.header').height(windowH - navH);

});