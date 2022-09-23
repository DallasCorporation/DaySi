import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    avatar: 'Avatar1',
    surname: 'Dallas',
    name: 'Emanuele',
    phone: '3400981328',
  },
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
