$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $('.header').addClass('fixed');
        $('.nav-link').addClass('fixed');
        $('.nav-link::after').addClass('fixed');
    } else {

        $('.header').removeClass('fixed');
        $('.nav-link').removeClass('fixed');
        $('.nav-link::after').removeClass('fixed');
    }
})

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.05)';

    $('.slide-bg-anime').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function (e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (15 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (20 * lMouseY) / 100;

});

moveBackground();

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('slide');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

window.onload = function () {
    document.body.classList.add('preloader');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('preloader');
    }, 3600);
}