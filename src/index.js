import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import Expenses from './routes/Expenses.jsx';
import Invoice from './routes/Invoice.jsx';
import Invoices from './routes/Invoices.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={(
              <main style={{ padding: '1rem' }}>
                <p>Select an invoice</p>
              </main>
            )}
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            (
              <main style={{ padding: '1rem' }}>
                <p>There&apos;s nothing here!</p>
              </main>
            )
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);
