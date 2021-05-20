import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ContextType, QuizState } from "./quizContext.type";
import { quizReducer } from "./quizReducer";
import { quizzes } from "../../database";

const QuizContext = createContext<ContextType>({} as ContextType);

export const useQuiz = () => useContext(QuizContext);

const initialState: QuizState = {
  quizData: [],
  activeQuiz: null,
  activeQuestionNumber: 0,
};

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  let { quizData } = state;
  useEffect(() => {
    if (!quizData || quizData.length === 0) {
      dispatch({ type: "SET_QUIZ_DATA", payload: { data: quizzes } });
    }
  }, [quizData]);

  const value = { state, dispatch };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
