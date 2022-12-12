import { Button, Form, Input, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { CustomCheckbox } from '../../../components/Layout/Component/CustomCheckbox';
import { useAppDispatch } from '../../../hooks';
import { setToken } from '../../../lib/auth';
import { setUser } from '../../../slices/userSlice';
import { getAllUser, loginFn } from '../api';
import './index.scss';

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authentication: 'Basic YWRtaW46YWRtaW4=',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  function callLoginFn(data: any) {
    loginFn(data.username, data.password).then((res: any) => {
      console.log('res login', res);
    });

    postData('http://localhost:8888/api/authenticate').then((res) => {
      console.log(res); // JSON data parsed by `data.json()` call
    });

    dispatch(setUser(['dsjhdcn']));
  }

  const onFinish = (values: any) => {
    callLoginFn(values);
    getAllUser().then((res) => {
      console.log('all user log', res);
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-form">
      <span className="header">Đăng nhập</span>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="sample@gmail.com" />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="*********" />
        </Form.Item>

        <div className="action-container">
          <Form.Item name="remember" valuePropName="checked" className="remeber-me">
            <>
              <CustomCheckbox style={{}}>Giữ tôi đăng nhập</CustomCheckbox>
              <Link to="/forgot-password" className="fortgot-password">
                Quên mật khẩu?
              </Link>
            </>
          </Form.Item>
        </div>

        <Space direction="vertical" style={{ width: '100%' }}>
          <Button type="primary" htmlType="submit" block className="button-submit">
            Đăng nhập
          </Button>
        </Space>

        <Space direction="horizontal" style={{ marginTop: '48px' }}>
          <Typography className="no-account">Không có tài khoản?</Typography>
          <Link to="/register" className="fortgot-password">
            Đăng ký ngay
          </Link>
        </Space>
      </Form>
    </div>
  );
};

export default LoginPage;
