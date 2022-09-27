import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../interfaces/ReduxInterface';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    avatar: 'Avatar1',
    surname: 'Dallas',
    name: 'Emanuele',
    email: 'lele@email.com',
    logged: false,
  } as UserState,
  reducers: {
    updateUser: (state, action) => {
      return { ...action.payload, logged: true, avatar: 'Avatar1', }
    },
    updateAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

export const { updateAvatar, updateUser } = userSlice.actions;

export default userSlice.reducer;
