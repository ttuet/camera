import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setAccessToken } from '../slices/authSlice';

const Token = () => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.auth);

  const setToken = (token: string) => {
    dispatch(setAccessToken(token));
  };

  const getToken = useMemo(() => accessToken, [accessToken]);

  return { setToken, getToken };
};

export const { setToken, getToken } = Token();
