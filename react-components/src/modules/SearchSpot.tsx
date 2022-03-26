import React from 'react';

export default class SearchSpot extends React.Component {
  render() {
    return (
      <div className="search-wrapper">
        <div className="search-container">
          <h1 className="search-title">Search something</h1>
          <form className="search-input-wrapper">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="search-page-svg">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fillRule="evenodd"
                d="M11 18a7 7 0 10-7-7 7 7 0 007 7zm7-1.38l3.68 3.67-1.42 1.42L16.62 18A9 9 0 1118 16.62z"
              />
            </svg>
            <input className="search-input" type="text" placeholder="What are you looking for?" />
          </form>
        </div>
      </div>
    );
  }
}
