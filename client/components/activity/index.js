// IMPORT REACT //
import React from 'react';

// COMPONENTS //
import Phase1 from './phases/phase1';
import Phase2 from './phases/phase2';
import Phase3 from './phases/phase3';

// DATA //
import traitsList from '../../json/traits-list-definitions.json';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            phase: 1,
            traits: [],
            activeTraits: [],
            stack: {
                happy: [],
                neutral: [],
                sad: []
            },
            column: {
                look: [],
                sound: [],
                feel: []
            },
            numOfTraitsDisplayed: 1, //multiples of 3
            numOfTraitsSelected: 0
        };

        this.nextPhase = this.nextPhase.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.pushTraitToStack = this.pushTraitToStack.bind(this);
    }

    componentDidMount() {
        // set active traits to the number of numOfTraitsDisplayed
        let traits = traitsList;
        let numOfTraitsDisplayed = this.state.numOfTraitsDisplayed;
        let activeTraits = traits.slice(0,numOfTraitsDisplayed);
        this.setState({activeTraits, traits});
    }

    onSelect(selection) {
        let activeTraits        = this.state.activeTraits,
            numOfTraitsSelected = this.state.numOfTraitsSelected + 1,
            traits              = this.state.traits;
        // go to next phase
        if(numOfTraitsSelected == traits.length) {
            return this.nextPhase();
        }
        // queue up next trait to activeTraits
        let index = selection.index;
        let nextTrait = traits[index + 1];
        let i = activeTraits.findIndex(item => item.trait == selection.trait);
        activeTraits[i] = nextTrait;
        if(!selection.column) {
            this.pushTraitToStack(selection);
        } else {
            this.pushTraitToColumn(selection);
        }
        this.setState({activeTraits, numOfTraitsSelected});
    }

    pushTraitToColumn(trait) {
        let column = this.state.column;
        switch (trait.column) {
            case 'look':
                column.look.push(trait);
                break;
            case 'sound':
                column.sound.push(trait);
                break;
            case 'feel':
                column.feel.push(trait);
                break;
        };
    }

    pushTraitToStack(trait) {
        let stack = this.state.stack;
        switch (trait.face) {
            case 'happy':
                stack.happy.push(trait);
                break;
            case 'neutral':
                stack.neutral.push(trait);
                break;
            case 'sad':
                stack.sad.push(trait);
                break;
        };
    }

    nextPhase(stack) {
        // set activeTraits array to first trait in happy stack
        let activeTraits = [this.state.stack.happy[0]];
        let numOfTraitsSelected = 0;
        let phase = this.state.phase + 1;
        let traits = this.state.stack.happy;
        this.setState({activeTraits, numOfTraitsSelected, phase, traits});
    }

    render() {
        let phase = this.state.phase;
        let phase1 = <Phase1
                        activeTraits={this.state.activeTraits}
                        numOfTraitsSelected={this.state.numOfTraitsSelected}
                        onSelect={this.onSelect}
                        traits={this.state.traits} />
        let phase2 = <Phase2
                        activeTraits={this.state.activeTraits}
                        numOfTraitsSelected={this.state.numOfTraitsSelected}
                        onSelect={this.onSelect}
                        traits={this.state.traits} />
        let phase3 = <Phase3
                        column={this.state.column} />

        return (
            <div>
                <button onClick={this.nextPhase}>NEXT PHASE</button>
                <div className="container">
                    {phase == 1 ? phase1 : null}
                    {phase == 2 ? phase2 : null}
                    {phase == 3 ? phase3 : null}
                </div>
            </div>
        );
    }
};
