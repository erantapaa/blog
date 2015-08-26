(function () {
  var d3 = window.d3;
  var functionPlot = window.functionPlot;
  var chart;

  functionPlot.constants.DEFAULT_WIDTH = 600;
  functionPlot.constants.DEFAULT_HEIGHT = 350;

  functionPlot({
    target: '#geometric-representation',
    yDomain: [-1, 9],
    data: [{
      fn: 'x * x'
    }]
  });

  (function () {
    instance = functionPlot({
      target: '#geometric-representation-two-points',
      yDomain: [-1, 9],
      data: [{
        fn: 'x * x'
      }, {
        fn: 'x * x',
        range: [1, 1],
        samples: 2,
        graphOptions: {
          type: 'scatter'
        }
      }, {
        fn: 'x * x',
        samples: 2,
        range: [2, 2],
        graphOptions: {
          type: 'scatter'
        }
      }]
    });
    instance.root.selectAll('circle')
      .attr('r', 3);
  })();


  functionPlot({
    target: '#geometric-representation-secant',
    tip: {
      xLine: true
    },
    yDomain: [-1, 9],
    data: [{
      fn: 'x * x',
      secants: [{
        x0: 1,
        x1: 2,
        updateOnMouseMove: true
      }]
    }]
  });

  functionPlot({
    target: '#slope-static-x-1',
    yDomain: [-1, 9],
    data: [{
      fn: 'x * x'
    }, {
      title: 'y = 2x - 1; ',
      fn: '2 * x - 1',
      samples: 2,
      skipTip: true,
      graphOptions: {
        type: 'line'
      }
    }]
  });

  functionPlot({
    target: '#slope-graph',
    data: [{
      fn: '2 * x'
    }]
  });

  // slope example + dynamic line
  functionPlot({
    target: '#slope-dynamic',
    yDomain: [-1, 9],
    tip: {
      xLine: true,
      yLine: true
    },
    data: [{
      fn: 'x * x',
      derivative: {
        fn: '2 * x',
        updateOnMouseMove: true
      }
    }]
  });

  // ## Applications of the derivative
  (function () {
    var a = functionPlot({
      target: '#maxima-minima-f',
      xDomain: [-4, 8],
      yDomain: [-4, 8],
      annotations: [{
        y: 3.333333333,
        text: 'max'
      }, {
        y: 2,
        text: 'min'
      }],
      data: [{
        fn: '(x^3) / 3 - 2 * x * x + 3 * x + 2',
        graphOptions: {
          type: 'line'
        },
        derivative: {
          fn: 'x * x - 4 * x + 3',
          updateOnMouseMove: true
        }
      }]
    });
    var b = functionPlot({
      target: '#maxima-minima-f-derivative',
      xDomain: [-4, 8],
      yDomain: [-4, 8],
      annotations: [{
        x: 1,
        text: 'intercept'
      }, {
        x: 3,
        text: 'intercept'
      }],
      data: [{
        fn: 'x * x - 4 * x + 3',
        graphOptions: {
          type: 'line'
        }
      }]
    });
    a.addLink(b);
    b.addLink(a);
  })();

  (function () {
    var options = {
      target: '#newton-raphson',
      yDomain: [-3, 7],
      annotations: [],
      data: [{
        fn: 'x * x - 2',
        graphOptions: {
          type: 'line'
        },
        derivative: {
          fn: '2 * x'
        }
      }]
    };
    functionPlot(options);

    var newtonRaphson = function () {
      function f(x) {
        return x * x - 2;
      }

      function f1(x) {
        return 2 * x;
      }

      function iteration(x) {
        return x - f(x) / f1(x);
      }

      var x0 = 0.5;
      var n = 0;
      var limit = 5;

      function run() {
        options.annotations.push({
          x: x0,
          text: (n !== limit)
           ? ''
           : 'x = ' + x0.toFixed(3)
        });
        options.data[0].derivative.x0 = x0;
        functionPlot(options);

        x0 = iteration(x0);

        if (n < limit) {
          n += 1;
          setTimeout(run, 1000);
        }
      }

      run();
    };

    document.querySelector('#run-newton-raphson')
      .addEventListener('click', newtonRaphson);
  })();
})();
