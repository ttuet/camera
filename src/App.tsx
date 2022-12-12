import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import AppProviders from './providers/AppProviders';
import { PublicLayout } from './components/Layout/Component/PublicLayout';
import Layout from './components/Layout/Component/PrivateLayout';
import { useAppSelector } from './hooks';

function App() {
  const { users } = useAppSelector((state) => state.users);
  console.log('rerender');
  return (
    <AppProviders>
      <Router>
        <div className="App">
          {users.length === 0 ? (
            <PublicLayout>
              <Routes>
                {publicRoutes.map((item) => {
                  const Page = item.component;
                  return <Route key={item.path} path={item.path} element={<Page />} />;
                })}

                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </PublicLayout>
          ) : (
            <Layout>
              <Routes>
                {privateRoutes.map((item) => {
                  const Page = item.component;
                  return <Route key={item.path} path={item.path} element={<Page />} />;
                })}
              </Routes>
            </Layout>
          )}

          <ToastContainer position="top-right" hideProgressBar />
        </div>
      </Router>
    </AppProviders>
  );
}

export default App;
