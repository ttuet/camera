import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { trackPromise } from 'react-promise-tracker';
import { getToken } from './auth';

export const AxiosFactory = (baseUrl: string) => {
  const token = sessionStorage.getItem('accessToken');
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      config.headers = {
        ...config.headers,
        Credential: true,
        'Access-Control-Request-Methods': '*',
        Authorization: `Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzeXN0ZW0iLCJzdWIiOiJhZG1pbiIsInNjcCI6WyJERVZJQ0VfTU5HX0RFTEVURSIsIkRFVklDRV9NTkdfTU9ESUZZIiwiREVWSUNFX01OR19WSUVXIiwiUEVSU09OX01OR19ERUxFVEUiLCJQRVJTT05fTU5HX01PRElGWSIsIlBFUlNPTl9NTkdfVklFVyIsIlVTRVJfTU5HX0RFTEVURSIsIlVTRVJfTU5HX0ZPUkdPVF9QQVNTV09SRCIsIlVTRVJfTU5HX01PRElGWSIsIlVTRVJfTU5HX1ZJRVciXSwiZXhwIjoxNjcxMjU5Mzg3LCJpYXQiOjE2NzEyNTg0ODd9.DVj_jwI5oPGhau41crmIKYbT0EVi9F2-4ZgaLJP5YJ_UEU9vJwTqayhGssqYH6Y7Edu7jb0nDbr4F6hjUGAUsX6HyjKjPt9xnQoYfeZi5klVXTppIcRahP__SALox1YfIDXrqt9dZrNuo7mIah4nUYTXcpIoLxj5I1HdnzcsfvJ-1RmB2jTIW9VAU3eYMePCuC38zjwqgbWlS_CmbMI5du27xQpwiDBsXXGXLjC-fkDgZNWgHhbkVpYXMzTyObj6UYLYlvyxI68gxgA3YWJ5cuKlvuu5XQNM7Mm2U1ZTRfNvYjF60B8372tXfwMYL126OG1B-dWdNz7LWnMihlZvWg`,
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
