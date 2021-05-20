import { Quiz } from "../types";

export const quiz2: Quiz = {
  _id: "quiz2",
  quizName: "God of War - Easy",
  quizImage:
    "https://d1pqlgpcx1bu0k.cloudfront.net/static/img/GOW-OG-image.jpg",
  questions: [
    {
      _id: "q2q1",
      question: "Why is Kratos so pale?",
      points: 10,
	  questionImage: "https://images.pushsquare.com/b960e3911b1eb/quiz.jpg",
      options: [
        {
          _id: "q2q1o1",
          text: "He's allergic to sunlight",
          isCorrect: false,
        },
        {
          _id: "q2q1o2",
          text: "He was locked away for a long time",
          isCorrect: false,
        },
        {
          _id: "q2q1o3",
          text: "He's covered head to toe in the ashes of his dead family",
          isCorrect: true,
        },
      ],
    },
    {
      _id: "q2q2",
      question:
        "What is the name of Kratos' first wife?",
      points: 10,
	  questionImage: "https://images.pushsquare.com/a5a92702a8085/quiz.jpg",
      options: [
        {
          _id: "q2q2o1",
          text: "Selene",
          isCorrect: false,
        },
        {
          _id: "q2q2o2",
          text: "Lysandra",
          isCorrect: true,
        },
        {
          _id: "q2q2o3",
          text: "Faye",
          isCorrect: false,
        },
        {
          _id: "q2q2o4",
          text: "Calliope",
          isCorrect: false,
        },
      ],
    },
    {
      _id: "q2q3",
      question:
        "The Greek God of War games are narrated by which character?",
      points: 10,
	  questionImage: "https://images.pushsquare.com/7a21cbb3dfbcb/quiz.jpg",
      options: [
        {
          _id: "q2q3o1",
          text: "Calliope",
          isCorrect: false,
        },
        {
          _id: "q2q3o2",
          text: "Lysandra",
          isCorrect: false,
        },
        {
          _id: "q2q3o3",
          text: "Athena",
          isCorrect: false,
        },
        {
          _id: "q2q3o4",
          text: "Gaia",
          isCorrect: true,
        },
      ],
    },
	{
		_id: "q2q4",
		question:
		  "Why does Kratos have that red body tattoo?",
		points: 10,
		questionImage: "https://images.pushsquare.com/f25d2ca79e1b8/quiz.jpg",
		options: [
		  {
			_id: "q2q4o1",
			text: "It was bound to him at the same time as the ashes",
			isCorrect: false,
		  },
		  {
			_id: "q2q4o2",
			text: "It's symbolic of his younger brother, Deimos",
			isCorrect: true,
		  },
		  {
			_id: "q2q4o3",
			text: "Because he is the fire god",
			isCorrect: false,
		  },
		  {
			_id: "q2q4o4",
			text: "It's a tradition in his family",
			isCorrect: false,
		  },
		],
	  },
  ],
};
