var toggleProject = function toggleProject(project, container, bool) {
  if (bool) {
    // expand page
    container.addClass('single-page_is-open');
    project.addClass('single-page_is-full-width').siblings('.single-page').removeClass('single-page_is-loaded');
  } else {
    // check media query
    var mq = window.getComputedStyle(document.querySelector('.page-container'), '::before').getPropertyValue('content'),
    delay = (mq == 'mobile') ? 100 : 0;

    container.removeClass('single-page_is-open');
    //fade out page
    project.animate({ opacity: 0 }, 800, function() {
      project.removeClass('single-page_is-loaded');
      $('.page-container').find('.single-page__scroll').attr('style', '');
      setTimeout(function() {
        project.attr('style', '').removeClass('single-page_is-full-width').find('.single-page__title').attr('style', '');
      }, delay);
      setTimeout(function() {
        showCaption($('.single-page').eq(0));
      }, 300);});
  }
}
var showCaption = function showCaption(project) {
  if (project.length > 0) {
    setTimeout(function() {
      project.filter('.single-page').addClass('single-page_is-loaded');
      showCaption(project.next());
    }, 150);
  }
}
var changeOpacity = function changeOpacity() {
  var newOpacity = 1 - ($('.page-container').scrollTop()) / 300;
  $('.single-page__scroll').css('opacity', newOpacity);
  $('.single-page_is-full-width .single-page__title').css('opacity', newOpacity);
}

$('.single-page').bgLoaded({
  afterLoaded: function() {
    showCaption($('.single-page').eq(0));
  }
});

// open page
$('.single-page').on('click', function() {
    var selectedProject = $(this),
    toggle = !selectedProject.hasClass('single-page_is-full-width');
    if (toggle) {
      toggleProject($(this), $('.page-container'), toggle);

      if( selectedProject.find(".resume").length ) {
        module.exports.chartsShowed = false;
      }

    }
});


module.exports = {
  toggleProject: toggleProject,
  // check if background-images have been loaded and show single pages
  showCaption: showCaption,
  changeOpacity: changeOpacity
}
