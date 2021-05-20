import { Button } from "@material-ui/core";
import { useQuiz } from "../../contexts";

export const Home = () => {
  const { state } = useQuiz();
  const { quizData } = state;
  return (
    <div>
      <div>LOGO</div>
      <div>List of quizes</div>
      {quizData?.map((quiz) => {
        return (
          <Button
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
