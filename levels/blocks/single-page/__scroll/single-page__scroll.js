var singlePage = require('single-page');

//scroll to page info
$('.single-page__scroll').on('click', function() {
    $('.page-container').animate({
        'scrollTop': $(window).height()
    }, 500);
});

//update title and .page-scroll opacity while scrolling
$('.page-container').on('scroll', function() {
    window.requestAnimationFrame(singlePage.changeOpacity);
});
