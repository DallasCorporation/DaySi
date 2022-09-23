import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducer/userSlice';

export default configureStore({
  reducer: {
    user: counterReducer,
  },
});
