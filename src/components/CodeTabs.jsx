import React from 'react';
import { Playground } from 'docz'

export default class CodeTabs extends React.Component {
    render() {
        const { playground, builder } = this.props;
        const id = 1;
        
        return (
            <div class="CodeTabs">
                <ul class="nav nav-tabs" id={`CodeTabs-${id}`} role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id={`CodeTabs-${id}-link-1`} data-toggle="tab" href={`#CodeTabs-${id}-content-1`} role="tab" aria-controls={`CodeTabs-${id}-content-1`} aria-selected="true">HTML</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id={`CodeTabs-${id}-link-2`} data-toggle="tab" href={`#CodeTabs-${id}-content-2`} role="tab" aria-controls={`CodeTabs-${id}-content-2`} aria-selected="false">Generator</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id={`CodeTabs-${id}-content-1`} role="tabpanel" aria-labelledby={`CodeTabs-${id}-content-1`}>
                        <Playground __code={playground} />
                    </div>
                    <div class="tab-pane" id={`CodeTabs-${id}-content-2`} role="tabpanel" aria-labelledby={`CodeTabs-${id}-content-2`}>
                        <div>{builder}</div>
                    </div>
                </div>
            </div>
        );
    }
}