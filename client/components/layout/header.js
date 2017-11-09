// IMPORT REACT //
import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <a href="https://www.fourohseven.com" target="_blank">
                    <div className="logo-full-cover left"></div>
                    <img className="logo" src="../../images/logo.png" />
                    <div className="logo-full-cover right"></div>
                </a>
            </div>
        )
    }

};

export default Header;
