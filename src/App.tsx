import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.min.css';

import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import AppProviders from './providers/AppProviders';
import { PublicLayout } from './components/Layout/Component/PublicLayout';

function App() {
  return (
    <AppProviders>
      <Router>
        <div className="App">
          <PublicLayout>
            <Routes>
              {publicRoutes.map((item) => {
                const Page = item.component;
                return <Route key={item.path} path={item.path} element={<Page />} />;
              })}
            </Routes>
          </PublicLayout>
          <ToastContainer position="top-right" hideProgressBar />
        </div>
      </Router>
    </AppProviders>
  );
}

export default App;
