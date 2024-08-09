import axios from "axios";
import React, { useState } from "react";

const FeedbackForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [referral, setReferral] = useState("");
  const [universities, setUniversities] = useState("");

  async function handleFeedback(ev) {
    ev.preventDefault();

    try {
      const response = await axios.post("/api/feedback", {
        firstName,
        lastName,
        email,
        whatsapp,
        referral,
        universities,
      });
      if (response.status === 201) {
        alert("Feedback submitted successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setWhatsapp("");
        setReferral("");
        setUniversities("");
      } else {
        alert("Internal server error");
      }
    } catch (error) {
      alert("Internal server error");
    }
  }

  return (
    <div className="bg-primary text-white p-8 sm:p-12 md:p-16">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
      Don't see your university in our marketplace? <br />
      Fill out the form!
        </h1>
      <form onSubmit={handleFeedback} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="space-y-2 w-full">
              <label htmlFor="firstName" className="block font-semibold">
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full p-2 rounded-full bg-gray-800 border border-gray-700"
                value={firstName}
                onChange={(ev) => setFirstName(ev.target.value)}
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
                value={lastName}
                onChange={(ev) => setLastName(ev.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block font-semibold">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 rounded-full bg-gray-800 border border-gray-700"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
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
              value={whatsapp}
              onChange={(ev) => setWhatsapp(ev.target.value)}
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
              value={referral}
              onChange={(ev) => setReferral(ev.target.value)}
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
            value={universities}
            onChange={(ev) => setUniversities(ev.target.value)}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 px-4 sm:px-8 py-2 bg-white text-black font-bold rounded-full hover:bg-secondary-dark"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
