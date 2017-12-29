// IMPORT REACT //
import React from 'react'

// IMPORT COMPONENTS //
import Column from './column'

class Phase5 extends React.Component {

    render() {
        let descriptionLook = 'These are words that fall under what your brand should look like.'
        let descriptionSound = 'These are words that fall under what your brand should sound like.'
        let descriptionFeel = 'These are words that fall under what your brand should feel like.'
        return (
            <div>
                <div className='column-container'>
                    <Column name='look' description={descriptionLook} traits={this.props.column.look} />
                    <Column name='sound' description={descriptionSound} traits={this.props.column.sound} />
                    <Column name='feel' description={descriptionFeel} traits={this.props.column.feel} />
                </div>
                <div className='download-container'>
                    <button className='download-button'>Dowload your brand profile</button>
                </div>
            </div>
        )
    }
}

export default Phase5
