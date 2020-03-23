import React from 'react';
import { Playground } from 'docz'

export function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function Code(props) {
    return (
        <pre className="code">{props.children.replace(/^(?!\n)\s+/mg, '').trim()}</pre>
    );
}

export function SectionConfigLayout(props) {
    return (
        <div className={`${props.elClass} mb-4`}>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>HTML code</h4>
                        </div>
                        <div className="card-body">
                            {/* <p>Copy and paste the generated HTML code to your banner content's HTML source code editor:</p> */}
                            <div className="playground-wapper">
                                <Playground __code={props.code} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Or customizing your own:</h4>
                        </div>
                        <div className="card-body">
                            {props.panels && props.panels.length > 0 ? (
                                <div className="accordion" id={props.elClass+'Accordion'}>
                                    {
                                        props.panels.map((panel, index) => (
                                            <div className="card" key={index}>
                                                <div className="card-header" id={props.elClass+'Heading'+index}>
                                                    <h4 className="mb-0">
                                                        <button className={'btn btn-link btn-block text-left' + (index > 0 ? ' collapsed' : '')} type="button" data-toggle="collapse" data-target={'#'+props.elClass+'Collapse'+index} aria-expanded="true" aria-controls={props.elClass+'Collapse'+index}>
                                                            {panel.title}
                                                        </button>
                                                    </h4>
                                                </div>
                                                <div id={props.elClass+'Collapse'+index} className={'collapse' + (index === 0 ? ' show' : '')} aria-labelledby={props.elClass+'Heading'+index} data-parent={'#'+props.elClass+'Accordion'}>
                                                    <div className="card-body">
                                                        {panel.element}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : ''}
                            {props.children}
                            {props.onReset ? ( 
                                <p className="mt-2"><button className="btn btn-sm btn-secondary" onClick={props.onReset}>Reset</button></p>
                            ) : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
