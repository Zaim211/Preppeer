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
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
    >
      <div className="bg-white p-8 h-3/4 rounded-md w-full md:w-1/2 lg:w-1/3 relative">
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-black text-4xl"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-4xl mb-16 font-semibold">Available Times</h2>
        {schedules.length === 0 ? (
          <p>No available times.</p>
        ) : (
          <Link>
            <ul className="grid grid-cols-1 gap-4">
          {schedules.map((schedule) => (
            <li key={schedule._id} className="border border-gray-300 p-4 rounded-md shadow-md">
              <div className="text-lg font-semibold">{daysOfWeek[schedule.dayOfWeek]}</div>
              <div className="mt-2">
                <span className="font-medium">Start:</span> {schedule.workStart}
              </div>
              <div className="mt-1">
                <span className="font-medium">End:</span> {schedule.workEnd}
              </div>
            </li>
          ))}
        </ul>
          </Link>
        )}
      </div>
    </Modal>
  );
};

export default AvailabilityModal;
