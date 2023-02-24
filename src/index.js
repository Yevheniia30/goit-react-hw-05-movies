import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'App';
import './index.css';
import { LangProvider } from 'interfaceContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <BrowserRouter basename="/goit-react-hw-05-movies/">
    <LangProvider>
      <App />
    </LangProvider>
  </BrowserRouter>,

  {
    /* </React.StrictMode> */
  }
);
