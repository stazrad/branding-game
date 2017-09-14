import React from 'react';

import TraitItem from './trait-item';

export default class TraitItems extends React.Component {
    constructor() {
        super();
        this.state = {
            traitItems: []
        }
    }

    render() {
        let traitItems = this.state.traitItems;
        return (
            <div>
                {
                    this.props.traits.map((trait, i) => {
                        let traitItem = <TraitItem
                                            key={i}
                                            trait={trait}
                                            onSelect={this.props.onSelect} />;
                        if(traitItems.length < 6) {
                            traitItems.push(traitItem);
                            return traitItem;
                        }
                    })
                }
            </div>
        )
    }
};
