import { createSlice } from "@reduxjs/toolkit";

type IQuestion = {
  id: number;
  title: string;
  content: string;
  user_id: number;
  rating: number;
  views: number;
  created_at: string;
  updated_at: string;
};

type IInitialState = {
  questions: null | IQuestion[];
};

const initialState: IInitialState = {
  questions: null,
};

export const questionsReducer = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const { setQuestions } = questionsReducer.actions;
