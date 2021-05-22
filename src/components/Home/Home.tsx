import { Button } from "@material-ui/core";
import { useQuiz } from "../../contexts";
import "./home.css";

export const Home = () => {
  const { state } = useQuiz();
  const { quizData } = state;
  return (
    <div className="home">
      <div className="logo">Cypher</div>
      <div>Pick a quiz!</div>
      {quizData?.map((quiz) => {
        return (
          <Button
            key={`quiz${quiz._id}`}
            href={`/quiz/${quiz._id}`}
            id={`quizBtn${quiz._id}`}
            color="primary"
            variant="contained"
          >
            {quiz.quizName}
          </Button>
        );
      })}
    </div>
  );
};
