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
import { useMediaQuery } from "react-responsive";
import ConsultantContentMobile from "./ConsultantContentMobile";

const ConsultantContent = () => {
  const [consultants, setConsultants] = useState([]);
  const [filteredConsultants, setFilteredConsultants] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [selectedFilterObj, setSelectedFilterObj] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const isMobileDevice = useMediaQuery({ query: "(max-width: 768px)" });

  if (isMobileDevice) {
    return (
      <div className="">
        <ConsultantContentMobile />
      </div>
    );
  }

  const indexOfLastConsultant = currentPage * itemsPerPage;
  const indexOfFirstConsultant = indexOfLastConsultant - itemsPerPage;
  const paginatedConsultants = filteredConsultants.slice(
    indexOfFirstConsultant,
    indexOfLastConsultant
  );


  const totalPages = Math.ceil(filteredConsultants.length / itemsPerPage);

  return (
    <>
      <nav className="bg-gray-200 p-4 w-full" id='insiders'>
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
              <div className="w-32 md:w-52 px-2 h-16 flex items-center justify-center">
                <span className="text-center font-semibold text-sm md:text-base">
                  {filter.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </nav>

      <section ref={mentorsSectionRef} className="w-full px-8 py-4 bg-gray-200">
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
                      {subcat.name}
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>
        <div className="flex justify-end mb-2">
          <button
            className="text-black justify-end p-3 border-black items-end flex gap-2 lg:p-4 font-semibold rounded-lg border mr-20"
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
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-200 w-full mb-16">
          <div className="flex flex-wrap gap-4 mt-6 overflow-x-auto pl-4 pb-4">
            {paginatedConsultants.map((consultant) => (
              <Link
                key={consultant._id}
                to={`/consultant/${consultant._id}?name=${encodeURIComponent(
                  consultant.name
                )}&category=${encodeURIComponent(consultant.major.join(","))}`}
                className="bg-white w-[23%] rounded-lg relative shadow-lg px-4 py-4 overflow-hidden flex-shrink-0"
              >
                <div className="flex gap-4 items-center justify-between mb-4 mt-4">
                  <img
                    src={consultant.profilePicture}
                    alt={consultant.name}
                    className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
                  />
                  <button
                    onClick={() => navigate(`/consultants/${consultant._id}`)}
                    className="rounded-lg w-24 mb-12 h-12  bg-primary text-white text-center font-semibold flex items-center justify-center"
                  >
                    Book a Call
                  </button>
                </div>

                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-4">{consultant.name}</h2>
                  <div className="flex gap-4 mb-2">
                    <p className="text-xl font-semibold">
                      {consultant.country}
                    </p>
                  </div>
                  <div className="flex gap-3 mb-2">
                    <div className="text-xl font-semibold">
                      {consultant.major.map((subcategory, index) => (
                        <span key={index}>
                          {subcategory}
                          {index < consultant.major.length - 1 && " & "}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="two-line-ellipsis font-semibold text-gray-900 text-lg">
                    {consultant.bio}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-12 mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-primary text-white p-1  rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-full ${
                  currentPage === index + 1
                    ? "bg-primary text-white p-4"
                    : " text-black text-lg"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-primary text-white p-1 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </section>

      {isModalOpen && (
        <section className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-end items-center z-50">
          <div className="bg-white p-8 h-full rounded-md w-full md:w-1/2 lg:w-1/4 xl:w-1/3 relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-black text-4xl"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-4xl mb-16 font-semibold">Filters</h2>
            <div className="flex-cols gap-6">
              <div className="mb-6">
                <h3 className="font-semibold text-2xl underline">
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
                <h3 className="font-semibold text-2xl underline">
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
                <h3 className="font-semibold text-2xl underline">
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
                <h3 className="font-semibold text-2xl underline">Major</h3>
                <div className="flex-1 gap-2 mt-2">
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

            {selectedFilterObj && (
              <div className="mb-4">
                <h3 className="font-semibold text-lg underline">
                  Subcategories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedFilterObj.subcategories.map((subcategory) => (
                    <label
                      key={subcategory}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedSubcategories.includes(subcategory)}
                        onChange={() => handleSubcategoryClick(subcategory)}
                      />
                      {subcategory}
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-center mt-4 gap-4">
              <button
                onClick={handleApplyFilters}
                className="bg-secondary text-white font-bold flex items-center text-2xl px-6 py-2 rounded-lg"
              >
                Apply
                <img src={logo} alt="logo" className="w-24 h-16 object-cover" />
              </button>
            </div>
          </div>
        </section>
      )}
      <div className="bg-gray-200 justify-center flex">
        <section className="flex flex-col md:flex-row  mt-32 justify-center border p-8 w-[70%] rounded-lg bg-gray-300  mb-12 gap-16 md:gap-24">
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

export default ConsultantContent;
