import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

export default {
  title: 'BigCommerce Supermarket Theme Documentation',
  ghPages: {
    repo: 'https://github.com/tvlgiao/bc-supermarket-docs.git',
    history: false,
  },
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
    { name: 'Support', href: 'https://papathemes.com/contact-us/' }
  ],
  ignore: ['README.md'],
}
