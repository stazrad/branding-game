// IMPORT REACT //
import React from 'react';
// PACKAGES //
import axios from 'axios';
// COMPONENTS //
import Counter from './counter';
import Header from './layout/header';
import Footer from './layout/footer';
import TraitItems from './trait-items';
// DATA //
import traitsList from '../json/traits-list-definitions';

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
            numOfTraitsDisplayed: 1, //multiples of 3
            numOfTraitsSelected: 0
        };
    }

    componentWillMount() {
        let traits = this.state.traits;
        let numOfTraitsDisplayed = this.state.numOfTraitsDisplayed;
        // set active traits to the number of numOfTraitsDisplayed
        let activeTraits = traits.slice(0,numOfTraitsDisplayed);
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
        let activeTraits = this.state.activeTraits,
            numOfTraitsSelected = this.state.numOfTraitsSelected,
            traits = this.state.traits;
        // queue up next trait to activeTraits
        let index = selection.index;
        let nextTrait = traits[index + 1];
        let i = activeTraits.findIndex(item => item.trait == selection.trait);
        activeTraits[i] = nextTrait;
        console.log(this.state);
        this.setState({activeTraits, numOfTraitsSelected: numOfTraitsSelected + 1});
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <TraitItems activeTraits={this.state.activeTraits} traits={this.state.traits} onSelect={this.onSelect.bind(this)} />
                    <Counter traits={this.state.traits} numOfTraitsSelected={this.state.numOfTraitsSelected}/>
                </div>
                <Footer />
            </div>
        );
    }

    componentDidMount() {

    }
};
