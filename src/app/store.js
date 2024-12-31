import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/Counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
    // Add the reducer for the counter slice
  }
});
