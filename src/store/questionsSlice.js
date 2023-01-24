import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: {},
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      if (state.questions.hasOwnProperty(action.payload.qNumber)) {
        state.questions[action.payload.qNumber] = {
          ...action.payload.qDetails,
        };
      } else {
        state.questions[action.payload.qNumber] = {
          ...action.payload.qDetails,
        };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addQuestion } = questionsSlice.actions;

export default questionsSlice.reducer;
