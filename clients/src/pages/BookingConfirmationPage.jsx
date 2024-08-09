import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

function BookingConfirmationPage({amount, price, appointmentDate,appointmentTime,}) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Booking Confirmed!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to PrepPeer!
        </p>
        <p className="text-lg text-gray-600 mb-6">
          We have received your booking and will be in touch soon via email to coordinate the timing of your meeting with the mentor. We are excited to work with you!
        </p>
        {/* <div className="flex justify-center mb-6">
          <div className="bg-gray-200 border border-gray-300 rounded-lg p-4 w-full">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Booking Details:</h2>
            <p className="text-gray-600"><strong>Consultant:</strong> John Doe</p>
            <p className="text-gray-600"><strong>Duration:</strong> 30 minutes</p>
          </div>
        </div> */}
        <button 
          onClick={handleGoHome}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default BookingConfirmationPage;
