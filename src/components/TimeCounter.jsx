import React from 'react';

const Timer = ({ isRunning, startPauseTimer, formatTime }) => {
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
