import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmDialog from '../../../components/common/confirmDialog/ConfirmDialog';
import TableUI from '../../../components/common/TableUI/components/TableUI';
import { FormMode } from '../../../types';
import DialogScope from '../../users/scopes/DialogScope';
import { DEFAULT_SCOPE } from '../../users/type';
import { deleteDevice, getAllDevice } from '../service/api';
import { DEFAULT_DEVICE, Device } from '../type';
import DialogDevice from './DialogDevice';

const columns = [
  {
    key: 'no',
    title: 'STT',
    dataIndex: 'rowNo',
    width: '4%',
  },
  {
    key: 'name',
    title: 'Tên thiết bị',
    dataIndex: 'name',
    width: '25%',
  },
  {
    key: 'deviceType',
    title: 'Loại thiết bị',
    dataIndex: 'deviceType',
    width: '15%',
  },
  {
    key: 'ip',
    title: 'IP',
    dataIndex: 'ip',
    width: '15%',
  },
  {
    key: 'Vị trí',
    title: 'IP',
    dataIndex: 'locationId',
    width: '15%',
  },
];

type StateDialog = {
  isOpen: boolean;
  type: FormMode; /// 0 is create 1 is Edit
};

const initStateDialog: StateDialog = {
  isOpen: false,
  type: FormMode.Create,
};
function PageDevice() {
  const [openDialog, setOpenDialog] = useState(initStateDialog);
  const [selectedItem, setSelectedItem] = useState<Device | null>(null);
  const [openDelete, setOpenDelete] = useState(false);

  const handleClickRow = (_data: any) => {
    console.log('data row', _data);
    setSelectedItem(_data);
  };

  const handleCancel = () => {
    setOpenDialog({ ...openDialog, isOpen: false });
  };

  const handleConfirm = () => {
    setOpenDialog({ ...openDialog, isOpen: false });
  };

  const handleClose = () => {
    setOpenDialog({ ...openDialog, isOpen: false });
  };

  const handleChangeSelecteds = (rows: any[]) => {
    // handle click rows
  };

  const handleDeleteItem = () => {
    if (selectedItem)
      deleteDevice(selectedItem.id ?? '')
        .then(() => {
          toast.success('Xóa thiết bị thành công');
        })
        .catch(() => {
          toast.error('Xoá thiết bị thất bại');
        });
  };

  useEffect(() => {
    getAllDevice()
      .then((data) => {
        console.log('data all device', data);
      })
      .catch(() => {
        toast.error('CO loio');
      });
  }, []);
  return (
    <div className="page-device">
      <TableUI
        onClickRow={handleClickRow}
        showSelection
        hiddenDelete
        hasTitle
        className="table-device"
        title="Danh sách thiết bị"
        columns={columns}
        data={[]}
        onCreate={() => {
          setOpenDialog({ isOpen: true, type: FormMode.Create });
        }}
        onUpdate={() => {
          if (selectedItem) setOpenDialog({ isOpen: true, type: FormMode.Update });
        }}
        onDelete={() => {
          if (selectedItem) setOpenDelete(true);
        }}
        onSelectRowKeysChange={handleChangeSelecteds}
      />
      {openDialog.isOpen && (
        <DialogDevice
          initData={selectedItem !== null ? selectedItem : DEFAULT_DEVICE}
          open={true}
          onCancel={handleClose}
          onConfirm={handleConfirm}
          title={openDialog.type === 0 ? 'Tạo mới thiết bị' : 'Cập nhật thiết bị'}
          formMode={openDialog.type}
        />
      )}

      <ConfirmDialog
        open={openDelete}
        title="Xóa thiết bị"
        content="Bạn có chắc muốn xóa thiết bị này không?"
        onCancel={() => {
          setOpenDelete(false);
        }}
        onConfirm={handleDeleteItem}
      />
    </div>
  );
}

export default PageDevice;
