$(document).ready(function() {
    // Initiate Variables
    var hamburger = $('.hamburger'),
        headerNav = $('nav#header-nav'),
        hamburgerClose = $('.hamburger-close'),
        windowWidth = $( window ).width();

    // Hamburger Menu Functionality
    hamburger.removeClass('inactive');

    hamburger.click(function() {
        headerNav.addClass('show');
        hamburger.addClass('inactive');
    });
    hamburgerClose.click(function() {
        headerNav.removeClass('show');
        hamburger.removeClass('inactive');
    });
});