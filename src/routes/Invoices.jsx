import React from 'react';
import {
  NavLink,
  Outlet,
  useSearchParams,
} from 'react-router-dom';
import getInvoices from '../data.js';

const Invoices = () => {
  const navLinkStyles = ({ isActive }) => {
    const color = isActive ? 'red' : '';
    return {
      display: 'block',
      margin: '1rem 0',
      color,
    };
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const invoices = getInvoices();
  return (
    <div className="inv-container">
      <nav className="invoices-navbar">
        <input
          value={searchParams.get('filter') || ''}
          onChange={(e) => {
            const filter = e.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            const filter = searchParams.get('filter');
            if (!filter) {
              return true;
            }
            const name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <NavLink
              style={navLinkStyles}
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
