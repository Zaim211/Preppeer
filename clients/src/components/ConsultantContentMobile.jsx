import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  countries,
  uniqueFilters,
  languages,
  UniversityOptions,
} from "../constants";
import { Input } from "./ui/input";

const ConsultantContentMobile = () => {
  const [consultants, setConsultants] = useState([]);
  const [filteredConsultants, setFilteredConsultants] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [selectedFilterObj, setSelectedFilterObj] = useState(null);
  const [visibleConsultants, setVisibleConsultants] = useState(8);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedMajors, setSelectedMajors] = useState([]);

  const mentorsSectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        const response = await axios.get("/api/registerConsultant");
        setConsultants(response.data.consultants);
        setFilteredConsultants(response.data.consultants);
      } catch (error) {
        console.error("Error fetching consultants:", error);
      }
    };
    fetchConsultants();
  }, []);

  useEffect(() => {
    let filtered = consultants;
    if (selectedFilter) {
      filtered = filtered.filter((consultant) =>
        consultant.category.includes(selectedFilter)
      );
    }
    if (selectedSubcategories.length > 0) {
      filtered = filtered.filter((consultant) =>
        selectedSubcategories.every((subcat) =>
          consultant.subcategories.includes(subcat)
        )
      );
    }
    setFilteredConsultants(filtered);
  }, [selectedFilter, selectedSubcategories, consultants]);

  useEffect(() => {
    if (selectedFilter && mentorsSectionRef.current) {
      mentorsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    const filterObj = uniqueFilters.find((f) => f.value === selectedFilter);
    setSelectedFilterObj(filterObj);
    setSelectedSubcategories([]);
    updateURL(filterObj ? filterObj.value : "", []);
  }, [selectedFilter]);

  const handleFilterClick = (filter) => {
    if (selectedFilter === filter) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(filter);
    }
  };

  const handleSubcategoryClick = (subcategory) => {
    const newSelectedSubcategories = selectedSubcategories.includes(subcategory)
      ? selectedSubcategories.filter((sc) => sc !== subcategory)
      : [...selectedSubcategories, subcategory];

    setSelectedSubcategories(newSelectedSubcategories);
    updateURL(selectedFilter, newSelectedSubcategories);
  };

  const updateURL = (filter, subcategories) => {
    const params = new URLSearchParams();
    if (filter) params.set("topic", filter);
    subcategories.forEach((subcat) => params.append("tag[]", subcat));
    navigate({ search: params.toString() });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleApplyFilters = () => {
    setIsModalOpen(false);
  };

  const handleRegionChange = (region) => {
    setSelectedRegions(region.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleUniversityLocation = (event) => {
    setSelectedCountries(event.target.value);
  };

  const handleMajorChange = (major) => {
    setSelectedMajors((prevMajors) =>
      prevMajors.includes(major)
        ? prevMajors.filter((m) => m !== major)
        : [...prevMajors, major]
    );
  };

  return (
    <>
      <nav className="bg-gray-200 p-4 w-full">
        <div className="flex justify-between mt-16 items-center">
          <h2 className="font-bold text-2xl md:text-5xl lg:text-5xl mt-16 mb-6">
            <span className="text-secondary">In</span>siders{" "}
            <span className="text-secondary">At</span> Your Fingertips
          </h2>
          <img
            src={logo}
            alt="logo"
            className="lg:w-50 lg:h-32 lg:mr-10 w-20 mt-6 object-cover"
          />
        </div>
        <div className="overflow-x-auto scrollbar-thin scrollbar-webkit flex p-2 space-x-2 md:space-x-6">
          {uniqueFilters.map((filter, index) => (
            <div
              key={index}
              className={`flex flex-col items-center cursor-pointer ${
                selectedFilter === filter.value
                  ? "text-white font-semibold border-gray-700 bg-primary rounded-sm border"
                  : "text-black border-black font-bold rounded-sm border"
              }`}
              onClick={() => handleFilterClick(filter.value)}
            >
              <div className="w-22 md:w-52 px-2 h-16 flex items-center justify-center">
                <span className="text-center font-semibold text-sm md:text-base">
                  {filter.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </nav>

      <section ref={mentorsSectionRef} className="w-full px-4 py-4 bg-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap">
            {selectedFilterObj &&
              selectedFilterObj.subcategories.length > 0 && (
                <div className="flex gap-4">
                  {selectedFilterObj.subcategories.map((subcat, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer ${
                        selectedSubcategories.includes(subcat.value)
                          ? "text-white font-semibold border-black bg-primary rounded-sm border"
                          : "text-black border-black font-semibold rounded-sm border"
                      } p-2 border border-black rounded-sm`}
                      onClick={() => handleSubcategoryClick(subcat.value)}
                    >
                      <div className="w-18 md:w-52 px-2 h-6 flex items-center justify-center">
                       <span className="text-center font-semibold text-sm md:text-base">
                      {subcat.name}
                       </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>
        <div className="flex justify-end mb-2">
          <button
            className="text-black justify-end p-3 border-black items-end flex gap-2 lg:p-4 font-semibold rounded-lg border ml-12"
            onClick={toggleModal}
          >
            Filter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-200 w-full mb-16">
          <div className="flex md:grid-cols-3 mt-6 overflow-x-auto space-x-1  pb-4">
            <div className="flex flex-nowrap">
              {filteredConsultants
                .slice(0, visibleConsultants)
                .map((consultant) => (
                  <Link
                    to={`/consultant/${
                      consultant._id
                    }?name=${encodeURIComponent(
                      consultant.name
                    )}&category=${encodeURIComponent(
                      consultant.major.join(",")
                    )}`}
                    key={consultant._id}
                    className="w-48 relative overflow-hidden flex-shrink-0"
                  >
                      <img
                        src={consultant.profilePicture}
                        alt={consultant.name}
                        className="w-48  ml-2 h-48 object-cover"
                      />
                     
                    <div className="p-2">
                      <h2 className="text-xl font-bold">
                        {consultant.name}
                      </h2>
                      <div className="flex gap-4">
                        <p className="text-md font-semibold">
                          {consultant.country}
                        </p>
                      </div>

                    

                      <p className="two-line-ellipsis font-semibold text-gray-600 text-md">
                        {consultant.bio}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <section className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-end items-center z-50">
          <div className="bg-white lg:p-8 p-8 rounded-md  w-2/3  lg:w-full lg:h-full xl:w-1/3 relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-black text-4xl"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="lg:text-4xl text-xl lg:mb-16 mb-4 font-semibold">
              Filters
            </h2>
            <div className="flex-cols gap-6">
              <div className="mb-6">
                <h3 className="font-semibold lg:text-2xl underline">
                  Language Fluency
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="border border-gray-300 p-2 w-full rounded-lg"
                  >
                    <option value="">Select Language</option>
                    {languages.map((language) => (
                      <option key={language} value={language}>
                        {language}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold lg:text-2xl underline">
                  Location of University
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  <select
                    value={selectedRegions}
                    onChange={handleRegionChange}
                    className="border border-gray-300 p-2 w-full rounded-lg"
                  >
                    <option value="">Select Region</option>
                    {countries.map((reg) => (
                      <option key={reg} value={reg}>
                        {reg}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold lg:text-2xl underline">
                  Country of Origin
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <select
                    value={selectedCountries}
                    onChange={handleUniversityLocation}
                    className="border border-gray-300 p-2 w-full rounded-lg"
                  >
                    <option value="">Select Country</option>
                    {UniversityOptions.map((Uni) => (
                      <option key={Uni} value={Uni}>
                        {Uni}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold lg:text-2xl underline">Major</h3>
                <div className="lg:flex-1 gap-2 lg:mt-2">
                  {[
                    "STEM",
                    "Social Sciences",
                    "Humanities",
                    "Law / Pre-Law",
                    "Business & Management",
                    "Medicine / Pre-Med",
                    "Music & Arts",
                  ].map((major) => (
                    <label
                      key={major}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedMajors.includes(major)}
                        onChange={() => handleMajorChange(major)}
                      />
                      {major}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:mt-4 gap-4">
              <button
                onClick={handleApplyFilters}
                className="bg-secondary text-white font-bold flex items-center px-4 lg:text-2xl lg:px-6 lg:py-2 rounded-lg"
              >
                Apply
                <img
                  src={logo}
                  alt="logo"
                  className="lg:w-24 h-16 object-cover"
                />
              </button>
            </div>
          </div>
        </section>
      )}
      <div className="bg-gray-200 justify-center flex">
        <section className="flex flex-col md:flex-row justify-center border p-8 w-[70%] rounded-lg bg-gray-300  mb-12 gap-16 md:gap-24">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg md:text-xl font-bold">
              Refer us and gain access to{" "}
              <span className="text-secondary">exclusive discounts</span>.
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <Input placeholder="Full Name*" className="rounded-xl" />
              <Input placeholder="Last Name*" className="rounded-xl" />
            </div>
            <Input placeholder="Email*" className="rounded-xl" />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-base md:text-lg">
              Would you like to refer <strong>PrepPeer</strong> to someone?
            </h2>
            <Input placeholder="Their Name*" className="rounded-xl" />
            <Input placeholder="Email*" className="rounded-xl" />
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultantContentMobile;
