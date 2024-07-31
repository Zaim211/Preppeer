import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dollar from "../assets/icons/dollar.svg";
import Informations from "../components/Informations";
import { details } from "../constants";
import { UserContext } from "../UserContext.jsx";

const VideoCallPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [consultant, setConsultant] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedDuration, setSelectedDuration] = useState("15");
  const [errors, setErrors] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchConsultant = async () => {
      try {
        const response = await axios.get(`/api/registerConsultant/${id}`);
        setConsultant(response.data.consultant);
      } catch (error) {
        console.error("Error fetching consultant:", error);
      }
    };
    fetchConsultant();
  }, [id]);

  const validateForm = () => {
    const newErrors = {};

    if (!selectedDuration)
      newErrors.selectedDuration = "Call duration is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBookCall = () => {
    if (!validateForm()) return;

    let price = 0;
    switch (selectedDuration) {
      case "15":
        price = 20;
        break;
      case "30":
        price = 30;
        break;
      case "40":
        price = 40;
        break;
      default:
        price = 20;
    }

 
      const path = user ? `/insider/payment/${consultant._id}` : "/SignInStudentPage";
      navigate(path, {
        state: {
          date: selectedDate,
          consultant: {
            id: consultant._id,
            name: consultant.name,
            profilePicture: consultant.profilePicture[0],
          },
          user: user ? {
            username: user.username,
            email: user.email,
          } : null,
          price: consultant.price[0],
          duration: selectedDuration,
        },

      });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (!consultant) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6 md:p-12 mt-4 mb-64">
      <div
        className="flex-1 border p-6 rounded-xl shadow-2xl"
        style={{ flexBasis: "70%" }}
      >
        <div className="flex w-full">
          <img
            src={consultant.profilePicture[0]}
            alt={consultant.name}
            className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
          />
          <div className="justify-between flex-rows w-full md:text-left mt-6 md:mt-0 md:ml-4">
            <div className="w-full">
              <h2 className="text-2xl font-bold mb-2">{consultant.name}</h2>
              <p className="text-xl font-medium">{consultant.country}</p>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-xl font-medium">
                  {consultant.major.join(", ")}
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start mt-2">
                <p className="font-semibold text-gray-500 text-lg">
                  {consultant.language.join(", ")}
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full flex-col items-center md:items-start mt-4">
                <p className="text-xl font-bold text-orange-500">
                  ${consultant.price[0]}{" "}
                  <span className="text-xl font-bold text-black">
                    • Session
                  </span>
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start mt-2">
                <p className="text-lg font-semibold">
                  {formatTime(consultant.availabilityStart)} to{" "}
                  {formatTime(consultant.availabilityEnd)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <div className="bg-gray-400 mb-20 h-px mx-auto" />
          <div className="border rounded-lg shadow-lg">
            <h2 className="text-2xl p-4 font-bold text-gray-800">About Me</h2>
            <p className="text-xl font-semibold p-4 text-ellipsis leading-[40px]">
              {consultant?.bio}
            </p>
            <div className="p-4 w-full">
              <div className="flex pb-4">
                {details.map((feature, index) => (
                  <div className="flex-1">
                    <div
                      key={index}
                      className="flex-shrink-0 w-96 h-96 bg-white border-gray-300 rounded-lg shadow-lg 
              flex flex-col"
                    >
                      <div className="flex-1 p-2">{feature.details}</div>
                    </div>
                    <div>
                      <h1 className="text-xl p-4 mt-4 font-bold pt-2">
                        {feature.title}
                      </h1>
                      <h2 className="text-black p-16-medium">
                        {feature.description}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Informations />
          </div>
        </div>
      </div>

      <div
        className="flex-1 border rounded-xl shadow-2xl"
        style={{ flexBasis: "30%", height: "100vh" }}
      >
        <div className="flex flex-col mt-4 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                Book a Call with {consultant.name}
              </h1>
            </div>
            <div>
              <p>
                <span className="text-4xl font-bold">$30</span>/30min
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg mb-2 text-center mt-8 font-bold text-gray-900">
              Book a live 1:1 session and get personalized advice
            </p>
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold mb-1"
                >
                  Full Name <span className="text-black">*</span>
                </label>
                <div className="border border-gray-300 p-4 w-full rounded-lg">
                  {user?.username}
                </div>

                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold mb-1"
                >
                  Email <span className="text-black">*</span>
                </label>
                <div className="border border-gray-300 p-4 w-full rounded-lg">
                  {user?.email}
                </div>
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label
                htmlFor="duration"
                className="block text-lg font-semibold mb-1"
              >
                Call Duration{" "}
                <img src={dollar} alt="dollar" className="w-4 h-4 inline" />
                <span className="text-black">*</span>
              </label>
              <select
                id="duration"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="border border-gray-300 p-2 w-full rounded-lg"
              >
                <option value="15">15 minutes - $20</option>
                <option value="30">30 minutes - $30</option>
                <option value="40">40 minutes - $40</option>
              </select>
              {errors.selectedDuration && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.selectedDuration}
                </p>
              )}
            </div>

            <p className="text-lg font-semibold mb-2 mt-4">
              Select Date and Time:
            </p>
            <div className="custom-datepicker-wrapper w-full">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                timeFormat="hh:mm aa"
                timeIntervals={15}
                dateFormat="Pp"
                className="custom-datepicker border border-gray-300 rounded-lg p-2 w-full mb-4"
                placeholderText="Select a date"
                inline
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-4">
            <button
              className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-md"
              onClick={handleBookCall}
            >
              Book a Call
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-lg text-gray-700 mb-4">
              {consultant.university}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCallPage;
