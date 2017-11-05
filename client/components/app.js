// IMPORT REACT //
import React from 'react';
// COMPONENTS //
import TraitItems from './trait-items';
import Counter from './counter';
// DATA //
import traitsList from '../json/traits-list';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            activeTraits: [],
            stack: {
                happy: [],
                neutral: [],
                sad: []
            },
            traits: traitsList,
            traitsDisplayed: 1, //multiples of 3
            traitsSelected: 0
        };
    }

    componentWillMount() {
        let traits = this.state.traits;
        let traitsDisplayed = this.state.traitsDisplayed;
        // set active traits to the first 6 traits from traitsList
        let activeTraits = traits.slice(0,traitsDisplayed);
        this.setState({activeTraits});
    }

    onSelect(selection) {
        let stack = this.state.stack;
        switch (selection.face) {
            case 'happy':
                stack.happy.push(selection);
                break;
            case 'neutral':
                stack.neutral.push(selection);
                break;
            case 'sad':
                stack.sad.push(selection);
                break;
        };
        let activeTraits = this.state.activeTraits;
        let traitsSelected = this.state.traitsSelected;
        let traits = this.state.traits;
        let traitsDisplayed = this.state.traitsDisplayed;
        let nextTraitIndex = traitsDisplayed + traitsSelected;
        // filter selection from traits array
        let nextTrait = traits[nextTraitIndex];
        let i = activeTraits.findIndex(trait => trait === selection.trait);
        activeTraits[i] = nextTrait;
        this.setState({activeTraits, traitsSelected: traitsSelected + 1});
    }

    render() {
        return (
            <div>
                {/* <h1>Branding Game</h1> */}
                <div className="container">
                    <TraitItems traits={this.state.activeTraits} onSelect={this.onSelect.bind(this)} />
                    <Counter traits={this.state.traits} traitsSelected={this.state.traitsSelected}/>
                </div>
            </div>
        );
    }
};
