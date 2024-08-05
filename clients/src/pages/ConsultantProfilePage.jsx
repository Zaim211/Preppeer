import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { format } from "date-fns";
import axios from "axios";

const ConsultantProfilePage = () => {
  const { consultant, setConsultant, ready } = useContext(UserContext);

  if (!ready) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Loading...
      </div>
    );
  }

  const handleLogout = async () => {
    await axios.post("/api/logout");
    setConsultant(null);
    return <Navigate to="/be-an-insider/SignInConsltantPage" />;
  };

  if (!consultant) {
    return <Navigate to="/SignInConsltantPage" />;
  }

  return (
    <div className="flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white border border-gray-300 rounded-lg shadow-xl p-8">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <Link to={"/"}>
            <img
              src={consultant.profilePicture}
              alt="Profile"
              className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
            />
          </Link>
          <div className="md:ml-8 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {consultant.name}
            </h1>
            <p className="text-gray-600 mb-4">
              Email: <strong>{consultant.email}</strong>
            </p>
            <button
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Your Information
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Major
                </h2>
                <ul className="list-disc list-inside">
                  {consultant?.major?.map((subcategory, index) => (
                    <li key={index}>{subcategory}</li>
                  ))}
                </ul>
              </div>
              <p>
                <strong>Country:</strong> {consultant.country}
              </p>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Languages
                </h2>
                <ul className="list-disc list-inside">
                  {consultant?.language?.map((subcategory, index) => (
                    <li key={index}>{subcategory}</li>
                  ))}
                </ul>
              </div>
              <p>
                <strong>University Country:</strong>{" "}
                {consultant.universityCountry}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Description
            </h2>
            <p>{consultant.description}</p>
            <h3 className="text-xl font-semibold mt-4">Bio</h3>
            <p>{consultant.bio}</p>
            <h3 className="text-xl font-semibold mt-4">Motivation</h3>
            <p>{consultant.motivation}</p>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Category
              </h2>
              <ul className="list-disc list-inside">
                {consultant?.category?.map((subcategory, index) => (
                  <li key={index}>{subcategory}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Price</h2>
            <ul className="list-disc list-inside">
              {consultant?.price?.map((subcategory, index) => (
                <li key={index}>{subcategory} $</li>
              ))}
            </ul>
          </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Availability
            </h2>
            <p>
              <strong>Start Date:</strong>{" "}
              {consultant.availabilityStart
                ? format(
                    new Date(consultant.availabilityStart),
                    "yyyy-MM-dd hh-mm-ss"
                  )
                : "Not set"}
            </p>
            <p>
              <strong>End Date:</strong>{" "}
              {consultant.availabilityEnd
                ? format(
                    new Date(consultant.availabilityEnd),
                    "yyyy-MM-dd hh-mm-ss"
                  )
                : "Not set"}
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Subcategories
            </h2>
            <ul className="list-disc list-inside">
              {consultant?.subcategories?.map((subcategory, index) => (
                <li key={index}>{subcategory}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantProfilePage;
