import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import About from "../components/About";
import { uniqueFilters } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import Cover from "../components/Cover";
import Footer from "../components/Footer";
import Informations from "../components/Informations";

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
      <nav className="bg-gray-200 w-full">
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
                      ? " text-white font-semibold border-gray-700 bg-primary rounded-md border"
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
                    ? " text-white font-semibold border-black  bg-primary rounded-lg border"
                    : "text-black border-black font-semibold rounded-lg border"
                } p-2 border border-black rounded-lg`}
                onClick={() => handleSubcategoryClick(subcat.value)}
              >
                {subcat.name}
              </div>
            ))}
          </div>
        )}

        <div className="bg-gray-200 w-full mb-16">
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
                  className="bg-white w-full rounded-lg relative shadow-lg overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <img
                      src={consultant.profilePicture}
                      alt={consultant.name}
                      className="w-40 mt-2 ml-2 h-40 object-cover rounded-full border-4 border-gray-300 shadow-lg"
                    />
                    <button className="rounded-lg w-24 mb-16 h-12 mr-4 bg-blue-500 text-white  text-center font-semibold hover:bg-blue-700">
                      Book a Call
                    </button>
                  </div>
                  <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">
                      {consultant.name}
                    </h2>
                    <div className="flex gap-2 m-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-6"
                      >
                        <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                        <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                        <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                      </svg>
                      <p className="text-xl font-semibold">
                        {consultant.country}
                      </p>
                    </div>

                    <div className="flex gap-2 text-xl m-2 font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-6"
                      >
                        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                      </svg>

                      {consultant.major.map((subcategory, index) => (
                        <span key={index}>
                          {subcategory}
                          {index < consultant.major.length - 1 && " & "}
                        </span>
                      ))}
                    </div>

                    <div className="flex m-2 gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9.763 9.51a2.25 2.25 0 0 1 3.828-1.351.75.75 0 0 0 1.06-1.06 3.75 3.75 0 0 0-6.38 2.252c-.033.307 0 .595.032.822l.154 1.077H8.25a.75.75 0 0 0 0 1.5h.421l.138.964a3.75 3.75 0 0 1-.358 2.208l-.122.242a.75.75 0 0 0 .908 1.047l1.539-.512a1.5 1.5 0 0 1 .948 0l.655.218a3 3 0 0 0 2.29-.163l.666-.333a.75.75 0 1 0-.67-1.342l-.667.333a1.5 1.5 0 0 1-1.145.082l-.654-.218a3 3 0 0 0-1.898 0l-.06.02a5.25 5.25 0 0 0 .053-1.794l-.108-.752H12a.75.75 0 0 0 0-1.5H9.972l-.184-1.29a1.863 1.863 0 0 1-.025-.45Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p className="text-xl text-black font-semibold">
                        {consultant.price[0]}{" "}
                      </p>
                      <span className="text-xl font-bold text-black">
                        • Session
                      </span>
                    </div>
                    <p className="two-line-ellipsis font-semibold text-gray-900 text-lg">
                      {consultant.bio}
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
      </section>

      <div className="p-12 bg-gray-200">
            <Informations />
        </div>


      <div className="w-full" style={{ backgroundColor: "#060724" }}>
        <Cover />
      </div>
      
      <Footer />

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
