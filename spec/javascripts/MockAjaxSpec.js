describe("When using the Jasmine Ajax Mock", function() {
  var onSuccess, onComplete, onFailure, request;

  beforeEach(function() {
    onSuccess = jasmine.createSpy('onSuccess');
    onComplete = jasmine.createSpy('onComplete');
    onFailure = jasmine.createSpy('onFailure');

    jasmine.Ajax.useMock();

    jQuery.ajax({
      method:   'GET',
      url:      'http://example.com/someApi',
      dataType: 'html'
    })
      .done(onSuccess)
      .error(onFailure)
      .always(onComplete);

    request = mostRecentAjaxRequest();
  });

  it("prevents the call from leaving your system", function() {
    expect(request.url).toEqual("http://example.com/someApi");
  });

  describe("with a successful response", function() {
    beforeEach(function() {
      var successResponse = {
        status:       200,
        responseText: "w00t!"
      };
      request.response(successResponse);
    });

    it("should call the success callback", function() {
      expect(onSuccess).toHaveBeenCalledWith("w00t!", "success", jasmine.any(Object));
    });

    it("should call the complete callback", function() {
      expect(onComplete).toHaveBeenCalled();
    });
  });

  describe("with a failure response", function() {
    beforeEach(function() {
      var failureResponse = {
        status:       500,
        responseText: "Doh!"
      };
      request.response(failureResponse);
    });

    it("should call the failure callback", function() {
      expect(onFailure).toHaveBeenCalledWith(jasmine.any(Object), 'error', undefined);
    });

    it("should call the complete callback", function() {
      expect(onComplete).toHaveBeenCalled();
    });
  })
});