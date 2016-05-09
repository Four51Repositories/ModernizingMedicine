angular.module('OrderCloud-ProductListAddAllToCart', []);

angular.module('OrderCloud-ProductListAddAllToCart')
    .directive('productlistaddalltocart', productlistaddalltocart)
    .controller('ProductListAddAllToCartCtrl', ProductListAddAllToCartCtrl)
;

function productlistaddalltocart() {
    var directive = {
        restrict: 'E',
        template: template,
        controller: 'ProductListAddAllToCartCtrl'
    };
    return directive;

    function template() {
        return [
            '<style>',
            '.add-to-cart .btn { min-height:52px; }',
            '.add-to-cart .view-form-icon .col-md-4 i, .add-to-cart .view-form-icon .col-xs-6 i, .add-to-cart .view-form-icon .col-xs-9 i, .add-to-cart .view-form-icon .col-sm-4 i {left: 0;}',
            '</style>',
            '<div class="add-to-cart">',
            '<form name="addToOrderForm" ng-submit="addToOrder()">',
            '<div class="view-form-icon" ng-show="allowAddToOrderInProductList">',
            '<div class="row">',
            '<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">',
            '<quantityfield required="true" calculated="calcVariantLineItems" lineitem="LineItem" class="quantity"/>',
            '</div>',
            '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">',
            '<button class="btn btn-default btn-block btn-md" id="addToCart" type="submit" ng-disabled="addToOrderForm.$invalid || displayLoadingIndicator">',
            '<loadingindicator  ng-show="displayLoadingIndicator" />',
            '<i  class="fa fa-shopping-cart fa-2x" ng-class="{\'disabled\': lineItemErrors.length > 0, \'enabled\': lineItemErrors.length == 0}"></i>',
            '</button>',
            '</div>',
            '</div>',
            '</div>',
            '</form>'
        ].join('');
    }
}

ProductListAddAllToCartCtrl.$inject = ['$scope', 'Order', 'User', '$timeout'];
function ProductListAddAllToCartCtrl($scope, Order, User, $timeout) {

    $scope.allowAddToOrderInProductList = $scope.allowAddToOrder && $scope.LineItem.Product.Type != 'VariableText' && $scope.LineItem.Product.SpecCount == 0;
    $scope.addToOrder = function(){
        $scope.displayLoadingIndicator = true;
        $scope.actionMessage = null;
        $scope.errorMessage = null;
        $scope.user.CurrentOrderID ? addLineItemToCurrentOrder() : addLineItemToNewOrder();
    };
    var addLineItemToCurrentOrder = function(){
        Order.get($scope.user.CurrentOrderID, function(order){
            addToOrderSave(order);
        });
    };
    var addLineItemToNewOrder = function(){
        var currentOrder = {};
        currentOrder.LineItems = [];
        addToOrderSave(currentOrder);
    };
    var addToOrderSave = function(currentOrder){
        currentOrder.LineItems.push($scope.LineItem);
        Order.save(currentOrder,
            function(order, callback){
                $scope.user.CurrentOrderID = order.ID;
                $scope.LineItem.Product.QuantityAvailable = $scope.LineItem.Product.QuantityAvailable - $scope.LineItem.Quantity;
                User.save($scope.user, function(){
                    $scope.LineItem.Quantity = null;
                });
                $scope.actionMessage = 'Item has been added to your cart!';
                $timeout(function () {
                    $scope.actionMessage = null;
                    $scope.displayLoadingIndicator = false;
                }, 5000);
                if (callback) callback();

            },
            function (ex) {
                $scope.displayLoadingIndicator = false;
                $scope.errorMessage = ex.Message;
            }
        );
    };

}