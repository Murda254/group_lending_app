import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isRightSidebarVisible: false,
  },
  reducers: {
    toggleRightSidebar: (state) => {
      state.isRightSidebarVisible = !state.isRightSidebarVisible;
    },
  },
});

export const { toggleRightSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;