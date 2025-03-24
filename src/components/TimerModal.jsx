import React from 'react';
import Timer from './Timer';

const TimerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal fade show d-block "
      style={{ marginTop: '180px' }}
      tabIndex="-1"
      aria-labelledby="timerModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="timerModalLabel">Timer</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerModal;
