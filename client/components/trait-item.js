import React from 'react';

export default class TraitItem extends React.Component {
    constructor() {
        super();
    }

    select(e) {
        let selection = {
            yes: true,
            trait: e.target.innerText
        }
        this.props.onSelect(selection);
    }

    render() {
        let white = this.props.trait.whiteSideTrait;
        let black = this.props.trait.blackSideTrait;
        return (
            <div className="trait-item">
                <div className="trait" onClick={this.select.bind(this)}>
                    {white}
                </div>
                <div className="trait" onClick={this.select.bind(this)}>
                    {black}
                </div>
            </div>
        );
    }
};
