import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link, useParams } from 'react-router-dom';

Modal.setAppElement('#root');

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const AvailabilityModal = ({ isOpen, onRequestClose }) => {
  const { id } = useParams();
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchConsultant = async () => {
      try {
        const response = await axios.get(`/api/registerConsultant/${id}`);
        setSchedules(response.data.consultant.schedules || []);
      } catch (error) {
        console.error('Error fetching consultant:', error);
      }
    };

    if (isOpen) {
      fetchConsultant();
    }
  }, [id, isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Availability Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <h2 className="text-2xl font-bold mb-4">Availability</h2>
      <p>Here you can see the consultant's availability.</p>
      <button className="mt-4 text-white bg-secondary font-bold text-lg py-1 px-2 rounded-lg" onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default AvailabilityModal;
