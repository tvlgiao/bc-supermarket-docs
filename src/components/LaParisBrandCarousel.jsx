import React from 'react';
import { htmlEntities, SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';

class LaParisBrandCarouselFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, title, link } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the brand image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="link">Link</label>
                    <input type="text" className="form-control" id="link" name="link" value={link} onChange={this.handleChange} placeholder="Enter the link URL" />
                </div>
            </form>
        );
    }
}

class LaParisBrandCarouselFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { heading, items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of brand items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of brand items" />
                </div>
            </form>
        );
    }
}

class LaParisBrandCarousel extends BaseSectionConfig {
    defaultTitle = "Brand Carousel";
    scopeName = "LaParisBrandCarousel";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: '',
            items: [
                {
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand01.png',
                    title: 'Mango',
                    link: '#',
                },
                {
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand02.png',
                    title: 'Pureen',
                    link: '#',
                },
                {
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand03.png',
                    title: 'Zara',
                    link: '#',
                },
                {
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand04.png',
                    title: 'Aldo',
                    link: '#',
                },
                {
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand05.png',
                    title: 'DKNY',
                    link: '#',
                },
                {
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand01.png',
                    title: 'Mango',
                    link: '#',
                },
                {
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand02.png',
                    title: 'Pureen',
                    link: '#',
                },
                {
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand03.png',
                    title: 'Zara',
                    link: '#',
                },
                {
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand04.png',
                    title: 'Aldo',
                    link: '#',
                },
                {
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand05.png',
                    title: 'DKNY',
                    link: '#',
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="LaParisBrandCarousel" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <LaParisBrandCarouselFormGeneral onFormGeneralChange={this.onFormGeneralChange} heading={this.state.heading} items_count={this.state.items.length} />

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Brand Item ${index + 1}`,
                        element: <LaParisBrandCarouselFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="banner-laparis-home-brands" data-template="home_brands" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}

                legacyCode={``.concat(
                    `
                    <article class="emthemesModez-brandCarousel-container" data-section-type="brands-logo">
                    `,
                        ( this.state.heading ? (`
                            <h5 class="footer-info-heading">${htmlEntities(this.state.heading)}</h5>
                        `) : '' ),
                        `
                        <div class="emthemesModez-brandCarousel" data-slick='{
                            "dots": false,
                            "infinite": false,
                            "mobileFirst": true,
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "responsive": [
                                {
                                    "breakpoint": 1260,
                                    "settings": {
                                        "slidesToScroll": 2,
                                        "slidesToShow": 5
                                    }
                                },
                                {
                                    "breakpoint": 800,
                                    "settings": {
                                        "slidesToScroll": 2,
                                        "slidesToShow": 5
                                    }
                                },
                                {
                                    "breakpoint": 550,
                                    "settings": {
                                        "slidesToScroll": 2,
                                        "slidesToShow": 3
                                    }
                                }
                            ]
                        }'>
                        `,
                        ...this.state.items.map((item, index) => `
                            <div class="emthemesModez-brandCarousel-slide"><a href="${htmlEntities(item.link)}"><img src="${htmlEntities(item.img)}" alt="${htmlEntities(item.title)}" /></a></div>
                        `),
                        `
                        </div>
                    </article>
                    `,
                )}
            />
        );
    }
}

export default LaParisBrandCarousel;
