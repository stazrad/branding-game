// IMPORT REACT //
import React from 'react';

// IMPORT COMPONENTS //
import Counter from '../../../layout/modules/counter';
import TraitItems from './trait-items';

class Phase1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTraits: [],
            traits: props.traits,
            numOfTraitsDisplayed: 1, //multiples of 3
            numOfTraitsSelected: 0
        };

        this.onSelect = this.onSelect.bind(this);
    }

    componentWillMount() {
        // set active traits to the number of numOfTraitsDisplayed
        let traits = this.state.traits;
        let numOfTraitsDisplayed = this.state.numOfTraitsDisplayed;
        let activeTraits = traits.slice(0,numOfTraitsDisplayed);
        this.setState({activeTraits});
    }

    onSelect(selection) {
        let activeTraits        = this.state.activeTraits,
            numOfTraitsSelected = this.state.numOfTraitsSelected + 1,
            traits              = this.state.traits;
        // queue up next trait to activeTraits
        let index = selection.index;
        let nextTrait = traits[index + 1];
        let i = activeTraits.findIndex(item => item.trait == selection.trait);
        activeTraits[i] = nextTrait;
        this.props.pushTraitToStack(selection);
        this.setState({activeTraits, numOfTraitsSelected});
    }

    render() {

        return (
            <div>
                <TraitItems activeTraits={this.state.activeTraits} traits={this.props.traits} onSelect={this.onSelect} />
                <Counter traitsSelected={this.props.numOfTraitsSelected} traitsTotal={this.props.traits.length}/>
            </div>
        );
    }
};

export default Phase1;
