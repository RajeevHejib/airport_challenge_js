describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should be called to land", function(){
    expect(plane.land()).toBe(true);
  });

  it("should be allowed to take off", function(){
    expect(plane.takeoff()).toBe(true);
  });


});
