import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bloghero1 from "../assets/images/bloghero1.png";
import logo from "../assets/logoo.png";

const categories = [
  "Scholarships",
  "University Fit Check",
  "Essays",
  "High School Internships",
  "Summer Schools",
  "Research / Publications",
  "Self-initiated Projects",
  "Volunteering",
  "Sports Admission",
  "Competitions / Awards",
  "Public Speaking",
  "Tests"
];

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [content, setContent] = useState("")
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isWriting, setIsWriting] = useState(false);
  const [randomBlog, setRandomBlog] = useState(null);
  const [showRandomBlog, setShowRandomBlog] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blog");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/blog", {
        fullName,
        title,
        content,
        hashtags: hashtags.split(",").map((tag) => tag.trim()),
      });
      const newBlog = response.data.blog;
      setBlogs([newBlog, ...blogs]);
      setFullName("");
      setTitle("");
      setContent("");
      setHashtags("");
      setIsWriting(false);
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  const handleFilterChange = (category) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(category)
        ? prevFilters.filter((filter) => filter !== category)
        : [...prevFilters, category]
    );
  };

  // const filteredBlogs = blogs.filter((blog) => {
  //   const matchesSearchTerm = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesFilters = selectedFilters.length > 0
  //     ? selectedFilters.every((filter) => blog.hashtags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase())))
  //     : true;

  //   return matchesSearchTerm && matchesFilters;
  // });

  const normalizeString = (str) => {
    return str.toLowerCase().replace(/[\s/#-]/g, ""); // Normalize by removing spaces, slashes, and converting to lowercase
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearchTerm = blog.title.toLowerCase().includes(searchTerm.toLowerCase());

    const blogHashtags = blog.hashtags[0]
      .split(" ")
      .map((tag) => normalizeString(tag));

    const matchesFilters =
      selectedFilters.length > 0
        ? selectedFilters.every((filter) => 
            blogHashtags.some((tag) => 
              normalizeString(tag).startsWith(normalizeString(filter)[0]) // Check if the first letter of the hashtag matches the first letter of the filter category
            )
          )
        : true;

    return matchesSearchTerm && matchesFilters;
  });
  const fetchRandomBlog = async () => {
    try {
      const response = await axios.get("/api/blog/random");
      setRandomBlog(response.data);
      setShowRandomBlog(true);
    } catch (error) {
      console.error("Error fetching random blog:", error);
    }
  };

  return (
    <>
      <div className="w-full p-6" style={{ backgroundColor: "#060724" }}>
        <div className="flex flex-col lg:flex-row justify-between items-start mt-10 mb-12 gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-[20%] mb-12">
            <Link to="/" className="flex items-center gap-4">
              <h2 className="text-4xl lg:text-6xl text-white font-bold mb-4">
                Insights
              </h2>
            </Link>
            <div className="flex-1 lg:flex-col gap-2 mt-8">
              {categories.map((category) => (
                <label key={category} className="text-white flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(category)}
                    onChange={() => handleFilterChange(category)}
                    className="form-checkbox h-5 w-5 text-secondary"
                  />
                  {category}
                </label>
              ))}
            </div>
            <div className="flex justify-start mt-16 gap-4">
              <button
                onClick={fetchRandomBlog}
                className="bg-secondary text-black font-bold flex items-center lg:text-xl px-4 py-1 rounded-lg"
              >
                Surprise me!
                <img src={logo} alt="logo" className="w-12 lg:w-16 h-auto object-cover ml-2" />
              </button>
            </div>
          </div>

          {/* Center Section */}
          <div className="w-full mt-4 lg:w-[80%]">
            {/* <div className="flex items-center mb-6 mt-6">
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg w-full mr-4"
              />
            </div> */}
            <div  className="lg:w-[70%] w-full">
              
              {showRandomBlog && randomBlog ? (
                <Link
                  to={`/Insights/${randomBlog._id}`}
                  key={randomBlog._id}
                  className="border border-gray-300 lg:w-[40%] w-full rounded-lg shadow-lg flex flex-col items-start bg-white"
                >
                  <div className="relative w-full">
                    <img
                      src={bloghero1}
                      alt="Blog"
                      className="w-full object-contain rounded-t-lg"
                    />
                  </div>
                  <div className="p-2 w-full">
                    <h3 className="text-xl font-bold mb-2">{randomBlog.fullName}</h3>
                    <h3 className="text-xl font-bold text-black">{randomBlog.title}</h3>

                    <div className="text-black w-full flex flex-wrap mt-4">
                      {randomBlog.hashtags[0].split(' ').map((hashtag, index) => (
                        <span
                          key={index}
                          className="bg-yellow-400 text-black px-2 font-bold py-1 rounded mr-2 mb-2"
                        >
                          {hashtag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ) : filteredBlogs.length === 0 ? (
                <p className="text-gray-500">No blog posts yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-1 w-full gap-4">
                  {filteredBlogs.map((blog) => (
                    <Link
                      to={`/Insights/${blog._id}`}
                      key={blog._id}
                      className="border w-[100%] lg:w-[50%] border-gray-300 rounded-lg shadow-lg flex flex-col items-start bg-white"
                    >
                      <div className="relative w-full">
                        <img
                          src={bloghero1}
                          alt="Blog"
                          className="w-full object-contain rounded-t-lg"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{blog.fullName}</h3>
                        <h3 className="text-xl font-bold text-black">{blog.title}</h3>

                        <div className="text-black flex flex-wrap mt-4">
                          {blog.hashtags[0].split(' ').map((hashtag, index) => (
                            <span
                              key={index}
                              className="bg-yellow-400 text-black px-2 font-bold py-1 rounded mr-2 mb-2"
                            >
                              {hashtag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          {/* <div className="w-full lg:w-1/5">
            <button
              onClick={() => setIsWriting(true)}
              className="bg-blue-500 text-white p-2 rounded-lg mt-6 hover:bg-blue-600 w-full mb-4"
            >
              Write a Blog
            </button>
            {isWriting && (
              <form onSubmit={handleSubmit} className="mb-8">
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-lg font-medium text-white mb-2"
                  >
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-lg font-medium text-white mb-2"
                  >
                    Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="content"
                    className="block text-lg font-medium text-white mb-2"
                  >
                   Content:
                  </label>
                  <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="border text-lg border-gray-300 pl-4 pr-4 pt-2 pb-48 w-[100%] rounded-lg"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="hashtags"
                    className="block text-lg font-medium text-white mb-2"
                  >
                    Hashtags (comma-separated):
                  </label>
                  <input
                    type="text"
                    id="hashtags"
                    value={hashtags}
                    onChange={(e) => setHashtags(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Blog;