import React from 'react'
import { SectionConfigLayout } from './utils'
import BaseSectionConfig from './BaseSectionConfig'

const CLASS_ID = 'SupermarketAdvTopHeader'

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
            content: `<p>Top banner display on <strong>all pages</strong> to advertise a special promotion such as: Save 20% this weekend!</p>`,
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

                code={`<div id="emthemesModezBannersBlockAdvTopHeader" class="banners emthemesModezBannersBlockAdvTopHeader">
                    <div class="banner">
                        ${content}
                    </div>
                </div>`}
            />
        );
    }
}

export const SupermarketAdvTopHeader = () => (
    <SectionConfig />
)
