import { Button, Form, Input, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.scss';

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="forgot-password-form">
      <span className="header">Quên mật khẩu</span>
      <span style={{ color: '#0000008a', textAlign: 'initial' }} className="font-bold">
        Không có gì phải lo lắng ! Chỉ cần nhập email của bạn và chúng tôi sẽ gửi cho bạn một liên
        kết đặt lại mật khẩu.
      </span>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
        className="size-inherit"
      >
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="sample@gmail.com" />
        </Form.Item>

        <Space direction="vertical" style={{ width: '100%' }}>
          <Button type="primary" htmlType="submit" block className="button-submit">
            Xác nhận
          </Button>
        </Space>
        <Space direction="horizontal" style={{ marginTop: '48px' }}>
          <Typography className="already-account">Bạn đã nhớ lại mật khẩu?</Typography>
          <Link to="/" className="link-to-login ">
            Đăng nhập ngay
          </Link>
        </Space>
      </Form>
    </div>
  );
};

export default ForgotPassword;
