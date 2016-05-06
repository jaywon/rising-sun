var snap = Snap("#svg");
// var p1 = paper.polyline([10, 10, 100, 100]);
var s = Snap('svg');
var l = s.select('#Line');
var path = s.select('#curve');

var pathPoints = [{command: "M", x: 10, y: 10}];

var c = s.path("M10, 10 Q -90 40 90 40");
    c.attr({'fill': 'transparent'});
    c.attr({'stroke': 'black'});

var circle = s.circle(10, 10, 2);
circle.attr({'r': '2'});
circle.attr({'fill': 'red'});

// Snap.animate(0,100, function( value ) {
//     // l.attr({ 'stroke-dasharray': '1,' + value});
//     // l.attr({x1: value - 100});
//     // l.attr({y1: value + 100});
//     // updatePath(value);
// }, 1000);


// function updatePath(y) {
//     // update SVG path control point
//     path.attr({'d': 'M10,150 Q200,'+(-y)+' 390,150'});
// }
