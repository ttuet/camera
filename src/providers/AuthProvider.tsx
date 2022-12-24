import React, { createContext, useMemo, useState, useEffect } from 'react';
import { getCurrentUser, getUserById, revokeToken } from '../features/authen/api';
import { User } from '../features/users/type';
import { getRefreshToken } from '../lib/cookie';

type AuthProviderType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const AuthContext = createContext<AuthProviderType>({
  user: null,
  setUser: () => {},
});

type AuthProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<User | null>(null);

  const changeUser = (_user: User | null) => {
    setUser(_user);
  };

  const providerValue = useMemo(
    () => ({
      user,
      setUser: changeUser,
    }),
    [user]
  );

  const getAccessToken = () => {
    const refreshToken = getRefreshToken();
    if (refreshToken) {
      revokeToken(refreshToken).then((data) => {
        console.log(data);
      });
    }
  };
  const checkAccessTokenValid = () => {
    getCurrentUser()
      .then(() => {
        getUserById('639a47b2ff76ca1e380a4bff').then((user) => {
          setUser(user.data);
        });
      })
      .catch(() => {
        getAccessToken();
      });
  };
  useEffect(() => {
    if (user === null) {
      checkAccessTokenValid();
    }
  }, []);
  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
};
