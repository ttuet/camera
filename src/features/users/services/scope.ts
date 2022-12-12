import { AxiosFactory } from '../../../lib/axios';
import { AUTH_API } from '../../../utils/constants';
import { Scope } from '../type';

const api = AxiosFactory(AUTH_API);

export const getAllScope = () => api.getFnc('/api/scopes');

export const getScopeById = (id: string) => api.getFnc(`/api/scopes/${id}`);

export const createScope = (data: Scope) => api.postFnc('/api/scopes', data);

export const updateScope = (id: string, data: Scope) => api.putFnc(`/api/scopes/${id}`, data);

export const deleteScope = (id: string) => api.deleteFnc(`/api/scopes/${id}`);
