// IMPORT REACT //
import React from 'react';
// COMPONENTS //
import TraitItem from './trait-item';

class TraitItems extends React.Component {
    constructor(props) {
        super();
        this.state = {
            activeTraits: props.activeTraits,
            traits: props.traits
        }
    }

    render() {
        let activeTraits = this.state.activeTraits;
        let traits = this.state.traits;
        return (
            <div>
                {
                    activeTraits.map(item => {
                        // set global identifier index number
                        let index = traits.findIndex(res => res.trait == item.trait);
                        return <TraitItem key={index} index={index} onSelect={this.props.onSelect} trait={item.trait} traits={traits} />;
                    })
                }
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({traits:nextProps.traits});
    }
};

export default TraitItems;
