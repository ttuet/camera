import { RightOutlined } from '@ant-design/icons';
import { Menu, MenuProps, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fullSideBar } from '../../../../config/appConfig';
import Icon from './Icon';
import './navbar.scss';

const menu: MenuProps['items'] = [
  {
    key: '/users',
    label: 'Quản lý người dùng',
    icon: Icon({ name: 'home' }),
    children: [
      {
        key: '/users',
        label: 'Quản lý người dùng',
      },
    ],
  },
  {
    key: '/devices',
    label: 'Quản lý thiết bị',
  },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickNav = (path: string) => {
    navigate(path);
  };

  const [selectedPath, setSelectedPath] = useState<string[]>([]);

  useEffect(() => {
    navigate(selectedPath[0]);
  }, [selectedPath]);
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
          style={{ height: '100%', borderRight: 0, color: 'white' }}
          items={menu}
          selectedKeys={selectedPath}
          onClick={(e) => {
            setSelectedPath([e.key]);
          }}
        />
      </Sider>
    </div>
  );
};

export default Navbar;
