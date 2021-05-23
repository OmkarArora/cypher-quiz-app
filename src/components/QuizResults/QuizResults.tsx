import React from "react";
import { useLocation } from "react-router";
import { Button, useTheme } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { Option } from "../../types";
import "./quizResults.css";

export const QuizResults: React.FC = () => {
  const { state: quizResults } = useLocation();
  const theme = useTheme();
  
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
      <div className="results-heading">
        <div className="heading">Quiz Results</div>
        <div className="scoring">
          <span className="userscore">{userScore}</span>/
          <span className="totalscore">{totalScore}</span>
        </div>
      </div>

      {quizResults &&
        quizResults instanceof Array &&
        quizResults.map((item, index) => (
          <div key={`Question${index + 1}`} className="result-card">
            <div className="question-number">Question {index + 1}</div>
            <div className="question">{item.question.question}</div>
            <div className="points">
              Points: {item.userAnswer.isCorrect ? item.question.points : 0}
            </div>
            <div className="container-options">
              {item.question.options.map((option: Option) => {
                if (option._id === item.userAnswer._id && option.isCorrect) {
                  return (
                    <Button
                      startIcon={<CheckIcon />}
                      variant="contained"
                      style={{
                        color: "white",
                        backgroundColor: theme.palette.success.main,
                      }}
                      key={`BtnQuestion${item.question.question._id}${option._id}`}
                    >
                      {option.text}
                    </Button>
                  );
                } else if (
                  option._id === item.userAnswer._id &&
                  !option.isCorrect
                ) {
                  return (
                    <Button
                      startIcon={<ClearIcon />}
                      variant="contained"
                      style={{
                        color: "white",
                        backgroundColor: theme.palette.error.main,
                      }}
                      key={`BtnQuestion${item.question.question._id}${option._id}`}
                    >
                      {option.text}
                    </Button>
                  );
                } else if (option.isCorrect) {
                  return (
                    <Button
                      variant="contained"
                      style={{
                        color: "white",
                        backgroundColor: theme.palette.success.main,
                      }}
                      key={`BtnQuestion${item.question.question._id}${option._id}`}
                    >
                      {option.text}
                    </Button>
                  );
                }
                return (
                  <Button
                    variant="contained"
                    style={{
                      color: "white",
                      backgroundColor: theme.palette.primary.main,
                    }}
                    key={`BtnQuestion${item.question.question._id}${option._id}`}
                  >
                    {option.text}
                  </Button>
                );
              })}
            </div>
          </div>
        ))}
    </div>
  );
};
