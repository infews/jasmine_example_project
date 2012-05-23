describe("Ball", function () {
  var ball;

  beforeEach(function() {
    ball = new Ball();
  });

  it("should start deflated", function() {
    expect(ball.isFull()).toEqual(false);
  });

  describe("#inflate", function () {
    beforeEach(function() {
      ball.inflate();
    });

    it("should fill a ball", function() {
      expect(ball.isFull()).toEqual(true);
    });

    it("should not affect an already inflated ball", function() {
      ball.inflate();
      expect(ball.isFull()).toEqual(true);
    });
  });
});