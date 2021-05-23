import { FC, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import "./quizCard.css";

type CardProps = {
  id: string;
  quizName: string;
  quizImage?: string;
  children?: ReactNode;
};

export const QuizCard: FC<CardProps> = ({
  id,
  quizName,
  quizImage,
}: CardProps): ReactElement => {
  return (
    <div className="card-quiz">
      <Link to={`/quiz/${id}`}>
        {quizImage && <img src={`${quizImage}`} alt={`${quizName}`} />}

        <div className="title">{quizName}</div>
      </Link>
    </div>
  );
};
