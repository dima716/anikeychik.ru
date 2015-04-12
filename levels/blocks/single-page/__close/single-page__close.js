var singlePage = require('single-page');

//close page
$('.single-page__close').on('click', function() {
  singlePage.toggleProject($('.single-page_is-full-width'), $('.page-container'), false);
});
