import React, { useState, useEffect } from 'react';
import TimerModal from './components/TimerModal';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const startPauseTimer = () => {
    if (isRunning) {
      setElapsedTime(elapsedTime + (Date.now() - startTime));
      setIsRunning(false);
    } else {
      setStartTime(Date.now());
      setIsRunning(true);
    }
  };
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => Math.floor((Date.now() - startTime + elapsedTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, startTime, elapsedTime]);

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
