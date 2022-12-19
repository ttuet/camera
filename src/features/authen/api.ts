import { AxiosFactory } from '../../lib/axios';
import { AUTH_API } from '../../utils/constants';
import { LoginResponse } from './types';

export const authService = AxiosFactory(AUTH_API);

export const getUser = () => {
  return authService.getFnc('/api/authenticate/current-user');
};

export const loginFn = (username: string, password: string) => {
  return authService.postFnc('/api/authenticate', {}, { auth: { username, password } });
};

export const getAllUser = () => {
  return authService.getFnc('/api/users');
};
