import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useQuiz } from "../../contexts";
import { Option, Answers } from "../../types";
import "./quizPlayArea.css";

export const QuizPlayArea = () => {
  const { quizId } = useParams();
  const { state, dispatch } = useQuiz();
  const { quizData, activeQuiz, activeQuestionNumber } = state;
  const quiz = quizData?.find((item) => item._id === quizId);

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [userAnswers, setUserAnswers] = useState<Answers[] | null>(null);

  const currentQuestion = activeQuiz?.questions[activeQuestionNumber];

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
          navigate(`/results`, { state: _userAnswers, replace: true });
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
      setSelectedOption(null);
    }
  };

  return (
    <div className="quiz-playarea">
       <button className="btn btn-secondary btn-home" onClick={() => navigate("/")}>
        ◀ <span className="btn-home-text">Home</span>
      </button>
      <div className="quiz-playCard">
        <div className="quiz-name">{quiz?.name}</div>
        <div  className="quiz-playDetails">
        {currentQuestion?.image && (
          <img
            src={`${currentQuestion.image}`}
            alt={`${currentQuestion.question}`}
          />
        )}
        <div className="quiz-questionDetails">
        <div>
          <span className="label">Question :</span>
          <span className="label-value">
            {activeQuestionNumber + 1}/{quiz?.questions.length}
          </span>
        </div>
        <div className="question">{currentQuestion?.question}</div>

        <div className="container-options">
          {currentQuestion?.options.map((option) => (
            <button
              className={ selectedOption && selectedOption?._id === option._id?"btn btn-secondary selected-option": "btn btn-secondary"}
              key={`BtnQuestion${currentQuestion?._id}${option._id}`}
              onClick={() => setSelectedOption(option)}
            >
              {option.text}
            </button>
          ))}
        </div>
          <button onClick={onClickNext} className="btn btn-tertiary btn-next" disabled={selectedOption===null}>Next</button>

          </div>
      </div>
      </div>
    </div>
  );
};
