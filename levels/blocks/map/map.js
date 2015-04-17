var GMaps = require('gmap');

// Google Map

// main directions
map = new GMaps({
    position: "TOP_CENTER",
    el: '#map',
    lat: 23.790223,
    lng: 90.414036,
    zoom: 13,
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
    lat: 23.790223,
    lng: 90.414036,
    title: 'Codetic',
    infoWindow: {
        content: '<p> Mirpur , Dhaka</p>'
    }
});
