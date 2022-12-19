import Cookies from 'universal-cookie';

const cookie = new Cookies();

export const setRefreshToken = (item: string, expr: number) => {
  cookie.set('refreshToken', item, { expires: new Date(expr), httpOnly: true });
};

export const getRefreshToken = () => {
  return cookie.get('refreshToken');
};
