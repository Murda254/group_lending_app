import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;