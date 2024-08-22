import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logoo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { NameUniv, uniqueFilters, languages } from "../constants";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
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
  const [selectedRegions, setSelectedRegions] = useState("");
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
  const handleRegionChange = (region) => {
    setSelectedRegions(region.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleMajorChange = (major) => {
    setSelectedMajors((prevMajors) =>
      prevMajors.includes(major)
        ? prevMajors.filter((m) => m !== major)
        : [...prevMajors, major]
    );
  };

  const handleApplyFilters = () => {
    let filtered = consultants;

    if (selectedFilter) {
      filtered = filtered.filter((consultant) =>
        consultant.category.includes(selectedFilter)
      );
    }

    if (selectedRegions) {
      filtered = filtered.filter(
        (consultant) => consultant.country === selectedRegions
      );
    }

    if (selectedLanguage.length > 0) {
      filtered = filtered.filter((consultant) =>
        consultant.language.some((lang) => selectedLanguage.includes(lang))
      );
    }

    if (selectedMajors.length > 0) {
      filtered = filtered.filter((consultant) =>
        selectedMajors.some((major) => consultant.major.includes(major))
      );
    }

    setFilteredConsultants(filtered);
    setIsModalOpen(false);
  };

  const maxVisiblePages = 3;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getVisiblePages = () => {
    if (currentPage <= maxVisiblePages) {
      return [1, 2, 3];
    } else if (currentPage > totalPages - maxVisiblePages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
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
      <nav className="bg-primary p-4 w-full" id="insiders">
        <div className="flex justify-center mb-8 mt-8 items-center">
          <h2 className="font-bold text-white text-3xl ">
            Get personalized advice from those who have walked the path and
            succeeded
          </h2>
        </div>
        <div className="overflow-x-auto scrollbar-thin scrollbar-webkit flex p-1 space-x-4">
          {uniqueFilters.map((filter, index) => (
            <div
              key={index}
              className={`flex flex-col items-center mb-2 cursor-pointer ${
                selectedFilter === filter.value
                  ? "text-black font-semibold border-white bg-gray-200 rounded-sm border"
                  : "text-white border-white font-bold rounded-sm border"
              }`}
              onClick={() => handleFilterClick(filter.value)}
            >
              <div className="w-32 py-2 px-1 h-12 flex items-center justify-center">
                <span className="text-center font-semibold text-sm md:text-base">
                  {filter.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </nav>

      <section ref={mentorsSectionRef} className="w-full px-8 py-4 bg-primary">
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
                          ? "text-black font-semibold border-white bg-gray-200 rounded-sm border"
                          : "text-white border-white font-semibold rounded-sm border"
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
        <div className="flex justify-end pr-4 mb-2">
          <button
            className="text-white justify-end p-3 border-white items-end flex gap-2 lg:p-4 font-semibold rounded-lg border mr-6"
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

        <div className="bg-primary w-full mb-16">
          <div className="flex flex-wrap gap-6 mt-2 overflow-x-auto pl-12 pb-4">
            {paginatedConsultants.map((consultant) => (
              <Link
                key={consultant._id}
                to={`/consultant/${consultant._id}?name=${encodeURIComponent(
                  consultant.name
                )}&category=${encodeURIComponent(consultant.major.join(","))}`}
                className="w-[23%] relative p-2 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={consultant.profilePicture}
                    alt={consultant.name}
                    className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                </div>

                <div className="mt-4 text-center">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {consultant.name}
                  </h2>
                  <p className="text-lg font-semibold text-black">
                    {consultant.country}
                  </p>
                  <p className="text-lg font-medium text-black mt-2">
                    {consultant.major.join(", ")}
                  </p>
                </div>

                <div className="mt-4 flex justify-center">
                  <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white py-2 px-4 rounded-full font-semibold text-md">
                    View more
                  </div>
                  {/* ${consultant.price[0]} / 30 mins */}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Pagination className="mb-8 mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              />
            </PaginationItem>

            {getVisiblePages().map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => handlePageChange(page)}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {currentPage < totalPages - maxVisiblePages && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </section>

      {isModalOpen && (
        <section className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-end items-center z-50">
          <div className="bg-primary p-8  rounded-md w-1/4relative">
            <button
              onClick={toggleModal}
              className="absolute top-20 right-2 text-white text-4xl"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="flex-cols gap-6">
              <div className="">
                <h3 className="font-semibold text-white text-xl underline">
                  Language Fluency
                </h3>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="border border-gray-300 p-2 w-full rounded-sm"
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

              <div className="">
                <h3 className="font-semibold mt-8 text-white text-xl underline">
                  Name of University
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <select
                    value={selectedRegions}
                    onChange={handleRegionChange}
                    className="border border-gray-300 p-2 w-full rounded-sm"
                  >
                    <option value="">Select your university</option>
                    {NameUniv.map((reg) => (
                      <option key={reg} value={reg}>
                        {reg}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-white text-xl underline">
                  Major
                </h3>
                <div className="flex-1 text-white gap-2 mt-2">
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

            <div className="flex justify-center mt-4 gap-4">
              <button
                onClick={handleApplyFilters}
                className="bg-secondary text-white font-bold flex items-center text-2xl px-6 py-2 rounded-lg"
              >
                Apply
                <img src={logo} alt="logo" className="w-14 h-10 object-cover" />
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ConsultantContent;
