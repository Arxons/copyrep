import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <div className="header-container">
            <Link className="page-logo" to="/">
              React Components
            </Link>
            <div className="header-links">
              <Link className="header-link" to="/">
                Main Page
              </Link>
              <Link className="header-link" to="/about">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
