// module Aliases
var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var rows = 13;
var cols = 10;
var chips = [];
var pegBoard = [];

function setup() {
  createCanvas(500, 750);
  engine = Engine.create();
  world = engine.world;
  // world.gravity.y = 1.25;

  // Create Grid
  var spacingx = (width / cols) * 0.825;
  var spacingy = 0.93 * spacingx;
  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols + 1; i++) {
      if (j % 2 === 0) {
        var x = (1 + i) * spacingx;
        var y = 3 * spacingx + j * spacingy;
        var peg = new Peg(x, y, 5, { isStatic: true });
        pegBoard.push(peg);
      } else {
        var x = (1.5 + i) * spacingx;
        var y = 3 * spacingx + j * (1 * spacingy);
        var peg = new Peg(x, y, 5, { isStatic: true });
        pegBoard.push(peg);
      }
    }
  }

  var bndy = new Boundary(width / 2, height + 50, width, 100);
}

function mouseClicked() {
  if (mouseY < 150) {
    var chip = new Chip(mouseX, 75, 12.25);
    chips.push(chip);
  }
}

function newChip() {
  var chip = new Chip(250, 0, 23);
  chips.push(chip);
}

function draw() {
  background(51);
  Engine.update(engine);

  // Show chips
  for (var i = 0; i < chips.length; i++) {
    chips[i].show();
  }

  // show pegs
  for (var i = 0; i < pegBoard.length; i++) {
    pegBoard[i].show();
  }
}
