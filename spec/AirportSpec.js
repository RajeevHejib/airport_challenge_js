describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    // weather = new Weather();
    planes = [];
    CAPACITY = airport.CAPACITY;

  });

  it("cannot land if airport full", function(){
    spyOn(Weather.prototype, "isStormy").and.returnValue(false);
    for (i = 0; i < CAPACITY; i++) {
      airport.land(plane);
    }
    expect(function(){airport.land(plane); } ).toThrow("cannot land plane, airport is full");
  });

  it("cannot land planes if weather is stormy", function(){
    spyOn(Weather.prototype, "isStormy").and.returnValue(true);
    expect(function(){airport.land(plane); }).toThrow("cannot land plane, weather is stormy");
  });

});
