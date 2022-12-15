import React from 'react';
import './index.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

// const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

// const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);

//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,

//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   }
// );

const menu: MenuProps['items'] = [
  {
    key: 'USER',
    label: 'Quản lý người dùng',
    children: [
      {
        key: 'USER_USER',
        label: 'Quản lý người dùng',
      },
    ],
  },
  {
    key: 'STUDENT',
    label: 'Quản lý sinh viên',
  },
];
const SideBar: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <div className="w-full h-32 flex">
        <div className="logo" style={{ width: '150px', height: '26px', margin: 'auto' }} />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['USER']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        items={menu}
      />
    </Sider>
  );
};

export default SideBar;
