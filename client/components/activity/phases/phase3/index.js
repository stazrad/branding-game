// IMPORT REACT //
import React from 'react'

class Phase1 extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className='instructions phase1'>
                    <h1 className='title'>02</h1>
                    <p>For every <img className='in-text' src='../images/faces/happy_black.png' /> you clicked, decide if that trait relates to how your brand <em>looks</em>, <em>sounds</em>, or <em>feels</em>.</p>
                    <p>Even if it feels like a word fits multiple categories, you can only select one. <br />Choose what feels best.</p>
                    <div className='faces-sample'>
                        <div>
                            <span>LOOK</span>
                            <div>What your brand looks like - the visual design.</div>
                        </div>
                        <div>
                            <span>SOUND</span>
                            <div>How your brand sounds - the tone, the words.</div>
                        </div>
                        <div>
                            <span>FEEL</span>
                            <div>What your brand represents - your values.</div>
                        </div>
                    </div>
                </div>

                <button onClick={this.props.nextPhase}>Start</button>
            </div>
        )
    }
}

export default Phase1
