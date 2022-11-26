import { Button } from 'antd';
import React, { useState } from 'react';
import ConfirmDialog from './ConfirmDialog';

const Sample: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <ConfirmDialog
        title="Xác nhận"
        open={open}
        content={modalText}
        onConfirm={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      />
    </>
  );
};

export default Sample;
