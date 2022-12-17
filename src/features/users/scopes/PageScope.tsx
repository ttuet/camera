import { useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmDialog from '../../../components/common/confirmDialog/ConfirmDialog';
import TableUI from '../../../components/common/TableUI/components/TableUI';
import { FormMode } from '../../../types';
import { deleteScope } from '../services/scope';
import { DEFAULT_SCOPE, Scope } from '../type';
import DialogScope from './DialogScope';
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

type StateDialog = {
  isOpen: boolean;
  type: FormMode; /// 0 is create 1 is Edit
};

const initStateDialog: StateDialog = {
  isOpen: false,
  type: FormMode.Create,
};
export function PageScopes() {
  const [openDialog, setOpenDialog] = useState(initStateDialog);
  const [selectedItem, setSelectedItem] = useState<Scope | null>(null);
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
          toast.success('Xóa quyền thành công');
        })
        .catch(() => {
          toast.error('Xoá quyền thất bại');
        });
  };

  return (
    <div className="page-scopes">
      <TableUI
        onClickRow={handleClickRow}
        showSelection
        hiddenDelete
        hasTitle
        className="table-scopes"
        title="Danh sách quyền"
        columns={columns}
        data={data}
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
        <DialogScope
          initData={selectedItem !== null ? selectedItem : DEFAULT_SCOPE}
          open={true}
          onCancel={handleClose}
          onConfirm={handleConfirm}
          title={openDialog.type === 0 ? 'Tạo mới quyền' : 'Cập nhật quyền'}
          formMode={openDialog.type}
        />
      )}

      <ConfirmDialog
        open={openDelete}
        title="Xóa quyền"
        content="Bạn có chắc muốn xóa quyền này không?"
        onCancel={() => {
          setOpenDelete(false);
        }}
        onConfirm={handleDeleteItem}
      />
    </div>
  );
}

export default PageScopes;
