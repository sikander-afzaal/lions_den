import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionsSlice";

export const store = configureStore({
  reducer: {
    questions: questionReducer,
  },
});
