import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useQuiz } from "../../contexts";
import { Button, useTheme } from "@material-ui/core";
import { Option, Answers } from "../../types";

export const QuizPlayArea = () => {
  const { quizId } = useParams();
  const { state, dispatch } = useQuiz();
  const { quizData, activeQuiz, activeQuestionNumber } = state;
  const quiz = quizData?.find((item) => item._id === quizId);
  const theme = useTheme();

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [userAnswers, setUserAnswers] = useState<Answers[] | null>(null);

  const currentQuestion = activeQuiz?.questions[activeQuestionNumber];
  console.log({ userAnswers });

  const navigate = useNavigate();

  useEffect(() => {
    if (quiz) dispatch({ type: "SET_ACTIVE_QUIZ", payload: { quiz: quiz } });
  }, [dispatch, quiz]);

  const onClickNext = () => {
    if (currentQuestion) {
      let correctAnswer = currentQuestion.options.find(
        (option) => option.isCorrect
      );
      if (correctAnswer === undefined)
        correctAnswer = currentQuestion.options[0];

      if (activeQuiz) {
        if (activeQuestionNumber >= activeQuiz.questions.length - 1) {
          let _userAnswers = userAnswers;
          if (userAnswers instanceof Array) {
            _userAnswers = [
              ...userAnswers,
              {
                question: currentQuestion,
                userAnswer: selectedOption,
                correctAnswer,
              },
            ];
          }
          navigate(`/quiz/${quizId}/results`, { state: _userAnswers });
        } else {
          dispatch({ type: "INCREMENT_QUESTION_NUMBER" });
        }
      }

      setUserAnswers((prev) => {
        if (prev) {
          if (correctAnswer !== undefined)
            return [
              ...prev,
              {
                question: currentQuestion,
                userAnswer: selectedOption,
                correctAnswer,
              },
            ];
        }
        if (correctAnswer !== undefined) {
          return [
            {
              question: currentQuestion,
              userAnswer: selectedOption,
              correctAnswer,
            },
          ];
        }
        return [
          {
            question: currentQuestion,
            userAnswer: selectedOption,
            correctAnswer: currentQuestion.options[0],
          },
        ];
      });
    }
  };

  return (
    <div>
      <div>
        <div>time</div>
        <div>score</div>
      </div>
      <div>{currentQuestion?.question}</div>
      {currentQuestion?.questionImage && (
        <div>
          <img
            src={`${currentQuestion.questionImage}`}
            alt={`${currentQuestion.question}`}
          />
        </div>
      )}
      <div>
        {currentQuestion?.options.map((option) => (
          <Button
            variant="contained"
            style={{
              color: "white",
              backgroundColor:
                selectedOption && selectedOption?._id === option._id
                  ? theme.palette.success.main
                  : theme.palette.primary.main,
            }}
            key={`BtnQuestion${currentQuestion?._id}${option._id}`}
            onClick={() => setSelectedOption(option)}
          >
            {option.text}
          </Button>
        ))}
      </div>
      <div>
        <Button variant="contained" color="secondary" onClick={onClickNext}>
          Next
        </Button>
      </div>
    </div>
  );
};
