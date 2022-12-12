import { useState } from 'react';
import { Dialog } from '../../../components/common/TableUI/components/Dialog';
import TableUI from '../../../components/common/TableUI/components/TableUI';
import { DEFAULT_SCOPE } from '../type';
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
  type: number; /// 0 is create 1 is Edit
};

const initStateDialog: StateDialog = {
  isOpen: false,
  type: 0,
};
export function PageScopes() {
  const [openDialog, setOpenDialog] = useState(initStateDialog);

  const handleClickRow = (_data: any) => {
    console.log('data row', _data);
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
          setOpenDialog({ isOpen: true, type: 0 });
        }}
        onSelectRowKeysChange={handleChangeSelecteds}
      />
      {openDialog.isOpen && (
        <DialogScope
          initData={DEFAULT_SCOPE}
          open={true}
          onCancel={handleClose}
          onConfirm={handleConfirm}
          title={openDialog.type === 0 ? 'Tạo mới quyền' : 'Cập nhật quyền'}
        />
      )}
    </div>
  );
}

export default PageScopes;
