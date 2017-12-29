// IMPORT REACT //
import React from 'react'

class Phase0 extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className='instructions'>
                    <h1 className='title'>What really makes you, you?</h1>
                    <p>This branding excercise will help you to answer this toughie that you've been struggling to answer.</p>
                    <p>First, we'll work through defining who you are and who you are not.</p>
                    <p>Next, we'll narrow down how your brand should look, sound, and feel.</p>
                    <p>By the end of the excercise, we'll have created your personal brand profile; giving you clarity on what your brand represents so you can better brainstorm, develop, and ship all of your ideas.</p>
                </div>

                <button onClick={this.props.nextPhase}>Let's go!</button>
            </div>
        )
    }
}

export default Phase0
