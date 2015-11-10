describe("Weather", function() {
  var weather;
  var math
  var random;
  var fetchedRandom;

  beforeEach(function() {
    weather = new Weather();
    // Math = {
    //   setRandom: function(value) {
    //     random = value;
    //   },
    //   getRandom: function() {
    //     return random;
    //   }
    // };

  // spyOn(Math, "random").and.returnValue(0.9);

  // math.setRandom(0.9);
  // fetchedRandom = math.getRandom();
});
//
//   it("sets Math.random() to 0.9", function() {
//       expect(fetchedRandom).toEqual(0.9);
// });

  it("weather can be stormy", function() {
      spyOn(Math, "random").and.returnValue(0.9);
      expect(weather.isStormy).toBe(true);

  });
});
