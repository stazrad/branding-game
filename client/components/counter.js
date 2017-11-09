// IMPORT REACT //
import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            traits: props.traits,
            numOfTraitsSelected: props.numOfTraitsSelected
        }
    }

    render() {
        let numOfTraitsSelected = this.state.numOfTraitsSelected;
        let traitsTotal = this.state.traits.length;
        return (
            <div className='counter-container'>
                <div className='counter'>{numOfTraitsSelected}<span>/ {traitsTotal}</span></div>
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            traits: nextProps.traits,
            numOfTraitsSelected: nextProps.numOfTraitsSelected
        });
    }
};

export default Counter;
