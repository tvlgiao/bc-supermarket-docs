# Customization

This page will explain all configuration available and how to edit each section appear on theme. Let's view the first homepage.

![Homepage of Default Style](img/home1.jpg)







## Top Banner

![Top Banner](img/home1-top-banner.png)

The top banner can be showed / edited in admin page > __Marketing__ > __Banners__. When you add / edit remember to choose __Location__ is __Top of Page__.

### Colors Customization

To customize colors of this section, go to admin page > __Storefront Design__ > __My Themes__, click button __Customize__ of the current theme to open the Theme Editor. 

![Click customize theme](img/click-customize-theme.png)

Look into the options showing below:

![Theme editor top banner](img/theme-editor-top-banner.png)



## Header

### Header Styles
This theme support 3 different header styles:
- Logo at left
- Logo at center
- Logo at right

![Header Logo at left](img/home1-header-left.png)

![Header Logo at center](img/home1-header-center.png)

![Header Logo at right](img/home1-header-right.png)

To configure, open the __Theme Editor__, scroll down to section __Logo__, click to expand the logo options. Choose a certain option of __Logo position__, then click __Refresh__ button appear after.

![Change logo position](img/change-logo-position.png)

### Phone Number & Store Address
![Header info text](img/home1-infobar.png)

Store address and phone number are pulled out from your store profile. You can edit it in __Store Setup__ > __Store Profile__:

![Edit Store Address and Phone](img/edit-store-address-phone.png)

### Colors Customization

To customize colors of the header section, look into the options showing below in the Theme Editor:

![Theme editor header](img/theme-editor-header.png)




## Main Slideshow / Carousel

![Home 1 Main Carousel](img/home1-main-carousel.jpg)

### Edit the slideshow

Edit the slideshow in admin page > __Storefront Design__ > __Design Options__:

![Edit homepage carousel](img/edit-homepage-carousel.png)


### Colors Customization

To customize color of the slideshow's elements, look into section __Carousel__ in the Theme Editor:

![Theme editor carousel](img/theme-editor-carousel.png)

### Hide the slideshow

To hide the slideshow on homepage, uncheck on the checkbox __Show Carousel__ in section __Carousel__ of the Theme Editor.






## 3 Banners on Homepage

![3 banners on homepage](img/home1-3-banners.jpg)

To show these banners on homepage, from your admin page > __Marketing__ > __Banners __> click button __Create a Banner__. In field __Banner Content__, click button HTML to open __HTML Source Editor__, input content below:

```html
<div id="emthemesModezBannersBlockHome01" class="emthemesModez-section  emthemesModez-section--banners-3x">
<div class="emthemesModez-section-inner">
<div class="emthemesModez-bannersContainer 
            emthemesModez-bannersContainer--onethird-x3 
            emthemesModez-bannersContainer--onethird-x3-1 
            ">
<div class="emthemesModez-banner">
<div class="emthemesModez-banner-container"><a href="#"><img class="emthemesModez-banner-image" src="https://tvlgiao.github.io/bigcommerce-themes/supermarket/demo/images/banner01.jpg" alt="Sample banner 1" /></a></div>
</div>
<div class="emthemesModez-banner">
<div class="emthemesModez-banner-container"><a href="#"><img class="emthemesModez-banner-image" src="https://tvlgiao.github.io/bigcommerce-themes/supermarket/demo/images/banner02.jpg" alt="Sample banner 2" /></a></div>
</div>
<div class="emthemesModez-banner">
<div class="emthemesModez-banner-container"><a href="#"><img class="emthemesModez-banner-image" src="https://tvlgiao.github.io/bigcommerce-themes/supermarket/demo/images/banner03.jpg" alt="Sample banner 3" /></a></div>
</div>
</div>
</div>
</div>
```

![Edit homepage 3 banners](img/edit-home1-3-banners.png)

Then click __Update__ button to go back previous screen.

Choose __Show on Page__ is __Home Page__.

Choose __Location__ is __Top of Page__.

![Show on Page & Location](img/edit-banner-show-on-page-location.png)

Click __Save__ button to finish.

You can freely edit the HTML above to change banner images or link but keep the HTML attribute `id="emthemesModezBannersBlockHome01"` unchanged.






## Featured / Bestselling / New In Product Tabs

![Special products tabs](img/home1-special-product-tabs.jpg)

You can configure this section in __Theme Editor__ > __Homepage__:

![Theme Editor Special Products Tabs](img/theme-editor-special-products-tabs.png)


## Products By Category

![Products by category on homepage](img/home1-products-by-category.jpg)

This section will show products by category. You can choose number of categories to display products. Categories are sorted by order specified in __Product Categories__ admin manager.


### Hot Categories

The __Hot Categories__ appears on the right is sub-categories of the current category.

![Hot categories](img/home1-products-by-category-hot-categories.png)


### Banner Image

![Placeholder category image](img/home1-products-by-category-placeholder-image.png)

The placeholder image can be replaced by uploading your own images to your BigCommerce WebDAV. Upload your image to correct path `content/papasupermarket/img/products-by-category-CATEGORYID.jpg` where `CATEGORYID` is replaced by your current category ID.

You can find Category ID by editing that category and look at the URL:

![Find category ID](img/find-category-id.jpg)


To access to your WebDAV, from admin page > __Server Settings__ > __File Access (WebDAV)__, follow instruction on that page to upload files.

![WebDAV Connect](img/webdav-connect.png)


### Configuration 

To configure this section, go to __Theme Editor__ > __Homepage__ > __Products by Category with Sorting Tabs__:

![Configure products by category](img/theme-editor-products-by-category.png)






## Top Categories

![Top categories on homepage](img/home1-top-categories.jpg)

This block show top categories and child categories sorted by order in Product Categories manager.

### Configuration 

You can configure number of categories to display in __Theme Editor__ > __Homepage__ > __Top Categories__:

![Configure Top Categories](img/theme-editor-top-categories.png)


### Banner Images

![Top categories placeholder](img/home1-top-categories-placeholder.png)

Replace this placeholder image similar to [Replace image of Product by Categories section](customization.md#banner-image), except the image to upload is `content/papasupermarket/img/categories-list-thumbnail-NUMBER.jpg` where `NUMBER` is the index number start with 1.





## Fullwidth Banner on Homepage

![fullwidth banner on homepage](img/home1-fullwidth-banner.jpg)

To show these banners on homepage, from your admin page > __Marketing__ > __Banners __> click button __Create a Banner__. In field __Banner Content__, click button HTML to open __HTML Source Editor__, input content below:

```html
<div id="emthemesModezBannersBlockHome02" class="emthemesModez-section  emthemesModez-section--banners-one">
<div class="emthemesModez-section-inner">
<div class="emthemesModez-bannersContainer 
            emthemesModez-bannersContainer--one 
            emthemesModez-bannersContainer--one-1 
            ">
<div class="emthemesModez-banner">
<div class="emthemesModez-banner-container"><a href="#"><img class="emthemesModez-banner-image" src="https://tvlgiao.github.io/bigcommerce-themes/supermarket/demo/images/banner04.jpg" alt="sample fullwidth banne" /></a></div>
</div>
</div>
</div>
</div>
```

![Edit homepage fullwidth banner](img/edit-home1-fullwidth-banner.png)

Then click __Update__ button to go back previous screen.

Choose __Show on Page__ is __Home Page__.

Choose __Location__ is __Top of Page__.

![Show on Page & Location](img/edit-banner-show-on-page-location.png)

Click __Save__ button to finish.

You can freely edit the HTML above to change banner images or link but keep the HTML attribute `id="emthemesModezBannersBlockHome02"` unchanged.





## Brand Carousel

![Brand Carousel](img/home1-brand-carousel.png)


To show this carousel on homepage, from your admin page > __Marketing__ > __Banners __> click button __Create a Banner__. In field __Banner Content__, click button HTML to open __HTML Source Editor__, input content below:

```html
<div id="emthemesModezBannersBlockHome03" class="emthemesModez-brandCarousel-container" data-section-type="brands-logo">
<div class="emthemesModez-brandCarousel" data-emthemesmodez-brand-carousel="">
<div class="emthemesModez-brandCarousel-slide"><a href="#"><img src="https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand01.png" alt="Sample Brand 1" /></a></div>
<div class="emthemesModez-brandCarousel-slide"><a href="#"><img src="https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand02.png" alt="Sample Brand 2" /></a></div>
<div class="emthemesModez-brandCarousel-slide"><a href="#"><img src="https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand03.png" alt="Sample Brand 3" /></a></div>
<div class="emthemesModez-brandCarousel-slide"><a href="#"><img src="https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand04.png" alt="Sample Brand 4" /></a></div>
<div class="emthemesModez-brandCarousel-slide"><a href="#"><img src="https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand05.png" alt="Sample Brand 5" /></a></div>
<div class="emthemesModez-brandCarousel-slide"><a href="#"><img src="https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand01.png" alt="Sample Brand 6" /></a></div>
<div class="emthemesModez-brandCarousel-slide"><a href="#"><img src="https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand02.png" alt="Sample Brand 7" /></a></div>
<div class="emthemesModez-brandCarousel-slide"><a href="#"><img src="https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand03.png" alt="Sample Brand 8" /></a></div>
<div class="emthemesModez-brandCarousel-slide"><a href="#"><img src="https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand04.png" alt="Sample Brand 9" /></a></div>
<div class="emthemesModez-brandCarousel-slide"><a href="#"><img src="https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand05.png" alt="Sample Brand 10" /></a></div>
</div>
</div>
```

![Edit homepage fullwidth banner](img/edit-home1-fullwidth-banner.png)

Then click __Update__ button to go back previous screen.

Choose __Show on Page__ is __Home Page__.

Choose __Location__ is __Top of Page__.

![Show on Page & Location](img/edit-banner-show-on-page-location.png)

Click __Save__ button to finish.

You can freely edit the HTML above to change banner images or link but keep the HTML attribute `id="emthemesModezBannersBlockHome03"` unchanged.





## Special Product Columns


![Special product columns](img/home1-special-product-columns.jpg)

This block show bestselling products, featured products, new products in columns.

You can configure this block in Theme Editor > Homepage > Special Products Columns:

![Configure special products columns](img/theme-editor-special-products-columns.png)








## Footer - Newsletter

![Newsletter](img/home1-newsletter.png)

You can configure the newsletter block, show/hide or change color in __Theme Editor__ > __Footer__ > __Newsletter__:

![Configure newsletter](img/theme-editor-newsletter.png)


## Footer - Links

![Footer](img/home1-footer.png)

You can change colors in __Theme Editor__ > __Footer__:

![Theme editor main footer](img/theme-editor-main-footer.png)

You can also show/hide about us block, pages, categories, brands, configure number of links to show.



## Footer - Payment Icons

![Theme editor payment icons](img/theme-editor-payment-icons.png)

To show/hide payment icons, go to Theme __Editor__ > __Payment Icons__ secitons, check or uncheck any icons you want to show or hide.




## Footer - Credit Links

![Theme editor credit links](img/theme-editor-credits.png)

To show/hide the credit links, go to Theme Editor > __Footer__ section, tick or untick the checkboxes as showing above.



## Add our own CSS (Sass) code

To add your own custom CSS code you can edit the file `assets/scss/_theme-custom.scss` in __Edit Theme Files__ editor:

![Edit file _theme-custom.scss](img/edit-file-theme-custom-css.png)

__Note: __

- Copy / backup this file for future theme upgrade.
- Add custom CSS code required CSS (or Sass) programming skill. It's not recommended for new users.
