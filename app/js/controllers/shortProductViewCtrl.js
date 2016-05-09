four51.app.controller('shortProductViewCtrl', ['$routeParams', '$scope', 'ProductDisplayService', 'Order', 'User', '$location',
	function ($routeParams, $scope, ProductDisplayService, Order, User, $location) {
	$scope.LineItem = {};
	$scope.LineItem.Product = $scope.p;
	ProductDisplayService.setNewLineItemScope($scope);
	ProductDisplayService.setProductViewScope($scope);

	/*product list add all to cart*/
	$scope.currentPath = $location.path();
	console.log($scope.currentPath);
	$scope.allowAddToOrderInProductList = $scope.allowAddToOrder && $scope.LineItem.Product.Type != 'VariableText' && $scope.LineItem.Product.SpecCount == 0;
	/*product list add all to cart*/
}]);