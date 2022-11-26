import { Modal } from 'antd';
import React from 'react';
import './index.scss';

type Props = {
  title: string;
  content: string;
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  confirmLoading?: boolean;
  className?: string;
};
const ConfirmDialog = (props: Props) => {
  const { title, content, open, onCancel, onConfirm, confirmLoading, className } = props;

  const handleOk = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal
      open={open}
      title={title}
      closable
      onCancel={handleCancel}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      okText="Xác nhận"
      cancelText="Hủy"
      centered
      className={`confirm-dialog  ${className}`}
      destroyOnClose
      okButtonProps={{ className: 'camera-button camera-button-confirm' }}
      cancelButtonProps={{ className: 'camera-button camera-button-cancel' }}
    >
      <p>{content}</p>
    </Modal>
  );
};

export default ConfirmDialog;
