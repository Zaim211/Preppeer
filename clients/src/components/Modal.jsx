import React from "react";

const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h1 className="text-center text-2xl font-bold">Filter Modal</h1>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={() => setShowModal(false)}
        >
          X
        </button>
        <div className="mt-3 text-center">
          <p className="text-lg">Modal Content</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
