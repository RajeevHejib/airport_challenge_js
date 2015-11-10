function Airport(){

var plane;
this.planes = [];
this.CAPACITY = 20;
weather = new Weather();
}

Airport.prototype.land = function(plane){
  if (weather.isStormy()) {
    throw "cannot land plane, weather is stormy";
  }
  if (this.planes.length < CAPACITY) {
    this.planes.push(plane);
  } else {
      throw "cannot land plane, airport is full";
    }
};

Airport.prototype.take_off = function(plane){
  if (weather.isStormy()) {
    throw "cannot take off plane, weather is stormy";
  }
  if (this.planes.indexOf(plane) === -1) {
    throw "plane is not at this airport";
  } else {
    this.planes.splice(planes.indexOf(plane),1);
    return plane;
  }
};
