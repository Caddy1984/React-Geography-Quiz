import React from "react";

const geographyQuestions = [
  {
    QuestionNumber: 1,
    Category: "Geography",
    Question: "What is the capital city of Peru?",
    imgURL: "",
    answerOptions: [
      { answerText: "La Paz", isCorrect: false },
      { answerText: "Bogata", isCorrect: false },
      { answerText: "Lima", isCorrect: true },
      { answerText: "Cancun", isCorrect: false }
    ],
    CorrectAnswerText: "Correct! The Peruvian capital is Lima",
    WrongAnswerText: "Wrong! The Peruvian capital is Lima"
  },
  {
    QuestionNumber: 2,
    Category: "Geography",
    Question:
      "In which Middle Eastern country would you find the ancient ruins of Petra?",
    imgURL: "#",
    answerOptions: [
      { answerText: "Iraq", isCorrect: false },
      { answerText: "Iran", isCorrect: false },
      { answerText: "Lebanon", isCorrect: false },
      { answerText: "Jordan", isCorrect: true }
    ],
    CorrectAnswerText:
      "Correct! Petra is a Wonder of the World and can be found in Jordan",
    WrongAnswerText:
      "Wrong! Petra is a Wonder of the World and can be found in Jordan"
  },
  {
    QuestionNumber: 3,
    Category: "Geography",
    Question: "What is the currency of Sweden?",
    imgURL: "#",
    answerOptions: [
      { answerText: "Euro", isCorrect: false },
      { answerText: "Krona", isCorrect: true },
      { answerText: "Ruble", isCorrect: false },
      { answerText: "Yen", isCorrect: false }
    ],
    CorrectAnswerText:
      "Correct! The Swedish Krona is the official currency of Sweden",
    WrongAnswerText:
      "Wrong! The Swedish Krona is the official currency of Sweden"
  },
  {
    QuestionNumber: 4,
    Category: "Geography",
    Question: "Mount Vesuvius overlooks which present-day Italian city?",
    imgURL: "#",
    answerOptions: [
      { answerText: "Rome", isCorrect: false },
      { answerText: "Venice", isCorrect: false },
      { answerText: "Naples", isCorrect: true },
      { answerText: "Milan", isCorrect: false }
    ],
    CorrectAnswerText:
      "Correct! Mount Vesuvius is an active volcano that overlooks Naples",
    WrongAnswerText:
      "Wrong! Mount Vesuvius is an active volcano that overlooks Naples"
  },
  {
    QuestionNumber: 5,
    Category: "Geography",
    Question:
      "Constantinople and Byzantium are former names of which major city?",
    imgURL: "#",
    answerOptions: [
      { answerText: "Tehran", isCorrect: false },
      { answerText: "Istanbul", isCorrect: true },
      { answerText: "Baghdad", isCorrect: false },
      { answerText: "Jerusalem", isCorrect: false }
    ],
    CorrectAnswerText:
      "Correct! The Byzantine Empires capital city was Constantinople, which today is Istanbul",
    WrongAnswerText:
      "Wrong! The Byzantine Empires capital city was Constantinople, which today is Istanbul"
  },
  {
    QuestionNumber: 6,
    Category: "Geography",
    Question: "What is the largest desert in the world?",
    imgURL: "#",
    answerOptions: [
      { answerText: "Gobi", isCorrect: false },
      { answerText: "Sahara", isCorrect: false },
      { answerText: "Atacama", isCorrect: false },
      { answerText: "Antarctic", isCorrect: true }
    ],
    CorrectAnswerText:
      "Correct! At 5.5 million square miles, Antarctica is by far the worlds largest desert",
    WrongAnswerText:
      "Wrong! At 5.5 million square miles, Antarctica is by far the worlds largest desert"
  },
  {
    QuestionNumber: 7,
    Category: "Geography",
    Question:
      "What is the name of the microstate located between Spain and France?",
    imgURL: "#",
    answerOptions: [
      { answerText: "Andorra", isCorrect: true },
      { answerText: "Montenegro", isCorrect: false },
      { answerText: "Monaco", isCorrect: false },
      { answerText: "Almaty", isCorrect: false }
    ],
    CorrectAnswerText: "Correct! Its Andorra",
    WrongAnswerText: "Wrong! Its Andorra"
  },
  {
    QuestionNumber: 8,
    Category: "Geography",
    Question: "To the nearest billion, how large is the worlds population?",
    imgURL: "#",
    answerOptions: [
      { answerText: "77 Billion", isCorrect: false },
      { answerText: "50 Billion", isCorrect: false },
      { answerText: "22 Billion", isCorrect: false },
      { answerText: "8 Billion", isCorrect: true }
    ],
    CorrectAnswerText:
      "Correct! The more accurate figure is roughly 7.8 billion",
    WrongAnswerText: "Wrong! The more accurate figure is roughly 7.8 billion"
  },
  {
    QuestionNumber: 9,
    Category: "Geography",
    Question: "In which UK city would you find the river Clyde?",
    imgURL: "#",
    answerOptions: [
      { answerText: "Manchester", isCorrect: false },
      { answerText: "Belfast", isCorrect: false },
      { answerText: "Glasgow", isCorrect: true },
      { answerText: "Newcastle", isCorrect: false }
    ],
    CorrectAnswerText:
      "Correct! The river Clyde runs through the major city of Glasgow",
    WrongAnswerText:
      "Wrong! The river Clyde runs through the major city of Glasgow"
  },
  {
    QuestionNumber: 10,
    Category: "Geography",
    Question: "How many states are there in Australia?",
    imgURL: "#",
    answerOptions: [
      { answerText: 6, isCorrect: true },
      { answerText: 8, isCorrect: false },
      { answerText: 10, isCorrect: false },
      { answerText: 12, isCorrect: false }
    ],
    CorrectAnswerText:
      "Correct! Six – New South Wales, Victoria, Queensland, Western Australia, Tasmania, South Australia",
    WrongAnswerText:
      "Wrong! Six – New South Wales, Victoria, Queensland, Western Australia, Tasmania, South Australia"
  }
];

export default geographyQuestions;