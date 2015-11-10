describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    planes = [];
    CAPACITY = 20;
  });

  it("cannot land if airport full", function(){
    for (i = 0; i < CAPACITY; i++) {
      airport.land(plane);
    }

    expect(function(){airport.land(plane); } ).toThrow("cannot land plane, airport is full");
  });

});
