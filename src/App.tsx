import React, { useContext, useEffect } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { PublicLayout } from './components/Layout/Component/PublicLayout';
import PrivateLayout from './components/Layout/Component/PrivateLayout';
import { useAppSelector } from './hooks';
import { AuthContext, AuthProvider } from './providers/AuthProvider';

function App() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user === null) {
      toast.success('Đăng xuất thành công');
    } else {
      toast.success('Đăng nhập thành công');
    }
  }, [user]);
  return (
    <Router>
      <div className="App">
        {user === null ? (
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
          <PrivateLayout>
            <Routes>
              {privateRoutes.map((item) => {
                const Page = item.component;
                return <Route key={item.path} path={item.path} element={<Page />} />;
              })}
            </Routes>
          </PrivateLayout>
        )}

        <ToastContainer position="top-right" hideProgressBar />
      </div>
    </Router>
  );
}

export default App;
