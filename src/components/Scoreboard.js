import React from "react";

const Scoreboard = ({ score, total }) => {
  return (
    <div className="p-4 bg-gray-200 rounded-md">
      <h3 className="text-lg font-bold">Quiz Completed!</h3>
      <p>
        Your Score: <span className="text-blue-500">{score}</span> / {total}
      </p>
    </div>
  );
};

export default Scoreboard;
