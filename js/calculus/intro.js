(function () {
  var d3 = window.d3;
  var functionPlot = window.functionPlot;

  // formula as curve
  functionPlot({
    title: 'A formula represented as a curve',
    target: '#formula-as-a-curve',
    width: 740,
    height: 500,
    yDomain: [-1, 7],
    data: [{
      title: 'f(x) = x^2',
      fn: 'x^2'
    }]
  });

  // for other than 0
  functionPlot({
    title: 'A formula defined for any x != 0',
    target: '#for-other-than-0',
    width: 740,
    height: 500,
    xDomain: [-2, 2],
    data: [{
      title: 'f(x) = 1/x',
      fn: '1/x'
    }]
  });
})();
