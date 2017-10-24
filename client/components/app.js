// IMPORT REACT //
import React from 'react';

// COMPONENTS //
import TraitItems from './trait-items';

// DATA //
import traitsList from '../json/traits-list';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            traits: traitsList,
            stacks: {
                happy: [],
                neutral: [],
                sad: []
            }
        };
    }

    onSelect(selection) {
        let happyStack = this.state.stacks.happy;
        let neutralStack = this.state.stacks.neutral;
        let sadStack = this.state.stacks.sad;

        if(selection.face === "happy") {
            happyStack.push(selection);
        } else if(selection.face === "sad") {
            sadStack.push(selection);
        } else {
            neutralStack.push(selection);
        }

        let updatedStacks = {
            happy: happyStack,
            sad: sadStack,
            neutral: neutralStack
        }

        this.setState({updatedStacks})

        console.log(updatedStacks);
    }

    render() {
        return (
            <div>
                <h1>Branding Game</h1>
                <div className="container">
                    <TraitItems
                        traits={this.state.traits}
                        onSelect={this.onSelect.bind(this)} />
                </div>
            </div>
        );
    }
};
