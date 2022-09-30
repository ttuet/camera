import { AxiosFactory } from '../../lib/axios';

const TestService = AxiosFactory('http://localhost:8080');

export const getData = (): Promise<any> => TestService.getFnc('/url');
