# FAQs

## Fix social icons messy on product page

![Fix product page social icons](img/fix-product-page-social-icons.png)

Add this custom CSS to **Storefront** > **Footer Script**:

```css
<style>
.google_plusone_iframe_widget {
    width: 38px !important;
    height: 24px !important;
    margin-top: -4px;
}

.fb_iframe_widget + .fb_iframe_widget {
    display: none;
}

.addthis_button_facebook_like.icon--facebook_like > svg {
    display: none;
}

.addthis_button_facebook_like.icon--facebook_like {
	width: 60px !important;
	overflow: hidden !important;
}
</style>
```


## Limit length of product name display on products grid

![Limit number of lines of product name on product grids](img/limit-product-name-lines.png)

Add this custom CSS to **Storefront** > **Footer Script**:

```css
<style>
.card-title {
    max-height: 3.75rem;
    overflow: hidden;
}
</style>
```

It will limit maximum 3 lines. Set `max-height: 2.5rem` to limit maximum 2 lines.


## Hide category name on category page

Add this custom CSS to **Storefront** > **Footer Script**:

```css
<style>
.papaSupermarket-page--pages-category .page-heading--desktopOnly {
    display: none;
}
</style>
```

## Change active tabs & remove other tabs in products by category block

![Change active tabs of products by category](img/change-active-tabs-of-products-by-category.png)

By default, the theme display Bestselling tab active by default, if you want to make other tab active by default and/or hide other tabs, follow instruction below to edit the theme source code.

Make a copy of your theme in order to edit the theme source code:

![Make a copy](img/make-a-copy.png)

Then click on **Edit Theme Files**. In the editor, edit file `templates\components\papa-supermarket\category\ajax-products-by-category-sorting-tabs.html`:

![edit file ajax products by cateegory sorting tabs](img/edit-file-ajax-products-by-cateegory-sorting-tabs.png)

Edit as screenshot:

![edit-file-to-change-active-tab-of-products-by-category-1](img/edit-file-to-change-active-tab-of-products-by-category-1.png)

![edit-file-to-change-active-tab-of-products-by-category-2](img/edit-file-to-change-active-tab-of-products-by-category-2.png)

In the next version, we will add new feature allow customize this in Theme Editor.



## My products by category with sorting tabs block is not rendering on homepage?

![products-by-category-is-not-rendering](img/products-by-category-is-not-rendering.png)

If you already configured **Number of Categories** in Theme Editor but it's still not appearing, it's probably your categories have no products. To bypass this case to display products in sub-categories, you will need to edit theme source code. Edit file `templates/components/emthemes-modez/section/section.html`

Delete 2 line as screenshot below:

![edit-file-to-show-products-by-category-in-empty-category](img/edit-file-to-show-products-by-category-in-empty-category.png)


## Make main image & thumbnails on product details page uniform

Add the code below to Footer Script:

```html
<style>
.productView-imageCarousel-nav-item.slick-slide {
    position: relative;
}

.productView-imageCarousel-nav-item.slick-slide:before {
    display: block;
    content: ' ';
    height: 0;
    padding-bottom: 113.8%; /* height/width */
}

.productView-imageCarousel-nav-item img {
    max-height: 100%;
    max-width: calc(100% - 10px);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.productView-imageCarousel-main {
    margin-left: auto;
    margin-right: auto;
}

@media (min-width: 550px) {
    .productView-imageCarousel-main {
        max-width: 500px;
    }
}

.productView-imageCarousel-main-item > a {
    position: relative;
    display: block;
    height: 0;
    padding-top: 113.8%; /* height/width */
}

.productView-imageCarousel-main-item > a img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-height: 100%;
}
</style>
```


## Display tooltip when hover Compare button on product items

Add custom code below into **Storefront** > **Footer Scripts**:

```html
<style>
.card-figcaption-button--compare:hover:after {
    content: 'Compare';
    position: absolute;
    padding: 4px 8px;
    background: #fff;
    display: inline-block;
    font-size: 12px;
    color: #666666;
    bottom: calc(100% + 4px);
    right: 0;
    text-indent: 0;
}
</style>
```


## How to change "Image Coming Soon" default product image?

Please upload your own "Coming Soon" image in **Marketing** > **Banner Manager**, then copy the image URL.

Edit **Storefront** > **Footer Scripts**, add the code below:

```html
<script>
    document.querySelectorAll("img[src*='ProductDefault.gif']").forEach(function(img) {
        img.src = 'https://placehold.it/500x500';
    });
</script>
```

Replace  `https://placehold.it/500x500` by your "Coming Soon" image URL.


## How to show "Coming Soon" default product image on product page?

Display: "Coming Soon" image on product page by adding the code in **Footer Scripts**:

```html
{{#unless product.main_image}}
<style>
.productView-images { background: url(https://placehold.it/500x500) no-repeat center center; background-size: auto; padding-top: 100%; height: 0; }
    
@media (min-width: 801px) {
.productView-images { padding-top: 50%; }
}
</style>
{{/unless}}​
```

Replace  `https://placehold.it/500x500` by your "Coming Soon" image URL.


## Move maintenance notice box to top of page

Add the code below into **Storefront** > **Footer Scripts**:

```html
<style>
body {
    padding-top: 10rem;
}

.maintenanceNotice {
    top: 55px;
    left: 0;
    right: 0;
    width: auto;
    display: flex;
    justify-content: space-between;
    height: 6rem;
    font-size: 11px;
    overflow: hidden;
}

@media (min-width: 550px) {
    body {
        padding-top: 8rem;
    }
    .maintenanceNotice {
        height: 4rem;
    }
}

@media (min-width: 800px) {
    body {
        padding-top: 4rem;
    }
    .maintenanceNotice {
        top: 0;
    }
}


@media (min-width: 1200px) {
    body {
        padding-top: 3rem;
    }
    .maintenanceNotice {
        height: 3rem;
    }
}

.maintenanceNotice > p {
    margin: 0;
    padding-right: 1.5rem;
}

.maintenanceNotice > br {
    display: none;
}

.maintenanceNotice > a {
    padding-left: 1.5rem;
}
</style>
```

**Note: Remove it when you launch your store.**


## Display sub-category name below sub-category image

By the default, the theme dipslays sub-category name over image. If you don't like this style, but want to display sub-category name under image, just add custom CSS code below into **Storefront** > **Footer Scripts**:

```css
<style>
.papaSupermarket-subcategories-image {
    height: 0;
    padding-top: 100%;
    text-align: center;
    display: block;
    position: relative;
}
.papaSupermarket-subcategories-image img {
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.papaSupermarket-subcategories-grid-item:hover img {
    transform: translate(-50%, -50%) scale(1.2);
}
.papaSupermarket-subcategories-image + .papaSupermarket-subcategories-name {
    position: static;
    transform: none;
}
</style>
```

## Display entire product description on mobile

To optimize for mobile view, product description are collapse by default. Tap on VIEW ALL link to expand all product description.

![product description on mobile](img/product-description-on-mobile.png)

If you want to display entire product description by default, add the custom code below into **Storefront** > **Footer Scripts**:

```html
<style>
@media (max-width: 800px) {
    .productView-description-tabContent.emthemesModez-mobile-collapse-content {
        max-height: none;
        overflow: auto;
    }

    .productView-description-tabContent .emthemesModez-mobile-collapse-handle {
        display: none;
    }
}
</style>
```

## Move reviews tab next to description tab on product page

Edit file `templates\components\products\product-view.html`, insert the code as showing below:

![edit product-view.html to move reviews tab](img/reviews-tab-edit-product-view-html.png)

```html
{{#if settings.show_product_reviews}}
{{#if product.reviews.total '>' 0}}
    <li class="tab">
        <a class="tab-title" href="#tab-reviews">{{lang 'products.reviews.header' total=product.reviews.total}}</a>
    </li>
{{/if}}
{{/if}}
```

```html
{{#if settings.show_product_reviews}}
{{#if product.reviews.total '>' 0}}
    <div class="tab-content" id="tab-reviews" data-emthemesmodez-mobile-collapse>
        <h2 class="page-heading">{{lang 'products.reviews.header' total=product.reviews.total}}</h2>
        <div class="emthemesModez-mobile-collapse-content" data-emthemesmodez-mobile-collapse-content>
            {{> components/products/reviews reviews=product.reviews product=product urls=urls}}
        </div>
        <a href="#" class="emthemesModez-mobile-collapse-handle" data-emthemesmodez-mobile-collapse-handle><span class="on">{{lang 'common.view_all'}}</span><span class="off">{{lang 'common.close'}}</span></a>
    </div>
{{/if}}
{{/if}}
```


Edit file `templates\pages\product.html`, delete the code as showing below:

![delete code in product.html to move reviews tab](img/reviews-tab-edit-product-html.png)


## Move brands list underneath products list on Brand page


If you want to display brands list under products list on brand page, add the custom CSS below into **Storefront** > **Footer Scripts**:

```html
<style>
@media (max-width: 800px) {
  .papaSupermarket-page--pages-brand .page {
    display: flex;
    flex-direction: column;
  }
  
  .papaSupermarket-page--pages-brand .page-sidebar {
    order: 2;
  }
  
  .papaSupermarket-page--pages-brand .page-content {
    order: 1;
  }

  .emthemesModez-productsFilter {
    position: fixed;
    top: 100px;
    left: 10px;
    z-index: 100;
  }
  
  .emthemesModez-productsFilter .actionBar {
    width: 280px;
  }
}
</style>
```

## Move bottom banner to under brand title on brand page

Insert the custom script below into **Storefront** > **Footer Scripts**:

```html
<script>
(function() {
    var body = document.body || document.getElementsByTagName('body')[0];
    if (body.className.match(/papaSupermarket-page--pages-brand/)) {
        var banners = document.querySelectorAll('.banners--bottom');
        var title = document.querySelectorAll('.h1.page-heading')[0];
        for (var i = 0; i < banners.length; i++) {
            title.parentNode.insertBefore(banners[i], title.nextSibling);
        }

        var css = '.papaSupermarket-page--pages-brand .banners--bottom { margin-top: 0; }';
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }
})();
</script>
```


## Display custom message above shipping options on checkout page:

![display custom message above shipping options on checkout page](img/display-message-above-shipping-options-on-checkout-page.png)

Insert the code below into **Scripts Manager**, Checkout page, footer location:

```html
<script>
(function() {
    function processCheckoutShippingOptionTips() {
        $(function() {
            var $tipsEl = $('#checkout-shipping-options-tips');
            window.setInterval(function() {
                if ($('#checkout-shipping-options-tips-clone').length === 0) {
                    var $shippingOptionsEl = $('#checkout-shipping-options');
                    if ($shippingOptionsEl.length > 0) {
                        $tipsEl.clone()
                            .attr('id', 'checkout-shipping-options-tips-clone')
                            .show()
                            .insertBefore($shippingOptionsEl.children('legend'));
                    }
                }
            }, 500);
        });
    }

    document.write('\
        <div id="checkout-shipping-options-tips" style="display: none">\
            <ul>\
                <li>Please allow 1 to 2 business days for handling in addition to shipping time.</li>\
                <li>Orders placed on Fridays or Holidays may not be shipped until the next business day.</li>\
            </ul>\
            <p>Tip: Look at USPS as a shipping option for late week orders. We ship from Rhode Island and in many cases USPS is more cost effective method and will deliver on Saturdays as opposed to other carriers in the same or less time frame.</p>\
        </div>');

    var script = document.createElement("script");
    script.onload = processCheckoutShippingOptionTips;
    document.currentScript.parentNode.insertBefore(script, document.currentScript);
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js';
})();
</script>
```


## Hide Sale badge for logged in users

Insert the custom script below into **Storefront** > **Footer Scripts**:

```html
<!-- Hide sale label for logged in users -->
{{#if customer}}
    <style>
        .sale-flag-side:not(.sale-flag-side--custom) {
            display: none;
        }
    </style>
{{/if}}
```



## Display customer group name & 'Price' label before products price

Insert the custom script below into **Storefront** > **Footer Scripts**:

```html
<!-- Display customer group & 'price' label before price -->
{{#if customer.customer_group_id}}
    <style>
        .customerGroup-price-label {
            float: left;
            margin-right: .75rem;
            margin-top: 5px;
        }
        .card-customerGroup-price-label {
            margin-right: .375rem;
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
        $(function() {
            $('.productView-price').prepend('<div class="customerGroup-price-label">{{{customer.customer_group_name}}} Price</div>');
            $('.card-text .price:not(.price--rrp)').prepend('<span class="card-customerGroup-price-label">{{{customer.customer_group_name}}} Price</span>')
        });
    </script>
{{/if}}
```


## Fix product thumbnails carousel on product page for Supermarket version 1.5.4 and older

```html
<!-- Fix product thumbnails carousel on product page for Supermarket version 1.5.4 and older -->
{{#if page_type '===' 'product'}}
    {{#if product.images.length '<=' theme_settings.productpage_thumbnails_count}}
        <style>
            .productView-imageCarousel-nav .slick-track { transform: none !important }
        </style>
    {{/if}}
{{/if}}
```
