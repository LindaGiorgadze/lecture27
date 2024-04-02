import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) || {},
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      action.payload &&
        sessionStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    //   window.location.replace("/");
    },
    logOut: (state) => {
      sessionStorage.removeItem("user");
      state.user = {};
      window.location.replace("/");
    },
  },
});

export const { logIn, logOut } = user.actions;

export default user.reducer;
