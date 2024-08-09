import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set your app root element

const AvailabilityModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Availability Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <h2 className="text-2xl font-bold mb-4 w-full">Availability</h2>
      <p>Here you can see the consultant's availability.</p>
      <button className="mt-4 text-white bg-secondary font-bold text-lg py-1 px-2 rounded-lg" onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default AvailabilityModal;
