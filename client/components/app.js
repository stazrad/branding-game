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
            stack: {
                happy: [],
                neutral: [],
                sad: []
            }
        };
    }

    onSelect(selection) {
        let stack = this.state.stack;
        console.log(this.state);
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
        let updatedStacks = {
            happy: stack.happy,
            neutral: stack.neutral,
            sad: stack.sad
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
