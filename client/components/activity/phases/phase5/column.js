// IMPORT REACT //
import React from 'react';

class Column extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emptyClass: 'empty-column'
        }
    }

    componentWillMount() {
        if(!this.props.traits.length == 0) {
            return this.setState({emptyClass: null});
        }
    }

    render() {
        let traits = this.props.traits;
        return (
            <div className={'column ' + this.state.emptyClass}>
                <div className='static-header'>
                    <h1>{this.props.name.toUpperCase()}</h1>
                    <h3>{this.props.description}</h3>
                </div>
                <div className='column-scroll'>
                    {traits.map((item, i) => {
                        return <div key={i} className='column-trait'>{item.trait}</div>
                    })}
                </div>
                <div className='gradient'></div>
            </div>
        );
    }
};

export default Column;
