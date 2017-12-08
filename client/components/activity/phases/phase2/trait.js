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
        }

        this.modalShow = this.modalShow.bind(this);
        this.modalHide = this.modalHide.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    modalShow(e) {
        this.setState({showModal: true});
    }

    modalHide(e) {
        this.setState({showModal: false});
    }

    onClick(e) {
        let column = e.target.id;
        let trait = this.state.trait;
        trait.column = column;
        this.props.onSelect(trait);
    }

    render() {

        return (
            <div className='trait-item phase2-trait-item' id={this.props.index}>
                <div className='trait'>
                    <span className='trait-word'>{this.props.traitObj.trait}
                        <div className='question-mark'>
                            <img
                                src='../images/question_mark.png'
                                onMouseEnter={this.modalShow.bind(this)}
                                onMouseOut={this.modalHide.bind(this)} />
                        </div>
                        {this.state.showModal ? <Modal definition={this.state.definition} /> : null }
                    </span>
                </div>
                <div className='phase2-words'>
                    <div onClick={this.onClick} className='phase2-word' id='look'>
                        Look
                    </div>
                    <div onClick={this.onClick} className='phase2-word' id='sound'>
                        Sound
                    </div>
                    <div onClick={this.onClick} className='phase2-word' id='feel'>
                        Feel
                    </div>
                </div>
            </div>
        );
    }
};

export default Trait;
