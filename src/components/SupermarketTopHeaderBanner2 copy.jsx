import React from 'react'
import { Playground } from 'docz'
import { htmlEntities, SectionConfigLayout } from './utils'
import BaseSectionConfig from './BaseSectionConfig'
import { CLASS } from 'postcss-selector-parser'

const CLASS_ID = 'SupermarketTopHeaderBanner2'

const SAMPLE_CODE = `
    <ul class="navUser-section emthemesModezBannersBlockTopHeaderBanner02">
        <li class="navUser-item"><a class="navUser-action" href="#">FAQs</a></li>
        <li class="navUser-item"><a class="navUser-action" href="/contact">Contact</a></li>
        <li class="navUser-item"><a class="navUser-action" href="#">Track Order</a></li>
        <li class="navUser-item"><a class="navUser-action" href="#">Reviews</a></li>
    </ul>
`

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

        this.state = this.getStateFromLocalStorage() || {
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

export const SupermarketTopHeaderBanner2 = () => (
    <div class={CLASS_ID}>
        <ul class="nav nav-tabs" id={CLASS_ID} role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id={`${CLASS_ID}-link-1`} data-toggle="tab" href={`#${CLASS_ID}-content-1`} role="tab" aria-controls={`${CLASS_ID}-content-1`} aria-selected="true">HTML</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id={`${CLASS_ID}-link-2`} data-toggle="tab" href={`#${CLASS_ID}-content-2`} role="tab" aria-controls={`${CLASS_ID}-content-2`} aria-selected="false">Generator</a>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane active" id={`${CLASS_ID}-content-1`} role="tabpanel" aria-labelledby={`${CLASS_ID}-content-1`}>
                <Playground __code={SAMPLE_CODE} />
            </div>
            <div class="tab-pane" id={`${CLASS_ID}-content-2`} role="tabpanel" aria-labelledby={`${CLASS_ID}-content-2`}>
                <SectionConfig />
            </div>
        </div>
    </div>
)
