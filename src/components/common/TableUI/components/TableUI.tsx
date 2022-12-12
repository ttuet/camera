import React, { useEffect, useMemo, useState } from 'react';
import { Button, Space, Table } from 'antd';
import '../styles/index.scss';
import Tooltip from 'antd/es/tooltip';
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { Key } from 'antd/lib/table/interface';
import { Column } from '../type';

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
  columns: Column[];
  onSelectRowKeysChange?: (keys: Key[]) => void;
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
    onSelectRowKeysChange,
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

  const handleClickRow = (_data: any, index?: number) => {
    if (typeof index === 'number') setSelectedRowKeys([index + 1]);
    onClickRow(_data);
    console.log('click row data ', _data);
  };

  useEffect(() => {
    if (onSelectRowKeysChange) onSelectRowKeysChange(rowSelection.selectedRowKeys);
  }, [rowSelection.selectedRowKeys]);

  return (
    <div className="table-container">
      <div className="table-container__title">
        <div className="table-action-group">
          <Space wrap>
            <Tooltip placement="bottom" title="Tạo mới">
              <Button type="primary" shape="default" icon={<PlusOutlined />} onClick={onCreate} />
            </Tooltip>
            <Tooltip placement="bottom" title="Xem chi tiết">
              <Button type="primary" icon={<EyeOutlined />} onClick={onView} />
            </Tooltip>
            <Tooltip placement="bottom" title="Cập nhật">
              <Button type="primary" icon={<EditOutlined />} onClick={onUpdate} />
            </Tooltip>
            <Tooltip placement="bottom" title="Xóa">
              <Button type="primary" icon={<DeleteOutlined />} onClick={onDelete} danger />
            </Tooltip>
          </Space>
        </div>
        {hasTitle && <div className="table-title">{title}</div>}
      </div>
      <Table
        pagination={{ pageSize: 10 }}
        className={`${className ?? ''}`}
        dataSource={indexData}
        columns={columnsWithOption}
        rowKey="id"
        rowSelection={showSelection ? { ...rowSelection, type: 'checkbox' } : undefined}
        onRow={(record, rowIndex) => ({
          onClick: (event) => {
            handleClickRow(record, rowIndex);
          },
        })}
      />
    </div>
  );
};

export default TableUI;
