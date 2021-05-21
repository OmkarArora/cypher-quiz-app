import React from "react";
import { useLocation } from "react-router";
import { Button, useTheme } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { Option } from "../../types";

export const QuizResults: React.FC = () => {
  const { state: quizResults } = useLocation();
  const theme = useTheme();
  console.log({ quizResults });
  return (
    <div>
      {quizResults &&
        quizResults instanceof Array &&
        quizResults.map((item, index) => (
          <div>
			  <div>Question {index + 1}</div>
            <div>{item.question.question}</div>
			<div>Points: {item.userAnswer.isCorrect? item.question.points: 0}</div>
            <div>
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
