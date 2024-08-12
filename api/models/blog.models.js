const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
 
  hashtags: {
    type: [String],
    default: [],
  },

}, {timestamps: true});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
