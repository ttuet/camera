import { configureStore } from '@reduxjs/toolkit';
import userReducers from './userSlice';
import authReducers from './authSlice';

export const store = configureStore({
  reducer: {
    users: userReducers,
    auth: authReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
