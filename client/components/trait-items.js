// IMPORT REACT //
import React from 'react';
// COMPONENTS //
import TraitItem from './trait-item';

class TraitItems extends React.Component {
    constructor(props) {
        super();
        this.state = {
            traits: props.traits
        }
    }

    render() {
        let traits = this.state.traits;
        return (
            <div>
                {
                    traits.map((trait) => {
                        return <TraitItem trait={trait} onSelect={this.props.onSelect} />;
                    })
                }
            </div>
        )
    }
};

export default TraitItems;
