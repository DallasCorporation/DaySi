import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../interfaces/ReduxInterface';


const initialState = {
  avatar: 'Avatar0',
  surname: '',
  name: '',
  email: '',
  logged: false,
} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    updateUser: (state, action) => {
      return { ...action.payload, logged: true };
    },
    updateAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    logout: () => initialState,
  },
});

export const { updateAvatar, updateUser, logout } = userSlice.actions;

export default userSlice.reducer;
