import { createSlice } from "@reduxjs/toolkit";
import { OFFSET } from "./constant";

const chartSlice = createSlice({
  name: "chart",
  initialState: {
    messages: [],
  },
  reducers: {
    addChartData: (state, action) => {
      state.messages.splice(OFFSET, 1);
      state.messages.unshift(action.payload);
    },
  },
});
export const { addChartData } = chartSlice.actions;
export default chartSlice.reducer;
