function Peg(x, y, r, options) {
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);
}

Peg.prototype.show = function() {
  fill(255, 0, 0);
  stroke(0, 0, 0);
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y)
  ellipse(0, 0, this.r*2)
  pop();
};
