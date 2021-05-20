import { Action, QuizState } from "./quizContext.type";

export const quizReducer = (state: QuizState, action: Action): QuizState => {
  switch (action.type) {
    case "SET_QUIZ_DATA":
      return { ...state, quizData: action.payload.data };

    case "SET_ACTIVE_QUIZ":
      return { ...state, activeQuiz: action.payload.quiz };

    case "INCREMENT_QUESTION_NUMBER":
      return { ...state, activeQuestionNumber: state.activeQuestionNumber + 1 };
    default:
      return state;
  }
};
