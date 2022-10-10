import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../interfaces/ReduxInterface';


const initialState = {
  avatar: 'Avatar0',
  surname: '',
  name: '',
  email: '',
  logged: false,
  lightTheme: true,
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
    changeTheme: (state, action) => {
      state.lightTheme = action.payload;
    },
    logout: () => initialState,
  },
});

export const { updateAvatar, updateUser, logout, changeTheme } = userSlice.actions;

export default userSlice.reducer;
