function Game() {
  var self = this;

  self.prepare = function(ball) {
    if (ball.isFull()) {
      return;
    }

    ball.inflate();
  };

  return self;
}