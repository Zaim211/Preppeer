import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isWriting, setIsWriting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      content,
      id: Date.now(),
      image: "https://via.placeholder.com/150",
    };
    setBlogs([newBlog, ...blogs]);
    setTitle("");
    setContent("");
    setIsWriting(false);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full p-6 " style={{ backgroundColor: "#060724" }}>
      <div className="flex justify-between items-start mt-10 mb-12">
        {/* Left Section */}
        <div className="w-1/6 mb-12">
          <Link to="/" className="flex items-center gap-4">
            <h2 className="text-4xl text-white font-bold mb-4">Our Blog</h2>
            <div className="flex justify-center sm:justify-start mt-4">
              <img
                src={logo}
                alt="logo"
                className="w-22 h-16 mb-6 object-cover"
              />
            </div>
          </Link>
          <div className="mb-4">
            <h3 className="font-semibold text-white text-lg underline">
              Categories
            </h3>
            <div className="flex flex-col text-white mt-2">
              {["Category 1", "Category 2", "Category 3"].map((filter) => (
                <label
                  key={filter}
                  className="flex text-white items-center mb-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(filter)}
                    onChange={() => handleFilterChange(filter)}
                    className="mr-2 text-white"
                  />
                  {filter}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="w-1/2">
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
            {filteredBlogs.length === 0 ? (
              <p className="text-gray-500">No blog posts yet.</p>
            ) : (
              filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="border border-gray-300 p-4 rounded-lg mb-4 shadow flex"
                >
                  <img
                    src={blog.image}
                    alt="Blog"
                    className="w-32 h-32 object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl text-white font-semibold mb-2">
                      {blog.title}
                    </h3>
                    <p>{blog.content}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/4">
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
                  htmlFor="title"
                  className="block text-lg font-medium text-gray-700 mb-2"
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
                  className="block text-lg font-medium text-gray-700 mb-2"
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
          <p className="text-gray-500 mt-4">
            Write a new blog post to share your thoughts and ideas with the
            community.
          </p>
        </div>
      </div>
      <div className="mb-20 w-px h-20 mx-auto" />
    </div>
  );
};

export default Blog;
