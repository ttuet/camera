import { Modal } from 'antd';
import React from 'react';
import './index.scss';

type Props = {
  title: string;
  content: string;
  open: boolean;
};
const ConfirmDialog = (props: Props) => {
  const { title, content, open } = props;

  return (
    <Modal open={open} title={title} closable>
      <p>{content}</p>
    </Modal>
  );
};

export default ConfirmDialog;
