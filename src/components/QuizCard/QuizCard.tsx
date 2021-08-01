import { FC, ReactElement, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import "./quizCard.css";

type CardProps = {
  id: string;
  quizName: string;
  quizImage?: string;
  children?: ReactNode;
  numOfQuestions: number;
};

export const QuizCard: FC<CardProps> = ({
  id,
  quizName,
  quizImage,
  numOfQuestions,
}: CardProps): ReactElement => {
  const navigate = useNavigate();

  return (
    <div className="card-quiz">
      <img src={quizImage} alt={quizName} />
      <div className="quiz-details">
        <div>
          <div>{quizName}</div>
          <div>{numOfQuestions} questions</div>
        </div>
        <button className="btn btn-primary" onClick={() => navigate(`/quiz/${id}/play`)}>
          START
        </button>
      </div>
    </div>
  );
};
