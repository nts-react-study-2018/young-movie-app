import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="appName">Poster Kiosk</h1>
                <div className="appMenu">
                    <a className="appMenu__link is_selected" href="#">Popular</a>
                    <a className="appMenu__link" href="#">Top Rated</a>
                    <a className="appMenu__link" href="#">Now Playing</a>
                </div>
            </div>
        );
    }
}

export default Header;
