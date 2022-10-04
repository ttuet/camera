import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import './home.scss';
import 'antd/dist/antd.css';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import { AxiosFactory } from '../../lib/axios';

const UserService = AxiosFactory('http://localhost:8080');

const Home = () => {
  const clickLoad = () => {
    toast.success('Hello');
    toast.error('ERROR');
    toast.warn('WARNM');
    toast.info('INFO');
  };

  return (
    <div>
      <button onClick={clickLoad}>Load Data</button>
    </div>
  );
};
export default Home;
