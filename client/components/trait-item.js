import React from 'react';

export default class TraitItem extends React.Component {
    constructor() {
        super();
    }

    select(e) {
        let trait = this.props.trait;
        let face = e.target.classList[1];

        let selection = {
            face: face,
            trait: trait
        }
        this.props.onSelect(selection);
    }

    render() {
        return (
            <div className="trait-item">

                <div className="trait">
                    {this.props.trait}
                </div>

                <div className="faces-overlay">
                    <div
                        className="faces happy"
                        onClick={this.select.bind(this)}>:)</div>
                    <div
                        className="faces neutral"
                        onClick={this.select.bind(this)}>:|</div>
                    <div
                        className="faces sad"
                        onClick={this.select.bind(this)}>:(</div>
                </div>

            </div>
        );
    }
};
