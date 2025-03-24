import React from 'react';
import Timer from './Timer';

const TimerModal = ({ seconds, isRunning, startPauseTimer, formatTime }) => {
  return (
    <div
      className="modal fade"
      id="timerModal"
      tabIndex="-1"
      aria-labelledby="timerModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="timerModalLabel">Timer</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <Timer
              seconds={seconds}
              isRunning={isRunning}
              startPauseTimer={startPauseTimer}
              formatTime={formatTime}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerModal;