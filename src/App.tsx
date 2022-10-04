import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import Home from './features/home/Home';
import Layout from './components/Layout/Component/Layout';

function App() {
  console.log('JHHH');
  return (
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
  );
}

export default App;
