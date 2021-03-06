function Boundary(x, y, w, h) {
  var options = {
    isStatic: true
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  World.add(world, this.body);
}

Boundary.prototype.show = function() {
  fill(255);
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  rect(0, 0, this.w, this.h);
};
