import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startPauseTimer = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    } else {
      const id = setInterval(() => {
        console.log("run every second");
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };
  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);
  return (
    <div className="fs-1">
      <div>{formatTime()}</div>
      <button
        className="btn btn-success mt-3"
        onClick={startPauseTimer}
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

export default Timer;
