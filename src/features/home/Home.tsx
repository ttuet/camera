import React, { useEffect, useState } from 'react';

import './home.scss';
import IconContainer from '../../components/common/IconDropdown';

const Home = () => {
  console.log('ABC');
  return (
    <div>
      <img src="./cam.svg" alt="Hallo" />
      <IconContainer url="../../assets/images/cam.svg" />
    </div>
  );
};
export default Home;
