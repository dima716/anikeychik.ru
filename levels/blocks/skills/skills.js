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
    value: 85,
    color: "#404148"
  }, {
    value: 15,
    color: "#fff"
  }],
  javascript: [{
    value: 65,
    color: "#404148"
  }, {
    value: 35,
    color: "#fff"
  }],
  jquery: [{
    value: 75,
    color: "#404148"
  }, {
    value: 25,
    color: "#fff"
  }],
  bem: [{
    value: 45,
    color: "#404148"
  }, {
    value: 55,
    color: "#fff"
  }],
  gulp: [{
    value: 70,
    color: "#404148"
  }, {
    value: 30,
    color: "#fff"
  }],
  photoshop: [{
    value: 50,
    color: "#404148"
  }, {
    value: 50,
    color: "#fff"
  }],
  php: [{
    value: 40,
    color: "#404148"
  }, {
    value: 60,
    color: "#fff"
  }],
  mysql: [{
    value: 40,
    color: "#404148"
  }, {
    value: 60,
    color: "#fff"
  }],
  linux: [{
    value: 40,
    color: "#404148"
  }, {
    value: 60,
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

