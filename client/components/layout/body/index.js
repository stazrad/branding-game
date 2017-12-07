// IMPORT REACT //
import React from 'react';

// IMPORT COMPONENTS //
import Activity from '../../activity';

class Body extends React.Component {

    render() {

        return (
            // this exists to ecentually be able to change the activity easily
            <Activity />
        );
    }
};

export default Body;
