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
      <div className="title">{quiz?.name}</div>
      {quiz?.image && (
        <div>
          <img src={`${quiz?.image}`} alt={`${quiz.name}`} />
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
