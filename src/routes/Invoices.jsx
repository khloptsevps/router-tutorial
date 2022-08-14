import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import getInvoices from '../data';

const Invoices = () => {
  const invoices = getInvoices();
  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => (
              {
                display: 'block',
                margin: '1rem',
                color: isActive ? 'red' : '',
              }
            )}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
