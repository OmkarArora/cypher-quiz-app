export type Option = {
	/**
	 * Option ID
	 */
	_id: string;
	/**
	 * Option text to show to user
	 */
	text: string;
	/**
	 * Correctness of an option
	 */
	isCorrect: boolean;
}

export type Question = {
	/**
	 * Question ID
	 */
	 _id: string;
	/**
	 * Question text asked to user
	 */
	question: string;
	points: number;
	negativePoints?: number;
	questionImage?: string;
	options: Option[];
}

export type Quiz = {
	/**
	 * Quiz ID
	 */
	 _id: string;
	quizName: string;
	quizImage?: string;
	questions: Question[];
}