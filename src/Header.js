import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="appName">Poster Kiosk</h1>
        <div className="appMenu">
          <NavLink
            to="/movies/popular"
            className="appMenu__link"
            activeClassName="is_selected"
          >
            Popular
          </NavLink>
          <NavLink
            to="/movies/top-rated"
            className="appMenu__link"
            activeClassName="is_selected"
          >
            Top Rated
          </NavLink>
          <NavLink
            to="/movies/now-playing"
            className="appMenu__link"
            activeClassName="is_selected"
          >
            Now Playing
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
