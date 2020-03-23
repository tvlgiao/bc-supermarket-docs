export default {
  title: 'BigCommerce Supermarket Theme Documentation',
  themeConfig: {
    // fontSizes: [10, 12, 14, 16, 20, 24, 32, 48],
    fontSizes: [10, 12, 14, 18, 24, 32, 48, 60],
    styles: {
      h1: {
        mb: 5,
      },
      h2: {
        mt: 6,
        mb: 4,
        paddingBottom: 3,
        borderBottom: `1px solid #ddd`
      }
    }
  },
  menu: [
    'Index',
    'Get Started',
    {
      name: 'Customization',
      menu: [
        'Customization',
        'Layout',
        'Top Banner',
        'Header',
        'Main Navigation',
        'Home Page',
        'Footer',
        'Sidebar',
        'Category Page',
        'Product Page',
        'Brands Page',
        'Instant Load',
        'Custom Popups',
        'Banner Sizes',
      ]
    },
    {
      name: 'Child Themes',
      menu: [
        'Child Themes',
        'Wholesale Theme',
        'Sima Beauty Theme',
        'Sima Furniture Theme',
        'Sima Headphones Theme',
      ]
    },
    'FAQs',
    { name: 'Support', href: 'https://papathemes.kayako.com/conversation/new/1' }
  ],
  ignore: ['README.md']
}
