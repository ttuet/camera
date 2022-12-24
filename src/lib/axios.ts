import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { trackPromise } from 'react-promise-tracker';
import { getRefreshToken } from './cookie';

const headers = (config: AxiosRequestConfig) => {
  const token = sessionStorage.getItem('accessToken');

  config.headers = {
    ...config.headers,
    Credential: true,
    'Access-Control-Request-Methods': '*',
    Authorization: `Bearer ${token}`,
  };
  return config;
};

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: any) => Promise.reject(error)
);

export const AxiosFactory = (baseUrl: string) => {
  const axiosClient = axios.create({
    baseURL: baseUrl,
  });

  axiosClient.interceptors.request.use(headers);
  const getFnc = (path: string, config?: AxiosRequestConfig) =>
    trackPromise(axiosClient.get(path, config));

  const deleteFnc = (path: string, config?: AxiosRequestConfig) =>
    trackPromise(axiosClient.delete(path, config));

  const putFnc = (path: string, data: any, config?: AxiosRequestConfig) =>
    trackPromise(axiosClient.put(path, data, config));

  const patchFnc = (path: string, data: any, config?: AxiosRequestConfig) =>
    trackPromise(axiosClient.patch(path, data, config));

  const postFnc = (path: string, data: any, config?: AxiosRequestConfig) =>
    trackPromise(axiosClient.post(path, data, config));

  return {
    getFnc,
    putFnc,
    postFnc,
    patchFnc,
    deleteFnc,
  };
};
