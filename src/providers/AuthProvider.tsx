import React, { createContext, useMemo, useState } from 'react';
import { LoginResponse } from '../features/authen/types';
import { User } from '../features/users/type';

type AuthProviderType = {
  user: User | null;
  authInfo: LoginResponse | null;
  setAuthInfo: (authInfo: LoginResponse | null) => void;
  setUser: (user: User | null) => void;
};

export const AuthContext = createContext<AuthProviderType>({
  user: null,
  authInfo: null,
  setAuthInfo: () => {},
  setUser: () => {},
});

type AuthProps = {
  children: React.ReactNode;
};
export const AuthProvider = (props: AuthProps) => {
  const { children } = props;

  const [user, setUser] = useState<User | null>(null);
  const [authenticateInfo, setAuthenticateInfo] = useState<LoginResponse | null>(null);

  const changeUser = (_user: User | null) => {
    setUser(_user);
  };

  const changeAuthInfo = (_authInfo: LoginResponse | null) => {
    setAuthenticateInfo(_authInfo);
  };

  const providerValue = useMemo(
    () => ({
      user,
      authInfo: authenticateInfo,
      setUser: changeUser,
      setAuthInfo: changeAuthInfo,
    }),
    [authenticateInfo, user]
  );

  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
};
