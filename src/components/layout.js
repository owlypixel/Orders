import React from 'react';
import './layout.css';

const Layout = ({ children }) => (
  <>
    <header>
      <h1>Orders List</h1>
    </header>
    <main>{children}</main>
  </>
)

export default Layout;