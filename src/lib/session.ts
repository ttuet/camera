export const getAccessToken = () => {
  return sessionStorage.getItem('accessToken');
};

export const setAccessToken = (token: string) => {
  sessionStorage.setItem('accessToken', token);
};
