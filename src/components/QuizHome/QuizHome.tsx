import { useParams } from "react-router"
import { useQuiz } from "../../contexts";
import { Button } from "@material-ui/core";

export const QuizHome = () => {
	const {quizId} = useParams();
	const {state} = useQuiz();
	const {quizData} = state;
	const quiz = quizData?.find(item => item._id === quizId);
	
	return (
		<div>
			<div>{quiz?.quizName}</div>
			{quiz?.quizImage && <div><img src={`${quiz?.quizImage}`} alt={`${quiz.quizName}`}/></div> }
			{quiz?.quizDescription && <div>{quiz?.quizDescription}</div> }
		
			<Button href={`/quiz/${quizId}/play`} variant="contained" color="primary">Start</Button>
		</div>
	)
}