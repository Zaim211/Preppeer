import React from "react";

const FeedbackForm = () => {
  return (
    <div className="bg-primary text-white p-16">
      <h1 className="text-3xl font-bold mb-6">Feedback Form</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
     
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="space-y-2 w-full">
              <label htmlFor="firstName" className="block font-semibold">
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full p-2 rounded-full bg-gray-800 border border-gray-700"
              />
            </div>

            <div className="space-y-2 w-full">
              <label htmlFor="lastName" className="block font-semibold">
                Last Name *
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full p-2 rounded-full bg-gray-800 border border-gray-700"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block font-semibold">
              Email *
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 rounded-full bg-gray-800 border border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="whatsapp" className="block font-semibold">
              WhatsApp / WeChat number *
            </label>
            <input
              id="whatsapp"
              type="text"
              className="w-full p-2 rounded-full bg-gray-800 border border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="referral" className="block font-semibold">
              How did you hear about us? *
            </label>
            <input
              id="referral"
              type="text"
              className="w-full p-2 rounded-full bg-gray-800 border border-gray-700"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="universities" className="block font-semibold">
            Which universities do you have in mind that you can't find on our
            marketplace? *
          </label>
          <textarea
            id="universities"
            rows="9"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 px-8 py-2 bg-secondary text-white rounded-full hover:bg-secondary-dark"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
