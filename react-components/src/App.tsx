import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import MainPage from './pages/MainPage';
import Page404 from './pages/Page404';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
