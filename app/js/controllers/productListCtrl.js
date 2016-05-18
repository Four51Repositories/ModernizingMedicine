four51.app.controller('ProductListCtrl', ['$routeParams', '$rootScope', '$scope', 'Product', 'User', 'Order', '$location',
    function ($routeParams,$rootScope, $scope, Product, User, Order, $location) {
        $scope.loadSearch = function(){

            if($scope.category && $scope.category.products){
                $scope.Products = $scope.category.products;
                return;
            }

            if($scope.category) {
                Product.search($scope.categoryInteropID, null, null, function(data) {
                    $scope.category.products = $scope.Products = data;
                    $scope.productCount = data.Count;
                });
            }
        };

        /*product list add to cart - adding to the order*/
        $scope.list = [];

        //prevent mixed cart if apparel item for print and promo
        /*product list add to cart - adding to the order*/

        $scope.addListToOrder = function() {
            //$scope.displayLoadingIndicator = true;
            angular.forEach($scope.list, function(item){
                addToOrder(item);
            });
            $scope.list = [];
            Order.clearshipping($scope.currentOrder).
                save($scope.currentOrder,
                function(o){
                    $scope.user.CurrentOrderID = o.ID;
                    User.save($scope.user, function(){
                        $scope.addToOrderIndicator = true;
                        $location.path('/cart');
                    });
                },
                function(ex) {
                    $scope.addToOrderIndicator = false;
                    $scope.lineItemErrors.push(ex.Detail);
                    $scope.showAddToCartErrors = true;
                    //$route.reload();
                }
            );
        };

        function addToOrder(item) {
            if($scope.lineItemErrors && $scope.lineItemErrors.length) {
                $scope.showAddToCartErrors = true;
                return;
            }

            if(!$scope.currentOrder) {
                $scope.currentOrder = { };
                $scope.currentOrder.LineItems = [];
            }

            if (!$scope.currentOrder.LineItems) {
                $scope.currentOrder.LineItems = [];
            }

            $scope.currentOrder.LineItems.push(item);
            $scope.currentOrder.Type = item.PriceSchedule.OrderType;
            $scope.addToOrderIndicator = true;
        }
        /*product list add to cart - adding to the order*/


        //prevent mixed cart if apparel item for print and promo
        $scope.addListToOrderCheck = function(){
            $scope.displayLoadingIndicator = true;

            //are there already items in the cart
            if ($scope.currentOrder && $scope.currentOrder != null && $scope.currentOrder.LineItems.length) {

                var itemFound = false;

                //make sure we ARE NOT in an apparel category
                if ($scope.currentCategory.Name !== 'Ladies Apparel' || $scope.currentCategory.Name !== 'Mens Apparel') {

                    //check for apparel item(s) in the cart
                    angular.forEach($scope.currentOrder.LineItems, function (cartItem) {
                        if (cartItem.Product.StaticSpecGroups && (cartItem.Product.StaticSpecGroups.isapparel.Specs.Item.Value == 'true' || cartItem.Product.StaticSpecGroups.isapparel.Specs.Item.Value == 'True')) {
                            itemFound = true;
                            alert("Your cart contains apparel items which cannot be combined with print or promo items.");
                        }
                    });

                    if (itemFound === true) {
                        $scope.displayLoadingIndicator = false;
                    }
                    else {
                        $scope.addListToOrder();
                    }
                }

                //if we ARE in an apparel category check for apparel item(s) in the list
                if ($scope.currentCategory.Name == 'Ladies Apparel' || $scope.currentCategory.Name == 'Mens Apparel') {

                    var isApparel = false;

                    //check for apparel item(s) in the cart
                    angular.forEach($scope.currentOrder.LineItems, function (item) {
                        if (item.Product.StaticSpecGroups.isapparel.Specs.Item.Value == 'true' || item.Product.StaticSpecGroups.isapparel.Specs.Item.Value == 'True') {
                            isApparel = true;
                        }
                    });

                    if (isApparel = true) {
                        $scope.addListToOrder();
                    }
                    else {
                        alert("Your cart contains print or promo items which cannot be combined with apparel items.");
                        $scope.displayLoadingIndicator = false;
                    }
                }

            }

            //if no items in the cart
            else {
                $scope.addListToOrder();
            }
        };
    }]);