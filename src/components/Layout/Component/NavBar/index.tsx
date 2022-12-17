import { RightOutlined } from '@ant-design/icons';
import { Menu, MenuProps, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fullSideBar } from '../../../../config/appConfig';
import Icon from './Icon';
import './navbar.scss';

const menu: MenuProps['items'] = [
  {
    key: 'USER',
    label: 'Quản lý người dùng',
    icon: Icon({ name: 'home' }),
    children: [
      {
        key: 'USER_MANAGER',
        label: 'Quản lý người dùng',
      },
    ],
  },
  {
    key: 'STUDENT',
    label: 'Quản lý sinh viên',
  },
];

const Navbar = () => {
  const { token } = theme.useToken();
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

      {/* {fullSideBar.map((item) => (
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
      ))} */}

      <Sider width="100%">
        <Menu
          mode="inline"
          defaultSelectedKeys={['USER']}
          defaultOpenKeys={['USER']}
          style={{ height: '100%', borderRight: 0, color: 'white' }}
          items={menu}
        />
      </Sider>
    </div>
  );
};

export default Navbar;
