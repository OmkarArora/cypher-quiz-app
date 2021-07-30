import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts";
import "./quizHome.css";

export const QuizHome = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();

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

      <button className="btn-start" onClick={() => navigate(`/quiz/${quizId}/play`)}>
        Start
      </button>
    </div>
  );
};
