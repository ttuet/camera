import { Button, Form, Input, Modal, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

type Props = {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const ChangePasswordDialog = (props: Props) => {
  const { open, onConfirm, onCancel } = props;

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal
      closable
      destroyOnClose
      onOk={onConfirm}
      onCancel={onCancel}
      open={open}
      footer
      centered
      className="change-password-form"
      width={420}
    >
      <div className="content">
        <span className="header">Đổi mật khẩu</span>
        <span style={{ color: '#0000008a', textAlign: 'initial' }}>
          Vui lòng tạo một mật khẩu mới mà bạn không sử dụng trên bất kỳ trang web nào khác.
        </span>
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
            label="Mật khẩu cũ"
            name="oldPassword"
            rules={[{ required: true, message: 'Please input your pasword' }]}
          >
            <Input.Password placeholder="*********" />
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

          <Space direction="vertical" style={{ width: '100%', marginTop: '16px' }}>
            <Button type="primary" htmlType="submit" block className="button-submit">
              Xác nhận
            </Button>
          </Space>
        </Form>
      </div>
    </Modal>
  );
};

export default ChangePasswordDialog;
