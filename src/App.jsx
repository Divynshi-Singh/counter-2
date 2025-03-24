import React, { useState } from 'react';
import TimerModal from './components/TimerModal';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <button
        type="button"
        className="btn btn-primary btn-lg fs-3"
        onClick={handleOpenModal}
      >
        Timer Modal
      </button>
      {/* Timer Modal */}
      <TimerModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
