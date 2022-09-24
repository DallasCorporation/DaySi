import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../interfaces/ReduxInterface';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    avatar: 'Avatar1',
    surname: 'Dallas',
    name: 'Emanuele',
    phone: '3400981328',
  } as UserState,
  reducers: {
    updateUser: (state, action) => {
      state.avatar = action.payload
    },
    updateAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

export const { updateAvatar } = userSlice.actions;

export default userSlice.reducer;
