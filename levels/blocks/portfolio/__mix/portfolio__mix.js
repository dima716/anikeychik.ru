// Instantiate MixItUp:
$('#portfolio').mixItUp({
  controls: {
    activeClass: 'portfolio__filter_is-active'
  },
  selectors: {
    target: '.portfolio__mix',
    filter: '.portfolio__filter'
  }
});
