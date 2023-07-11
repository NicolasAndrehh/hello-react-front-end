import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetingSlice';

const store = configureStore({
  reducer: greetingSlice,
});

export default store;
