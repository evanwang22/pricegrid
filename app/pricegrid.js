var API_BASE_URL = 'http://localhost:3000'

var getCurrentTabURL = function getCurrentTabURL(){
  return chrome.tabs.getCurrent(function(tab){
    return tab.url;
  });
};

var checkIfAmazonProductURL = function checkIfAmazonProductURL(url){
  var amazonRegExp = /.*amazon.com\/[a-z]{2}\/product\//;
  return amazonRegExp.test(url);
};

var findProductID = function findProductID(url){
  var urlAfterProduct = url.split('/product/')[1];
  return urlAfterProduct.split('/')[0];
};

var getProductDetails = function getProductDetails(productID){
  var detailsPromise = $.ajax({
    url: API_BASE_URL + '/search',
    data: { product_id: productID }
  });
};
