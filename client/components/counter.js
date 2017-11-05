// IMPORT REACT //
import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            traits: props.traits,
            traitsSelected: props.traitsSelected
        }
    }

    render() {
        let traitsSelected = this.state.traitsSelected;
        let traitsTotal = this.state.traits.length;
        return (
            <div>
                <div className="counter">{traitsSelected} / {traitsTotal}</div>
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            traits: nextProps.traits,
            traitsSelected: nextProps.traitsSelected
        });
    }
};

export default Counter;
