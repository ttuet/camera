import { RightOutlined } from '@ant-design/icons';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  {
    code: 'STUDENT',
    icon: 'user',
    name: 'Quản lý sinh viên',
    path: '/students',
  },
  {
    code: 'STAFF',
    icon: 'user',
    name: 'Quản lý nhân viên',
    path: '/staffs',
  },
];
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickNav = (path: string) => {
    navigate(path);
  };

  return (
    <div className="page-navbar">
      <div className="w-full h-32 flex">
        <div className="logo" style={{ width: '150px', height: '26px', margin: 'auto' }} />
      </div>
      {fullSideBar.map((item) => (
        <div
          key={item.code}
          className={`nav-item ${
            location.pathname === item.path ? 'item-selected' : 'item-default'
          }`}
          onClick={() => {
            handleClickNav(item.path);
          }}
          aria-hidden
        >
          <div className={`icon icon__${item.icon}`} />
          <p className="text-white w-4/5  text-left item-content">{item.name}</p>
          <RightOutlined />
        </div>
      ))}
    </div>
  );
};

export default Navbar;
