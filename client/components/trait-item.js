import React from 'react';

export default class TraitItem extends React.Component {
    constructor() {
        super();
    }

    addTrait(e) {
        console.log(e.target.innerText);
    }

    render() {
        return (
            <div className="trait-item">
                <div className="trait" onClick={this.addTrait}>
                    {this.props.trait.whiteSideTrait}
                </div>
                <div className="trait" onClick={this.addTrait}>
                    {this.props.trait.blackSideTrait}
                </div>
            </div>
        );
    }
};
