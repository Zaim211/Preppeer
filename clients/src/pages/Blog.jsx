import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hero2 from "../assets/images/hero2.png";
import logo from "../assets/logo.png";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isWriting, setIsWriting] = useState(false);
  const [randomBlog, setRandomBlog] = useState(null);
  const [showRandomBlog, setShowRandomBlog] = useState(false);

  // Fetch blogs from the backend when the component mounts
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
        hashtags: hashtags.split(",").map((tag) => tag.trim()), // Convert hashtags to an array
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

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to fetch a random blog
  const fetchRandomBlog = async () => {
    try {
      const response = await axios.get("/api/blog/random");
      setRandomBlog(response.data);
      setShowRandomBlog(true); // Show only the random blog
    } catch (error) {
      console.error("Error fetching random blog:", error);
    }
  };

  return (
    <>
      <div className="w-full p-6 h-full" style={{ backgroundColor: "#060724" }}>
        <div className="flex justify-between items-start mt-10 mb-12">
          {/* Left Section */}
          <div className="w-1/9 h-full mb-12">
            <Link to="/" className="flex items-center gap-4">
              <h2 className="text-6xl text-white font-bold mb-4">
                Ins<span className="text-secondary">i</span>ghts
              </h2>
            </Link>
            <div className="flex justify-center mt-16 gap-4">
              <button
                onClick={fetchRandomBlog}
                className="bg-secondary text-black font-bold flex items-center lg:text-xl px-2 py-0 rounded-lg"
              >
                Suprise me!
                <img src={logo} alt="logo" className="w-16 h-18 object-cover" />
              </button>
            </div>
          </div>

          {/* Center Section */}
          <div className="w-1/2 h-full">
            <div className="flex items-center mb-6">
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 border border-gray-300 mt-6 rounded-lg w-full mr-4"
              />
            </div>
            <div>
              <h2 className="text-2xl text-white font-bold mb-4">Blog Posts</h2>

              {showRandomBlog && randomBlog ? (
                <Link
                  to={`/Insights/${randomBlog._id}`}
                  key={randomBlog._id}
                  className="border border-gray-300 w-[40%] rounded-lg shadow-lg flex flex-col items-start bg-white"
                >
                  <div className="relative w-full">
                    <img
                      src={randomBlog.image}
                      alt="Blog"
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-xl font-bold text-white bg-black bg-opacity-50 p-2 rounded">
                        {randomBlog.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">
                      {randomBlog.fullName}
                    </h3>
                    <p className="mb-2">{randomBlog.content}</p>
                    <p className="text-gray-500">
                      {randomBlog.hashtags.join(", ")}
                    </p>
                  </div>
                </Link>
              ) : filteredBlogs.length === 0 ? (
                <p className="text-gray-500">No blog posts yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {filteredBlogs.map((blog) => (
                    <Link
                      to={`/Insights/${blog._id}`}
                      key={blog._id}
                      className="border border-gray-300 rounded-lg shadow-lg flex flex-col items-start bg-white"
                    >
                      <div className="relative w-full">
                        <img
                          src={blog.image}
                          alt="Blog"
                          className="w-full object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <h3 className="text-xl font-bold text-white bg-black bg-opacity-50 p-2 rounded">
                            {blog.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{blog.fullName}</h3>
                        <p className="mb-2">{blog.content}</p>
                        <p className="text-gray-500">
                          {blog.hashtags.join(", ")}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/5 h-full">
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
                    htmlFor="hashtags"
                    className="block text-lg font-medium text-white mb-2"
                  >
                    Hashtags:
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
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    rows="5"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

