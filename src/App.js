import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Bookkeeper!</h1>
    <nav className="navbar">
      <Link to="/invoices">Invoices</Link>
      |
      {' '}
      <Link to="/expenses">Expenses</Link>
    </nav>
    <Outlet />
  </div>
);

export default App;
