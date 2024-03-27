import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "../hooks/useAxios";
import useTransformedObject, {
  RawQuestion,
} from "../hooks/useTransformedObject";

type QuestionsState = {
  playerName: string;
  time: number;
  questions: Question[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | null;
  isGameFinished: boolean;
  theme: "dark" | "light";
};

type Question = {
  id: number;
  question: string;
  options: string[];
  isMultipleCorrectAnswers: boolean;
  correctAnswers: string[];
  selectedOption: string[];
};

type ApiParams = {
  limit: number;
  tags?: string;
  difficulty?: string;
};

const initialState: QuestionsState = {
  playerName: "",
  time: 0,
  questions: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
  isGameFinished: false,
  theme: "dark",
};

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async (params: ApiParams) => {
    try {
      const response = await api.get("", {
        params,
      });
      const data = response.data.map((question: RawQuestion) =>
        useTransformedObject(question)
      );
      return data;
    } catch (err: any) {
      if (err.response && err.response.status >= 400) {
        throw new Error(`Request failed with status ${err.response.status}`);
      } else {
        throw err;
      }
    }
  }
);

const questionsSlice = createSlice({
  name: "questionsSlice",
  initialState,
  reducers: {
    setPlayerName: (state, action: PayloadAction<{ name: string }>) => {
      state.playerName = action.payload.name;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    resetFormError: (state) => {
      state.error = null;
      state.status = "idle";
    },
    selectOption: (
      state,
      action: PayloadAction<{ questionId: number; selectedOption: string }>
    ) => {
      const { questionId, selectedOption } = action.payload;
      const question = state.questions.find(
        (question) => question.id === questionId
      );
      if (question) {
        if (!question.isMultipleCorrectAnswers) {
          question.selectedOption = [selectedOption];
        } else {
          const answerIndex = question.selectedOption.indexOf(selectedOption);
          if (answerIndex === -1) {
            question.selectedOption.push(selectedOption);
          } else {
            question.selectedOption.splice(answerIndex, 1);
          }
        }
      }
    },
    resetAnswer: (state, action: PayloadAction<{ questionId: number }>) => {
      const { questionId } = action.payload;
      const question = state.questions.find(
        (question) => question.id === questionId
      );
      if (question) {
        question.selectedOption = [];
      }
    },
    setGameFinished: (state) => {
      state.isGameFinished = !state.isGameFinished;
    },
    resetGame: (state) => {
      state.playerName = "";
      state.questions = [];
      state.status = "idle";
      state.error = null;
      state.isGameFinished = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.questions = action.payload;
        state.time = action.payload.length * 30;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message!;
      });
  },
});

export const {
  setPlayerName,
  toggleTheme,
  resetFormError,
  selectOption,
  resetAnswer,
  setGameFinished,
  resetGame,
} = questionsSlice.actions;
export const selectPlayerName = (state: { questions: QuestionsState }) =>
  state.questions.playerName;
export const selectQuestions = (state: { questions: QuestionsState }) =>
  state.questions.questions;
export const selectTime = (state: { questions: QuestionsState }) =>
  state.questions.time;
export const questionsStatus = (state: { questions: QuestionsState }) =>
  state.questions.status;
export const questionsError = (state: { questions: QuestionsState }) =>
  state.questions.error;
export const selectGameStatus = (state: { questions: QuestionsState }) =>
  state.questions.isGameFinished;
export const selectTheme = (state: { questions: QuestionsState }) =>
  state.questions.theme;
export default questionsSlice.reducer;
