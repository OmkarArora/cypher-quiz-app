import { Action, QuizState } from "./quizContext.type";

export const quizReducer = (state: QuizState, action: Action): QuizState => {
  switch (action.type) {
    case "SET_QUIZ_DATA":
      return { ...state, quizData: action.payload.data };
    default:
      return state;
  }
};
