import { useParams } from "react-router";
import { useQuiz } from "../../contexts";
import { Button } from "@material-ui/core";
import "./quizHome.css";

export const QuizHome = () => {
  const { quizId } = useParams();
  const { state } = useQuiz();
  const { quizData } = state;
  const quiz = quizData?.find((item) => item._id === quizId);

  return (
    <div className="quiz-home">
      <div className="title">{quiz?.quizName}</div>
      {quiz?.quizImage && (
        <div>
          <img src={`${quiz?.quizImage}`} alt={`${quiz.quizName}`} />
        </div>
      )}
      {quiz?.quizDescription && (
        <div className="description">
          <div className="heading">Description</div>
          <div className="data">{quiz?.quizDescription}</div>
        </div>
      )}

      <Button href={`/quiz/${quizId}/play`} variant="contained" color="primary" size="large" className="btn-start">
        Start
      </Button>
    </div>
  );
};
