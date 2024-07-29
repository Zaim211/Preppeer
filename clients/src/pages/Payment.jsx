import React from 'react';

const Payment = () => {
  return (
    <div className="p-6 md:p-12 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Payment Details</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side: Meeting Information */}
        <div className="flex-1 bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Meeting Information</h2>
          <p className="text-lg font-semibold mb-2">Date & Time:</p>
          <p className="text-lg text-gray-700 mb-4">July 24, 2024 - 10:00 AM</p>
          <p className="text-lg font-semibold mb-2">Zoom Link:</p>
          <a href="https://zoom.us/j/1234567890" className="text-blue-500 hover:underline">
            Join Zoom Meeting
          </a>
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
