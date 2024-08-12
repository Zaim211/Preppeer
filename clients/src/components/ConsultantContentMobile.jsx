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
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl md:text-5xl lg:text-5xl mb-6">
            <span className="text-secondary">In</span>siders{" "}
            <span className="text-secondary">At</span> Your Fingertips
          </h2>
          <img
            src={logo}
            alt="logo"
            className="lg:w-50 lg:h-32 lg:mr-10 w-20 mb-4 object-cover"
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
                        className="w-48 ml-2 h-48 object-cover"
                      />
                     
                    <div className="p-2 justify-center flex-1 ml-14">
                      <h2 className="text-xl font-bold">
                        {consultant.name}
                      </h2>
                      <div className="flex gap-4">
                        <p className="text-md font-semibold">
                          {consultant.country}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 mb-2 mt-2">
                    <div className="flex gap-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
</svg>
                    <p className="text-lg font-semibold">
                    {consultant.major}
                    </p>
               
                    </div>
                  
                    
                  </div>
                      <div className="flex items-center  mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
</svg>

                  <p className="font-semibold text-lg">
                    {consultant.price} per min
                    </p>
                  </div>
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
              <Input placeholder="First Name*" className="rounded-xl" />
              <Input placeholder="Last Name*" className="rounded-xl" />
            </div>
            <Input placeholder="Address Email*" className="rounded-xl" />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold md:text-lg">
              Would you like to refer <strong className="text-secondary">PrepPeer</strong> to someone?
            </h2>
            <Input placeholder="Their Name*" className="rounded-xl" />
            <Input placeholder="Address Email*" className="rounded-xl" />
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultantContentMobile;
