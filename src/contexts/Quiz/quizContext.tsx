import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios, { AxiosError } from "axios";
import { ContextType, QuizState } from "./quizContext.type";
import { quizReducer } from "./quizReducer";

const QuizContext = createContext<ContextType>({} as ContextType);

export const useQuiz = () => useContext(QuizContext);

const initialState: QuizState = {
  quizData: [],
  activeQuiz: null,
  activeQuestionNumber: 0,
};

type ServerError = { errorMessage: string; errorCode: number };

const fetchQuizes = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND}/quiz`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;
      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }

    console.error(error);
    return { errorMessage: "something went wrong", errorCode: 500 };
  }
};

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [appState, setAppState] = useState("loading");

  useEffect(() => {
    (async function () {
      const quizesOrError = await fetchQuizes();
      if ("quizes" in quizesOrError) {
        setAppState("success");
        return dispatch({
          type: "SET_QUIZ_DATA",
          payload: { data: quizesOrError.quizes },
        });
      }
      setAppState("error");
    })();
  }, []);

  const value = { appState, state, dispatch };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
