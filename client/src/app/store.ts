import { configureStore } from '@reduxjs/toolkit';
import campgroundReducer from './features/campgrounds/campSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    campgrounds: campgroundReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
