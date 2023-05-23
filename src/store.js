import { configureStore } from '@reduxjs/toolkit';
import mapReducer from './features/maps/mapSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    maps: mapReducer,
  },
});
