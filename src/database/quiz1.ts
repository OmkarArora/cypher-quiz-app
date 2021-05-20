import { Quiz } from "../types";

export const quiz1: Quiz = {
  _id: "quiz1",
  quizName: "Valorant - Easy",
  quizImage:
    "https://imgix.bustle.com/uploads/image/2020/11/6/681edd47-e21f-4a1c-93f7-4be81014560f-valorant_phx_jett.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
  questions: [
    {
      _id: "q1q1",
      question: "What must defenders defuse?",
      points: 10,
      options: [
        {
          _id: "q1q1o1",
          text: "Nuclear bomb",
          isCorrect: false,
        },
        {
          _id: "q1q1o2",
          text: "Spike",
          isCorrect: true,
        },
        {
          _id: "q1q1o3",
          text: "Toxic bomb",
          isCorrect: false,
        },
      ],
    },
    {
      _id: "q1q2",
      question:
        "She’s the only to heal and bring you back to life with full health",
      points: 10,
      options: [
        {
          _id: "q1q2o1",
          text: "Skye",
          isCorrect: false,
        },
        {
          _id: "q1q2o2",
          text: "Jett",
          isCorrect: false,
        },
        {
          _id: "q1q2o3",
          text: "Sage",
          isCorrect: true,
        },
        {
          _id: "q1q2o4",
          text: "Raze",
          isCorrect: false,
        },
      ],
    },
    {
      _id: "q1q3",
      question:
        "This is the only map that has 3 designated sites for planting Spike",
      points: 10,
      options: [
        {
          _id: "q1q3o1",
          text: "Haven",
          isCorrect: true,
        },
        {
          _id: "q1q3o2",
          text: "Icebox",
          isCorrect: false,
        },
        {
          _id: "q1q3o3",
          text: "Ascent",
          isCorrect: false,
        },
        {
          _id: "q1q3o4",
          text: "Split",
          isCorrect: false,
        },
      ],
    },
  ],
};
