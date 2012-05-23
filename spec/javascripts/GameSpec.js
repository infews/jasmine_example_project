describe("Game", function () {
  var game, ball;

  beforeEach(function() {
    ball = new Ball();
    spyOn(ball, 'inflate').andCallThrough();
    game = new Game();
  });

  describe("with a full ball", function() {
    beforeEach(function() {
      ball.inflate();
      ball.inflate.reset();
      game.prepare(ball);
    });

    it("should not inflate before play", function() {
      expect(ball.inflate).not.toHaveBeenCalled();
    });
  });

  describe("with a not-full ball", function() {
    beforeEach(function() {
      game.prepare(ball);
    });

    it("should inflate before play", function() {
      expect(ball.inflate).toHaveBeenCalled();
    });
  });
});
