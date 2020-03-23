import React from 'react'
import { htmlEntities, SectionConfigLayout } from './utils'
import BaseSectionConfig from './BaseSectionConfig'

const CLASS_ID = 'SupermarketTopHeaderBanner02'

class FormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { title, link } = this.props;
        return (
            <form>
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

class FormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="items_count">Number of link items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of link items" />
                </div>
            </form>
        );
    }
}

class SectionConfig extends BaseSectionConfig {
    scopeName = CLASS_ID;

    constructor(props) {
        super(props);
        this.defaultState = {
            items: [
                {
                    title: 'FAQs',
                    link: '#',
                },
                {
                    title: 'Contact',
                    link: '/contact-us',
                },
                {
                    title: 'Track Order',
                    link: '#',
                },
                {
                    title: 'Reviews',
                    link: '#',
                },
            ]
        };
        this.state = this.getStateFromLocalStorage() || this.defaultState;
    }

    render() {
        return (
            <SectionConfigLayout elClass={CLASS_ID}
                panels={[
                    {
                        title: "General",
                        element: <FormGeneral onFormGeneralChange={this.onFormGeneralChange} heading={this.state.heading} items_count={this.state.items.length} />

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Link Item ${index + 1}`,
                        element: <FormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                onReset={this.onReset}

                code={``.concat(
                    `<ul class="navUser-section emthemesModezBannersBlockTopHeaderBanner02">\n`,
                        ...this.state.items.map(item => 
                            `<li class="navUser-item"><a class="navUser-action" href="${htmlEntities(item.link)}">${item.title}</a></li>\n`
                        ),
                    `</ul>\n`,
                )}
            />
        );
    }
}

export const SupermarketTopHeaderBanner02 = () => (
    <SectionConfig />
)
