// module Aliases
var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var rows = 10;
var cols = 10;
var chips = [];
var pegBoard = [];

function setup() {
  createCanvas(500, 900);
  engine = Engine.create();
  world = engine.world;

  // Add starting Chip
  newChip();

  // Create Grid
  var spacing = width / cols;
  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols -1; i++) {
      var x = (1+i) * spacing;
      var y = (3*spacing) + j * spacing;
      var peg = new Peg(x, y, 5, { isStatic: true});
      pegBoard.push(peg);
    }
  }
}

function newChip() {
  var chip = new Chip(250, 0, 10);
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
