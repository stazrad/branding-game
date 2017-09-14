import React from 'react';

export default class TraitItem extends React.Component {
    constructor() {
        super();
        this.state = {
            overlayClasses: [
                "faces-overlay",
                "none"
            ]
        }
    }

    colorChange(e) {
        const face = e.target.classList[1];
        let newClass = face + '-color';

        let updatedClasses = [
            "faces-overlay",
            newClass
        ]

        this.setState({overlayClasses: updatedClasses});
    }

    mouseOut() {
        let updatedClasses = [
            "faces-overlay",
            "none"
        ]

        this.setState({overlayClasses: updatedClasses});
    }

    select(e) {
        let trait = this.props.trait;
        let face = e.target.classList[1];
        console.log(e.target.onMouseOut);

        e.target.removeAttr('onmouseout');

        let selection = {
            face: face,
            trait: trait
        }
        this.props.onSelect(selection);
    }

    render() {
        let overlayClasses = this.state.overlayClasses;
        return (
            <div className="trait-item">

                <div className="trait">
                    {this.props.trait}
                </div>

                <div className={overlayClasses.join(' ')}>
                    <img
                        className="faces happy"
                        src="../images/happy_white.png"
                        onClick={this.select.bind(this)}
                        onMouseEnter={this.colorChange.bind(this)}
                        onMouseOut={this.mouseOut.bind(this)} />
                    <img
                        className="faces neutral"
                        src="../images/neutral_white.png"
                        onClick={this.select.bind(this)}
                        onMouseEnter={this.colorChange.bind(this)}
                        onMouseOut={this.mouseOut.bind(this)} />
                    <img
                        className="faces sad"
                        src="../images/sad_white.png"
                        onClick={this.select.bind(this)}
                        onMouseEnter={this.colorChange.bind(this)}
                        onMouseOut={this.mouseOut.bind(this)} />
                </div>

            </div>
        );
    }
};
