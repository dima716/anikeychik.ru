var GMaps = require('gmap');

// Google Map

// main directions
map = new GMaps({
    position: "TOP_CENTER",
    el: '#map',
    lat: 60.008557,
    lng: 30.347153,
    zoom: 10,
    zoomControl: true,
    zoomControlOpt: {
        style: 'SMALL',
        position: 'TOP_LEFT'
    },
    panControl: false,
    scrollwheel: false
});

// add address markers
map.addMarker({
    lat: 60.008557,
    lng: 30.347153,
    infoWindow: {
        content: '<p> Санкт - Петербург , Россия</p>'
    }
});
