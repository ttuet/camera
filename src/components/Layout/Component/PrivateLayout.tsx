import React from 'react';
import { Spin } from 'antd';
import { usePromiseTracker } from 'react-promise-tracker';

import Header from './Header/header';
import Navbar from './NavBar';
import '../styles/index.scss';

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  const { promiseInProgress } = usePromiseTracker();

  return (
    <div className="default-layout">
      <Navbar />
      <div style={{ width: '85%' }}>
        <Header />
        <Spin
          wrapperClassName="page_content"
          spinning={promiseInProgress}
          tip="Đang tải..."
          size="large"
          style={{ maxHeight: '100%' }}
        >
          {children}
        </Spin>
      </div>
    </div>
  );
};
export default Layout;
