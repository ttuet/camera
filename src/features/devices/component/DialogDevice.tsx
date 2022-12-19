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
  message,
} from 'antd';
import { toast } from 'react-toastify';

import { Dialog } from '../../../components/common/TableUI/components/Dialog';
import { DEFAULT_DEVICE, Device } from '../type';
import { FormMode } from '../../../types';
import { createDevice, updateDevice } from '../service/api';

type Props = {
  open: boolean;
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
  initData: Device;
  formMode: FormMode;
};

const DialogDevice = (props: Props) => {
  const { open, title, onCancel, onConfirm, initData, formMode } = props;
  const [form] = Form.useForm();

  const handleCancel = () => {
    onCancel();
    form.resetFields();
  };

  const initDataValue = useMemo(() => {
    if (formMode === FormMode.Create) return DEFAULT_DEVICE;
    if (formMode === FormMode.Update) return initData;
    return DEFAULT_DEVICE;
  }, [formMode, initData]);

  const handleConfirm = () => {
    // onConfirm();
    form.submit();
  };

  function callApiCreate(data: Device) {
    createDevice(data)
      .then((res) => {
        console.log('data form create', res);
      })
      .catch((e) => {
        toast.error('OOppps');
      });
  }

  function callApiUpdate(data: Device) {
    if (data.id) {
      updateDevice(data.id, data)
        .then((res) => {
          console.log('data form update', res);
        })
        .catch((e) => {
          toast.error('OOppps');
        });
    }
  }

  const handleFinishForm = (data: any) => {
    console.log('data device', data);
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
          label="Loại thiết bị"
          name="deviceType"
          labelAlign="left"
          rules={[{ required: true, message: 'Mời nhập đủ thông tin' }]}
        >
          <Select>
            <Select.Option value="LCDC">LCD Camera</Select.Option>
            <Select.Option value="IPC">IPC Camera</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Địa chỉ IP"
          name="ip"
          labelAlign="left"
          rules={[
            { required: true, message: 'Mời nhập đủ thông tin' },
            {
              pattern: /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/,
              message: 'Mời nhập đúng định dạng IP',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Vị trí"
          name="locationId"
          labelAlign="left"
          rules={[{ required: true, message: 'Mời nhập đủ thông tin' }]}
        >
          <Select>
            <Select.Option value="location 1">Location 1</Select.Option>
            <Select.Option value="location 2">Location 2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item labelAlign="left" label="Hoạt động" name="active" valuePropName="checked">
          <Checkbox />
        </Form.Item>
      </Form>
    </Dialog>
  );
};

export default DialogDevice;
