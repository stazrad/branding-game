import React from 'react';

import TraitItem from './trait-item';

export default class TraitItems extends React.Component {
    constructor(props) {
        super();

        let traitItems = props.traits.map((trait, i) => {
            let traitItem = <TraitItem
                                key={i}
                                trait={trait}
                                onSelect={props.onSelect} />;
            return traitItem;
        })

        this.state = {
            traitItems: traitItems
        }
    }

    render() {
        let traitItems = this.state.traitItems;
        return (
            <div>
                {
                    this.state.traitItems.map((traitItem) => {
                        return traitItem;
                    })
                }
            </div>
        )
    }
};
