import React from 'react';
import Header from '../containers/Header';

const Layout = ({ children }) => (
  <div className="App">
    <Header />
      {children}
  </div>
);

export default Layout;
