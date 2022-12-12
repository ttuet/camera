import React, { ReactNode } from 'react';
import { Modal } from 'antd';

import FormInput from '../../FormInput';

type Props = {
  open: boolean;
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
  children: ReactNode;
};
export const Dialog = (props: Props) => {
  const { open, title, onConfirm, onCancel, children } = props;
  return (
    <Modal
      className="custom-modal"
      open={open}
      title={title}
      closable
      onCancel={onCancel}
      destroyOnClose
      onOk={onConfirm}
      centered
    >
      {children}
    </Modal>
  );
};
