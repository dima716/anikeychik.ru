// Skills Chart

var options = {
    segmentShowStroke: true,
    percentageInnerCutout: 70,
    animation: true,
    animationEasing: 'easeOutQuint',
    animateRotate: true,
    animateScale: true
};
var data = {
    html_css: [{
        value: 50,
        color: "#404148"
    }, {
        value: 50,
        color: "#fff"
    }],
    sass: [{
        value: 90,
        color: "#404148"
    }, {
        value: 10,
        color: "#fff"
    }],
    jquery: [{
        value: 90,
        color: "#404148"
    }, {
        value: 10,
        color: "#fff"
    }],
    rails: [{
        value: 60,
        color: "#404148"
    }, {
        value: 40,
        color: "#fff"
    }],
    backbone: [{
        value: 50,
        color: "#404148"
    }, {
        value: 50,
        color: "#fff"
    }],
    photoshop: [{
        value: 75,
        color: "#404148"
    }, {
        value: 25,
        color: "#fff"
    }]
};

var showSkills = function () {
    var offset = 0;
    $.each(data, function(key, data) {
        var canvas = document.querySelector('#' + key);
        var ctx = canvas.getContext('2d');
        var doughnutChart = new Chart(ctx).Doughnut(data,options);
    });
}

module.exports = { showSkills: showSkills };

