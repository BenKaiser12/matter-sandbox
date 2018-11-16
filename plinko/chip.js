function Chip(x, y, r) {
  var options = {
    friction: 0.0165,
    restitution: 0.700
  };
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);
}

Chip.prototype.show = function () {
  fill('blue');
  stroke('white');
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  ellipse(0, 0, this.r * 2);
  stroke(0, 255, 255);
  pop();
};
