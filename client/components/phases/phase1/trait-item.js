// IMPORT REACT //
import React from 'react';
import axios from 'axios';
// COMPONENTS //
import Modal from '../../layout/modal';

class TraitItem extends React.Component {

    constructor(props) {
        super();
        let index = props.index;
        let definition = props.traits[index].definition;
        this.state = {
            definition: definition,
            showModal: false
        }
    }

    modalShow(e) {
        let index = this.props.index;
        let definition = this.props.traits[index].definition;
        this.setState({definition, showModal: true});
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

    onSelect(e) {
        let index = this.props.index;
        // get object from traits array
        let selection = this.props.traits[index];
        let face = e.target.classList[1];
        selection.face = face;
        selection.index = parseInt(index);
        this.props.onSelect(selection);
    }

    render() {

        return (
            <div className='trait-item' id={this.props.index}>
                <div className='trait'>
                    <span className='trait-word'>{this.props.trait}
                        <div className='question-mark'>
                            <img
                                src='../images/question_mark.png'
                                onMouseEnter={this.modalShow.bind(this)}
                                onMouseOut={this.modalHide.bind(this)} />
                        </div>
                        {this.state.showModal ? <Modal definition={this.state.definition} /> : null }
                    </span>
                </div>
                <div className='faces-overlay'>
                    <img
                        className='face happy'
                        src='../images/faces/happy_black.png'
                        onClick={this.onSelect.bind(this)}
                        onMouseEnter={this.mouseEnter.bind(this)}
                        onMouseOut={this.mouseOut.bind(this)} />
                    <img
                        className='face neutral'
                        src='../images/faces/neutral_black.png'
                        onClick={this.onSelect.bind(this)}
                        onMouseEnter={this.mouseEnter.bind(this)}
                        onMouseOut={this.mouseOut.bind(this)} />
                    <img
                        className='face sad'
                        src='../images/faces/sad_black.png'
                        onClick={this.onSelect.bind(this)}
                        onMouseEnter={this.mouseEnter.bind(this)}
                        onMouseOut={this.mouseOut.bind(this)} />
                </div>
            </div>
        );
    }
};

export default TraitItem;
