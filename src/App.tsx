import React from 'react';
import './App.css';
import './index.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((item) => {
            const Page = item.component;
            return <Route key={item.path} path={item.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
