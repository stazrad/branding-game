// IMPORT REACT //
import React from 'react';

class Column extends React.Component {

    render() {
        let traits = this.props.traits;
        return (
            <div className='column'>
                <h1>{this.props.name.toUpperCase()}</h1>
                <h3>{this.props.description}</h3>
                {traits.map((item, i) => {
                    return <div key={i} className='column-trait'>{item.trait}</div>
                })}
            </div>
        );
    }
};

export default Column;
