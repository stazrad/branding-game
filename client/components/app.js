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
                no: [],
                yes: [{trait:'tits'}]
            }
        };
    }

    onSelect(selection) {
        let noStack = this.state.stacks.no;
        let yesStack = this.state.stacks.yes;

        if(selection.yes) {
            yesStack.push(selection);
        } else {
            noStack.push(selection);
        }

        let updatedStacks = {
            no: noStack,
            yes: yesStack
        }

        this.setState({
            stacks: updatedStacks
        })

        console.log(updatedStacks);
    }

    render() {
        return (
            <div>
                <h1>Branding Game</h1>
                <h3>Latest:    {this.state.stacks.yes[this.state.stacks.yes.length-1].trait}
                </h3>
                <TraitItems
                    traits={this.state.traits}
                    onSelect={this.onSelect.bind(this)} />
            </div>
        );
    }
};
