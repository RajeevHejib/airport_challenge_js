function Airport(){

var plane;
var planes = [];
var CAPACITY = 20;

}

Airport.prototype.land = function(plane){
  if (planes.length < CAPACITY) {
    planes.push(plane);
  } else {
      throw "cannot land plane, airport is full";
    }
};
