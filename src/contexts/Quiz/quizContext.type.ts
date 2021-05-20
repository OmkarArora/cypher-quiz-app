import { Quiz } from "../../types";

export type QuizState = {
  quizData: Quiz[] | null;
  activeQuiz: Quiz | null;
  activeQuestionNumber: number;
};

export type Action =
  | { type: "SET_ACTIVE_QUIZ"; payload: { quiz: Quiz } }
  | { type: "INCREMENT_QUESTION_NUMBER" }
  | { type: "SET_QUIZ_DATA"; payload: { data: Quiz[] } }
  | { type: "RESET" }
  | { type: "SELECT_OPTION"; payload: { questionId: string; quizId: string } };

export type ContextType = {
  state: QuizState;
  dispatch: (action: Action) => void;
};
