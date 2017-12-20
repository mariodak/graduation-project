'use strict';

// Main JS File
document.addEventListener('touchmove', function (event) {
    event = event.originalEvent || event;
    if (event.scale !== 1) {
        event.preventDefault();
    }
}, false);
// Menu Toggle

$('#active').click(function () {
    $('.navigation').toggleClass("navigation-after", 1000, "easeOutSine");
});

// Menu Button Click
$('a.btn').click(function () {
    $('.navigation-button').toggleClass("button-activate", 1000, "easeOutSine");
});

// Menu Background Hover

var m_b_h = 'menu-bg-hover';

$(function () {
    $('.nav-col-1').hover(function () {
        $('.nav-image-1').addClass(m_b_h);
    }, function () {
        $('.nav-image-1').removeClass(m_b_h);
    });
});

$(function () {
    $('.nav-col-2').hover(function () {
        $('.nav-image-2').addClass(m_b_h);
    }, function () {
        $('.nav-image-2').removeClass(m_b_h);
    });
});

$(function () {
    $('.nav-col-3').hover(function () {
        $('.nav-image-3').addClass(m_b_h);
    }, function () {
        $('.nav-image-3').removeClass(m_b_h);
    });
});

$(function () {
    $('.nav-col-4').hover(function () {
        $('.nav-image-4').addClass(m_b_h);
    }, function () {
        $('.nav-image-4').removeClass(m_b_h);
    });
});

// Add function scroll

jQuery(document).ready(function () {

    var x = 0;

    //Initialise ScrollAppear
    jQuery('.about').ScrollAppear({
        ElementAffect: ".text-p",
        // ElementsToShow: 5,
        AddClass: 'redcolor'
        // Timeout: 0
    });
});