import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { Option } from "../../types";
import "./quizResults.css";

export const QuizResults: React.FC = () => {
  const { state: quizResults } = useLocation();
  const navigate = useNavigate();

  let totalScore = 0;
  let userScore = 0;
  if (quizResults && quizResults instanceof Array) {
    totalScore = quizResults.reduce(
      (acc, curr) => acc + curr.question.points,
      0
    );
    userScore = quizResults.reduce((acc, curr) => {
      if (curr.userAnswer.isCorrect) return acc + curr.question.points;
      return acc;
    }, 0);
  }

  return (
    <div className="quiz-results">

      <button className="btn btn-secondary btn-home" onClick={() => navigate("/")}>
        ◀ <span className="btn-home-text">Home</span>
      </button>
      <div className="results-heading">
        <div>Quiz Results</div>
        <div className="scoring">
          <span className="label">Final Score :</span>
          <span className="label-value">
            {userScore}/{totalScore}
          </span>
        </div>
      </div>

      {quizResults &&
        quizResults instanceof Array &&
        quizResults.map((item, index) => (
          <div key={`Question${index + 1}`} className="result-card">
            <div className="question">{item.question.question}</div>
            <div className="points">
              Points: {item.userAnswer.isCorrect ? item.question.points : 0}
            </div>
            <div className="container-options">
              {item.question.options.map((option: Option) => {
                if (option._id === item.userAnswer._id && option.isCorrect) {
                  return (
                    <button
                      className="btn btn-correct"
                      key={`BtnQuestion${item.question.question._id}${option._id}`}
                    >
                      {option.text}
                    </button>
                  );
                } else if (
                  option._id === item.userAnswer._id &&
                  !option.isCorrect
                ) {
                  return (
                    <button
                      className="btn btn-incorrect"
                      key={`BtnQuestion${item.question.question._id}${option._id}`}
                    >
                      {option.text}
                    </button>
                  );
                } else if (option.isCorrect) {
                  return (
                    <button
                      className="btn btn-correct"
                      key={`BtnQuestion${item.question.question._id}${option._id}`}
                    >
                      {option.text}
                    </button>
                  );
                }
                return (
                  <button
                    className="btn btn-secondary"
                    key={`BtnQuestion${item.question.question._id}${option._id}`}
                  >
                    {option.text}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
    </div>
  );
};
