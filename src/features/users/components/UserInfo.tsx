import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

export const UserInfo = () => {
  const { user } = useContext(AuthContext);
  return <div>My Name is {user?.fullName}</div>;
};
