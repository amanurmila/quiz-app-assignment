import React, { useEffect, useState } from "react";

const Timer = ({ timeLimit, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeout]);

  return <div className="text-red-500">Time Left: {timeLeft}s</div>;
};

export default Timer;
