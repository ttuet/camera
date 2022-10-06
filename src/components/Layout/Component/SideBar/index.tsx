import React from 'react';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../../../routes';
import './sidebar.scss';

const Navbar = () => {
  console.log('UHDJH');
  return (
    <div className="page-navbar">
      {publicRoutes.map((item) => {
        console.log('DHG');
        return (
          <div className="nav-item">
            <Link to={item.path}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
