import React from 'react';
import Header from '../containers/Header';
//import Footer from '../containers/Footer';
//import '../assets/styles/Layout.scss';

const Layout = ({ children }) => (
  <div className="App">
    <Header />
      {children}
  </div>
);

export default Layout;
