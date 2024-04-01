import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const calculator = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    changeValue: (state, action) => {
      state.count = parseInt(action.payload);
    },
  },
});

export const { increment, decrement, changeValue } = calculator.actions;

export default calculator.reducer;
