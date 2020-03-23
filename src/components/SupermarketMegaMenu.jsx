import React from 'react'
import { htmlEntities, SectionConfigLayout } from './utils'
import BaseSectionConfig from './BaseSectionConfig'

const CLASS_ID = 'SupermarketMegaMenu'

class FormBanner extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { src, alt, link } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">Image URL</label>
                    <input type="text" className="form-control" id="src" name="src" value={src} onChange={this.handleChange} placeholder="Enter the image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Image Alt</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter the image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="link">Link</label>
                    <input type="text" className="form-control" id="link" name="link" value={link} onChange={this.handleChange} placeholder="Enter the image link" />
                </div>
            </form>
        );
    }
}



class FormMenu extends React.Component {
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
                    <label htmlFor="items_count">Number of mega menus</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of mega menus" />
                </div>
            </form>
        );
    }
}

class FormMegaMenu extends React.Component {
    render() {
        return (
            <div>TODO</div>
        );
    }
}

let uuidAccordion = 0;
const Accordion = ({ list }) => {
    uuidAccordion++;
    return (
        <div id={`accordion${uuidAccordion}`}>
            {
                list.map(({ heading, content }, i) => (
                    <div key={i.toString()} className="card">
                        <div className="card-header" id={`accordion${uuidAccordion}Heading${i}`}>
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target={`#accordion${uuidAccordion}Content${i}`} aria-expanded="false" aria-controls={`accordion${uuidAccordion}Content${i}`}>
                                    {heading}
                                </button>
                            </h5>
                        </div>

                        <div id={`accordion${uuidAccordion}Content${i}`} className="collapse" aria-labelledby={`accordion${uuidAccordion}Heading${i}`} data-parent={`#accordion${uuidAccordion}`}>
                            <div className="card-body">
                                {content}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

let uuidBanner = 0;
class Banner extends React.Component {
    shouldComponentUpdate({ link, img, alt }) {
        return link !== this.props.link || img !== this.props.img || alt !== this.props.alt;
    }

    render() {
        const { link, img, alt, handleChange = () => {} } = this.props;
        uuidBanner++;
        return (
            <>
                <div className="form-group">
                    <label htmlFor={`Banner${uuidBanner}Img`}>Image URL</label>
                    <input type="url" className="form-control" id={`Banner${uuidBanner}Img`} name="img" placeholder="Enter image URL" value={img} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor={`Banner${uuidBanner}Alt`}>Alt Text</label>
                    <input type="text" className="form-control" id={`Banner${uuidBanner}Alt`} name="alt" placeholder="Image alt text" value={alt} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor={`Banner${uuidBanner}Link`}>Link</label>
                    <input type="url" className="form-control" id={`Banner${uuidBanner}Link`} name="link" placeholder="Link URL" value={link} onChange={handleChange} />
                </div>
            </>
        )
    }
}

class SectionConfig extends BaseSectionConfig {
    scopeName = CLASS_ID;

    constructor(props) {
        super(props);
        this.defaultState = {
            items: [
                {
                    right: [
                        {
                            link: '#',
                            img: '//via.placeholder.com/500x300',
                            alt: '500x300',
                        },
                        {
                            link: '#',
                            img: '//via.placeholder.com/500x300',
                            alt: '500x300',
                        },
                        {
                            link: '#',
                            img: '//via.placeholder.com/500x300',
                            alt: '500x300',
                        },
                    ],
                    bottom: [
                        [
                            {
                                link: '#',
                                img: '//via.placeholder.com/300x200',
                                alt: '300x200',
                            },
                            {
                                link: '#',
                                img: '//via.placeholder.com/300x200',
                                alt: '300x200',
                            },
                            {
                                link: '#',
                                img: '//via.placeholder.com/300x200',
                                alt: '300x200',
                            },
                            {
                                link: '#',
                                img: '//via.placeholder.com/300x200',
                                alt: '300x200',
                            },
                        ],
                        [
                            {
                                link: '#',
                                img: '//via.placeholder.com/300x200',
                                alt: '300x200',
                            },
                            {
                                link: '#',
                                img: '//via.placeholder.com/300x200',
                                alt: '300x200',
                            },
                            {
                                link: '#',
                                img: '//via.placeholder.com/300x200',
                                alt: '300x200',
                            },
                            {
                                link: '#',
                                img: '//via.placeholder.com/300x200',
                                alt: '300x200',
                            },
                        ],
                    ]
                },
                {
                    right: [
                        {
                            link: '#',
                            img: '//via.placeholder.com/500x300',
                            alt: '500x300',
                        },
                        {
                            link: '#',
                            img: '//via.placeholder.com/500x100',
                            alt: '500x100',
                        },
                    ],
                    bottom: [
                        [
                            {
                                link: '#',
                                img: '//via.placeholder.com/400x200',
                                alt: '400x200',
                            },
                            {
                                link: '#',
                                img: '//via.placeholder.com/400x200',
                                alt: '400x200',
                            },
                            {
                                link: '#',
                                img: '//via.placeholder.com/400x200',
                                alt: '400x200',
                            },
                        ],
                        [
                            {
                                link: '#',
                                img: '//via.placeholder.com/300x200',
                                alt: '300x200',
                            },
                            {
                                link: '#',
                                img: '//via.placeholder.com/300x200',
                                alt: '300x200',
                            },
                            {
                                link: '#',
                                img: '//via.placeholder.com/300x200',
                                alt: '300x200',
                            },
                            {
                                link: '#',
                                img: '//via.placeholder.com/300x200',
                                alt: '300x200',
                            },
                        ],
                    ],
                },
                {
                    right: [
                        {
                            link: '#',
                            img: '//via.placeholder.com/500x300',
                            alt: '500x300',
                        },
                    ],
                    bottom: [
                        [
                            {
                                link: '#',
                                img: '//via.placeholder.com/300x300',
                                alt: '300x300',
                            },
                            {
                                link: '#',
                                img: '//via.placeholder.com/300x300',
                                alt: '300x300',
                            },
                            {
                                link: '#',
                                img: '//via.placeholder.com/300x300',
                                alt: '300x300',
                            },
                        ],
                    ],
                }
            ]
        };
        this.state = this.getStateFromLocalStorage() || this.defaultState;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.items.length !== this.state.items.length) {
    //         return true;
    //     }
    //     for (let i in nextState.items) {
    //         if (nextState.items[i].right.length !== this.state.items[i].right.length || nextState.items[i].bottom.length !== this.state.items[i].bottom.length) {
    //             return true;
    //         }

    //         for (let j in nextState.items[i].bottom) {
    //             if (nextState.items[i].bottom[j].length !== this.state.items[i].bottom[j].length) {
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // }

    handleChange(menuIndex, rightBannerIndex, bottomBannerIndex, fieldName, fieldValue) {
        this.setState(state => {
            const items = state.items; //clone(state.items);
            if (typeof rightBannerIndex === 'number' && rightBannerIndex > -1) {
                items[menuIndex].right[rightBannerIndex][fieldName] = fieldValue;
            }
            if (typeof bottomBannerIndex === 'number' && bottomBannerIndex > -1) {
                items[menuIndex].bottom[bottomBannerIndex][fieldName] = fieldValue;
            }
            return { items }
        })
    }

    render() {
        return (
            <SectionConfigLayout sx={{playground: {color:'red'}}} elClass={CLASS_ID}
                onReset={this.onReset}
                code={``.concat(
                    ...this.state.items.map(({ right = [], bottom = [] }, i) => ``.concat(
                        `<p>--- Banners for mega menu ${i + 1}: ---</p>\n`,
                        right.length > 0 ? ``.concat(
                            `<div class="navPage-subMenu-rightBanners" id="emthemesModezBannersBlockMegaMenuRight${i}">\n`,
                            ...right.map(({ link, img, alt }) =>
                                `<p><a href="${htmlEntities(link)}"><img src="${htmlEntities(img)}" alt="${htmlEntities(alt)}" /></a></p>\n`
                            ),
                            `</div>\n`,
                        ) : ``,
                        bottom.length > 0 ? ``.concat(
                            `<div class="navPage-subMenu-bottomBanners" id="emthemesModezBannersBlockMegaMenuBottom${i}">\n`,
                            ...bottom.map(row => ``.concat(
                                `<p class="row">\n`,
                                ...row.map(({ link, img, alt }) =>
                                    `<a class="column" href="${htmlEntities(link)}"><img src="${htmlEntities(img)}" alt="${htmlEntities(alt)}" /></a>\n`
                                ),
                                `</p>\n`,
                            )),
                            `</div>\n`,
                        ) : ``,
                        `\n`,
                    )),
                )}
            >
                <Accordion list={this.state.items.map(({ right, bottom }, menuIndex) => ({
                    heading: `Mega Menu ${menuIndex + 1}`,
                    content: (
                        <Accordion list={[
                            {
                                heading: 'Right Banners',
                                content: (
                                    <Accordion list={right.map((props, rightBannerIndex) => ({
                                        heading: `Banner ${rightBannerIndex + 1}`,
                                        content: <Banner {...props} handleChange={(event) => this.handleChange(menuIndex, rightBannerIndex, null, event.target.name, event.target.value)} />,
                                    }))} />
                                ),
                            },
                            {
                                heading: 'Bottom Banners',
                                content: (
                                    <Accordion list={right.map(({ link, img, alt }, bottomBannerIndex) => ({
                                        heading: `Banner ${bottomBannerIndex + 1}`,
                                        content: 'TODO BANNER FORM',
                                    }))} />
                                ),
                            },
                        ]} />
                    ),
                }))} />
                <button className="btn btn-sm btn-primary">Add Menu</button>
            </SectionConfigLayout>
        );
    }
}

export const SupermarketMegaMenu = () => (
    <SectionConfig />
)
