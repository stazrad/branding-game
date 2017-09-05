// IMPORT REACT //
import React from 'react';

// COMPONENTS //
import TraitItem from './trait-item';

// DATA //
import traitsList from '../json/traits-list';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {traits:traitsList};
    }

    render() {
        return (
            <div>
                <h1>Hello Worldz</h1>
                <ul>
                    <TraitItem />
                </ul>
            </div>
        );
    }
};
