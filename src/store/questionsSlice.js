import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: {},
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = questionsSlice.actions;

export default questionsSlice.reducer;