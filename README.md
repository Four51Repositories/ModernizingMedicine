##### Modernizing Medicine - Thumbprint219  / 18.15.0 CT / 1.5.0 SPA Release (0316)
##### Created: 4/18/16
##### Last Updated: 5/24/16
========

##### Developers
Four51: Jen R

### Github URL
* github.com/Four51Repositories/ModernizingMedicine

========

### Resources
* http://www.four51.com/public/ApplicationCodeFolderStructure.html
* http://getbootstrap.com/ 
* https://angular-ui.github.io/bootstrap/
* https://fortawesome.github.io/Font-Awesome/
* https://docs.angularjs.org
* http://www.responsinator.com/

========

### Best Practices
* avoid styling against the bootstrap columns [ for responsive ] 
* instead of removing permissions for reports in nav, add Advanced Reporting permission to groups/users
* no need to add meta descriptions to images. Because the app is behind a login, these won't get indexed by search engines
* overwrite existing CSS whenever possible ( will eliminate the need to use !important ) 
* avoiding mixed content errors / implications [ https://didyouknow.four51ordercloud.com/SecurityStandards/#/ ] 

========

### Product Configuration 
* for buttons in product descriptions, use class 'btn btn-primary' in a tag

======== 

### Images
`css/images/custom/` 
* main_logo.png
* mme_new_webstore_help_pg.png
* modmedSalesBanner1.png
* thumbicon.png

========

### CSS
`css/custom.css` 
* Custom style

`css/editor.css` 
* Color theme

======== 

### OrderCloud Custom Solutions
**_IMPORTANT_**
* You must be logged in to your GitHub account to access the following URLs.

###### Back To Top
`lib/oc/backToTop.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Back To Top
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Back%20To%20Top`

========

###### Breadcrumbs
`lib/oc/breadcrumbs.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Breadcrumbs
`https://github.com/Four51Repositories/CustomSolutions/tree/dev/Breadcrumbs`

========

###### Hamburger Navigation 
`lib/oc/hamburgerNavigation.js`

**Instructions**
* Follow instructions under Custom Solutions Library -  Hamburger Navigation Subcategories
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Hamburger%20Navigation%20Subcategories`

========

###### HeaderNavigation ( custom )
`lib/oc/headerNavigation.js`

**Instructions**
* Logo / lines 18-22
* Previous Account Nav (hidden) / lines 23-79
* Search / lines 80-82
* Minicart (hidden) / lines 83-85

========

###### MiniCart ( optional )
`lib/oc/miniCart.js` [ not currently in use ]

**Instructions**
* Follow instructions under Custom Solutions Library - Mini Cart
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Mini%20Cart`

========

###### Product List Add All To Cart ( custom )
`lib/oc/productLisAddAllToCart.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Product List Add To Cart
*https://github.com/Four51Repositories/CustomSolutions/tree/master/Product%20List%20Add%20to%20Cart 

####### Additional files (for add ALL to cart)
`js/controllers/shortProductViewCtrl.js`
* set `allowAddToOrderInProductList` for quantity button to show/ line 9
* set a watch on the quantity to set the list scope / lines 11-29
* setting a security auth token ?? / line 31

`js/controllers/productListCtrl.js`
* `addListToOrder` functionality / lines 18-64

`js/directives/product.js`
* add a controller to the product list view/ line 5  
* add list scope to `shortproductviewminimal` / line 52

`partials/productListView.html`
* add the add all to order button/ lines 8-19, 49-60
* pass list to `shortproductviewminimal` / line 42

`partials/controls/shortProductViewMinimal.html`
*hide the view product button / lines 29-30

========

###### Product Matrix [ not currently in use ]
`lib/oc/productMatrix.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Product Matrix 
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Product%20Matrix`

========

###### Product Search Input
`lib/oc/productSearchInput.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Product Search Input
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Product%20Search%20Input`

========

###### Same As Shipping Checkbox [ not currently in use ]
`lib/oc/sameAsShippingCheckbox.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Same As Shipping Checkboxt
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Same%20As%20Shipping%20Checkbox`

========

###### Security Modal
`lib/oc/securityModal.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Security Modal
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Security%20Modal`

========

###### Terms Modal
`lib/oc/termsModal.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Terms Modal
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Terms%20Modal`

========

### Modified Files

###### JS
`js/app.js` 
* injecting the custom solutions modules / lines 5-7

`js/controllers/categoryCtrl.js` 
* Product List Add All To Cart - show/hide the `Add All to Order` button / lines 18-25

`js/controllers/checkOutViewCtrl.js` 
* set a custom variable `currentOrder.DeliveryDate` for `ModMed_Delivery Date` and transform it / lines 19-39

`js/controllers/lineItemEditCtrl.js` 
* Custom shippers / lines 38-51 [ not currently in use ] 

`js/controllers/productCtrl.js` 
* Product List Add All To Cart with apparel logic / lines 113-178

`js/controllers/productListCtrl.js` 
* Product List Add All To Cart `addListToOrder` with apparel logic / lines 18-125

`js/controllers/shortProductViewCtrl.js` 
* Product List Add All To Cart (quantity) / lines 8-32

`js/controllers/specFormCtrl.js` 
* SPA-15424 - Check for the presence of the null value when there is a custom user field default value and replace it with a blank value / lines 94-102

`js/directives/ordershipping.js`
* checkout edit ship address inline / lines 26-31

`js/directives/paymentselection.js`
* hide spending account for apparel logic / lines 15-29

`js/directives/product.js`
* add a controller to the product list view/ line 5  
* add list scope to `shortproductviewminimal` / line 52
* comment out the productnav for the breadcrumbs module / lines 126-138

`js/services/navService.js` 
* default category side nav to visible false / line 3

###### HTML
`index.html` 
* header nav / lines 43-45
* hamburger nav / lines 51-53
* back to top / line 67
* custom solution modules / lines 95-105
* comment out the tree for hamburger nav / line 197

`partials/branding.html` 
* hide the logo / lines 2-9
* show conditional banner for Sales Portal group / lines 2,10

`partials/categoryList.html` 
* hide the panel heading / lines 2-6

`partials/categoryView.html` 
* hide category header and search / lines 2-16
* hide category side nav / lines 18-31
* add breadcrumbs / line 34

`partials/controls/addressInput.html` 
* change Address Name to Address Nickname / lines 13-14

`partials/controls/cartButtons.html` 
* add shorter text for responsive / lines 19, 26, 33

`partials/controls/checkoutButtons.html` 
* add shorter text for responsive / lines 19, 26, 33

`partials/controls/customSelectionField.html` 
* hide icons / lines 11-12

`partials/controls/login.html` 
* comment out OrderCloud h2 / line 7
* add logo / line 8

`partials/controls/nav.html` 
* add favorites as main nav item / lines 29-34
* comment out account dropdown / lines 35-92
* comment out favorites from account dropdown / lines 123-127
* change when & how cart shows / line 155

`partials/controls/orderBilling.html` 
* same as shipping checkbox [ hidden ] / lines 14-16

`partials/controls/orderDetails.html` 
* filter out the `ModMed_Delivery Date` order field from the custom order fields loop / line 45
* date input for `ModMed_Delivery Date` / lines 50-73

`partials/controls/orderShipping.html` 
* hide the live shipping rates / lines 51-74

`partials/controls/orderSummary.html` 
* security modal / lines 66-69

`partials/controls/paymentSelection.html` 
* remove `btn-group` class / lines 2, 39
* add to ng-if `!hideSpendingAccount` / lines 17, 23, 29
* remove `isSplitBilling` from `Approval Order` button (may no longer be applicable / lines 9-21

`partials/controls/shortProductViewMinimal.html` 
* hide the View Product button / lines 29-30
* add `productlistaddalltocart` / line 34

`partials/copyrightView.html` 
* custom copyright details / lines 4-10
* comment out powered by Four51 / lines 11-16
* comment out default copyright / lines 17-24
* terms modal / line 25

`partials/orderSearchView.html` 
* change the order status links to buttons / lines 21, 33, 45

`partials/productListView.html` 
* hide the panel heading / lines 2-6
* add the add all to order button/ lines 8-19, 50-61
* pass list to `shortproductviewminimal` / lines 42-43