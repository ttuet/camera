import { useState } from 'react';
import { Dialog } from '../../../components/common/TableUI/components/Dialog';
import TableUI from '../../../components/common/TableUI/components/TableUI';
import '../styles/_index.scss';
import UserDialog from './UserDialog';

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

export function PageUsers() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickRow = (_data: any) => {
    console.log('data row', data);
  };

  const handleCancel = () => {
    setOpenDialog(false);
  };

  const handleConfirm = () => {
    setOpenDialog(false);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className="page-users">
      <TableUI
        onClickRow={handleClickRow}
        showSelection
        hiddenDelete
        hasTitle
        className="table-users"
        title="Danh s??ch ng?????i d??ng"
        columns={columns}
        data={data}
        onCreate={() => {
          setOpenDialog(true);
        }}
      />
      <UserDialog
        open={openDialog}
        title="Hello"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

export default PageUsers;
