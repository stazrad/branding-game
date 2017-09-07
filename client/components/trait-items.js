import React from 'react';

import TraitItem from './trait-item';

export default class TraitItems extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {
                    this.props.traits.map((trait, i) => {
                        return (
                            <TraitItem
                                key={i}
                                trait={trait}
                                onSelect={this.props.onSelect} />
                        )
                    })
                }
            </div>
        )
    }
};
