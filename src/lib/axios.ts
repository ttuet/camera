import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { trackPromise } from 'react-promise-tracker';

export const AxiosFactory = (baseUrl: string) => {
  const token = sessionStorage.getItem('accessToken');

  const axiosClient = axios.create({
    baseURL: baseUrl,
  });

  axiosClient.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      config.headers = {
        ...config.headers,
        Credential: true,
        'Access-Control-Request-Methods': '*',
        Authorization: `Bearer ${token}`,
      };
      return config;
    },
    (error: any) => {
      console.log('Error', error);
    }
  );

  axiosClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: any) => Promise.reject(error)
  );

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
