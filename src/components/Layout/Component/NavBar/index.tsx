import React, { useState } from 'react';
import { Link, useLocation, useRoutes } from 'react-router-dom';
import { publicRoutes } from '../../../../routes';
import './navbar.scss';

const fullSideBar = [
  {
    code: 'HOME',
    icon: 'home',
    name: 'Trang chủ',
    path: '/',
  },
  {
    code: 'USER',
    icon: 'user',
    name: 'Quản lý người dùng',
    path: '/users',
  },
];
const Navbar = () => {
  const location = useLocation();

  return (
    <div className="page-navbar">
      {fullSideBar.map((item) => (
        <div
          key={item.code}
          className={`nav-item ${location.pathname === item.path ? 'item-selected' : ''}`}
        >
          <div className={`icon icon__${item.icon}`} />
          <Link to={item.path}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
