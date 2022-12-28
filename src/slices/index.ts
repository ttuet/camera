import { configureStore } from '@reduxjs/toolkit';
import userReducers from './userSlice';

export const store = configureStore({
  reducer: {
    users: userReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
