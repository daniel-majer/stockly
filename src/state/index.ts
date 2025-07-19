import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isSidebarCollapsed: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarCollapsed = !state.isSidebarCollapsed;
    },
  },
});

export const { toggleSidebar } = globalSlice.actions;

export default globalSlice.reducer;
