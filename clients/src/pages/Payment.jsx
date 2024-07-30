import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Payment = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [consultant, setConsultant] = useState(null);
  
  const { date, user, price, duration } = state || {};

  useEffect(() => {
    const fetchConsultant = async () => {
      try {
        const res = await axios.get(`/api/registerConsultant/${id}`);
        setConsultant(res.data.consultant);
      } catch (error) {
        console.error("Error fetching consultant:", error);
      }
    };
    fetchConsultant();
  }, [id]);

  if (!consultant) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6 md:p-12 bg-gray-100 mb-32">
      <h1 className="text-3xl font-bold text-center mb-10">Payment Details</h1>

      <div className="flex flex-col md:flex-row gap-6">
    
        <div className="flex w-[50%] justify-between items-center bg-white border border-gray-300 rounded-lg shadow-lg p-6">
        
          <div className="flex">
            <div className="justify-between flex-rows w-full md:text-left mt-6 md:mt-0 md:ml-4">
              <div className="w-full">
              <img
            src={consultant.profilePicture[0]}
            alt={consultant.name}
            className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
          />
                <h2 className="text-2xl font-bold mb-2">{consultant?.name}</h2>
                <p className="text-xl font-medium">{consultant?.country}</p>
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-xl font-medium">
                    {consultant?.major?.join(", ")}
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-start mt-2">
                  <p className="font-semibold text-gray-500 text-lg">
                    {consultant?.language?.join(", ")}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="flex w-full flex-col items-center md:items-start mt-4">
                  <p className="text-xl font-bold text-orange-500">
                    ${price}{" "}
                    <span className="text-xl font-bold text-black">• {duration}min</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-32">
            <p className="text-2xl underline font-semibold mb-2">Student Informations:</p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Name:</strong> {user?.username}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Email:</strong> {user?.email}
            </p>
          
            <p className="text-lg font-semibold mb-2">Selected Date & Time:</p>
            <p className="text-lg font-semibold text-white p-4  rounded-lg border bg-blue-600">{date ? new Date(date).toLocaleString() : 'Not selected'}</p>
          </div>
        </div>

        {/* Right Side: Card Payment Information */}
        <div className="flex-1 bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Card Payment</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-lg font-semibold mb-2">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="**** **** **** ****"
                className="border border-gray-300 p-3 rounded-lg w-full"
              />
            </div>
            <div className="mb-4 flex gap-4">
              <div className="flex-1">
                <label htmlFor="expiryDate" className="block text-lg font-semibold mb-2">Expiry Date:</label>
                <input
                  type="text"
                  id="expiryDate"
                  placeholder="MM/YY"
                  className="border border-gray-300 p-3 rounded-lg w-full"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="cvv" className="block text-lg font-semibold mb-2">CVV:</label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="***"
                  className="border border-gray-300 p-3 rounded-lg w-full"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-full shadow-md hover:bg-blue-600 transition duration-300"
            >
              Complete Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
