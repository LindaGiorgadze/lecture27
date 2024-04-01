import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./calculator/calculatorSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    user: userReducer,
  },
});

export default store;
