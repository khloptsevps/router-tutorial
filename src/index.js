import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import Exprenses from './routes/Expenses.jsx';
import Invoices from './routes/Invoices.jsx';
import Invoice from './routes/Invoice.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Exprenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
          <Route
            index
            element={(
              <main className="index-route">
                <p>Select an invoice</p>
              </main>
            )}
          />
        </Route>
        <Route
          path="*"
          element={(
            <main className="nothing">
              <p>There&apos;s nothing here!</p>
            </main>
          )}
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);
