import React, { useMemo } from 'react';
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
import { toast } from 'react-toastify';

import FormInput from '../../../components/common/FormInput';
import { Dialog } from '../../../components/common/TableUI/components/Dialog';
import { DEFAULT_ROLE, Role } from '../type';
import { FormMode } from '../../../types';
import { createRole, updateRole } from '../services/role';

type Props = {
  open: boolean;
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
  initData: Role;
  formMode: FormMode;
};

const DialogRole = (props: Props) => {
  const { open, title, onCancel, onConfirm, initData, formMode } = props;
  const [form] = Form.useForm();

  const handleCancel = () => {
    onCancel();
    form.resetFields();
  };

  const initDataValue = useMemo(() => {
    if (formMode === FormMode.Create) return DEFAULT_ROLE;
    if (formMode === FormMode.Update) return initData;
    return DEFAULT_ROLE;
  }, [formMode, initData]);

  const handleConfirm = () => {
    // onConfirm();
    form.submit();
  };

  function callApiCreate(data: Role) {
    createRole(data)
      .then((res) => {
        console.log('data form create', res);
      })
      .catch((e) => {
        toast.error('OOppps');
      });
  }

  function callApiUpdate(data: Role) {
    updateRole(initData.id, data)
      .then((res) => {
        console.log('data form update', res);
      })
      .catch((e) => {
        toast.error('OOppps');
      });
  }

  const handleFinishForm = (data: any) => {
    if (formMode === FormMode.Create) callApiCreate(data);
    if (formMode === FormMode.Update) callApiUpdate(data);
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
        initialValues={initDataValue}
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

export default DialogRole;
