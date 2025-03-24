import React, { useState, useEffect } from 'react';
import TimerModal from './components/TimerModal';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startPauseTimer = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    } else {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <button
        type="button"
        className="btn btn-primary btn-lg fs-3"
        data-bs-toggle="modal"
        data-bs-target="#timerModal"
      >
        Timer Modal
      </button>
      <TimerModal
        seconds={seconds}
        isRunning={isRunning}
        startPauseTimer={startPauseTimer}
        formatTime={formatTime}
      />
    </div>
  );
};

export default App;
