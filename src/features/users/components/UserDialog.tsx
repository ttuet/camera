import Form from 'antd/es/form/Form';
import React from 'react';
import FormInput from '../../../components/common/FormInput';
import { Dialog } from '../../../components/common/TableUI/components/Dialog';
import { DEFAULT_USER } from '../type';

type Props = {
  open: boolean;
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
};
const UserDialog = (props: Props) => {
  const { open, title, onCancel, onConfirm } = props;
  const handleCancel = () => {
    onCancel();
  };

  const handleConfirm = () => {
    onConfirm();
  };

  const onFormLayoutChange = (value: any) => {
    console.log('value form ', value);
  };
  return (
    <Dialog open={open} title={title} onCancel={handleCancel} onConfirm={handleConfirm}>
      {/* <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        initialValues={DEFAULT_USER}
      />
       */}
      <FormInput />
    </Dialog>
  );
};

export default UserDialog;
