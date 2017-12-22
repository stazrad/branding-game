// IMPORT REACT //
import React from 'react'

// COMPONENTS //
import Trait from './trait'

class TraitItems extends React.Component {

    render() {
        let activeTraits = this.props.activeTraits
        let traits = this.props.traits
        return (
            <div>
                {
                    activeTraits.map(item => {
                        // set global identifier index number
                        let index = traits.findIndex(res => res.trait == item.trait)
                        item.index = index
                        return <Trait key={index} onSelect={this.props.onSelect} traitObj={item} traits={traits} />
                    })
                }
            </div>
        )
    }
}

export default TraitItems
