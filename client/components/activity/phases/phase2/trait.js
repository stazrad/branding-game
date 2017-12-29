// IMPORT REACT //
import React from 'react';

// COMPONENTS //
import Modal from '../../../layout/modules/modal';

class Trait extends React.Component {

    constructor(props) {
        super(props);
        let definition = props.traitObj.definition;
        let trait = props.traitObj;
        this.state = {
            definition,
            trait,
            showModal: false
        };

        this.modalShow = this.modalShow.bind(this);
        this.modalHide = this.modalHide.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    modalShow(e) {
        this.setState({showModal: true});
    }

    modalHide(e) {
        this.setState({showModal: false});
    }

    mouseEnter(e) {
        let src = e.target.src;
        let hover = src.replace('black', 'hover');
        e.target.src = hover;
    }

    mouseOut(e) {
        let src = e.target.src;
        let black = src.replace('hover', 'black');
        e.target.src = black;
    }

    onClick(e) {
        let face = e.target.id;
        let trait = this.state.trait;
        trait.face = face;
        this.props.onSelect(trait);
    }

    render() {
        return (
            <div className='trait-item'>
                <div className='trait'>
                    <span className='trait-word'>{this.props.traitObj.trait}
                        <div className='question-mark'>
                            <img
                                src='../images/question_mark.png'
                                onMouseEnter={this.modalShow}
                                onMouseOut={this.modalHide} />
                        </div>
                        {this.state.showModal ? <Modal definition={this.state.definition} /> : null }
                    </span>
                </div>
                <div className='faces-overlay'>
                    <img
                        className='face'
                        id='happy'
                        src='../images/faces/happy_black.png'
                        title='positive reaction'
                        onClick={this.onClick}
                        onMouseEnter={this.mouseEnter}
                        onMouseOut={this.mouseOut} />
                    <img
                        className='face'
                        id='neutral'
                        src='../images/faces/neutral_black.png'
                        title='neutral reaction'
                        onClick={this.onClick}
                        onMouseEnter={this.mouseEnter}
                        onMouseOut={this.mouseOut} />
                    <img
                        className='face'
                        id='sad'
                        src='../images/faces/sad_black.png'
                        title='negative reaction'
                        onClick={this.onClick}
                        onMouseEnter={this.mouseEnter}
                        onMouseOut={this.mouseOut} />
                </div>
            </div>
        );
    }
};

export default Trait;
