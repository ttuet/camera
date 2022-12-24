import { AxiosResponse } from 'axios';
import { AxiosFactory } from '../../lib/axios';
import { AUTH_API } from '../../utils/constants';
import { User } from '../users/type';
import { LoginResponse } from './types';

export const authService = AxiosFactory(AUTH_API);

export const getCurrentUser = () => {
  return authService.getFnc('/api/authenticate/current-user');
};

export const loginFn = (username: string, password: string) => {
  return authService.postFnc('/api/authenticate', {}, { auth: { username, password } });
};

export const getAllUser = () => {
  return authService.getFnc('/api/users');
};

export const getUserById = (id: string) => {
  return authService.getFnc(`api/users/${id}`);
};

export const revokeToken = (refresh: string) => {
  return authService.putFnc(`api/authenticate`, { refresh });
};
