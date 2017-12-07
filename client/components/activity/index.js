// IMPORT REACT //
import React from 'react';

// COMPONENTS //
import Phase1 from './phases/phase1';
//import Phase2 from './phases/phase2';

// DATA //
import traitsList from '../../json/traits-list-definitions.json';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            phase: 1,
            traits: traitsList,
            userStacks: null,
            stack: {
                happy: [],
                neutral: [],
                sad: []
            },
            traits: traitsList
        };

        this.nextPhase = this.nextPhase.bind(this);
        this.pushTraitToStack = this.pushTraitToStack.bind(this);
    }

    nextPhase(stack) {
        let phase = this.state.phase + 1;
        let userStacks = stack;
        this.setState(phase, userStacks);
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

    render() {
        let phase = this.state.phase;
        let phase1 = <Phase1
                        pushTraitToStack={this.pushTraitToStack}
                        traits={this.state.traits} />
        let phase2 = null //<Phase2 stacks={this.state.userStacks} />

        return (
            <div>
                <button onClick={this.nextPhase.bind(this, this.state.stack.happy)}>NEXT PHASE</button>
                <div className="container">
                    {phase == 1 ? phase1 : null}
                    {phase == 2 ? phase2 : null}
                </div>
            </div>
        );
    }
};
