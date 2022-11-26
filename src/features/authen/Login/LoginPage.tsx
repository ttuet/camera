import { Button, Form, Input, Space, Typography } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const LoginPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
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
            <Checkbox>Giữ tôi đăng nhập</Checkbox>
            <Link to="/forgot-password" className="fortgot-password">
              Quên mật khẩu?
            </Link>
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
