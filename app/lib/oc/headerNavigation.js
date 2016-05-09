angular.module('OrderCloud-HeaderNavigation', []);
angular.module('OrderCloud-HeaderNavigation')
    .directive('headernavigation', headernavigation)
;

function headernavigation() {
    return {
        restrict: 'E',
        template: template
    };

    function template() {
        return [
            '<style>',
            '</style>',
            '<section class="header-navigation">',
            '<div class="col-xs-3 logo">',
            '<img src="css/images/custom/main_logo.png" />',
            '</div>',
            '<ul class="pull-right">',
            '<li ng-class="{\'active\': isActive([\'admin\', \'addresses\', \'address\', \'messages\', \'message\', \'favoriteorders\'])}">',
            '<a href="admin" class="hidden-md hidden-lg">',
            '<i class="fa fa-cog"></i>',
            '<span class="hidden-xs">{{\'Account\' | r | xlat}}</span>',
            '</a>',
            '</li>',
            '<li class="dropdown visible-md visible-lg" ng-class="{\'active\': isActive([\'admin\', \'addresses\', \'address\', \'messages\', \'message\', \'favoriteorders\'])}">',
            '<a class="dropdown-toggle" data-toggle="dropdown">',
            '<i class="fa fa-cog"></i>',
            '<span class="hidden-xs">{{\'Account\' | r | xlat}}</span>',
            '<b class="caret"></b>',
            '</a>',
            '<ul class="dropdown-menu">',
            '<li ng-show="user.Permissions.contains(\'ViewSelfAdmin\')" class="admin">',
            '<a href="admin">',
            '{{\'User Information\' | r | xlat}}',
            '</a>',
            '</li>',
            '<li ng-show="user.Type == \'Customer\' && (user.Permissions.contains(\'CreateShipToAddress\') || user.Permissions.contains(\'CreateBillToAddress\'))" class="addresses">',
            '<a href="addresses">',
            '{{\'Addresses\' | r | xlat}}',
            '</a>',
            '</li>',
            '<li ng-show="user.Type == \'Customer\' && user.Permissions.contains(\'ViewMessaging\')" class="messages">',
            '<a href="message">',
            '{{\'Messages\' | r | xlat}}',
            '</a>',
            '</li>',
            /*'<li class="favorites" ng-show="user.Type == \'Customer\'">',
            '<a href="favoriteorders">',
            '{{\'Favorites\' | r | xlat}}',
            '</a>',
            '</li>',*/
            '<li ng-show="user.Permissions.contains(\'ViewContactUs\')" class="contactus">',
            '<a href="contactus">',
            '{{\'Contact Us\' | r | xlat}}',
            '</a>',
            '</li>',
            '<li>',
            '<a href="#" neworder ng-if="user.Permissions.contains(\'MultipleShoppingCart\') && currentOrder" class="neworder" ng-click="newOrderLoadingIndicator = true;startNewOrder()">',
            '{{"Start" | r | xlat}} {{"New" | r | xlat}} {{"Order" | r | xlat}}',
            '</a>',
            '</li>',
            '<li class="divider" ng-show="user.Type!=\'TempCustomer\' || AppConst.debug"></li>',
            '<li ng-show="user.Type!=\'TempCustomer\'" class="logout">',
            '<a href="#" ng-click="Logout()">',
            '<i class="fa fa-power-off text-danger"></i>',
            '<span>{{\'Log Out\' | r | xlat}}</span>',
            '</a>',
            '</li>',
            '<li ng-if="AppConst.debug">',
            '<a href="#" ng-click="Clear()">',
            '<i class="fa fa-archive"></i>',
            '<span class="text-nav">Clear Cache</span>',
            '</a>',
            '</li>',
            '</ul>',
            '</li>',
            '</ul>',
            '</section>'
        ].join('');
    }
}