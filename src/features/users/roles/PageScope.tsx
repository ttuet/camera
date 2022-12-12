import { useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmDialog from '../../../components/common/confirmDialog/ConfirmDialog';
import TableUI from '../../../components/common/TableUI/components/TableUI';
import { FormMode } from '../../../types';
import { deleteScope } from '../services/scope';
import { DEFAULT_ROLE, Role } from '../type';
import DialogRole from './DialogRole';
import './index.scss';

const data = [
  {
    id: 1,
    name: 'Leanne Graham',
    description: 'ANC',
  },
  {
    id: 2,
    name: 'Leanne Graham',
    description: 'ANC',
  },
  {
    id: 3,
    name: 'Leanne Graham',
    description: 'ANC',
  },
];

const columns = [
  {
    key: 'no',
    title: 'STT',
    dataIndex: 'rowNo',
    width: '4%',
  },
  {
    key: 'name',
    title: 'Tên',
    dataIndex: 'name',
    width: '36%',
  },
  {
    key: 'description',
    title: 'Mô tả',
    dataIndex: 'description',
    width: '60%',
  },
];

type RoleDialog = {
  isOpen: boolean;
  type: FormMode; /// 0 is create 1 is Edit
};

const initRoleDialog: RoleDialog = {
  isOpen: false,
  type: FormMode.Create,
};
export function PageRoles() {
  const [openDialog, setOpenDialog] = useState(initRoleDialog);
  const [selectedItem, setSelectedItem] = useState<Role | null>(null);
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
      deleteScope(selectedItem.id)
        .then(() => {
          toast.success('Xóa vai trò thành công');
        })
        .catch(() => {
          toast.error('Xoá vai trò thất bại');
        });
  };

  return (
    <div className="page-roles">
      <TableUI
        onClickRow={handleClickRow}
        showSelection
        hiddenDelete
        hasTitle
        className="table-roles"
        title="Danh sách vai trò"
        columns={columns}
        data={data}
        onCreate={() => {
          if (selectedItem) setOpenDialog({ isOpen: true, type: FormMode.Create });
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
        <DialogRole
          initData={selectedItem !== null ? selectedItem : DEFAULT_ROLE}
          open={true}
          onCancel={handleClose}
          onConfirm={handleConfirm}
          title={openDialog.type === 0 ? 'Tạo mới vai trò' : 'Cập nhật vai trò'}
          formMode={openDialog.type}
        />
      )}

      <ConfirmDialog
        open={openDelete}
        title="Xóa vai trò"
        content="Bạn có chắc muốn xóa vai trò này không?"
        onCancel={() => {
          setOpenDelete(false);
        }}
        onConfirm={handleDeleteItem}
      />
    </div>
  );
}

export default PageRoles;
