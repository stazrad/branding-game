import React from 'react';

export default class TraitItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="trait-item">
                <li>white: {this.props.trait.whiteSideTrait}</li>
                <li>black: {this.props.trait.blackSideTrait}</li>
                {console.log(this.props.trait.whiteSideTrait, this.props.trait.blackSideTrait)}
            </div>
        );
    }
};
