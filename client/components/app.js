// IMPORT REACT //
import React from 'react';

// COMPONENTS //
import Body   from './layout/body';
import Header from './layout/header';
import Footer from './layout/footer';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <div id='wrapper'>
                    <Header />
                    <Body />
                </div>
                <Footer />
            </div>
        );
    }
};
