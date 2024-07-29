import React, { useState } from 'react';
import giftImage from '../assets/gift.png'; 

const CardGift = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
    setSelectedAmount('');
  };

  const handleContinueClick = () => {
    // Redirect to the payment path with the selected amount
    window.location.href = `/payment?amount=${selectedAmount || customAmount}`;
  };

  return (
    <main className="p-6 md:p-12 bg-gradient-to-br from-blue-100 via-gray-100 to-white h-full flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="flex-1 flex flex-col items-center justify-center shadow-xl p-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
        <img
          src={giftImage}
          alt="Gift Card"
          className="w-96 h-96 object-cover mb-4"
        />
        <div className="text-xl font-bold text-gray-700">
          Amount: {selectedAmount ? `$${selectedAmount}` : customAmount ? `$${customAmount}` : 'Select an Amount'}
        </div>
      </div>

      {/* Vertical Line */}
      <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

      {/* Right Side - Price Options */}
      <div className="flex-1 flex flex-col justify-center bg-white border border-gray-300 rounded-xl shadow-xl p-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="text-xl font-bold mb-4">Select Amount</div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {[100, 200, 300, 400, 500].map((amount) => (
            <button
              key={amount}
              className={`p-4 rounded-lg shadow-md ${
                selectedAmount === amount ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => handleAmountClick(amount)}
            >
              ${amount}
            </button>
          ))}
        </div>
        <input
          type="number"
          placeholder="Custom Amount"
          className="border border-gray-300 p-2 rounded-lg mb-4 w-full"
          value={customAmount}
          onChange={handleCustomAmountChange}
        />
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-2 px-4 rounded-full w-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          onClick={handleContinueClick}
        >
          Continue
        </button>
      </div>
    </main>
  );
};

export default CardGift;
