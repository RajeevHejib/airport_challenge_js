function Airport(){

var plane;
var planes = [];
this.CAPACITY = 20;
weather = new Weather();

}

Airport.prototype.land = function(plane){

  if (weather.isStormy()) {
    throw "cannot land plane, weather is stormy";
  }
  if (planes.length < CAPACITY) {
    planes.push(plane);
  } else {
      throw "cannot land plane, airport is full";
    }
};
