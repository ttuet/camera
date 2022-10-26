import TableUI from '../../../components/common/TableUI/components/TableUI';

export function PageUsers() {
  return (
    <div className="page-users">
      <TableUI
        showSelection
        hiddenDelete
        hasTitle
        className="table-users"
        title="Danh sách người dùng"
      />
    </div>
  );
}

export default PageUsers;
