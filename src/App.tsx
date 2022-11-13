import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.less';

import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import Layout from './components/Layout/Component/Layout';
import AppProviders from './providers/AppProviders';

function App() {
  return (
    <AppProviders>
      <Router>
        <div className="App">
          <Layout>
            <Routes>
              {publicRoutes.map((item) => {
                const Page = item.component;
                return <Route key={item.path} path={item.path} element={<Page />} />;
              })}
            </Routes>
          </Layout>
          <ToastContainer position="top-right" hideProgressBar />
        </div>
      </Router>
    </AppProviders>
  );
}

export default App;
