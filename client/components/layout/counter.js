// IMPORT REACT //
import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            traitsSelected: props.traitsSelected,
            traitsTotal: props.traitsTotal
        }
    }

    render() {
        let traitsSelected = this.state.traitsSelected;
        let traitsTotal = this.state.traitsTotal;
        return (
            <div className='counter-container'>
                <div className='counter'>{traitsSelected}<span>/ {traitsTotal}</span></div>
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            traitsSelected: nextProps.traitsSelected,
            traitsTotal: nextProps.traitsTotal
        });
    }
};

export default Counter;
