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
                    <h1 className='title'>01</h1>
                    <p>For every word that appears, choose the reaction that best describes how that word relates to who you are as a brand.</p>
                    <p>Respond to each word as quickly as you can, it is easy to overthink your response but you gut reaction is always right - go with it.</p>
                    <div className='faces-sample'>
                        <div>
                            <img
                                className='face'
                                src='../images/faces/happy_black.png'
                                title='positive reaction' />
                            <div>YAS!</div>
                            <div>This is me.</div>
                        </div>
                        <div>
                            <img
                                className='face'
                                src='../images/faces/neutral_black.png'
                                title='neutral reaction' />
                            <div>Meh.</div>
                            <div>Not relevant.</div>
                        </div>
                        <div>
                            <img
                                className='face'
                                src='../images/faces/sad_black.png'
                                title='negative reaction' />
                            <div>No, no, no.</div>
                            <div>This is NOT me.</div>
                        </div>
                    </div>
                </div>

                <button onClick={this.props.nextPhase}>Start</button>
            </div>
        )
    }
}

export default Phase1
