var getCurrentTabURL = function getCurrentTabURL(){
	return chrome.tabs.getCurrent(function(tab){
		return tab.url;
	})
};

var checkIfAmazonProductURL = function checkIfAmazonProductURL(url){
	var amazonRegExp = /.*amazon.com\/[a-z]{2}\/product\//;
	return amazonRegExp.test(url)
}

