##### Modernizing Medicine - Thumbprint219  / 18.15.0 CT / 1.5.0 SPA Release (0316)
##### Created: 4/18/16
##### Last Updated: 5/17/16
========

##### Developers
Four51: Jen R

### Github URL
* github.com/Four51Repositories/ModernizingMedicine

========

### Resources [ working ] 
* http://getbootstrap.com/ 
* https://fortawesome.github.io/Font-Awesome/

========

### Best Practices [ working ] 
* instead of removing permissions for reports in nav, add Advanced Reporting permission to groups/users
* no need to add meta descriptions to images. Because the app is behind a login, these won't get indexed by search engines
* overwrite existing CSS whenever possible ( will eliminate the need to use !important ) 
* avoiding mixed content errors / implications

========

### Product Configuration [ working ]

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

###### Product Search Input
`lib/oc/productSearchInput.js`

**Instructions**
* Follow instructions under Custom Solutions Library - Product Search Input
`https://github.com/Four51Repositories/CustomSolutions/tree/master/Product%20Search%20Input`

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

### Modified Files [ working ] 

###### JS
`js/app.js` 
* 

`js/directives/product.js`
* add a controller to the product list view/ line 5  
* add list scope to `shortproductviewminimal` / line 52
* comment out the productnav for the breadcrumbs module / lines 126-138

###### HTML
`index.html` 
* 

`partials/controls/shortProductViewMinimal.html` 
* hide the View Product button / lines 29-30
* add `productlistaddalltocart` / line 34