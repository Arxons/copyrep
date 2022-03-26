import React from 'react';

import Header from '../../modules/Header';
import SearchSpot from '../../modules/SearchSpot';

import './mainPage.css';

export default class MainPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SearchSpot />
      </>
    );
  }
}
