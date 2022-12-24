import { Button, Form, Input, Space, Typography } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CustomCheckbox } from '../../../components/Layout/Component/CustomCheckbox';
import { setRefreshToken } from '../../../lib/cookie';
import { setAccessToken } from '../../../lib/session';
import { AuthContext } from '../../../providers/AuthProvider';
import { getCurrentUser, getUserById, loginFn } from '../api';
import './index.scss';

const LoginPage: React.FC = () => {
  const { setUser } = useContext(AuthContext);
  function saveDataLogin(data: any) {
    setAccessToken(data.accessToken);
    setRefreshToken(data.refreshToken, data.refreshTimeExpiration);
  }
  function callLoginFn(data: any) {
    loginFn(data.username, data.password).then((res: any) => {
      saveDataLogin(res.data);
      getCurrentUser().then((data) => {
        getUserById('639a47b2ff76ca1e380a4bff').then((user) => {
          setUser(user.data);
        });
      });
    });
  }

  const onFinish = (values: any) => {
    callLoginFn(values);
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
          rules={[{ required: true, message: 'Mời nhập tên đăng nhập' }]}
        >
          <Input
            placeholder="sample@gmail.com"
            style={{ color: 'white' }}
            className="input-cl-white"
          />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: 'Mời nhập mật khẩu' }]}
        >
          <Input.Password
            placeholder="*********"
            style={{ color: 'white' }}
            className="input-cl-white"
          />
        </Form.Item>

        <div className="action-container">
          <Form.Item name="remember" valuePropName="checked" className="remeber-me">
            <>
              <CustomCheckbox style={{ color: 'white' }}>Giữ tôi đăng nhập</CustomCheckbox>
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
