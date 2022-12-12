import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../features/users/type';

interface AuthState {
  user: User | null;
  accessToken: string;
}

const initialState: AuthState = {
  user: null,
  accessToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setUser, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
