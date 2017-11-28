// IMPORT REACT //
import React from 'react';

// IMPORT COMPONENTS //
import Counter from '../../layout/counter';
import TraitItems from './trait-items';

class Phase1 extends React.Component {

    render() {

        return (
            <div>
                <TraitItems activeTraits={this.props.activeTraits} traits={this.props.traits} onSelect={this.props.onSelect} />
                <Counter traitsSelected={this.props.numOfTraitsSelected} traitsTotal={this.props.traits.length}/>
            </div>
        );
    }
};

export default Phase1;
