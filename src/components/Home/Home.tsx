import { useQuiz } from "../../contexts";
import { Loader } from "../Loader/Loader";
import { QuizCard } from "../QuizCard/QuizCard";
import "./home.css";

export const Home = () => {
  const { state, appState } = useQuiz();
  const { quizData } = state;

  return (
    <div className="home">
      <div className="logo">Cypher</div>
      <div className="byline">quizzes</div>
      {appState === "loading" && <Loader />}
      {quizData && (
        <div className="container-quizCards">
          {quizData.map((quiz) => {
            return (
              <QuizCard
                key={`card${quiz._id}`}
                id={quiz._id}
                quizImage={quiz.image}
                quizName={quiz.name}
                numOfQuestions={quiz.questions.length}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
