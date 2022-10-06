import React from 'react';
import IconContainer from '../../../common/IconDropdown';
import camIcon from '../../../../assets/images/cam.svg';
import './header.scss';

const Header = () => (
  <div className="page-header">
    <div className="app-info">
      <div className="app-logo" />
      <span className="app-name">Hệ thống camera thông minh</span>
    </div>
    <div className="user-info">
      <IconContainer url="../../../../assets/images/cam.svg" />
    </div>
  </div>
);

export default Header;
