import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React, { useRef } from 'react';
import './header.scss';

const Header = () => {
  const inputRef = useRef<any>(null);

  const handleOnSearch = (event: any) => {
    console.log('data', event.target.value);
    inputRef.current?.blur();
  };
  return (
    <div className="page-header">
      <Input
        ref={inputRef}
        placeholder="Tìm kiếm"
        onPressEnter={(e) => {
          handleOnSearch(e);
        }}
        prefix={<SearchOutlined />}
        className="ml-2 my-2 w-1/3"
      />

      <div className="user-info" />
    </div>
  );
};

export default Header;
