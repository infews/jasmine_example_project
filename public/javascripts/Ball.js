function Ball() {
  var self = this;

  var full = false;

  self.inflate = function() {
    full = true;
  };

  self.isFull = function() {
    return full;
  };

  return self;
}