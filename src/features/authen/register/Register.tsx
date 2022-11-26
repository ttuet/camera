import { Button, Form, Input, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Register: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="register-form">
      <span className="header">Đăng ký</span>
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

        <Form.Item
          label="Nhập lại mật khẩu"
          name="password-copy"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="*********" />
        </Form.Item>

        <Space direction="vertical" style={{ width: '100%' }}>
          <Button type="primary" htmlType="submit" block className="button-submit">
            Đăng ký
          </Button>
        </Space>
        <Space direction="horizontal" style={{ marginTop: '48px' }}>
          <Typography className="already-account">Bạn đã có tài khoản?</Typography>
          <Link to="/" className="link-to-login ">
            Đăng nhập ngay
          </Link>
        </Space>
      </Form>
    </div>
  );
};

export default Register;
