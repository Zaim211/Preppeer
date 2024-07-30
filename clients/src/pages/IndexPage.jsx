import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import About from "../components/About";
import { uniqueFilters } from "../constants";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Cover from "../components/Cover";

const IndexPage = () => {
  const [consultants, setConsultants] = useState([]);
  const [filteredConsultants, setFilteredConsultants] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [selectedFilterObj, setSelectedFilterObj] = useState(null);
  const [visibleConsultants, setVisibleConsultants] = useState(8);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedMajors, setSelectedMajors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);

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
    setSelectedFilter(filter);
    setVisibleConsultants(8);
    setIsModalOpen(false); // Close the modal when a filter is applied
  };

  const handleSubcategoryClick = (subcategory) => {
    const newSelectedSubcategories = selectedSubcategories.includes(subcategory)
      ? selectedSubcategories.filter((sc) => sc !== subcategory)
      : [...selectedSubcategories, subcategory];

    setSelectedSubcategories(newSelectedSubcategories);
    setVisibleConsultants(8);
    updateURL(selectedFilter, newSelectedSubcategories);
  };

  const updateURL = (filter, subcategories) => {
    // Update the URL to reflect the current filters
    const params = new URLSearchParams();
    if (filter) params.set("topic", filter);
    subcategories.forEach((subcat) => params.append("tag[]", subcat));
    navigate({ search: params.toString() });
  };

  const loadMoreConsultants = () => {
    setVisibleConsultants(
      (prevVisibleConsultants) => prevVisibleConsultants + 8
    );
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleApplyFilters = () => {
    setIsModalOpen(false);
  };

  const resetFilters = () => {
    setSelectedFilter("");
    setSelectedSubcategories([]);
    setSelectedRegions([]);
    setSelectedLanguages([]);
    setSelectedMajors([]);
    setPriceRange([0, 1000]);
    setFilteredConsultants(consultants);
    setIsModalOpen(false);
    updateURL("", []);
  };

  const handleRegionChange = (region) => {
    setSelectedRegions((prevRegions) =>
      prevRegions.includes(region)
        ? prevRegions.filter((r) => r !== region)
        : [...prevRegions, region]
    );
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguages((prevLanguages) =>
      prevLanguages.includes(language)
        ? prevLanguages.filter((l) => l !== language)
        : [...prevLanguages, language]
    );
  };

  const handleMajorChange = (major) => {
    setSelectedMajors((prevMajors) =>
      prevMajors.includes(major)
        ? prevMajors.filter((m) => m !== major)
        : [...prevMajors, major]
    );
  };

  const handlePriceRangeChange = (e) => {
    const value = e.target.value.split(",").map(Number);
    setPriceRange(value);
  };

  return (
    <>
      <Hero />
      <About />
      <nav className="bg-gray-200">
        <h2 className="font-bold text-6xl mt-12 p-6">
          <span className="text-orange-600">In</span>siders{" "}
          <span className="text-orange-600">At</span> Your Fingertips
        </h2>

        <div className="flex flex-wrap gap-6 p-2">
          <div className="flex items-center justify-between p-4">
            <div className="flex flex-wrap gap-6">
              {uniqueFilters.map((filter, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center cursor-pointer ${
                    selectedFilter === filter.value
                      ? " text-black font-semibold border-black  bg-slate-300 rounded-lg border"
                      : "text-black border-black font-semibold rounded-lg border"
                  }`}
                  onClick={() => handleFilterClick(filter.value)}
                >
                  <div className="w-36 h-16 flex items-center justify-center mb-2">
                    <span className="text-center">{filter.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <div className="bg-black mb-20 w-px h-20 mx-auto" />
              <button
                className="ml-10 mb-20 text-black border-black flex gap-4 p-4 font-semibold rounded-lg border"
                onClick={toggleModal} // Open the modal on button click
              >
                Filter
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1...
6.36 0 0 1 0-12.75 2.25 2.25 0 0 0 0 4.5Zm7.5 4.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black w-[80%] m-6 h-px mb-6" />
      </nav>

      <section ref={mentorsSectionRef} className="p-6 w-full bg-gray-200">
        {selectedFilterObj && selectedFilterObj.subcategories.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-4">
            {selectedFilterObj.subcategories.map((subcat, index) => (
              <div
                key={index}
                className={`cursor-pointer ${
                  selectedSubcategories.includes(subcat.value)
                    ? " text-black font-semibold border-black  bg-slate-300 rounded-lg border"
                    : "text-black border-black font-semibold rounded-lg border"
                } p-2 border border-black rounded-lg`}
                onClick={() => handleSubcategoryClick(subcat.value)}
              >
                {subcat.name}
              </div>
            ))}
          </div>
        )}

        <div className="bg-gray-200  p-4">
          <div className="grid grid-cols-4 gap-4">
            {filteredConsultants
              .slice(0, visibleConsultants)
              .map((consultant) => (
                <Link
                  to={`/insider/${consultant._id}?name=${encodeURIComponent(
                    consultant.name
                  )}&category=${encodeURIComponent(
                    consultant.major.join(",")
                  )}`}
                  key={consultant._id}
                  className="bg-white rounded-lg relative shadow-lg overflow-hidden"
                >
                  <img
                    src={consultant.profilePicture}
                    alt={consultant.name}
                    className="w-full h-42 object-contain object-center"
                  />
                  <div className="p-4">
                    <h2 className="text-2xl font-bold">{consultant.name}</h2>
                    <p className="text-xl">{consultant.country}</p>
                    <div className="flex gap-2 text-xl">
                      {consultant.major.map((subcategory, index) => (
                        <span key={index}>
                          {subcategory}
                          {index < consultant.major.length - 1 && " & "}
                        </span>
                      ))}
                    </div>
                    <p className="two-line-ellipsis font-semibold text-gray-500 text-lg">
                      {consultant.bio}
                    </p>
                    <p className="text-xl">
                      ${consultant.price[0]} per Session
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {filteredConsultants.length > visibleConsultants && (
          <div className="flex justify-center mt-6">
            <button
              className="px-4 py-2 bg-black text-white rounded-lg"
              onClick={loadMoreConsultants}
            >
              Load More
            </button>
          </div>
        )}
        <div className="w-full" style={{ backgroundColor: "#060724" }}>
          <Cover />
        </div>
      </section>

      {isModalOpen && (
        <section className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-end items-center z-50">
          <div className="bg-white p-10 h-62 rounded-lg w-full md:w-1/3 lg:w-1/4 xl:w-1/5 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-black text-4xl"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-10 underline">Filters</h2>

            {/* Region filter */}
            <div className="mb-4">
              <h3 className="font-semibold text-lg underline">Region</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {/* Replace with actual regions */}
                {["North America", "Europe", "Asia"].map((region) => (
                  <label
                    key={region}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedRegions.includes(region)}
                      onChange={() => handleRegionChange(region)}
                    />
                    {region}
                  </label>
                ))}
              </div>
            </div>

            {/* Language filter */}
            <div className="mb-4">
              <h3 className="font-semibold text-lg underline">Language</h3>
              <div className="flex flex-wrap gap-2">
                {/* Replace with actual languages */}
                {["English", "Spanish", "Chinese"].map((language) => (
                  <label
                    key={language}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedLanguages.includes(language)}
                      onChange={() => handleLanguageChange(language)}
                    />
                    {language}
                  </label>
                ))}
              </div>
            </div>

            {/* Major filter */}
            <div className="mb-4">
              <h3 className="font-semibold text-lg underline">Major</h3>
              <div className="flex flex-wrap gap-2">
                {/* Replace with actual majors */}
                {["Computer Science", "Business", "Engineering"].map(
                  (major) => (
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
                  )
                )}
              </div>
            </div>

            {/* Subcategory filter */}
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

            {/* Price range filter */}
            <div className="mb-4">
              <h3 className="font-semibold text-lg underline mb-2">
                Price Range
              </h3>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={priceRange[0]}
                onChange={(e) => handlePriceRangeChange(e, 0)}
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={priceRange[1]}
                onChange={(e) => handlePriceRangeChange(e, 1)}
                className="w-full"
              />
              <div className="flex justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={resetFilters}
                className="bg-gray-300 px-4 py-2 rounded-lg"
              >
                Reset
              </button>
              <button
                onClick={handleApplyFilters}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Apply
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default IndexPage;
