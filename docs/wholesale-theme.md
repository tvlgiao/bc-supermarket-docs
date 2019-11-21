# Home Page Section

## -- Sections Manager

You can select the sections displayed on the homepage (maximum 11 sections) in **Theme Editor** > **Homepage** > **Sections**.


![Homepage Sections Manager](img/homepage-wholesale-sections-manager.png)

---

### List of available sections key: ###

* **section1": "category_carousel**
* **section2": "new_products**
* **section3": "bc_banner_home_1**
* **section4": "featured_products**
* **section5": "bc_banner_home_2**
* **section6": "popular_products**
* **section7": "bc_banner_home_3**
* **section8": "products_by_category_sorting_tabs**

## --- Wholesale Top Categories Section

![Wholesale Top Categories Section](img/sections/wholesale-top-categories-section.png)

This block show top categories and its sub-categories sorted by the order set in Product Categories manager.

You can configure titles and images of categories in **Product** > **Product Categories** > **Category Details**

![banner content html source editor](img/banner-categories-detail-edit.png)

## --- Product Sections (New / Featured / Bestselling)

By default, these sections will not appear on the homepage. However, you can use it.

![Wholesale Product Section](img/sections/wholesale-product-section.png)

Configure New Products, Featured Products, Bestselling Products showing on the home page in **Theme Editor** > **Homepage**:

- Number of products to display.

![banner content html source editor](img/wholesale-product.png)

## Fullwidth Banner on Home Page

![Wholesale Product Section](img/sections/wholesale-full-width-banner.png)

To show this banner on Home Page, Go to **Marketing** > **Banners** > click **Create a Banner** button. In **Banner Content** editor, click **HTML** button to open **HTML Source Editor**, input the sample content below:

```
<div id="emthemesModezBannersBlockHome02" class="emthemesModez-section  emthemesModez-section--banners-one">
    <div class="emthemesModez-section-inner">
        <div class="emthemesModez-bannersContainer emthemesModez-bannersContainer--one emthemesModez-bannersContainer--one-1">
            <div class="emthemesModez-banner">
                <div class="emthemesModez-banner-container">
                    <a href="#">
                        <img class="emthemesModez-banner-image" src="https://cdn11.bigcommerce.com/s-jda6rmgufj/product_images/uploaded_images/banner-shop.jpg?t=1561446192&amp;_ga=2.259528074.1810306890.1561366545-1703059024.1550805396" alt="banner shop" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
```

![banner content html source editor](img/edit-home1-fullwidth-banner.png)

Then click **Update** button to go back the previous screen.

Choose **Show on Page** = **Home Page**.

Choose **Location** = **Top of Page**.

![banner content html source editor](img/edit-banner-show-on-page-location.png)

Click **Save** button to finish.

You can freely edit the HTML code above to change banner images or links but keep the HTML attribute `id="emthemesModezBannersBlockHome02"` unchanged.



## --- Products By Categories

![banner content html source editor](img/wholesale-product-categories.png)

This section will show products organized categories. You can choose number of categories to display products. Categories are sorted by the order specified in **Product Categories** in admin manager.

#### CONFIGURATION

To configure this section, go to **Theme Editor** > **Homepage** > **Products by Category with Sorting Tabs**:

![banner content html source editor](img/theme-editor-products-by-category.png)

#### OPTIMIZE FOR EXECUTION TIME

By default, all products will be loaded and displayed when opening the page. At a result, it takes a longer execution time that can affect your site's Page Speed score. To avoid this, you can select **Only load when scrolling to the viewport** option, the products won't loaded until user scrolls down to this area.

#### SPECIFY WHICH CATEGORIES TO DISPLAY

By default, the product categories displayed are the top categories in the order in which they are sorted on the main navigation. You can limit number of categories to display by setting **Number of Categories** option.

You can manually specify which categories should be displayed by setting the categories ID to Category ID box, separated by comma. For example: `200,221,254,275`. [Check instruction How to find the category ID](https://solidcommerce.zendesk.com/hc/en-us/articles/215722843-Finding-Bigcommerce-Category-Names-and-ID-Numbers#automark4). Note that Number of Categories will be ignored if you choose to display categories manually. 

#### HOT CATEGORIES

**Hot Categories** appears on the right is the sub-categories of the current category.

![banner content html source editor](img/home1-products-by-category-hot-categories.png)

#### SHOW BANNER PER CATEGORY

![banner content html source editor](img/products-by-category-banner.png)

To show the banner image per products by category block, tick on option **Show banner** in **Theme Editor** > **Homepage** > **Products by Category with Sorting Tabs**:

![banner content html source editor](img/theme-editor-show-banner-on-products-by-category.png)

Then go to **Storefront** > **Image Manager**, upload your banner image with name following this rule: `products-by-category-{i}` where `{i}` is replaced by category order starting from 1. The banner image format must be jpg, it means the image on your computer must be `products-by-category-1.jpg` if it's used for the first category. All letters must be lower case.