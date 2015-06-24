describe('pricegrid', function() {
  describe('#getCurrentTabURL', function() {
    beforeEach(function() {
      var fakeTab = {'url':"www.test.com"};

      var chromeSpy = spyOn(window, 'chrome');
      var tabsSpy = jasmine.createSpyObj('tabs',['getCurrent']);

      tabsSpy.getCurrent.and.callFake(function(callback){
        return callback(fakeTab)
      });
      chromeSpy.tabs = tabsSpy;
    });

    it('gets the URL of the current tab', function() {
      expect(getCurrentTabURL()).toEqual('www.test.com');
    });
  });

  describe('#checkIfAmazonProductURL', function(){
    it('returns true if the URL is for an amazon product', function() {
      var amazonProductURL = "http://www.amazon.com/gp/product/7382HA";
      expect(checkIfAmazonProductURL(amazonProductURL)).toBe(true);
    });

    it('returns false if the URL is not for an amazon product', function(){
      var someOtherURL = "http://google.com";
      var amazonHomepageURL = "http://amazon.com";
      expect(checkIfAmazonProductURL(someOtherURL)).toBe(false);
      expect(checkIfAmazonProductURL(amazonHomepageURL)).toBe(false);
    });
  });

  describe('#findProductID', function() {
    var amazonProductURL = 'http://www.amazon.com/gp/product/7382HA'
    it('returns the ID of the product based on the URL', function(){
      expect(findProductID(amazonProductURL)).toEqual('7382HA');
    });
  });

  describe('#getProductDetails', function() {

    beforeEach(function(){
      var fakeResponseData = {};
      this.jqueryAjaxSpy = spyOn($, 'ajax');

      this.jqueryAjaxSpy.and.returnValue(fakeResponseData);
    });

    it('it calls a backend service', function(){
      getProductDetails('123FUN456');
      expect(this.jqueryAjaxSpy).toHaveBeenCalledWith({
        url: API_BASE_URL + "/search",
        data: { product_id: '123FUN456' }
      })
    });

    it('returns details for the given product ID', function(){

    })
  });
});
