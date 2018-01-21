var trace1 = {
    x:['P', 'L', 'C'],
    y: [90, 40, 60],
    type: 'bar',
    name: 'Place'
};

var trace2 = {
    x:['H', 'LD', 'R'],
    y: [10, 80, 45],
    type: 'bar',
    name: 'Holder'
};

var data = [trace1, trace2];
var layout = {
    title: '',
    showlegend: false,
	autosize: false,
    width: 300,
    height: 200,
	margin: {
    l: 25,
    r: 15,
    b: 20,
    t: 20,
    pad: 4
    }};
Plotly.newPlot('graph1', data, layout, {displayModeBar: false});

var trace3 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter'
};

var trace4 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter'
};

var data = [trace3, trace4];
var layout = {
    title: '',
    showlegend: false,
	autosize: false,
    width: 300,
    height: 200,
	margin: {
    l: 25,
    r: 15,
    b: 20,
    t: 20,
    pad: 4
    }};

Plotly.newPlot('graph2', data, layout, {displayModeBar: false});

var trace5 = {
    x:['15s', '32r', '78f'],
    y: [70, 57, 30],
    type: 'bar',
    name: 'Place'
};

var trace6 = {
    x:['80z', '24x', '67y'],
    y: [15, 74, 36],
    type: 'bar',
    name: 'Holder'
};

var data = [trace5, trace6];
var layout = {
    title: '',
    showlegend: false,
	autosize: false,
    width: 300,
    height: 200,
	margin: {
    l: 25,
    r: 15,
    b: 20,
    t: 20,
    pad: 4
    }};
Plotly.newPlot('graph3', data, layout, {displayModeBar: false});