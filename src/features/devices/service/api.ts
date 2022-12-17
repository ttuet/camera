import { AxiosFactory } from '../../../lib/axios';
import { DEVICE_API } from '../../../utils/constants';
import { Device } from '../type';

const api = AxiosFactory(DEVICE_API);

export const getAllDevice = () => api.getFnc('/all');

export const getDeviceById = (id: string) => api.getFnc(`/detail/${id}`);

export const createDevice = (data: Device) => api.postFnc('/create', data);

export const updateDevice = (id: string, data: Device) => api.patchFnc(`/update/${id}`, data);

export const deleteDevice = (id: string) => api.deleteFnc(`/delete/${id}`);
