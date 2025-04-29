import { createSlice } from "@reduxjs/toolkit";

const filters = createSlice({
  name: "filters",
  initialState: {
    value: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeFilter } = filters.actions;
export default filters.reducer;

export const selectStatusFilter = (state) => state.filters.value;
