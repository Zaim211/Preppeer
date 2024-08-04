
// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import { countries, uniqueFilters, languages, UniversityOptions } from "../constants";
// import { Link, useNavigate } from "react-router-dom";
// import Cover from "../components/Cover";
// import FeedbackForm from "../components/FeedbackForm";
// import Filter from "../components/Filter";
// import logo from "../assets/logo.png";

// const IndexPage = () => {
//   const [consultants, setConsultants] = useState([]);
//   const [filteredConsultants, setFilteredConsultants] = useState([]);
//   const [selectedFilter, setSelectedFilter] = useState("");
//   const [selectedSubcategories, setSelectedSubcategories] = useState([]);
//   const [selectedFilterObj, setSelectedFilterObj] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedRegions, setSelectedRegions] = useState("");
//   const [selectedCountries, setSelectedCountries] = useState("");
//   const [selectedLanguage, setSelectedLanguage] = useState("");
//   const [selectedMajors, setSelectedMajors] = useState([]);

//   const mentorsSectionRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchConsultants = async () => {
//       try {
//         const response = await axios.get("/api/registerConsultant");
//         setConsultants(response.data.consultants);
//         setFilteredConsultants(response.data.consultants);
//       } catch (error) {
//         console.error("Error fetching consultants:", error);
//       }
//     };
//     fetchConsultants();
//   }, []);

//   useEffect(() => {
//     let filtered = consultants;
//     if (selectedFilter) {
//       filtered = filtered.filter((consultant) =>
//         consultant.category.includes(selectedFilter)
//       );
//     }
//     if (selectedSubcategories.length > 0) {
//       filtered = filtered.filter((consultant) =>
//         selectedSubcategories.every((subcat) =>
//           consultant.subcategories.includes(subcat)
//         )
//       );
//     }
//     setFilteredConsultants(filtered);
//   }, [selectedFilter, selectedSubcategories, consultants]);

//   useEffect(() => {
//     if (selectedFilter && mentorsSectionRef.current) {
//       mentorsSectionRef.current.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }

//     const filterObj = uniqueFilters.find((f) => f.value === selectedFilter);
//     setSelectedFilterObj(filterObj);
//     setSelectedSubcategories([]);
//     updateURL(filterObj ? filterObj.value : "", []);
//   }, [selectedFilter]);

//   const handleFilterClick = (filter) => {
//     setSelectedFilter(filter);
//     setIsModalOpen(false);
//   };

//   const handleSubcategoryClick = (subcategory) => {
//     const newSelectedSubcategories = selectedSubcategories.includes(subcategory)
//       ? selectedSubcategories.filter((sc) => sc !== subcategory)
//       : [...selectedSubcategories, subcategory];

//     setSelectedSubcategories(newSelectedSubcategories);
//     updateURL(selectedFilter, newSelectedSubcategories);
//   };

//   const updateURL = (filter, subcategories) => {
//     const params = new URLSearchParams();
//     if (filter) params.set("topic", filter);
//     subcategories.forEach((subcat) => params.append("tag[]", subcat));
//     navigate({ search: params.toString() });
//   };

//   const toggleModal = () => { setIsModalOpen(!isModalOpen); };

//   const handleApplyFilters = () => {
//     setIsModalOpen(false);
//   };

//   const handleRegionChange = (event) => {
//     setSelectedRegions(event.target.value);
//   };

//   const handleLanguageChange = (event) => {
//     setSelectedLanguage(event.target.value);
//   };

//   const handleUniversityLocation = (event) => {
//     setSelectedCountries(event.target.value);
//   };

//   const handleMajorChange = (major) => {
//     const newSelectedMajors = selectedMajors.includes(major)
//       ? selectedMajors.filter((m) => m !== major)
//       : [...selectedMajors, major];

//     setSelectedMajors(newSelectedMajors);
//   };

//   return (
//     <div>
//       <Hero />
//       <About />
//       <div className="bg-secondary py-8">
//         <h2 className="text-4xl text-white font-semibold text-center">Our Mentors</h2>
//         <div className="flex justify-center mt-4">
//           {uniqueFilters.map((filter) => (
//             <button
//               key={filter.value}
//               onClick={() => handleFilterClick(filter.value)}
//               className={`py-2 px-4 rounded-lg ${selectedFilter === filter.value ? 'bg-primary text-white' : 'bg-gray-200'}`}
//             >
//               {filter.label}
//             </button>
//           ))}
//         </div>
//         <button
//           onClick={toggleModal}
//           className="bg-primary text-white py-2 px-4 rounded-lg mt-4 mx-auto block"
//         >
//           Open Filters
//         </button>
//         {isModalOpen && (
//           <Filter
//             selectedLanguage={selectedLanguage}
//             handleLanguageChange={handleLanguageChange}
//             selectedRegions={selectedRegions}
//             handleRegionChange={handleRegionChange}
//             selectedCountries={selectedCountries}
//             handleUniversityLocation={handleUniversityLocation}
//             selectedMajors={selectedMajors}
//             handleMajorChange={handleMajorChange}
//             handleApplyFilters={handleApplyFilters}
//             toggleModal={toggleModal}
//             logo={logo}
//           />
//         )}
//         <Cover />
//         <FeedbackForm />
//       </div>
//     </div>
//   );
// };

// export default IndexPage;
