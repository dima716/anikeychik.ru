var singlePage = require('single-page');
var skills = require('skills');

// scroll to page info
$('.single-page__scroll').on('click', function() {
    $('.page-container').animate({
        'scrollTop': $(window).height()
    }, 500);
});



// update title and .page-scroll opacity while scrolling
$('.page-container').on('scroll', function() {
  window.requestAnimationFrame(singlePage.changeOpacity);

  var skillsTopPosition = $('.skills').position().top,
      scrollPosition = $(this).scrollTop();

  if(scrollPosition - skillsTopPosition > 0 && !singlePage.chartsShowed) {
    window.requestAnimationFrame(skills.showSkills);
    singlePage.chartsShowed = true;
  }
});



