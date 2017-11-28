// IMPORT REACT //
import React from 'react';

// PACKAGES //
import axios from 'axios';

// COMPONENTS //
import Header from './layout/header';
import Footer from './layout/footer';
import Phase1 from './phases/phase1';
import Phase2 from './phases/phase2';

// DATA //
import traitsList from '../json/traits-list-definitions.json';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            phase: 1,
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

    nextPhase(stack) {
        let phase = this.state.phase + 1;
        let numOfTraitsDisplayed = this.state.numOfTraitsDisplayed;
        let activeTraits = stack.slice(0,numOfTraitsDisplayed);
        this.setState({
            activeTraits,
            numOfTraitsSelected: 0,
            phase
        });
    }

    render() {
        let phase = this.state.phase;
        let phase1 = <Phase1
                        activeTraits={this.state.activeTraits}
                        onSelect={this.onSelect.bind(this)}
                        traits={this.state.traits}
                        numOfTraitsSelected={this.state.numOfTraitsSelected} />
        let phase2 = <Phase2
                        activeTraits={this.state.activeTraits}
                        onSelect={this.onSelect.bind(this)}
                        traits={this.state.stack.happy}
                        numOfTraitsSelected={this.state.numOfTraitsSelected} />

        return (
            <div>
                <Header />
                <button onClick={this.nextPhase.bind(this,this.state.stack.happy)}>NEXT PHASE</button>
                <div className="container">
                    {phase == 1 ? phase1 : null}
                    {phase == 2 ? phase2 : null}
                </div>
                <Footer />
            </div>
        );
    }
};
