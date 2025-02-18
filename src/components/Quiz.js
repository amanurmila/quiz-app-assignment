import React, { useState } from "react";
import questions from "../data/questions";
import Timer from "./Timer";

const Quiz = ({ onQuizEnd }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer.toString() === currentQuestion.answer.toString()) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setIsAnswered(false);
        setSelectedAnswer("");
      } else {
        onQuizEnd(
          score +
            (answer.toString() === currentQuestion.answer.toString() ? 1 : 0)
        );
      }
    }, 1500);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <Timer timeLimit={300} onTimeout={() => handleAnswer("")} />
      <h2 className="text-xl font-bold">{currentQuestion.question}</h2>
      <div className="mt-4">
        {currentQuestion.type === "mcq" ? (
          currentQuestion.options.map((option) => (
            <button
              key={option}
              className={`block w-full px-4 py-2 my-2 text-left rounded-md ${
                isAnswered
                  ? option === currentQuestion.answer
                    ? "bg-green-500 text-white"
                    : option === selectedAnswer
                    ? "bg-red-500 text-white"
                    : "bg-gray-200"
                  : "bg-gray-100 hover:bg-gray-300"
              }`}
              onClick={() => handleAnswer(option)}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))
        ) : (
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-md"
            onChange={(e) => setSelectedAnswer(e.target.value)}
            onBlur={() => handleAnswer(selectedAnswer)}
            disabled={isAnswered}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
