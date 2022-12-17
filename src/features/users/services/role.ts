import { AxiosFactory } from '../../../lib/axios';
import { AUTH_API } from '../../../utils/constants';
import { Role } from '../type';

const api = AxiosFactory(AUTH_API);

export const getAllRole = () => {
  return api.getFnc('/api/roles');
};

export const getRoleById = (id: string) => {
  return api.getFnc(`/api/roles/${id}`);
};

export const createRole = (data: Role) => {
  return api.postFnc('/api/roles', data);
};

export const updateRole = (id: string, data: Role) => {
  return api.putFnc(`/api/roles/${id}`, data);
};

export const deleteRole = (id: string) => {
  return api.deleteFnc(`/api/roles/${id}`);
};
