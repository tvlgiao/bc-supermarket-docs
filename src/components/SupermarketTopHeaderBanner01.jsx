import React from 'react'
import { SectionConfigLayout } from './utils'
import BaseSectionConfig from './BaseSectionConfig'

const CLASS_ID = 'SupermarketTopHeaderBanner01'

const SAMPLE_CODE = `
    <div class="emthemesModezBannersBlockTopHeaderBanner01"><strong>WE PROVIDE HIGH QUALITY PRODUCTS, GREAT SERVICE AND QUICK SHIPPING</strong></div>
`

class FormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { content } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" id="content" name="content" value={content} onChange={this.handleChange} placeholder="Enter the banner content" />
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
            content: `<strong>WE PROVIDE HIGH QUALITY PRODUCTS, GREAT SERVICE AND QUICK SHIPPING</strong>`,
        };
        this.state = this.getStateFromLocalStorage() || this.defaultState;
    }

    render() {
        const { content } = this.state;
        return (
            <SectionConfigLayout elClass={CLASS_ID}
                panels={[
                    {
                        title: "Banner",
                        element: <FormGeneral onFormGeneralChange={this.onFormGeneralChange} heading={this.state.heading} content={content} />

                    },
                ]}

                onReset={this.onReset}

                code={`<div class="emthemesModezBannersBlockTopHeaderBanner01">${content}</div>`}
            />
        );
    }
}

export const SupermarketTopHeaderBanner01 = () => (
    <SectionConfig />
)
