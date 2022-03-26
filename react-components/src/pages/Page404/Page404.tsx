import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../modules/Header';

import './page404.css';

export default class Page404 extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div className="error-container">
            <h1 className="error-number">404</h1>
            <h2 className="error-message">OOPS, SORRY WE CAN&apos;T FIND THIS PAGE!</h2>
            <h3 className="error-message-descr">
              Either something went wrong or the page doesn&apos;t exist anymore
            </h3>
            <Link className="home-link" to="/">
              <span>HOME PAGE</span>
            </Link>
          </div>
        </main>
      </>
    );
  }
}
