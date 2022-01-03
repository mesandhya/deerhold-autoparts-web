
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            addClass();
        } else {
            removeClass();
        }
    });
    $(document).on("mouseover", "nav", function () {
        if ($(document).scrollTop() < 50)
            addClass();
    });

    $(document).on("mouseleave", "nav", function () {
        if ($(document).scrollTop() < 50)
            removeClass();
    });

    $('.tooltip').tooltip()
});

function addClass() {
    $('nav').addClass('shrink');
}

function removeClass() {
    $('nav').removeClass('shrink');
}

