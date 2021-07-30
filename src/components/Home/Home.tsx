import { useQuiz } from "../../contexts";
import { QuizCard } from "../QuizCard/QuizCard";
import "./home.css";

export const Home = () => {
  const { state } = useQuiz();
  const { quizData } = state;

  return (
    <div className="home">
      <div className="logo">Cypher</div>
      <div className="byline">quizzes</div>
      {quizData?.map((quiz) => {
        return (
          <QuizCard
            key={`card${quiz._id}`}
            id={quiz._id}
            quizImage={quiz.quizImage}
            quizName={quiz.quizName}
          />
        );
      })}
    </div>
  );
};
