// IMPORT REACT //
import React from 'react';

class TraitItem extends React.Component {
    constructor() {
        super();
        this.state = {
            happyClasses: [
                'face',
                'happy'
            ],
            neutralClasses: [
                'face',
                'neutral'
            ],
            sadClasses: [
                'face',
                'sad'
            ],
            overlayClasses: [
                'faces-overlay',
                'none'
            ]
        }
    }

    mouseEnter(e) {
        const face = e.target.classList[1];
        let newClass = face + '-color';
        let updatedClasses = [
            'faces-overlay',
            newClass
        ]
        this.setState({overlayClasses: updatedClasses});
    }

    mouseOut() {
        let updatedClasses = [
            'faces-overlay',
            'none'
        ]
        this.setState({overlayClasses: updatedClasses});
    }

    select(e) {
        let trait = this.props.trait;
        let face = e.target.classList[1];
        let selection = {
            face: face,
            trait: trait
        }
        this.props.onSelect(selection);
        this.setState({happyClasses: this.state.happyClasses.concat('fade')});
    }

    render() {
        let overlayClasses = this.state.overlayClasses;
        let happyClasses = this.state.happyClasses;
        let neutralClasses = this.state.neutralClasses;
        let sadClasses = this.state.sadClasses;

        return (
            <div className='trait-item'>

                <div className='trait'>
                    {this.props.trait}
                </div>

                <div className={overlayClasses.join(' ')}>
                    <img
                        className={happyClasses.join(' ')}
                        src='../images/happy_white.png'
                        onClick={this.select.bind(this)}
                        onMouseEnter={this.mouseEnter.bind(this)}
                        onMouseOut={this.mouseOut.bind(this)} />
                    <img
                        className={neutralClasses.join(' ')}
                        src='../images/neutral_white.png'
                        onClick={this.select.bind(this)}
                        onMouseEnter={this.mouseEnter.bind(this)}
                        onMouseOut={this.mouseOut.bind(this)} />
                    <img
                        className={sadClasses.join(' ')}
                        src='../images/sad_white.png'
                        onClick={this.select.bind(this)}
                        onMouseEnter={this.mouseEnter.bind(this)}
                        onMouseOut={this.mouseOut.bind(this)} />
                </div>

            </div>
        );
    }
};

export default TraitItem;
