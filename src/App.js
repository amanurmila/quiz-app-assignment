import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizEnd = (finalScore) => {
    setScore(finalScore);
    setQuizCompleted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Interactive Quiz Platform
      </h1>
      {quizCompleted ? (
        <Scoreboard score={score} total={10} />
      ) : (
        <Quiz onQuizEnd={handleQuizEnd} />
      )}
    </div>
  );
}

export default App;
