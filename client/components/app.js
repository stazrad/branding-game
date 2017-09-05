// IMPORT REACT //
import React from 'react';

// COMPONENTS //
import TraitItem from './trait-item';

// DATA //
import traitsList from '../json/traits-list';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            traits: traitsList,
            stacks: {
                no: [],
                yes: []
            }
        };
    }

    render() {
        return (
            <div>
                <h1>Branding Game</h1>
                <div>
                    {this.state.traits.map((trait, i) => {
                        return <TraitItem key={i} trait={trait} />
                    })}
                </div>
            </div>
        );
    }
};
