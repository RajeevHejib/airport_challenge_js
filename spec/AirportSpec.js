describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
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

  it ("cannot let planes take off if weather is stormy", function(){
    spyOn(Weather.prototype, "isStormy").and.returnValue(true);
    expect(function(){ airport.take_off(plane); }).toThrow("cannot take off plane, weather is stormy");
  });

  it ("cannot let planes take off if plane is not at airport", function(){
    spyOn(Weather.prototype, "isStormy").and.returnValue(false);
    expect(function(){ airport.take_off(plane); }).toThrow("plane is not at this airport");
  });

  it ("lets planes take off when not stormy and plane is at airport", function(){
    spyOn(Weather.prototype, "isStormy").and.returnValue(false);
    // airport.land(plane);
    // a = planes.length;
    // airport.take_off(plane)
    // b = planes.length;
    // expect(b === a - 1).toBe(true);
    airport.land(plane);
    expect(airport.take_off(plane)).toBe(plane)
  });
});
