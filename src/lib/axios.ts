import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { trackPromise } from 'react-promise-tracker';
import { getToken } from './auth';

export const AxiosFactory = (baseUrl: string) => {
  // const token = getToken;
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      config.headers = {
        ...config.headers,
        Credential: true,
        'Access-Control-Request-Methods': '*',
        // Authorization: `Beared ${token}`,
      };
      return config;
    },
    (error: any) => {
      console.log('Error', error);
    }
  );

  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: any) => Promise.reject(error)
  );

  const axiosClient = axios.create({
    baseURL: baseUrl,
    headers: {
      Accept: '*',
      'Content-Type': 'application/json',
    },
  });

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
