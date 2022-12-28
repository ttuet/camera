import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import 'typeface-roboto';
import { Provider } from 'react-redux';

import { store } from './slices/index';
import App from './App';
import AppProviders from './providers/AppProviders';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProviders>
        <App />
      </AppProviders>
    </Provider>
  </React.StrictMode>
);
