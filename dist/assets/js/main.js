'use strict';

// Main JS File

// Menu Toggle
//$('#button').click(() => $('.mobile-nav-show').toggleClass('active-button'))


$('#active').click(function () {
    $('.navigation').toggleClass("navigation-after", 1000, "easeOutSine");
});