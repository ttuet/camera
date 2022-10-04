import React from 'react';
import { Spin } from 'antd';
import { usePromiseTracker } from 'react-promise-tracker';

import Footer from './Footer';
import Header from './Header/header';
import Navbar from './SideBar';
import '../styles/index.scss';

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  const { promiseInProgress } = usePromiseTracker();

  return (
    <div className="default-layout">
      <Header />
      <Navbar />
      <Spin
        wrapperClassName="page_content"
        spinning={promiseInProgress}
        tip="Đang tải..."
        size="large"
        style={{ maxHeight: '100%' }}
      >
        {children}
      </Spin>

      <Footer />
    </div>
  );
};
export default Layout;
