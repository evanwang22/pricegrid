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
});