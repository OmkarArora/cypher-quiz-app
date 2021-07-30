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
};

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
  image?: string;
  options: Option[];
};

export type Quiz = {
  /**
   * Quiz ID
   */
  _id: string;
  name: string;
  image?: string;
  questions: Question[];
  quizDescription?: string;
};

export type Answers = {
  question: Question;
  userAnswer: Option | null;
  correctAnswer: Option;
};
