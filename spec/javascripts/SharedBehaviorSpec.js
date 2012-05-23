function sharedBehaviorForGame(context) {
  describe("(shared)", function() {
    var ball, game;
    beforeEach(function() {
      ball = context.ball;
      game = context.game;

      spyOn(ball, 'inflate').andCallThrough();
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
}

describe("Football Game", function() {
  var football = {};

  beforeEach(function() {
    football.ball = new Football();
    football.game = new FootballGame();
  });

  it("should score a field goal properly", function() {
    expect(football.game.fieldGoal.points).toEqual(3);
  });

  sharedBehaviorForGame(football);
});

describe("Basketball Game", function() {
  var basketball = {};

  beforeEach(function() {
    basketball.ball = new Basketball();
    basketball.game = new BasketballGame();
  });

  it("should score a field goal properly", function() {
    expect(basketball.game.fieldGoal.points).toEqual(2);
  });

  sharedBehaviorForGame(basketball);
});
