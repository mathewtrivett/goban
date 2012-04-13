// Generated by CoffeeScript 1.3.1
(function() {
  var Circ, GoBoard, Line;

  Circ = function(x, y, radius, line, fill, width) {
    var circ;
    circ = new paper.Path.Circle(new paper.Point(x, y), radius);
    circ.radius = radius;
    circ.x = x;
    circ.y = y;
    if (line != null) {
      circ.strokeColor = line;
    }
    if (width != null) {
      circ.strokeWidth = width;
    }
    if (fill != null) {
      circ.fillColor = fill;
    }
    return circ;
  };

  Line = function(start, end) {
    var line;
    line = new paper.Path();
    line.strokeColor = 'black';
    line.add(new paper.Point(start));
    line.add(new paper.Point(end));
    return line;
  };

  GoBoard = function(canvas) {
    var bGrad, gb, x, xint, y, yGrad, yint, _i, _j, _k, _l, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
    xint = canvas.width / 19;
    yint = canvas.height / 19;
    for (x = _i = _ref = xint / 2, _ref1 = canvas.width; _ref <= _ref1 ? _i <= _ref1 : _i >= _ref1; x = _i += xint) {
      Line([x, yint / 2], [x, canvas.height - yint / 2]);
    }
    for (y = _j = _ref2 = yint / 2, _ref3 = canvas.width; _ref2 <= _ref3 ? _j <= _ref3 : _j >= _ref3; y = _j += yint) {
      Line([xint / 2, y], [canvas.height - xint / 2, y]);
    }
    for (x = _k = _ref4 = xint / 2 + xint * 3, _ref5 = canvas.width, _ref6 = xint * 6; _ref4 <= _ref5 ? _k <= _ref5 : _k >= _ref5; x = _k += _ref6) {
      for (y = _l = _ref7 = yint / 2 + yint * 3, _ref8 = canvas.height, _ref9 = yint * 6; _ref7 <= _ref8 ? _l <= _ref8 : _l >= _ref8; y = _l += _ref9) {
        Circ(x, y, 3, 'black', 'black');
      }
    }
    bGrad = new paper.Gradient([['gray', 0.0], ['black', 1]], 'radial');
    yGrad = new paper.Gradient([['gray', 0.0], ['white', 1]], 'radial');
    return gb = {
      whiteStone: function(x, y) {
        var gradCol, xPos, yPos;
        xPos = x * xint - xint / 2;
        yPos = y * yint - yint / 2;
        gradCol = new paper.GradientColor(yGrad, [xPos - xint * 0.5, yPos + yint * 0.5], [xPos, yPos]);
        return Circ(xPos, yPos, xint / 2.4, null, gradCol);
      },
      blackStone: function(x, y) {
        var gradCol, xPos, yPos;
        xPos = x * xint - xint / 2;
        yPos = y * yint - yint / 2;
        gradCol = new paper.GradientColor(bGrad, [xPos + xint * 0.5, yPos - yint * 0.5], [xPos, yPos]);
        return Circ(xPos, yPos, xint / 2.4, null, gradCol);
      }
    };
  };

  window.onload = function() {
    var canvas, gb;
    canvas = document.getElementById("goban");
    paper.setup(canvas);
    gb = GoBoard(canvas);
    gb.blackStone(4, 4);
    gb.whiteStone(16, 16);
    gb.blackStone(3, 16);
    gb.whiteStone(16, 3);
    return paper.view.draw();
  };

}).call(this);