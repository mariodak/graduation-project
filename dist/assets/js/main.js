'use strict';

// Main JS File

// Blokuje Zoom na prehliadačoch
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

// Menu Zoom Pozadia

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

// Aktivuje effekt po scrollnutí --px

$(window).scroll(function () {

    var divisionObject = '--object';
    var classApply = '--apply';
    var scroll = $(window).scrollTop();
    var calcHeight = $(window).height() - 300;
    var totalDistance = $(divisionObject).offset().top - calcHeight;

    if (scroll >= totalDistance) $(divisionObject).addClass(classApply);

    // Remove this 2 lines, if you want apply this Animation once time
    else $(divisionObject).removeClass(classApply);
});