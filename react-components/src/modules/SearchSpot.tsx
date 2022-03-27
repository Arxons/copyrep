import React, { SyntheticEvent } from 'react';

let inputData = '';

export default class SearchSpot extends React.Component {
  changeHadler(e: SyntheticEvent) {
    inputData = (e.target as HTMLInputElement).value;
  }

  submitHandler(e: SyntheticEvent) {
    e.preventDefault();
  }

  componentWillUnmount() {
    localStorage.setItem('inputData', inputData);
  }

  render() {
    return (
      <div className="search-wrapper">
        <div className="search-container">
          <h1 className="search-title">Search something</h1>
          <form className="search-input-wrapper" onSubmit={this.submitHandler}>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="search-page-svg">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fillRule="evenodd"
                d="M11 18a7 7 0 10-7-7 7 7 0 007 7zm7-1.38l3.68 3.67-1.42 1.42L16.62 18A9 9 0 1118 16.62z"
              />
            </svg>
            <input
              className="search-input"
              type="text"
              placeholder="What are you looking for?"
              onChange={this.changeHadler}
              defaultValue={localStorage.getItem('inputData') as string}
            />
          </form>
        </div>
      </div>
    );
  }
}
