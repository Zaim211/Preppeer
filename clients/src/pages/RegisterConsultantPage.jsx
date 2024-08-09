import logo from "../assets/logo.png";
import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import PhotoProfile from "../components/PhotoProfile";
import "react-datepicker/dist/react-datepicker.css";

import {
  majors,
  languages,
  categories,
  subcategoriesMap,
  admissions,
  priceOptions,
} from "../constants";

const RegisterConsultantPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState([]);
  const [admission, setAdmission] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState([]);
  const [universityCountry, setUniversityCountry] = useState("");
  const [password, setPassword] = useState("");
  const [price, setPrice] = useState([]);
  const [bio, setBio] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategories, setSubcategories] = useState([]); // Changed to array
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [schedules, setSchedules] = useState([{ dayOfWeek: '', workStart: '', workEnd: '' }]);
 
  const handleScheduleChange = (index, event) => {
    const { name, value } = event.target;
    const newSchedules = schedules.map((schedule, i) => (
      i === index ? { ...schedule, [name]: value } : schedule
    ));
    setSchedules(newSchedules);
  };

  const addSchedule = () => {
    setSchedules([...schedules, { dayOfWeek: '', workStart: '', workEnd: '' }]);
  };

  const removeSchedule = (index) => {
    setSchedules(schedules.filter((_, i) => i !== index));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const photosArray = Array.isArray(addedPhotos) ? addedPhotos.flat() : [];

    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (email && !email.includes("@")) newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Password is required";
    if (addedPhotos.length === 0) newErrors.image = "Image is required";
    if (!major) newErrors.major = "Major is required";
    if (!admission) newErrors.admission = "Admission is required";
    if (!country) newErrors.country = "Country is required";
    if (!language) newErrors.language = "Language is required";
    if (!universityCountry)
      newErrors.universityCountry = "University Country is required";
    if (!bio) newErrors.bio = "Bio is required";
    if (!category) newErrors.category = "Category is required";
    if (subcategories.length === 0)
      newErrors.subcategory = "At least one subcategory is required";
    if (price <= 0) newErrors.price = "Price must be greater than zero";

    schedules.forEach((schedule, index) => {
      if (!schedule.dayOfWeek && schedule.dayOfWeek !== 0)
        newErrors[`scheduleDay${index}`] = "Day of week is required";
      if (!schedule.workStart)
        newErrors[`scheduleStart${index}`] = "Work start time is required";
      if (!schedule.workEnd)
        newErrors[`scheduleEnd${index}`] = "Work end time is required";
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post("/api/registerConsultant", {
        name,
        email,
        password,
        price,
        major,
        admission,
        country,
        language,
        universityCountry,
        bio,
        addedPhotos: photosArray,
        category,
        subcategories,
        schedules,
      });
      console.log("Response from server:", response);
      setSuccess("Consultant registered successfully");
      setRedirect(true);
      alert("Consultant registered successfully");
      setErrors({});
    } catch (error) {
      setErrors({
        submit: "An error occurred while registering the consultant",
      });
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;

    // Update the category list
    const updatedCategories = category.includes(value)
      ? category.filter((c) => c !== value)
      : [...category, value];

    // Update the subcategories based on the selected categories
    const newSubcategories = updatedCategories.reduce((acc, cat) => {
      return acc.concat(subcategoriesMap[cat] || []);
    }, []);

    setCategory(updatedCategories);
    setSubcategories(newSubcategories);
  };

  const handleSubcategoryChange = (e) => {
    const value = e.target.value;
    setSubcategories((prev) =>
      prev.includes(value)
        ? prev.filter((sub) => sub !== value)
        : [...prev, value]
    );
  };

  const handlePriceChange = (e) => {
    const value = parseFloat(e.target.value);
    setPrice((prev) =>
      prev.includes(value)
        ? prev.filter((price) => price !== value)
        : [...prev, value]
    );
  };

  const handleMajorChange = (e) => {
    const value = e.target.value;
    setMajor((prev) =>
      prev.includes(value) ? prev.filter((m) => m !== value) : [...prev, value]
    );
  };

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    setLanguage((prev) =>
      prev.includes(value) ? prev.filter((l) => l !== value) : [...prev, value]
    );
  };

  const removeMajor = (m) => {
    setMajor((prev) => prev.filter((major) => major !== m));
  };

  const removeLanguage = (l) => {
    setLanguage((prev) => prev.filter((lang) => lang !== l));
  };

  const removeCategory = (c) => {
    setCategory((prev) => prev.filter((cat) => cat !== c));
  };

  if (redirect) {
    return <Navigate to={"/SignInConsltantPage"} />;
  }

  return (
    <>
      <div className="w-full flex bg-primary">
        {success && (
          <p className="text-green-600 text-center mb-4">{success}</p>
        )}
        {errors.submit && (
          <p className="text-red-600 text-center mb-4">{errors.submit}</p>
        )}

        <div className="shadow-2xl border-blue-950 p-32 m-2 rounded-lg text-lg h-full w-full">
          <Link to={"/"} className=" flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-12 h-12 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
          <div className="flex items-center">
            <h1 className="text-bold  text-white text-6xl">
              Create an account
            </h1>
            <div className="flex justify-center sm:justify-start mt-4">
              <img src={logo} alt="logo" className="w-32 h-22 object-cover" />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-[90%] shadow-2xl border-blue-950 rounded-lg p-2"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-semibold mb-1"
                  >
                    <span className="text-white">Full Name *</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 p-2 w-full rounded-lg"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold mb-1"
                  >
                    <span className="text-white">Email *</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 p-2 w-full rounded-lg"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-lg font-semibold mb-1"
                  >
                    <span className="text-white">Password *</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 p-2 w-full rounded-lg"
                  />
                  {errors.password && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-lg font-semibold mb-1"
                  >
                    <span className="text-white">Location of University *</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="border border-gray-300 p-2 w-full rounded-lg"
                  />
                  {errors.country && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.country}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="universityCountry"
                    className="block text-lg font-semibold mb-1"
                  >
                    <span className="text-white">Country of Origin *</span>
                  </label>
                  <input
                    type="text"
                    id="universityCountry"
                    value={universityCountry}
                    onChange={(e) => setUniversityCountry(e.target.value)}
                    className="border border-gray-300 p-2 w-full rounded-lg"
                  />
                  {errors.universityCountry && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.universityCountry}
                    </p>
                  )}
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="admission"
                    className="block text-lg font-semibold mb-1"
                  >
                    <span className="text-white">Languages fluent *</span>
                  </label>
                  <select
                    value={language}
                    onChange={handleLanguageChange}
                    className="border border-gray-300 p-2 w-full rounded-lg"
                  >
                    <option value=""></option>
                    {languages.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                  {errors.language && (
                    <p className="text-red-500">{errors.language}</p>
                  )}
                  {language.length > 0 && (
                    <div className="mt-2">
                      {language.map((l) => (
                        <span
                          key={l}
                          className="inline-block bg-green-200 text-green-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                        >
                          {l}
                          <button
                            type="button"
                            onClick={() => removeLanguage(l)}
                            className="ml-2 text-red-500"
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="major"
                    className="block text-lg font-semibold mb-1"
                  >
                    <span className="text-white">Major *</span>
                  </label>
                  <select
                    value={major}
                    onChange={handleMajorChange}
                    className="border text-black border-gray-300 p-2 w-full rounded-lg"
                  >
                    <option value="">Select your major</option>
                    {majors.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  {errors.major && (
                    <p className="text-red-500">{errors.major}</p>
                  )}
                  {major.length > 0 && (
                    <div className="mt-2">
                      {major.map((m) => (
                        <span
                          key={m}
                          className="inline-block bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                        >
                          {m}
                          <button
                            type="button"
                            onClick={() => removeMajor(m)}
                            className="ml-2 text-red-500"
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="admission"
                    className="block text-lg font-semibold mb-1"
                  >
                    <span className="text-white">Admission *</span>
                  </label>
                  <select
                    id="admission"
                    value={admission}
                    onChange={(e) => setAdmission(e.target.value)}
                    className="border border-gray-300 p-2 w-full rounded-lg"
                  >
                    <option value="">Select an Admission</option>
                    {admissions.map((admissionOption) => (
                      <option key={admissionOption} value={admissionOption}>
                        {admissionOption}
                      </option>
                    ))}
                  </select>
                  {errors.admission && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.admission}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="category"
                    className="block text-lg font-semibold mb-1"
                  >
                    <span className="text-white">Category *</span>
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={handleCategoryChange}
                    className="border border-gray-300 p-2 w-full rounded-lg"
                  >
                    <option value="">Select a Category</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.category}
                    </p>
                  )}
                  {category.length > 0 && (
                    <div className="mt-2">
                      {category.map((c) => (
                        <span
                          key={c}
                          className="inline-block bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                        >
                          {c}
                          <button
                            type="button"
                            onClick={() => removeCategory(c)}
                            className="ml-2 text-red-500"
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>


                  {/* schedules */}
                <div className="flex flex-col gap-2">
        <label htmlFor="schedules" className="text-white">Schedules:</label>
        {schedules.map((schedule, index) => (
          <div key={index} className="flex-col space-y-5 gap-6 mb-4">
            <div className="flex items-center gap-2">
              <label htmlFor={`scheduleDay${index}`} className="text-white">Day of Week:</label>
              <input
                type="number"
                name="dayOfWeek"
                id={`scheduleDay${index}`}
                value={schedule.dayOfWeek}
                onChange={(e) => handleScheduleChange(index, e)}
                className="border border-gray-300 rounded-lg p-2"
              />
              {errors[`scheduleDay${index}`] && (
                <p className="text-red-600">{errors[`scheduleDay${index}`]}</p>
              )}
              <button type="button" onClick={() => removeSchedule(index)} className="text-red-600">Remove</button>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor={`scheduleStart${index}`} className="text-white">Work Start Time:</label>
              <input
                type="time"
                name="workStart"
                id={`scheduleStart${index}`}
                value={schedule.workStart}
                onChange={(e) => handleScheduleChange(index, e)}
                className="border border-gray-300 rounded-lg p-2"
              />
              {errors[`scheduleStart${index}`] && (
                <p className="text-red-600">{errors[`scheduleStart${index}`]}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor={`scheduleEnd${index}`} className="text-white">Work End Time:</label>
              <input
                type="time"
                name="workEnd"
                id={`scheduleEnd${index}`}
                value={schedule.workEnd}
                onChange={(e) => handleScheduleChange(index, e)}
                className="border border-gray-300 rounded-lg p-2"
              />
              {errors[`scheduleEnd${index}`] && (
                <p className="text-red-600">{errors[`scheduleEnd${index}`]}</p>
              )}
            </div>
          </div>
        ))}
        <button type="button" onClick={addSchedule} className="bg-blue-500 text-white p-2 rounded-lg">Add Schedule</button>
      </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="price"
                    className="block text-lg font-semibold mb-1"
                  >
                    <span className="text-white">Price *</span>
                  </label>
                  <div className="flex gap-12 items-center">
                    {priceOptions.map((option) => (
                      <div
                        key={option.value}
                        className="flex font-bold items-center"
                      >
                        <input
                          type="checkbox"
                          id={`price-${option.value}`}
                          value={option.value}
                          checked={price.includes(option.value)}
                          onChange={handlePriceChange}
                          className="mr-2"
                        />
                        <label
                          htmlFor={`price-${option.value}`}
                          className="text-xl text-white font-bold"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                    {errors.price && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.price}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subcategories"
                    className="block text-lg font-semibold mb-1"
                  >
                    <span className="text-white">Subcategories *</span>
                  </label>
                  <div className="flex gap-12 items-center">
                    {subcategories.length > 0 && (
                      <div>
                        {subcategories.map((subcat) => (
                          <div key={subcat} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`subcategory-${subcat}`}
                              value={subcat}
                              checked={subcategories.includes(subcat)}
                              onChange={handleSubcategoryChange}
                              className="mr-2"
                            />
                            <label
                              htmlFor={`subcategory-${subcat}`}
                              className="text-xl text-white"
                            >
                              {subcat}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="">
                  <label
                    htmlFor="bio"
                    className="block text-lg font-semibold mb-1"
                  >
                    <span className="text-white">Bio *</span>
                  </label>
                  <textarea
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="border text-lg border-gray-300 pl-4 pr-4 pt-2 pb-48 w-[100%] rounded-lg"
                  ></textarea>
                  {errors.bio && (
                    <p className="text-red-600 text-sm mt-1">{errors.bio}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="photo"
                    className="block text-lg font-semibold mb-1"
                  >
                    <span className="text-white">Profile Photo *</span>
                  </label>
                  <PhotoProfile
                    addedPhotos={addedPhotos}
                    onChange={setAddedPhotos}
                  />
                  {errors.image && (
                    <p className="text-red-600 text-sm mt-1">{errors.image}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mb-6 mt-32">
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="text-center gap-2 items-center flex justify-center mr-16 py-4 mt-12 text-2xl text-white">
            Already a member?
            <Link className="underline text-white" to={"/SignInConsltantPage"}>
              SignIn
            </Link>
          </div>
        </div>
      </div>

      <div
        className="relative flex w-full"
        style={{ backgroundColor: "#060724" }}
      >
        <div
          className="relative w-full z-10 flex flex-col 
        items-center text-center px-8 py-24 "
        >
          <Link to="/">
            <img src={logo} alt="logo" className="w-64 h-auto object-cover" />
          </Link>
          <div className="flex flex-col items-center w-full">
            <h1 className="text-6xl text-white font-semibold mb-6">
              Welcome to PrepPeer!
            </h1>
            <p className="font-semibold text-white text-6xl mb-6 mt-2">
              Great to have you onboard! Mentor!
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 mt-12 font-bold text-xl md:text-2xl rounded-xl shadow-lg hover:bg-orange-600 transition-colors">
              Join us on slack
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterConsultantPage;


