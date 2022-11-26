import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  users: Array<String>;
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Array<String>>) => {
      state.users = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
