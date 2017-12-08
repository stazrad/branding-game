// IMPORT REACT //
import React from 'react';

class Counter extends React.Component {

    render() {
        let traitsSelected = this.props.traitsSelected;
        let traitsTotal = this.props.traitsTotal;
        return (
            <div className='counter-container'>
                <div className='counter'>
                    <span className='selected'>{traitsSelected}</span>
                    /
                    <span className='total'>{traitsTotal}</span>
                </div>
            </div>
        )
    }
};

export default Counter;
