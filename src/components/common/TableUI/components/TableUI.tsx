import React, { useEffect, useMemo, useState } from 'react';
import { Button, Table } from 'antd';
import '../styles/index.scss';
import Tooltip from 'antd/es/tooltip';
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { type } from 'os';
import { Key } from 'antd/lib/table/interface';

const data = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.com',
    address: 'London Kulas Light Apt. 556',
    phone: 1 - 7799 - 736 - 89931,
    website: 'https://tekolio.com/',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'Shanna@melissa.org',
    address: 'New York Victor Plains Suite 879',
    phone: 99199 - 692 - 65935,
    website: 'anastasia.net',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    email: 'Nathan@yesenia.net',
    address: 'Douglas Extension uitzipcod',
    phone: 1 - 463 - 123 - 4447,
    website: 'ramiro.info',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    email: 'Julianne.OConner@kory.org',
    address: 'Hoeger Mal Apt. 692 South Elvis',
    phone: 493 - 1799 - 9623,
    website: 'kale.biz',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    email: 'Lucio_Hettinger@annie.com',
    address: 'Skiles ks Suit 51 Roscoevi',
    phone: 254 - 954 - 1289,
    website: 'demarco.info',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    email: 'Karley_Dach@jasper.net',
    address: 'Norberto Crossing',
    phone: 1 - 477 - 935 - 8478 - 64399,
    website: 'ola.org',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    email: 'Telly.Hoeger@billy.com',
    address: 'Rex Tra Suite 2 Howemouth',
    phone: 2199 - 9967 - 6132,
    website: 'elvis.io',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    email: 'Sherwood@rosamond.net',
    address: 'Ellsworth mit Sui 729 Aliyavi',
    phone: 493.6943 - 1499,
    website: 'jacynthe.com',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    email: 'Chaim_McDermott@dana.org',
    address: 'Dayna Park uitzipcod',
    phone: 976 - 6794 - 412996,
    website: 'conrad.com',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    email: 'Rey.Padberg@karina.com',
    address: 'Kattie Turnpike Suite 198 Lebsackbury',
    phone: 9924 - 648 - 38994,
    website: 'ambrose.net',
  },
  {
    id: 13,
    name: 'Clementine Bauch',
    email: 'Nathan@yesenia.net',
    address: 'Douglas Extension uitzipcod',
    phone: 1 - 463 - 123 - 4447,
    website: 'ramiro.info',
  },
  {
    id: 14,
    name: 'Patricia Lebsack',
    email: 'Julianne.OConner@kory.org',
    address: 'Hoeger Mal Apt. 692 South Elvis',
    phone: 493 - 1799 - 9623,
    website: 'kale.biz',
  },
  {
    id: 15,
    name: 'Chelsey Dietrich',
    email: 'Lucio_Hettinger@annie.com',
    address: 'Skiles ks Suit 51 Roscoevi',
    phone: 254 - 954 - 1289,
    website: 'demarco.info',
  },
  {
    id: 16,
    name: 'Mrs. Dennis Schulist',
    email: 'Karley_Dach@jasper.net',
    address: 'Norberto Crossing',
    phone: 1 - 477 - 935 - 8478 - 64399,
    website: 'ola.org',
  },
  {
    id: 17,
    name: 'Kurtis Weissnat',
    email: 'Telly.Hoeger@billy.com',
    address: 'Rex Tra Suite 2 Howemouth',
    phone: 2199 - 9967 - 6132,
    website: 'elvis.io',
  },
  {
    id: 18,
    name: 'Nicholas Runolfsdottir V',
    email: 'Sherwood@rosamond.net',
    address: 'Ellsworth mit Sui 729 Aliyavi',
    phone: 493.6943 - 1499,
    website: 'jacynthe.com',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    email: 'Chaim_McDermott@dana.org',
    address: 'Dayna Park uitzipcod',
    phone: 976 - 6794 - 412996,
    website: 'conrad.com',
  },
  {
    id: 110,
    name: 'Clementina DuBuque',
    email: 'Rey.Padberg@karina.com',
    address: 'Kattie Turnpike Suite 198 Lebsackbury',
    phone: 9924 - 648 - 38994,
    website: 'ambrose.net',
  },
];

const columns = [
  {
    key: 'no',
    title: 'STT',
    dataIndex: 'rowNo',
  },
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
  },
  // {
  //   key: 'email',
  //   title: 'Email',
  //   dataIndex: 'email',
  // },
  {
    key: 'address',
    title: 'Address',
    dataIndex: 'address',
  },
  {
    key: 'phone',
    title: 'Phone Number',
    dataIndex: 'phone',
  },
  {
    key: 'website',
    title: 'Website',
    dataIndex: 'website',
  },
];
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
  onClickRow?: (_data: any) => void;
  showSelection: boolean;
  //   data: any[];
  //   columns: any[];
};

const TableUI = (props: Props) => {
  const { className, hiddenRowNo, title, hasTitle, onClickRow, showSelection } = props;

  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  const onSelectChange = (_selectedRowKeys: Key[]) => {
    console.log('selectedRowKeys changed: ', _selectedRowKeys);
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
    console.log('click row', _data);
  };
  return (
    <div className={`table-container ${className ?? ''}`}>
      <div className="table-container__title">
        <div className="table-action-group">
          <Tooltip placement="bottom" title="Tạo mới">
            <Button type="primary" icon={<PlusOutlined />} />
          </Tooltip>
          <Tooltip placement="bottom" title="Xem chi tiết">
            <Button type="primary" icon={<EyeOutlined />} />
          </Tooltip>
          <Tooltip placement="bottom" title="Cập nhật">
            <Button type="primary" icon={<EditOutlined />} />
          </Tooltip>
          <Tooltip placement="bottom" title="Xóa">
            <Button type="primary" icon={<DeleteOutlined />} />
          </Tooltip>
        </div>
        {hasTitle && <div className="table-title">{title}</div>}
      </div>
      <Table
        dataSource={indexData}
        columns={columnsWithOption}
        rowKey="id"
        rowSelection={showSelection ? rowSelection : undefined}
        onRow={(record, rowIndex) => ({
          onClick: (event) => {
            handleClickRow(record);
          }, // click row
        })}
      />
    </div>
  );
};

export default TableUI;
