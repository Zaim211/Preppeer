import zebo from "../assets/images/mentors/img13.png";
import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import PhotoProfile from "../components/PhotoProfile";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import {
  majors,
  languages,
  categories,
  subcategoriesMap,
  admissions,
  priceOptions,
} from "../constants";

const RegisterConsultantPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
  const [availabilityStart, setAvailabilityStart] = useState(null);
  const [availabilityEnd, setAvailabilityEnd] = useState(null);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [redirect, setRedirect] = useState(false);

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
    if (!admission) newErrors.admission = "Admission is required"; // Add validation for admission
    if (!country) newErrors.country = "Country is required";
    if (!language) newErrors.language = "Language is required";
    if (!universityCountry)
      newErrors.universityCountry = "University Country is required";
    if (!bio) newErrors.bio = "Bio is required";
    if (!category) newErrors.category = "Category is required";
    if (subcategories.length === 0)
      newErrors.subcategory = "At least one subcategory is required";
    if (price <= 0) newErrors.price = "Price must be greater than zero";
    if (!availabilityStart || !availabilityEnd)
      newErrors.availability = "Availability dates are required";
    if (
      availabilityStart &&
      availabilityEnd &&
      availabilityEnd < availabilityStart
    ) {
      newErrors.availability = "End date must be after start date";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post("/api/registerConsultant", {
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
        availabilityStart: format(availabilityStart, "yyyy-MM-dd"),
        availabilityEnd: format(availabilityEnd, "yyyy-MM-dd"),
      });
      setSuccess("Consultant registered successfully");
      setRedirect(true);
      setErrors({});
    } catch (error) {
      setErrors({
        submit: "An error occurred while registering the consultant",
      });
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleStartDateChange = (date) => {
    setAvailabilityStart(date);
  };

  const handleEndDateChange = (date) => {
    setAvailabilityEnd(date);
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
    return <Navigate to={"/be-an-insider/SignInConsltantPage"} />;
  }

  return (
    <>
      <div className="w-full flex"  style={{ backgroundColor: "#060724" }}>
        {success && (
          <p className="text-green-600 text-center mb-4">{success}</p>
        )}
        {errors.submit && (
          <p className="text-red-600 text-center mb-4">{errors.submit}</p>
        )}

      

        <div className="shadow-2xl border-blue-950 p-32 m-4 rounded-lg text-lg h-full w-full">
          <Link to={"/"} className="mb-6 flex">
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
          <h1 className="text-bold mb-10 text-white text-4xl">
          Create an account
          </h1>
          <div className="flex justify-between w-[90%] gap-2 mb-12">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`flex-1 text-center py-2 rounded-lg ${
                  currentStep >= step
                    ? "bg-orange-600 text-white  "
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                Step {step}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="w-[90%]">
            {currentStep === 1 && (
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
                      <p className="text-red-600 text-sm mt-1">
                        {errors.email}
                      </p>
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
                      <option value="">Select an Admission</option>
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
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="">
                  <label
                    htmlFor="price"
                    className="block text-lg font-semibold mb-1"
                  >
                     <span className="text-white">Price *</span>
                  </label>
                  {priceOptions.map((option) => (
                    <div key={option.value} className="flex items-center">
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
                        className="text-lg text-white"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                  {errors.price && (
                    <p className="text-red-600 text-sm mt-1">{errors.price}</p>
                  )}
                </div>

                <div>
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
                    className="border text-start border-gray-300 p-4 pb-32 w-[50%] rounded-lg"
                  ></textarea>
                  {errors.bio && (
                    <p className="text-red-600 text-sm mt-1">{errors.bio}</p>
                  )}
                </div>

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

                <div>
                  <label
                    htmlFor="subcategories"
                    className="block text-lg font-semibold mb-1"
                  >
                     <span className="text-white">Subcategories *</span>
                  </label>
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
                            className="text-lg text-white"
                          >
                            {subcat}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
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
                <div>
                  <label
                    htmlFor="availability"
                    className="block text-white text-lg font-semibold mb-1"
                  >
                     <span className="text-white">Availability *</span>
                  </label>
                  <div className="flex space-x-4">
                    <DatePicker
                      selected={availabilityStart}
                      onChange={handleStartDateChange}
                      showTimeSelect
                      showTimeSelectTwoColumns
                      timeIntervals={1}
                      timeCaption="Time"
                      dateFormat="yyyy-MM-dd HH:mm:ss"
                      timeFormat="HH:mm:ss"
                      className="border border-gray-300 p-2 rounded-lg w-full"
                    />
                    <DatePicker
                      selected={availabilityEnd}
                      onChange={handleEndDateChange}
                      showTimeSelect
                      showTimeSelectTwoColumns
                      timeIntervals={1}
                      timeCaption="Time"
                      dateFormat="yyyy-MM-dd HH:mm:ss"
                      timeFormat="HH:mm:ss"
                      className="border border-gray-300 p-2 rounded-lg w-full"
                    />
                  </div>
                  {errors.availability && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.availability}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2"
                >
                  Previous
                </button>
              )}
              {currentStep < 3 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg"
                >
                  Next
                </button>
              )}
              {currentStep === 3 && (
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
          <div className="text-center py-4 text-xl text-white">
          Already a member?{' '}
          <Link className="underline text-white" to={"/be-an-insider/SignInConsltantPage"}>
            SignIn
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default RegisterConsultantPage;
