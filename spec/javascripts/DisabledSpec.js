describe("A suite", function() {
  it("should have enabled specs", function() {
    expect(true).toEqual(true);
  });

  xit("should have disabled specs", function() {
    expect(true).toEqual(true);
  });

  xdescribe("can have disabled suites", function() {
    it("should have enabled specs that don't run", function() {
      expect(true).toEqual(true);
    });
  });
});