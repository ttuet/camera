import React, { useEffect, useMemo, useState } from 'react';
import { Button, Table } from 'antd';
import '../styles/index.scss';
import Tooltip from 'antd/es/tooltip';
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { type } from 'os';
import { Key } from 'antd/lib/table/interface';

type Props = {
  className?: string;
  hiddenRowNo?: boolean;
  hasTitle?: boolean;
  title?: string;
  hiddenView?: boolean;
  hiddenDelete?: boolean;
  hiddenUpdate?: boolean;
  onView?: (_data: any) => void;
  onCreate?: () => void;
  onUpdate?: (_data: any) => void;
  onDelete?: (_data: any) => void;
  onClickRow: (_data: any) => void;
  showSelection: boolean;
  data: any[];
  columns: any[];
};

const TableUI = (props: Props) => {
  const {
    data,
    columns,
    className,
    hiddenRowNo,
    title,
    hasTitle,
    onClickRow,
    showSelection,
    onCreate,
    onView,
    onDelete,
    onUpdate,
  } = props;

  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  const onSelectChange = (_selectedRowKeys: Key[]) => {
    setSelectedRowKeys(_selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const indexData = useMemo(
    () => data.map((item, index) => ({ ...item, rowNo: index + 1 })),
    [data]
  );

  const columnsWithOption = useMemo(() => {
    if (hiddenRowNo) {
      return columns.filter((item) => item.key !== 'no');
    }
    return columns;
  }, [columns, hiddenRowNo]);

  const handleClickRow = (_data: any) => {
    onClickRow(_data);
  };

  return (
    <div className="table-container">
      <div className="table-container__title">
        <div className="table-action-group">
          <Tooltip placement="bottom" title="Tạo mới">
            <Button type="primary" icon={<PlusOutlined />} onClick={onCreate} />
          </Tooltip>
          <Tooltip placement="bottom" title="Xem chi tiết">
            <Button type="primary" icon={<EyeOutlined />} onClick={onView} />
          </Tooltip>
          <Tooltip placement="bottom" title="Cập nhật">
            <Button type="primary" icon={<EditOutlined />} onClick={onUpdate} />
          </Tooltip>
          <Tooltip placement="bottom" title="Xóa">
            <Button type="primary" icon={<DeleteOutlined />} onClick={onDelete} />
          </Tooltip>
        </div>
        {hasTitle && <div className="table-title">{title}</div>}
      </div>
      <Table
        className={`${className ?? ''}`}
        dataSource={indexData}
        columns={columnsWithOption}
        rowKey="id"
        rowSelection={showSelection ? rowSelection : undefined}
        onRow={(record, rowIndex) => ({
          onClick: (event) => {
            handleClickRow(record);
          },
        })}
      />
    </div>
  );
};

export default TableUI;
