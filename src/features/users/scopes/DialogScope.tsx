import React from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from 'antd';

import FormInput from '../../../components/common/FormInput';
import { Dialog } from '../../../components/common/TableUI/components/Dialog';
import { DEFAULT_SCOPE, Scope } from '../type';

type Props = {
  open: boolean;
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
  initData: Scope;
};

const DialogScope = (props: Props) => {
  const { open, title, onCancel, onConfirm, initData } = props;
  const [form] = Form.useForm();

  const handleCancel = () => {
    onCancel();
    form.resetFields();
  };

  const handleConfirm = () => {
    // onConfirm();
    form.submit();
  };

  const handleFinishForm = (data: any) => {
    console.log('finish', data);
  };

  const handleFinishFail = (data: any) => {
    console.log('finish fail', data);
  };

  return (
    <Dialog open={open} title={title} onCancel={handleCancel} onConfirm={handleConfirm}>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
        initialValues={initData}
        onFinish={handleFinishForm}
        onFinishFailed={handleFinishFail}
        form={form}
        requiredMark={true}
      >
        <Form.Item
          label="Tên"
          name="name"
          labelAlign="left"
          rules={[{ required: true, message: 'Mời nhập đủ thông tin' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mô tả"
          name="description"
          labelAlign="left"
          rules={[{ required: true, message: 'Mời nhập đủ thông tin' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Dialog>
  );
};

export default DialogScope;
