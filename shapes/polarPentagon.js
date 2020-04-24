const polar = {
  center: { 
    x: 0, 
    y: 0 
  },
  setCenter(x, y) {
    this.center.x = x;
    this.center.y = y;
  }
};

p5.prototype.polarPentagon = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(polar.center.x, polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*-_distance);
  rotate(radians(_angle)+60);
  beginShape();
  for(let i=1; i<=5; i++) {
    vertex(cos(TWO_PI*i/5)*_radius, sin(TWO_PI*i/5)*_radius);
  }
  endShape(CLOSE);
}

p5.prototype.polarPentagons = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      polarPentagon(_result[0]*_result[1], _result[2], _result[3]);
    }
    else polarPentagon(i*_angle, _radius, _distance);
  }
}