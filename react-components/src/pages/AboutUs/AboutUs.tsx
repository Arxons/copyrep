import React from 'react';
import Header from '../../modules/Header';

import './aboutUs.css';

export default class AboutUs extends React.Component {
  render() {
    return (
      <>
        <Header />;
        <main>
          <h1 className="about-title">About Us</h1>
          <div className="info-container">
            <div className="info-item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus libero
              minima modi accusamus officiis inventore officia quam in, velit, sit quidem enim ut
              temporibus nesciunt voluptates cum quia sapiente?
            </div>
            <div className="info-item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad quis nobis
              praesentium a, excepturi voluptate blanditiis et dolorem. Rerum qui voluptates totam
              cupiditate perferendis fuga incidunt iure soluta molestiae.
            </div>
            <div className="info-item">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor veniam laudantium
              consectetur quidem tenetur soluta repellat aspernatur? Tempore voluptatem enim
              corrupti laudantium deserunt, aut placeat soluta at asperiores deleniti.
            </div>
          </div>
        </main>
      </>
    );
  }
}
