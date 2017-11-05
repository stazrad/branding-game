// IMPORT REACT //
import React from 'react';
// COMPONENTS //
import TraitItem from './trait-item';

class TraitItems extends React.Component {
    constructor(props) {
        super();
        this.state = {
            traits: props.traits
        }
    }

    render() {
        let traits = this.state.traits;
        return (
            <div>
                {
                    traits.map((trait, i) => {
                        return <TraitItem key={i} onSelect={this.props.onSelect} trait={trait} />;
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
